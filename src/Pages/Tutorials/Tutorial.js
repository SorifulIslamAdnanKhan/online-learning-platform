import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TutorialCard from './TutorialCard';

const Tutorial = () => {

    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        fetch('https://akj-tutorial-server.vercel.app/tutorials/')
            .then(res => res.json())
            .then(data => setTutorials(data))
    }, [])

    return (

        <div className='flex'>
            <div className='p-10'>
                <div>
                    {
                        tutorials.map(tutorial => <p
                            key={tutorial.id}
                        ><Link to={`/tutorials/${tutorial.id}`}>{tutorial.title}</Link>
                        </p>)
                    }
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 p-4'>
                {
                    tutorials.map(tutorial =><TutorialCard
                        key={tutorial.id}
                        tutorial={tutorial}
                    ></TutorialCard>)
                }
            </div>
        </div>
    );
};

export default Tutorial;