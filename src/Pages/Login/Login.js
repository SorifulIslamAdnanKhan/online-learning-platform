import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { googleLogin, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            setError('');
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
        })

    }

    const handleSubmit = (event) =>{

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result=>{
            const user = result.user;
            form.reset();
            setError('');
            navigate(from, {replace: true});
            console.log(user);
        })
        .catch(error=>{
          //  console.error(error);
            setError(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='text-red-600 text-center'>
                            {error}
                        </div>
                        <div className='text-center'>
                            <button onClick={handleGoogleLogin} className="btn btn-outline p-2 m-2"><FaGoogle></FaGoogle> Google</button>
                            <button className="btn btn-outline p-2"><FaGithub></FaGithub> GitHub</button>
                        </div>
                        <div className='text-center'>
                            <p>Not have an account! Please <Link to='/register' className='btn btn-success text-white'>Register</Link> </p>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;