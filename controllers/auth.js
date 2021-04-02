const User = require("../models/user");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
  "1044015139792-jjl22brbh17oo2a7jkgg720tcqqc6cgf.apps.googleusercontent.com"
);

exports.googlelogin = (req, res) => {
  const { tokenId } = req.body;

  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "1044015139792-jjl22brbh17oo2a7jkgg720tcqqc6cgf.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      console.log(response.payload);
    });
};
