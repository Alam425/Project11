import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthConte";
import Swal from "sweetalert2";

const SignUp = () => {
    const navigate = useNavigate();
    const {emailSignUp, user} = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        emailSignUp(name, photo, email, password);
        console.log(name, photo, email, password);
        if(user) {
            Swal.fire('Successfully Signed In as ', name) || alert('Successfully Signed In as ', name);
            navigate('/', {replace: true});
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full h-[520px] max-w-sm shadow-2xl bg-base-100 p-0 m-0">
                        <h6 className="text-6xl text-center font-bold p-0 m-0">Sign Up!</h6>
                        <form onSubmit={handleSignUp}>
                            <div className=" py-0 my-0 card-body">
                                <div className="form-control py-0 my-0">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control py-0 my-0">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" required placeholder="Email" className="input input-bordered" name="email" />
                                </div>
                                <div className="form-control py-0 my-0">
                                    <label className="label">
                                        <span className="label-text">URL of your image</span>
                                    </label>
                                    <input type="text" placeholder="Your Image-URL" name="photo" className="input input-bordered" />
                                </div>
                                <div className="form-control py-0 my-0">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" required className="input input-bordered" />
                                </div>
                                <div>
                                    <label className="label">
                                        <div className="text-lg">
                                            Already have an account?
                                            <Link to='/login' className="text-lg no-underline font-semibold label-text-alt link link-hover"> Login Here.</Link>
                                        </div>
                                    </label>
                                    <div className="form-control py-0 my-0 mt-6">
                                        <button type="submit" className="btn btn-primary btn-outline bottom-0">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="hidden lg:block shadow-2xl">
                        <img src="https://i.ibb.co/MMxB0Yr/1686058859-1.jpg" alt="TOY MANIA" border="0" className="rounded-3xl h-[520px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;