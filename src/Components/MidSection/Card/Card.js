import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const CardBox = (props) => {
    const {title, details,img} = props.card
    return (
        <Grid item sm={4} sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',my:2}}>
        <Card sx={{ maxWidth:'300px' }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {details}
                </Typography>
            </CardContent>
            
    </Card>
    </Grid>
    );
};

export default CardBox;