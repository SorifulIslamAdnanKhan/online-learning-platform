import React from 'react';

const Blog = () => {
    return (
        <div className='p-10'>
            <div>
                <h3 className='text-3xl font-bold'>1. What is cors?</h3>
                <br />
                <p className='text-xl'>
                    Cross-origin resource sharing (CORS) is a browser mechanism that allows a server to access resources located outside of a given domain. It relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. CORS also provides the potential for cross-domain attacks, if a website CORS policy is poorly configured and implemented.
                </p>
            </div>
            <br />
            <div>
                <h3 className='text-3xl font-bold'>2. Why are you using firebase?</h3>
                <br />
                <p className='text-xl'>
                    Firebase Realtime Database is a cloud-hosted database. The data is stored as JSON and is synced in real time with each connected client. When you build cross-platform applications using Apple, Android, and JavaScript SDK platforms, all of your clients share one instance of the Realtime Database and automatically receive updates with the latest data.
                </p>
                <br />
                <p className='text-xl'>
                    With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.
                </p>
                <br />
                <p className='text-xl'>
                    Firebase is a good choice if you want to deploy a working product on the cloud rapidly. Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background.
                </p>
            </div>
            <br />
            <div>
                <h3 className='text-3xl font-bold'>3. How does the private route work?</h3>
                <br />
                <p className='text-xl'>
                    The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return URL passed in the location state property.
                </p>
            </div>
            <br />
            <div>
                <h3 className='text-3xl font-bold'>4. What is Node? How does Node work?</h3>
                <br />
                <p className='text-xl'>
                    Node.js is a free backend JavaScript runtime environment. It's a used as backend service where JavaScript works on the server side of the application. This way JavaScript is used on both the frontend and backend.
                </p>
                <br />
                <p className='text-xl'>
                    Node.js runs on the chrome v8 engine which converts JavaScript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
                <br />
                <p className='text-xl'>
                    Node.js application runs only on a single thread and by that, It means whether that Node.js application is being used by 5 users or 5 million users, it will only run on a single thread which makes the Node.js application blockable (which means that a single line of code can block the whole app because an only single thread is being used). The asynchronous behavior is extremely important when using a node because it guarantees that the event loop is never blocked by a synchronous function.
                </p>
            </div>
        </div>
    );
};

export default Blog;