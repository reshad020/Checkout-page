import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import boy from '../../images/boy1.png'

const Subscription = () => {
    return (
        <Container sx={{mt:'300px',mb:3}}>
            <Paper sx={{backgroundImage:'linear-gradient(2.52deg, #042368 -80.55%, #040037 67.96%)',p:2}}>
                <Grid container >
                    <Grid sm={6} sx={{mt:'-400px'}}>
                        <img src={boy} alt="" width="350"/>
                    </Grid>
                    <Grid sm={6} sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:1}}>
                        <Box>
                            <Typography variant="h5" sx={{color:'whitesmoke',mb:2}}>
                                Want to Join Our Community? Follow Us on Social Media <br/>
                                Or Register Your Account.
                            </Typography>
                            <LinkedInIcon sx={{color:'lightblue',width:'30px'}}/> <FacebookIcon sx={{color:'blue'}} /> <InstagramIcon sx={{color:'goldenrod'}}/>
                            <br/>
                            <Button variant='contained' sx={{mt:2}}>Register</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Subscription;