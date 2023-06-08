// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";

// const Login = () => {
//     const navigate = useNavigate();
//     const { signIn } = useContext(AuthContext);
//     const handleLogin = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         const user = { email, password };
//         console.log(user);
//         signIn(email, password)
//             .then(res => {
//                 const user = res.user;
//                 console.log(user);
//                 if (user) {
//                     navigate('/', { replace: true });
//                 }
//             })
//             .catch(e => console.log(e.message))
//     }
//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row">
//                     <div className="mr-12 w-1/2">
//                         <img src="../assets/images/login/login.svg" alt="" />
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <h1 className="text-3xl text-center font-bold">Login!</h1>
//                             <form onSubmit={handleLogin}>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="text" placeholder="email" name="email" className="input input-bordered" required />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Password</span>
//                                     </label>
//                                     <input type="text" placeholder="password" className="input input-bordered" name="password" required />
//                                     <label className="label">
//                                         <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
//                                     </label>
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <input className="btn btn-primary" type="submit" value="Submit" />
//                                 </div>
//                             </form>
//                             <p className="text-xl font-bold">New here? <Link className="btn btn-outline" to='/signUp'>SignUp Now...</Link></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;