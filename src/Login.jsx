// import React from 'react';

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full h-[500px] max-w-sm shadow-2xl bg-base-100 ">
                    <h6 className="py-10 text-6xl text-center font-bold">Log In!</h6>
                    <div className="card-body">
                        <div className="form-control pb-5">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control pb-5">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <div className="text-lg">
                                    New here?
                                    <Link to='/signUp' className="text-lg no-underline font-semibold label-text-alt link link-hover"> SignUp Now.</Link>
                                </div>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary btn-outline bottom-0">LogIn</button>
                        </div>
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