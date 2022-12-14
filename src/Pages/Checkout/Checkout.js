import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {

    const checkout = useLoaderData();

    const { title, price, image_url } = checkout;

    const handleCheckout = () => {
        toast("Wow you've successfully enrolled the course!");
    }
    return (
        <div className=" p-10">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold p-4">{title}</h1>
                    <img src={image_url} alt="" />
                    <p className='p-8'>Price: <b>${price}</b></p>
                    <button onClick={handleCheckout} className="btn btn-primary m-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;