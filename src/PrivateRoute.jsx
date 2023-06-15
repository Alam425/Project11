import { useContext } from "react";
import { AuthContext } from "./AuthConte";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-5xl text-center">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;