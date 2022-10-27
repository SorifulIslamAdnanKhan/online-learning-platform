import React from 'react';
import { Link } from 'react-router-dom';

const TutorialCard = ({tutorial}) => {
    
    const { title, image_url, id } = tutorial;

    return (
        <div className="card bg-slate-400 text-neutral-content ">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <img src={image_url} alt="" />
                <Link to={`/tutorials/${id}`} className="btn btn-primary m-2">Enroll Now</Link>
            </div>
        </div>

    );
};

export default TutorialCard;