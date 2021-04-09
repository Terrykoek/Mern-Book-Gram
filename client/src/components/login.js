import React from 'react';
import {Grid,Paper,Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Googlelogin from './Googlelogin';
import Googlelogout from './Googlelogout';
import SignUp from './signup';


const Login=()=>{
    const paperStyle ={padding:20, height:'60vh',width:280,margin:"20px auto"};
    const avatarStyle ={backgroundColor:'green'};
    const btnStyle = {margin: '8px 0'};
    
    return (
        <Grid>
            <Paper elevation={10} style= {paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><VpnKeyIcon/></Avatar>
                <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Sign In</Button>
                <Typography>
                <Link href="#" >Forgot password ?</Link>
                </Typography>
                <Typography> Do you have an account ?  
                <Link href='/signup'>Sign Up</Link>
                </Typography>
                <Googlelogin />
                <Googlelogout />

            </Paper>
        </Grid>
    )
}

export default Login;

