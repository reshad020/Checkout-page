import Avatar from '@mui/material/Avatar';
import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import './GridBody.css'
import { Button, Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useFirebase from '../useHooks/useFirebase';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const GridBody = () => {
    const {user,signInUsingGoogle,logOut} = useFirebase();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{textAlign:'center'}}>
            <Container>
            <Grid container>

                <Grid xs={5}>
                    <div style={{margin:'15px 200px 10px 0'}}>
                        {
                            user.email?
                            <button id='login-btn' onClick={logOut}>LOG OUT</button>
                            :
                            <button id='login-btn' onClick={handleOpen}>LOG IN</button>
                        }
                        
                        <button id='signup-btn'>SIGN UP</button>
                        <p style={{margin:'30px 50px 30px 0px'}}>Shipping Information</p>
                    </div>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2,textAlign:'center' }}>
                           <Button variant="contained" onClick={signInUsingGoogle}>Google signin</Button>
                        </Typography>
                        </Box>
                    </Modal>
                    
                    <div>
                        <form>
                            <div>
                                <input className='input-box' placeholder='Email'/>
                                <input className='input-box' placeholder='Address'/>
                            </div>
                            <div>
                                <input className='input-box' placeholder='First name'/>
                                <input className='input-box' placeholder='city'/>
                            </div>
                            <div>
                                <input className='input-box' placeholder='Last name'/>
                                <input className='input-box' placeholder='Postal code/ZIP'/>
                            </div>
                            <div>
                                <input className='input-box' placeholder='Phone number'/>
                                <input className='input-box' placeholder='Country'/>
                            </div>
                            
                        </form>
                    </div>
                </Grid>

                <Grid xs={4}>
                    <div>
                        <p style={{margin:'5px 220px 30px 0px'}}>Payment Method</p>
                        <button className='button-design'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_o6v524fhJOYpBqSPZgbd5DTKtaYx_wcww&usqp=CAU" height="20" width="60"></img></button>
                        <button className='button-design'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxy9p06iReAMa77FtIIc4D1Dhs3kJbqZSqA&usqp=CAU" height="20" width="60"></img></button>
                        <button className='button-design'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHx6ZNTJ1LgNna6HU8JVajErNhHsDdqAgrA&usqp=CAU" height="20" width="60"></img></button>
                    </div>
                    <div style={{marginTop:'18px'}}>
                        <button className='button-design'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GGxiTBq1PTsI5veYF6Au4ENpDb6feRF8-Q&usqp=CAU" height="20" width="60"></img></button>
                        <button className='button-design'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8K0UcNPL2P5O_a-k-cTJ2hrY9ZER9NWYvQQ&usqp=CAU" height="20" width="60"></img></button>
                        <button className='button-design'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjCrz1Kv0TPZCnqJVNJOV-PO6LM9b1SfKfg&usqp=CAU" height="20" width="60"></img></button>
                    </div>
                    <p style={{margin:'45px 220px 10px 0px'}}>Delivery Method</p>
                    <div style={{margin:'18px 0px 10px 10px',display:'flex'}}>
                        <button className='button-design' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIVPXq0ynNSzrpjyGrEEmbyIrNkQS1SmdFg&usqp=CAU" height="20" width="60"></img>
                            <span style={{marginLeft:'15px'}}>$20.00</span>
                        </button>
                        <button className='button-design' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQakbRja4epLvBidhlWWnbVYcjwgHI-CSDw&usqp=CAU" height="20" width="60"></img>
                            <span style={{marginLeft:'15px'}}>$20.00</span>
                        </button>
                        
                        
                    </div>
                    
                    <div style={{margin:'18px 0px 10px 10px',display:'flex'}}>
                        <button className='button-design' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrE9swtLisN_AmkTQjxxxWjUWNJTx34fSYew&usqp=CAU" height="20" width="60"></img>
                            <span style={{marginLeft:'15px'}}>$20.00</span>
                        </button>
                        <button className='button-design' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSuvAmerNrlAVS38OQb86kyGFFo10e-oRKQ&usqp=CAU" height="20" width="60"></img>
                            <span style={{marginLeft:'15px'}}>$20.00</span>
                        </button>
                        
                        
                    </div>
                    
                </Grid>

                <Grid xs={3} sx={{textAlign:'left'}}>
                    <p style={{marginLeft:'50px'}}>Your Cart</p>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'20px'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRF6FcoSO0OPHHnXAGdcDqZTbe_-gGMgL0YA&usqp=CAU" sx={{ width: 34, height: 34,mr:2 }} />
                            <span style={{fontSize:'10px'}}>T-shirt <br/> Summer vibes <br/> <span style={{color:'grey'}}>#21449</span></span>
                        </div>
                        <div style={{fontSize:'10px',marginLeft:'50px'}}>
                            $300.00
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9fN03nwNOkbl4xMqfnBqHtfOY9ssx54KMg&usqp=CAU" sx={{ width: 34, height: 34,mr:2 }} />
                            <span style={{fontSize:'10px'}}>T-shirt <br/> Summer vibes <br/> <span style={{color:'grey'}}>#21449</span></span>
                        </div>
                        <div style={{fontSize:'10px',marginLeft:'50px'}}>
                            $300.00
                        </div>
                    </div>
                    <button className='button-design' style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'25px 0px 0px 50px',backgroundColor:'whitesmoke',border:'none',color:'grey'}}>
                            Total Cost
                            <span style={{marginLeft:'15px',color:'black'}}>$600.00</span>

                        </button>
                    <p style={{display:'flex',justifyContent:'center',fontSize:'12px',margin:'50px 0 0 0'}}>
                        <LocalShippingOutlinedIcon sx={{mr:1}}/> You are $30.00 away <br/> from free shipping.
                    </p>
                    
                    
                    
                </Grid>

            </Grid>

            </Container>
        </Box>
    );
};

export default GridBody;