import React, { useState } from "react"
import { Box, Typography, TextField, Button, inputAdornmentClasses} from "@mui/material"
import AuthAdmin from "./Auth_Admin"
import AuthUsers from "./Auth_Users"
import CreateAdmin from "./Create_Admin"
import { InputSharp } from "@mui/icons-material"

function Login () {

        const [isSignup, setIsSignup] =useState(false);
        const [inputs, setInputs] =useState({
            
                name: "",
                email: "",
                password: ""

            });

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
                <Typography 
                variant="h2" 
                padding={3} 
                textAlign="center">
                    {isSignup ? "SIGNUP" : "LOGIN"}
        
                </Typography>
                
                {isSignup && (
                 <TextField onChange={}
                    name="name"
                    value={inputs.name}
                    margin="normal" 
                    type={'text'} 
                    variant="outlined" 
                    placeholder="Name"/>
                )}

                <TextField 
                    name="email"
                    value={inputs.email}
                    margin="normal" type={'email'} 
                    variant="outlined"
                    placeholder="Email"/>
                <TextField 
                    name="password"
                    value={inputs.password}
                    margin="normal" 
                    type={'password'} 
                    variant="outlined"
                    placeholder="Password"/>
                <Button variant="contained" color="warning" sx={{marginTop: 3, borderRadius: 3}}>
                    {isSignup ? "SIGNUP" : "LOGIN"}
                    
                    </Button>
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