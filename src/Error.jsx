import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-6xl font-extrabold items-center text-center px-10 text-slate-300 w-full" >
            <Link to='/' className="btn btn-outline btn-info">
                Back to Home
            </Link>
            <br />
            <img src="https://i.ibb.co/gFLL2PS/404-error-checking-FI.webp" alt="404"  className="w-screen rounded-2xl"/>
        </div>
    );
};

export default Error;