import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useNavigate } from 'react-router-dom';
import useFirebase from '../useHooks/useFirebase';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const {user,logOut} = useFirebase();
    const history = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (
        <AppBar position="static" sx={{backgroundColor:'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            My SocialMedia App         </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">My Profile</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">All people</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">My Friends</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            My SocialMedia App
          </Typography>
          {
            user.email?<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            <NavLink to="/profile" style={{textDecoration:'none'}}>
              <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2,ml:'250px', color: 'white', display: 'block' }}
              >
                  My profile
              </Button>
            </NavLink>
            <NavLink to="/allpeople" style={{textDecoration:'none'}}>
              <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2,ml:'50px', color: 'white', display: 'block' }}
              >
                  All people
              </Button>
            </NavLink>
           <NavLink to="/myfriends" style={{textDecoration:'none'}}>
              <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2,ml:'50px', color: 'white', display: 'block' }}
              >
                  My Friends
              </Button>
           </NavLink>
           
            <Button onClick={() => logOut(history)}>Logout</Button>
            </Box>

               :<Button>Login</Button>

           
          
        
          }

          
        </Toolbar>
      </Container>
    </AppBar>
    );
};

export default Header;