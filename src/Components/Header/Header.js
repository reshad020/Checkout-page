import { AppBar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useFirebase from '../useHooks/useFirebase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = () => {
    const {user,logOut} = useFirebase();
    const history = useNavigate();

   

    return (
        <Box sx={{mb:5}}>
          <AppBar sx={{p:2,backgroundColor:'cornflowerblue'}}>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <NavLink to="/" style={{textDecoration:'none'}}>
                    <Typography sx={{color:'whitesmoke',fontWeight:'600',fontSize:'18px'}}>
                      The Parcel Guy
                    </Typography>
                  </NavLink>
                  { user.email?
                  <>
                    
                      <NavLink to="/myparcel" style={{textDecoration:'none'}}>
                      <Typography variant="contained" sx={{color:'whitesmoke',fontWeight:'600',fontSize:'18px'}}>
                        My Parcel
                      </Typography>
                    </NavLink>
                    <Button onClick={() => logOut(history)} sx={{color:'white'}}> <AccountCircleIcon/> Logout</Button>
                  </>
                  :
                  <NavLink to="/login" style={{textDecoration:'none'}}>
                    <Typography sx={{color:'whitesmoke',fontWeight:'600',fontSize:'18px'}}>
                      Login
                    </Typography>
                  </NavLink>
                  }
                  
            </Box>
          </AppBar>
        </Box>
    );
};

export default Header;