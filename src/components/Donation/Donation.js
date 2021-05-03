import React from 'react';
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../../CheckoutForm/CheckoutForm';
// import './Donation.css'

const promise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Donation = () => {

    return (
        <div className="m-5 p-5 w-75">
             <Elements stripe={promise}>

            <CheckoutForm />

            </Elements>
            
        </div>
    );
};

export default Donation;