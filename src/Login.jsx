import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthConte";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const { googleSignIn, user, emailLogin } = useContext(AuthContext);
    const googleLogIn = () => {
        googleSignIn();
        if (user) {
            Swal.fire('Successfully Logged In as ', user.displayName) || alert('Successfully Logged In as ', user.displayName);
            navigate('/', { replace: true });
        }
    }
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        emailLogin(email, password);
        if(user) {
            Swal.fire('Successfully Logged In as ', user.displayName) || alert('Successfully Logged In as ', user.displayName);
            navigate('/', {replace: true});
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full h-[500px] max-w-sm shadow-2xl bg-base-100 ">
                        <h6 className="py-5 text-6xl text-center text-slate-600 font-bold">Log In!</h6>
                        <div className="card-body">
                            <button onClick={googleLogIn} className="btn btn-info btn-outline bottom-0">LogIn via Google</button>
                            <span className="text-xl font-bold text-center text-slate-600">Or,</span>
                            <form onSubmit={handleLogin}>
                                <div className="form-control pb-5">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <div className="text-md">
                                            New here?
                                            <Link to='/signUp' className="no-underline font-semibold label-text-alt link link-hover"> SignUp Now.</Link>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn btn-primary btn-outline bottom-0">LogIn</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="hidden lg:block shadow-2xl">
                        <img src="https://i.ibb.co/MMxB0Yr/1686058859-1.jpg" alt="TOY MANIA" border="0" className="rounded-3xl h-[500px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;