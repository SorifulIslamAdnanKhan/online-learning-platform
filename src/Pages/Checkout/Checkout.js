import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const checkout = useLoaderData();

    const {title, price, image_url} = checkout;
    return (
        <div className="hero bg-base-200 p-40">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold p-8">{title}</h1>
                        <img src={image_url} alt="" />
                        <p className='p-8'>Price: <b>${price}</b></p>
                        <button className="btn btn-primary m-2">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Checkout;