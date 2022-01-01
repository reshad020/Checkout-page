import React from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Login from '../SignUp/Login';
import useFirebase from '../useHooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
                
                <Profile></Profile>
             
            
            
        </div>
    );
};

export default Home;