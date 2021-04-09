const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const users = require('../models/user');
const express = require("express");
const router = express.Router();

const client = new OAuth2Client("1044015139792-jjl22brbh17oo2a7jkgg720tcqqc6cgf.apps.googleusercontent.com");

router.post('/googlelogin', async (req, res) => {
    const { tokenId } = req.body;

    try {
        const response = await client.verifyIdToken({ idToken: tokenId, audience: "1044015139792-jjl22brbh17oo2a7jkgg720tcqqc6cgf.apps.googleusercontent.com" });
        const { email_verified, given_name, email } = response.payload;

        if (email_verified) {
            try {
                await users.findOne({ email }, (err, user) => {
                    if (err) {
                        return res.status(400).json({ err, message: 'Something went wrong..' })
                    } else {
                        if (user) {
                            const token = jwt.sign({ _id: user._id }, 'JWT_SIGNIN_KEY', { expiresIn: '7d' });
                            const { _id, username, email } = user;

                            res.json({
                                token,
                                user: {
                                    _id,
                                    username,
                                    email
                                }
                            })
                        } else {
                            let password = email + 'JWT_SIGNIN_KEY';
                            let newUser = new users({
                                username: given_name,
                                email,
                                password
                            });
                            newUser.save((err, data) => {
                                if (err) {
                                    return res.status(400).json({ err, message: 'User not saved' })
                                }
                                const token = jwt.sign({ _id: data._id }, 'JWT_SIGNIN_KEY', { expiresIn: '7d' });
                                const { _id, username, email } = newUser;

                                res.json({
                                    token,
                                    user: {
                                        _id,
                                        username,
                                        email
                                    }
                                })
                            })
                        }
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    } catch (err) {
        console.log(err)
    }

});

module.exports = router;