import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import './ShippingAndPay.css'
const ShippingAndPay = () => {
    return (
        <section style={{margin:'20px 30px 20px 0px'}}>
            <div className='flex-box'>
                <h3 style={{fontWeight:'500',marginLeft:'20px'}}>Shipping and Payment</h3>
                <h1></h1>
                <div >
                    <span ><ShoppingCartOutlinedIcon style={{borderRadius:'50%',border:'1px solid rgb(125, 211, 141)',padding:'4px'}} /></span> <hr id='line'/> <span><LocalShippingOutlinedIcon sx={{backgroundColor:'rgb(108, 199, 161)',borderRadius:'50%',color:'white',padding:'2px'}}/></span>
                </div>
            </div>
        </section>
    );
};

export default ShippingAndPay;