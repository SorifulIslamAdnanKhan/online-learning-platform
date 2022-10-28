import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/hero.jpg';

const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={HeroImage} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome To AKJ Tutorial Office Website!</h1>
                        <p className="py-6">AKJ Tutorial is an amazing platform for JavaScript enthusiastic. Our main is goal is to help students to learn JavaScript programming language in a funny but effective way.</p>
                        <Link to='/tutorials' className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
            <h1 className="text-5xl font-bold m-8 text-center">What We Offer!</h1>
            <div className='grid lg:grid-cols-2 gap-10 p-4'>
                <div className="card grid-rows-6 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Working With JavaScript Data!</h2>
                        <p>The basic understanding of JavaScript Data</p>
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
                <div className="card grid-rows-6 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Basic JavaScript Functions!</h2>
                        <p>Fundamentals of JavaScript functions.</p>
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
                <div className="card grid-rows-6 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Deep Dive into JavaScript Arrays!</h2>
                        <p>Learn JavaScript array a new way.</p>
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
                <div className="card grid-rows-6 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ECMAScript 6!</h2>
                        <p>ES6 Features</p>
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
            <div className='text-center p-10'>
                <Link to='/tutorials' className="btn btn-primary">Load More!</Link>
            </div>
            <div className="text-center p-16">
                <h1 className="text-5xl font-bold">Learn JavaScript Today!</h1>
                <p className="py-6">It's time to grow your programming career. Let's add JasvaScript badge in your portfolio complting our course.</p>
            </div>
        </div>
    );
};

export default Home;