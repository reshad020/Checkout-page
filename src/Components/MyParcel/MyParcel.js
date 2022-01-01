import { Avatar, Chip, CircularProgress, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import useAuth from '../useHooks/useAuth';

const AllPeople = () => {
    const {user,loading} = useAuth();
    
    const email = user?.email;
    
    const [parcels,setParcels] = useState([]);
    useEffect(() => {
        fetch(`https://enigmatic-beach-68956.herokuapp.com/parcels/${email}`)
            .then(res => res.json())
            .then(data =>{
                setParcels(data);
                }
            ) 
    }, [parcels]);
    if(loading){
        return <CircularProgress/>
    }
    return (
        <div style={{marginTop:'100px'}}>
            <h1 style={{textAlign:'center',margin:'10px 0 10px 0'}}>Your Parcel List</h1>
            {parcels?.map(parcel => {
                
               return <> 
               <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:5}}>
                    <Paper sx={{display:'flex',flexDirection:'column',width:{xs:'325px',sm:'650px'},alignItems:'center',p:3}}>
                        
                        <Typography sx={{ml:2, my:'5px'}}>Parcel Information: <br/>
                        <Chip label={parcel.parcelInfo}  /> 
                        <Chip label={parcel.parcelCost} variant="outlined" /> <br/>
                        <Typography sx={{my:'5px'}}>Sender Information:</Typography> 
                        <Chip label={parcel.senderName} variant="outlined" />
                        <Chip label={parcel.senderAddress}  /> 
                        <Typography sx={{my:'5px'}}>Receiver Information:</Typography>
                        <Chip label={parcel.receiverName}  />
                        <Chip label={parcel.receiverAddress} variant="outlined" />
                        </Typography>
                    </Paper>
                </Box>
                </>
            })}
        </div>
    );
};

export default AllPeople;