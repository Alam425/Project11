import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthConte";

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);
    const signoutt = () => {
        logOut();
    }
    const navItems = <>
        <li className="font-semibold text-slate-500"><Link to='/'>Home</Link></li>
        <li className="font-semibold text-slate-500"><Link to='/allToy'>All Toys</Link></li>
        <li className="font-semibold text-slate-500"><Link to='/myToy'>My Toy</Link></li>
        <li className="font-semibold text-slate-500"><Link to='/addToy'>Add Toy</Link></li>
        <li className="font-semibold text-slate-500"><Link to='/blog'>Blog</Link></li>
    </>;
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="top-[0px] right-[-240px] dropdown-content shadow bg-base-100 rounded-xl w-64 h-16 p-2 flex gap-2 font-semibold text-slate-500 justify-evenly">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl flex gap-2">
                    <img width={'45px'} src="https://i.ibb.co/QQQBKtZ/download.jpg" alt="download" border="0" className="rounded-xl" />
                    <p className="font-bold text-sky-500 hover:text-white" >Toy&Toy</p>
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
                    <div className="font-semibold text-slate-500 lg:flex lg:gap-2 justify-center items-center">
                        <div className="tooltip" data-tip={user.displayName}>
                            <img src={user.photoURL} className="w-12 h-12 p-0 rounded-lg" alt="" />
                        </div>
                        <div onClick={signoutt} className="btn btn-outline btn-info text-md font-semibold">LogOut</div>
                    </div>
                </> :
                <>
                    <div className="btn-outline btn-info btn font-semibold text-slate-500"><Link to='/login'>LogIn</Link></div>
                </>
        }
            </div>
        </div>
    );
};

export default Navbar;