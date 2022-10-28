import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {  

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const googleLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const githubLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            //console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return ()=>{
            unsubscribe();
        }

    }, [])

    const auth = getAuth(app);

    

    const authInfo = {
        user,
        googleLogin,
        githubLogin,
        createUser,
        signIn,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
     );
};

export default AuthProvider;