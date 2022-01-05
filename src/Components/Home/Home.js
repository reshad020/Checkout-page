import React from 'react';
import Header from '../Header/Header';
import Cards from '../MidSection/Cards/Cards';
import Profile from '../Profile/Profile';
import Login from '../SignUp/Login';
import Subscription from '../Subscription/Subscription';
import useFirebase from '../useHooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
                
                <Profile></Profile>
                <Cards></Cards>
                <Subscription></Subscription>
            
            
        </div>
    );
};

export default Home;