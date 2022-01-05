import {  Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CardBox from '../Card/Card';
import formFill from '../../../images/formFill.png';
import delivered from '../../../images/delivererd.png';
import update from '../../../images/update.png'

const Cards = () => {
    const cards = [
        {
            img:formFill,
            title:'Add Your Parcel',
            details:'We have a form, where you can upload your parcel informations.After we get your order we start further procedures.'
        },
        {
            img:update,
            title:'Updates of your Parcel',
            details:'When your parcel order is confirmed, Our team will keep you updated till your parcel reaches its destination. '
        },
        {
            img:delivered,
            title:'Get the parcel ',
            details:'After everyhting is done, our delivery team will leave with your parcel and get to the destination as soon as possible.'
        }
    ]
    return (
        <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center',my:5 }}>
            <Container>

                <Grid container spacing={2} sx={{display:'flex'}}>
                        {
                            cards.map(card => <CardBox card={card} ></CardBox>)
                        }
                    
                </Grid>
                
             </Container>
            
        </Box>
    );
};

export default Cards;