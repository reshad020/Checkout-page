
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import topBannerImage from '../../images/delivery.png'
import useFirebase from '../useHooks/useFirebase';

const Profile = () => {
    const {user,loading} = useFirebase();
    
    
    
    return (
       <>
            <Box sx={{mt:5}}>
                <Grid container >
                    <Grid sm={6} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',mt:5}}>
                        <Box >
                            <Typography sx={{fontSize:'26px',fontWeight:'700'}}>Want to deliver your product?</Typography>
                            <Typography sx={{fontSize:'26px',fontWeight:'700'}}>No worries</Typography>
                            <Typography sx={{fontSize:'26px',fontWeight:'700'}}>Just Add your parcel and <br /> We will deliver to its destination.</Typography>
                        
                        <NavLink to='/addparcel'>
                            <Button variant='contained' sx={{width:'170px',mt:2}}>Add Parcel</Button>
                        </NavLink>
                        </Box>
                    </Grid>

                    <Grid sm={6} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <img src={topBannerImage} alt="" style={{width:'100%'}}/>
                    </Grid>
                </Grid>
            </Box>
       </>
    );
    
};

export default Profile;