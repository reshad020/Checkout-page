import React from 'react';
import GridBody from '../Body/GridBody';
import ShippingAndPay from '../Body/ShippingAndPay';
import BottomPart from '../BottomPart/BottomPart';
import Header from '../Header/Header';

const FullPage = () => {
    return (
        <div>
            <Header></Header>
            <ShippingAndPay></ShippingAndPay>
            <GridBody></GridBody>
            <BottomPart></BottomPart>
        </div>
    );
};

export default FullPage;