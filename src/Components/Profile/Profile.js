
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import topBannerImage from '../../images/bg.png'
import useFirebase from '../useHooks/useFirebase';

const Profile = () => {
    const {user,loading} = useFirebase();
    
    
    
    return (
       <>
            <Box sx={{}}>
                <Grid container >
                    <Grid sm={12} sx={{backgroundImage:`url(${topBannerImage})`,height:'600px',width:'1300px', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',mt:5}}>
                        <Box sx={{backgroundColor:'rgba(250,250,250,0.6)',p:3}}>
                            <Typography sx={{fontSize:'34px',fontWeight:'800'}}>Want to deliver your product?</Typography>
                            <Typography sx={{fontSize:'26px',fontWeight:'800',color:'gray'}}>No worries</Typography>
                            <Typography sx={{fontSize:'26px',fontWeight:'800',color:'GrayText'}}>Just Add your parcel and <br /> We will deliver to its destination.</Typography>
                        
                        <NavLink to='/addparcel' style={{textDecoration:'none'}}>
                            <Button variant='outlined' color='secondary' sx={{mt:2}}>Add Parcel</Button>
                        </NavLink>
                        </Box>
                    </Grid>

                    {/* <Grid sm={6} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <img src={topBannerImage} alt="" style={{width:'100%'}}/>
                    </Grid> */}
                </Grid>
            </Box>
       </>
    );
    
};

export default Profile;