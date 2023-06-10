import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthConte";

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);
    const signoutt = () => {
        logOut();
    }
    const navItems = <>
        <Link to='/'><li className="font-semibold btn bg-white text-slate-500 lg:bg-base-200">Home</li></Link>
        <Link to='/allToy'><li className="font-semibold btn bg-white text-slate-500 lg:bg-base-200">All Toys</li></Link>
        <Link to='/myToy'><li className="font-semibold btn bg-white text-slate-500 lg:bg-base-200">My Toy</li></Link>
        <Link to='/addToy'><li className="font-semibold btn bg-white text-slate-500 lg:bg-base-200">Add Toy</li></Link>
        <Link to='/blog'><li className="font-semibold btn bg-white text-slate-500 lg:bg-base-200">Blog</li></Link>
    </>;
    return (
        <div className="navbar bg-base-200 pt-3">
            <div className="navbar-start">
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="top-[-60px] right-[-345px] dropdown-content rounded-xl p-2 bg-base-200 font-semibold whitespace-nowrap text-slate-500 justify-evenly">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl flex gap-2">
                    <img width={'45px'} src="https://i.ibb.co/Tg60nZG/transformers-optimus-580x.webp" alt="download" border="0" className="rounded-xl" />
                    <p className="font-bold text-sky-500 hover:text-white" >ToyTransInc.</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            {
            user ?
                <>
                    <div className="font-semibold text-slate-500 lg:flex lg:gap-2 lg:justify-between lg:items-center">
                        <div className="tooltip" data-tip={user.displayName}>
                            <img src={user.photoURL} className="w-12 h-12 p-0 rounded-lg" alt="" />
                        </div>
                        <div onClick={signoutt} className="btn btn-outline btn-info text-md font-semibold">LogOut</div>
                    </div>
                </> :
                <>
                    <Link to='/login'><div className="btn-outline btn-info btn font-semibold text-slate-500">LogIn</div></Link>
                </>
        }
            </div>
        </div>
    );
};

export default Navbar;