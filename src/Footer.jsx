import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer pt-10 bg-base-200 text-base-content text-center h-36 justify-around">
                <div>
                    <Link className="text-xl flex gap-2 items-center">
                        <img width={'50px'} src="https://i.ibb.co/QQQBKtZ/download.jpg" alt="download" border="0" className="rounded-xl" />
                        <p className="font-bold text-purple-500">Toy&Toy</p>
                    </Link>
                </div>
                <div>
                    <span className="footer-title">Contact Me</span>
                    <p className="text-slate-600"> Phone : <Link className="font-bold text-slate-400" to="tel:01234567890">01234567890</Link></p>
                    <img className="" src="../Group 9969.png" border="0" />
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <p className="text-slate-600">Dhaka &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; Mirpur&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; Mirpur-14</p>
                </div>
            </footer>
            <p className="p-10 pb-5 text-slate-600 bg-base-200">copyright@2023     ||     Shamsul Alam ||     Assignment 11</p>
        </div>
    );
};

export default Footer;