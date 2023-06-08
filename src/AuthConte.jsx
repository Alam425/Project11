import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../firebase.config.js";
import Swal from "sweetalert2";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthConte = ({ children }) => {
    const [user, setUser] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            }
                )
            .catch(r => console.log(r))
    }

    const logOut = () => {
        signOut(auth)
        .then(()=>Swal.fire('Successfully Logged Out'))
        .catch(e=>console.log(e.message))
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        } )
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = { googleSignIn, logOut, user };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthConte;