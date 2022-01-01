import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Header from '../Header/Header';
import useFirebase from '../useHooks/useFirebase';

const Login = () => {
  const { login,googleSignIn,user } = useFirebase();
  const history = useNavigate();
  const location = useLocation();
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        
         const email = data.get('email')
         const password = data.get('password')

         //Firebase Login
         login(email,password,history);
      };
      const handleGoogleLogin = () =>{
        googleSignIn()

        history(location.state?.from || '/')
        
    }
    return (
       <>
       
       <Box sx={{height:'450px',display:'flex',justifyContent:'center',alignItems:'center',mt:5}}>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
            <Typography component="h1" variant="h5">
            Login to Your Account
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              onClick={ handleGoogleLogin }
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVWmpRyTWPc11WH7eaS2SFtyvIsVKOLIrHg&usqp=CAU" sx={{mr:2}}></Avatar>Sign In with Google
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/error" variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
       </Box>
       </>
    );
};

export default Login;