import React from "react"
import {AppBar, Toolbar, Typography, Tabs, Button} from '@mui/material';
import {Link} from "react-router-dom"

function NavBar () {
    
    
    return (
           <div>
                <AppBar>
                    <Toolbar>
                        <Typography>
                           <Typography variant="h2"> COWRIE </Typography>
                
                            <Tabs >
                                <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}} to="/about">ABOUT</Link>
                                <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}} to="/learners">LEARNERS</Link>
                                <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}}to="/tutorials">TUTORIALS</Link>
                                 <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}}to="/art">ART</Link>
                                 <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}}to="/market">MARKET</Link>
                                 <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}}to="/nfts">NFTS</Link>
                                 <Button sx={{padding: '10px'}} variant="contained" color="warning">  <Link style={{textDecoration: 'none', color: 'white' }} to="/login">LOGIN</Link> </Button>
                                {/*  <Button sx={{padding: '10px'}} variant="contained"><Link style={{textDecoration: 'none',color: 'white' }} to="/wallet">WALLET</Link></Button>
                                <Button sx={{padding: '10px'}} variant="contained"><Link style={{textDecoration: 'none',color: 'white' }} to="/login">SIGN-UP</Link></Button>
 */}
                                 </Tabs>

                                 
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
          
    );
};
export default NavBar