import React, { useState } from "react"
import { Box, Typography, TextField, Button} from "@mui/material"
import AuthAdmin from "./Auth_Admin"
import AuthUsers from "./Auth_Users"
import CreateAdmin from "./Create_Admin"

function Login () {

        const [isSignup, setIsSignup] =useState(false);

    return (
        <div>
            <form>
                <Box display ="flex" 
                flexDirection={'column'} 
                max width={400}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                    marginTop={40}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{":hover": {
                        boxShadow:'10px 10px 20px #ccc'
                    }}}
                >
                <Typography variant="h2" padding={3} textAlign="center">LOGIN</Typography>
                {isSignup && (
                <TextField margin="normal" type={'text'} variant="outlined" placeholder="Name"/>
                )}
                <TextField margin="normal" type={'email'} variant="outlined"placeholder="Email"/>
                <TextField margin="normal" type={'password'} variant="outlined"placeholder="Password"/>
                <Button variant="contained" color="warning" sx={{marginTop: 3, borderRadius: 3}}>Login</Button>
                <Button 
                onClick={()=> setIsSignup(!isSignup)} 
                sx={{ marginTop:3, borderRadius: 3}}
                >
                Change To {isSignup ? "Login" : "Signup"}
                    </Button>                

</Box>
            </form>              
        </div>
    )
}
export default Login