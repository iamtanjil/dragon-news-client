import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const loginProvider = (provider) =>{
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

    const updateUserProfile = (profile) => {
       return updateProfile(auth.currentUser, profile);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
        .then(()=> {})
        .catch(error => console.error(error))
    }

    const verifyEmailAddress = () => {
       return sendEmailVerification(auth.currentUser);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setLoading(false);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
        })
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        loginProvider,
        logOut,
        createUser,
        signIn,
        updateUserProfile,
        verifyEmailAddress,
        setLoading
    };

    return (
         <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;