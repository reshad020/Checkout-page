import { Avatar, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const AllPeople = () => {
    
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data =>{
                setUsers(data);
                console.log(users)}
            ) 
    }, []);
    return (
        <div>
            <Header></Header>
            {users.map(user => {
                
               return <> 
               <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:5}}>
                    <Paper sx={{display:'flex',width:'300px',alignItems:'center'}}>
                        <Avatar
                        alt="Remy Sharp"
                        src={user.image}        
                        sx={{ width: 56, height: 56 }}
                        />
                        <Typography sx={{ml:2}}>{user.name}</Typography>
                    </Paper>
                </Box>
                </>
            })}
        </div>
    );
};

export default AllPeople;