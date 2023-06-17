import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config.js";
import Swal from "sweetalert2";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthConte = ({ children }) => {

    const [update, setUpdate] = useState('');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [toys, setToy] = useState([]);


    const googleSignIn = () => {
        setLoading(true); 
        return signInWithPopup(auth, googleProvider);
    }

    const emailLogin = (email, password) => {
        setLoading(true);
        return  signInWithEmailAndPassword(auth, email, password);
            
    }

    const emailSignUp = (name, photo, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => Swal.fire('Successfully Logged Out'))
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })
    }, [])


    const authInfo = { googleSignIn, logOut, user, emailSignUp, emailLogin, loading, toys, setUpdate, update };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthConte;