import { Avatar, CircularProgress, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import useFirebase from '../useHooks/useFirebase';

const Profile = () => {
    const {user,loading} = useFirebase();
    const {email} = user;
    const [userData,setUserData] = useState({});
    const url = `http://localhost:5000/users/${email}`
    console.log(url)
    useEffect( () => {
        
        fetch(url)
       .then(res => res.json())
       .then(data => {
        
           setUserData(data)
        })
     
  }, [user,userData]);
  if(loading){
    return <CircularProgress/>
}
    // const {name,image,address} = userData;

    console.log(email)
  
   
    
    return (
        
        <>
         
                
        <Header></Header>
        
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',mt:5}}>
            <Paper sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',p:5,backgroundColor:'black'}}>
                <Avatar
                alt="Remy Sharp"
                src={userData?.image}      
                sx={{ width: 56, height: 56 }}
                />
                <Box sx={{my:5,fontSize:'12px',color:'whitesmoke'}}>
                    <Typography sx={{my:2,fontSize:'14px'}}>Name: {userData?.name}</Typography>
                    <Typography sx={{my:2,fontSize:'14px'}}>Email: {user?.email}</Typography>
                    <Typography sx={{my:2,fontSize:'14px'}}>Address: {userData?.address}</Typography>
                </Box>
            </Paper>
        </Box>
        
            

        </>
    );
    
};

export default Profile;