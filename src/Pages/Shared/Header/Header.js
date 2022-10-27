import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className="navbar bg-base-100 p-10">
            <div className="navbar-start">
                <div >
                    <img className="w-10 rounded-full" src={Logo} />
                    <Link to='/' className="text-lg">AKJ Tutorial</Link>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/tutorials'>Tutorials</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQs</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tutorials'>Tutorials</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/faq'>FAQs</Link></li>
                </ul>
            </div>

            <div className="w-100 flex" >
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="toggle toggle-accent" onChange />
                    </label>

                </div>
                <div className="w-140 rounded-full flex">
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <Link onClick={handleLogout} variant="outline-dark">Log out</Link>
                                    <span>{user?.displayName}</span>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                </>
                        }
                    </div>
                    <div>
                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} />
                                :
                            <FaUser></FaUser>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;