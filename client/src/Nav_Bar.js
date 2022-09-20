import React from "react"
import {AppBar, Toolbar, Typography, Tabs, Tab, Button} from '@mui/material';
import {Link} from "react-router-dom"

function NavBar ({user, onLogout}) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
    
    return (
           <div>
                <AppBar>
                    <Toolbar>
                        
                           <Typography variant="h2"> COWRIE </Typography>
                
                            <Tabs >
                                <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}} to="/about"><Tab label="ABOUT" value="0"/></Link>
                                <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}} to="/learners"><Tab label="LEARNERS" value="1" /></Link>
                                <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}}to="/tutorials"><Tab label="TUTORIALS" value="2"/></Link>
                                 <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}}to="/art"><Tab label="ART" value="3"/></Link>
                                 <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}}to="/market"><Tab label="MARKET" value="4"/></Link>
                                 <Link style={{textDecoration: 'none',color: 'white' , padding: '10px'}}to="/nfts"><Tab label="NFTS" value="5"/></Link>
                                 <Button sx={{padding: '10px'}} variant="contained" color="warning">  <Link style={{textDecoration: 'none', color: 'white' }} to="/login">LOGIN</Link> </Button>
                                {/*  <Button sx={{padding: '10px'}} variant="contained"><Link style={{textDecoration: 'none',color: 'white' }} to="/wallet">WALLET</Link></Button>
                                <Button sx={{padding: '10px'}} variant="contained"><Link style={{textDecoration: 'none',color: 'white' }} to="/login">SIGN-UP</Link></Button>
 */}
                                 </Tabs>

                        <header>
                            { user ? (
                                <div>
                                <p>Welcome, {user.username}!</p>
                                 <button onClick={handleLogout}>Logout</button>
                                </div>
                                ) : (
                                <Link to="/login">Click Here to Login</Link>)
                            }
                        </header>
                    </Toolbar>
                </AppBar>
            </div>
          
    );
};
export default NavBar