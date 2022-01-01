import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import axios from 'axios';
import useFirebase from '../useHooks/useFirebase'

const AddParcel = () => {
    const {user} = useFirebase();
    const history = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        

        const parcelData = {
          email:user.email,
          parcelInfo:data.get('parcel-info'),
          parcelCost:data.get('parcel-cost'),
          parcelStartingLocation:data.get('parcel-starting-location'),
          parcelEndingLocation:data.get('parcel-ending-location'),
          senderName:data.get('sender-name'),
          senderAddress:data.get('address'),
          senderPhone:data.get('phone'),
          receiverName:data.get('receiver-name'),
          receiverAddress:data.get('receiver-address'),
          receiverPhone:data.get('receiver-phone'),
          

        }
        console.log(parcelData);

        //sending data to the database
        axios.post('https://enigmatic-beach-68956.herokuapp.com/parcels',parcelData)
            .then(res =>{
                alert("added successfully");
                history('/');
            });
            
    }
    return (
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mb:5}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:{xs:'350px',sm:'600px'}
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LocalShippingTwoToneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Just Send Your Parcel
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Typography sx={{my:2,textAlign:'center',fontWeight:'600',color:'slateblue'}}>Parcel Information</Typography>
            <Grid container spacing={2}>
                
                <Grid item xs={6}>
                    <TextField
                    required
                    fullWidth
                    id="parcel-info"
                    label="Parcel Info"
                    name="parcel-info"
                    
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    required
                    fullWidth
                    id="parcel-cost"
                    label="Parcel Cost"
                    name="parcel-cost"
                   
                    />
                </Grid>
 
            <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="parcel-starting-location"
                  label="Parcel Starting Location"
                  name="parcel-starting-location"
                  
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="parcel-ending-location"
                  label="Parcel Ending Location"
                  id="parcel-ending-location"
                 
                />
              </Grid>
            </Grid>
            <Typography sx={{my:2,textAlign:'center',fontWeight:'600',color:'slateblue'}}>Sender's Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="sender-name"
                  label="Sender Name"
                  id="sender-name"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  id="phone"
                 
                />
              </Grid>
            </Grid>
            <Typography sx={{my:2,textAlign:'center',fontWeight:'600',color:'slateblue'}}>Receiver's Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="receiver-name"
                  label="Receiver Name"
                  id="receiver-name"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="receiver-address"
                  label="Address"
                  id="receiver-address"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="receiver-phone"
                  label="Phone"
                  id="receiver-phone"
                 
                />
              
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Parcel
            </Button>
            
          </Box>
        </Box>
        </Box>
    );
};

export default AddParcel;