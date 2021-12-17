import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react';
import './Header.css';
import useFirebase from '../useHooks/useFirebase';
import { Avatar } from '@mui/material';

const Header = () => {
    const {user} = useFirebase();
    return (
        <>
           <header className='header'>

               <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                   <ShoppingBagOutlinedIcon sx={{mr:2}}/><span className='title-text'>E-</span>Shop
               </div>

               <div >
                   <a className='menu-items'>Men</a>
                   <a className='menu-items' >Women</a>
                   <a className='menu-items'>Kids</a>
               </div>

               <div >
                   <a className='menu-items'><SearchIcon/></a>
                   <a  className='menu-items'><ShoppingCartOutlinedIcon/></a>
                   {
                       user.email?
                       <Avatar className="menu-items" src={user.photoURL} sx={{width:'15',height:'15',display:'inline-block'}}></Avatar>
                       :
                       <a className='menu-items'><PermIdentityIcon/></a>
                   }
                   
               </div>
               
           </header>
           <hr className='divider'></hr>
        </>
    );
};

export default Header;