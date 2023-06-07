import { createContext } from "react";

export const AuthContext = createContext();

const AuthConte = ({children}) => {
    
    // const logOut = ( ) => {
        
    // }    

    const authInfo = {};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthConte;