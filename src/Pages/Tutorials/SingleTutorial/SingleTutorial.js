import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const SingleTutorial = () => {

    const singleTutorial = useLoaderData();

    const { id, title, image_url, details, total_enrollment, rating, author, price } = singleTutorial;

    const ref = React.createRef();

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
                <div className="card">
                    <div className='text-end m-2 p-2'>
                        <Pdf targetRef={ref} filename="tutorial.pdf">
                            {({ toPdf }) => <button onClick={toPdf} className='btn btn-success text-white'>Download Tutorial Details as PDF</button>}
                        </Pdf>
                    </div>
                    <div  className="card-body items-center text-center text-black">
                        <div ref={ref}>
                            <img src={image_url} alt="" />
                            <h2 className="text-center text-3xl m-4">{title}</h2>
                        </div>
                        <div className='text-xl'>
                            <p className='p-2'>{details}</p>
                            <p>Instructior: {author.name}</p>
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