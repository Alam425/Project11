import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer pt-10 text-base-content text-center h-36 justify-around">
                <div className="text-xl flex gap-2 items-center">
                    <img width={'50px'} src="https://i.ibb.co/Tg60nZG/transformers-optimus-580x.webp" alt="download" border="0" className="rounded-xl" />
                    <p className="font-bold text-sky-500">ToyTransInc.</p>
                </div>
                <div>
                    <span className="footer-title">Contact Me</span>
                    <div className="text-slate-600">
                        Phone :
                        <Link className="font-bold text-slate-400" to="tel:01234567890">
                            <div className="tooltip" data-tip="Phone Call">
                                &nbsp; 01234567890
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="tooltip" data-tip="Facebook">
                            <Link to='https://web.facebook.com/' target="blank">
                                <img className="w-10 h-10 rounded-lg hover:bg-slate-400 p-2 " src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-1464523-1239437.png?f=avif&w=256" border="0" />
                            </Link>
                        </div>
                        <div className="tooltip" data-tip="WhatsApp">
                            <Link target="blank" to='https://www.whatsapp.com'>
                                <img className="w-10 h-10 rounded-lg hover:bg-slate-400 p-2" src="https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-2254775-1881161.png?f=avif&w=256" border="0" />
                            </Link>
                        </div>
                        <div className="tooltip" data-tip="LinkedIn">
                            <Link target="blank" to='https://www.linkedin.com/'>
                                <img className="w-10 h-10 rounded-lg hover:bg-slate-400 p-2" src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-1464529-1239440.png?f=avif&w=256" border="0" />
                            </Link>
                        </div>
                        <div className="tooltip" data-tip="Instagram">
                            <Link target="blank" to='https://www.instagram.com/'>
                                <img className="w-10 h-10 rounded-lg hover:bg-slate-400 p-2" src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-1464521-1239436.png?f=avif&w=256" border="0" />
                            </Link>
                        </div>
                        <div className="tooltip" data-tip="Twitter">
                            <Link target="blank" to='https://www.twitter.com/'>
                                <img className="w-10 h-10 rounded-lg hover:bg-slate-400 p-2" src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-1464537-1239448.png?f=avif&w=256" border="0" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <p className="text-slate-600">Dhaka &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; Mirpur&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; Mirpur-14</p>
                </div>
            </footer>
                <p className="text-slate-600 hidden md:block bg-base-200">copyright@2023     ||     Shamsul Alam ||     Assignment 11</p>
        </div>
    );
};

export default Footer;