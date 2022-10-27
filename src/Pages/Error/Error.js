import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="py-6">You didn't break the internet, but we can't find that you're looking for.</p>
                    <Link to='/' className="btn btn-primary">Get Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;