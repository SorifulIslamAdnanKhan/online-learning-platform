import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleTutorial = () => {

    const singleTutorial = useLoaderData();

    const { id, title, image_url, details, total_enrollment, rating, author, price } = singleTutorial;

    return (
        <div>
            <div className="hero bg-base-200 p-12">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">What You'll Learn</h1>
                    </div>
                </div>
            </div>
            <div className='p-10'>
                <div className="card bg-orange-400 text-neutral-content ">

                    <div className="card-body items-center text-center">
                        <div className='text-end m-2'>
                            <button className='btn btn-success text-white'>Download Tutorial Details as PDF</button>
                        </div>
                        <img src={image_url} alt="" />
                        <h2 className="card-title">{title}</h2>
                        <p className='p-10'>{details}</p>
                        <h3>Instructior: {author.name}</h3>
                        <div>
                            <p>Total Enrollment: <b>{total_enrollment}</b></p>
                            <p>Rating: <b>{rating.number}</b></p>
                            <p>Price:<b>${price}</b></p>
                        </div>
                        <Link to={`/checkout/${id}`} className="btn btn-primary m-2">Enroll Tutorial</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTutorial;