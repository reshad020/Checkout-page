import React from 'react';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import './BottomPart.css'
import useFirebase from '../useHooks/useFirebase';

const BottomPart = () => {
    const {user} = useFirebase();
    const handlePay = ()=>{
        if(user.email){
            alert("Ordered successfully")
        }
        else{
            alert("Please Login first")
        }
    }
    return (
        <div>
            <section className='box'>

                <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'100px'}}>
                    <KeyboardBackspaceOutlinedIcon sx={{}}/> Back
                </div>

                <div >
                    
                </div>

                <div >
                    <button id='pay-btn' >Continue shopping </button>
                    <button id='shopping-btn' onClick={handlePay} >Proceed payment</button>
                </div>

            </section>
        </div>
    );
};

export default BottomPart;