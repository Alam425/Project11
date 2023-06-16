import { useContext } from "react";
import { AuthContext } from "./AuthConte";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";

const ToyDetails = () => {

    const { toys } = useContext(AuthContext);
    const sessionToySerial = sessionStorage.getItem('toy_serial');

    const toy = toys.filter(toy => sessionToySerial == toy.serial);
    const { img, name, seller_name, seller_email, price, rating, quantity, description } = toy[0] || toy || {};

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    const addedToCart = (e) => {
        e.preventDefault();
        const form = e.target;
        const number = form.num.value;
        if (number > quantity) {
            Swal.fire('Order Quantity Can Not Be More Then Available Quantity Or, Less Than 1!!');
            return;
        }

        fetch('https://assignment1111.vercel.app/toy', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy[0])
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire('Added to cart')
                }
            })

        navigate('/myToy', { replace: true });
    }

    return (
        <div className="p-5">
            <div>
                <img src={img} className="w-80 h-80 mx-auto rounded-xl" alt="" />
            </div>
            <div className="p-5">
                <p className="text-4xl font-semibold text-slate-500 text-left">{name}</p>
                <p className="text-lg font-semibold text-slate-600 text-left">Description: {description}</p>
                <p className="text-lg font-semibold text-slate-600 text-left">Seller: {seller_name}</p>
                <p className="text-lg font-semibold text-slate-600 text-left">Seller Email: {seller_email}</p>
                <p className="text-lg font-semibold text-slate-600 text-left">Available Quantity: {quantity}</p>
                <p className=" text-lg font-semibold text-slate-600 text-left">Price: <span className="text-purple-800 font-bold text-xl">{price}</span></p>
                <div className="tooltip" data-tip={rating}>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<img src="../img/retingEmpty.jpg" className="icon" />}
                        placeholderSymbol={<img src="../img/rating.png" className="icon" />}
                        fullSymbol={<img src="../img/rating.png" className="icon" />} />
                </div>
            </div>
            <form onSubmit={addedToCart} className="text-lg font-semibold text-slate-600 text-left">
                <input type="submit" className="btn w-full btn-outline btn-primary" value='Add to Cart' />
            </form>
            <div className="btn btn-info btn-outline w-full my-5" onClick={goBack}>
                Go Back
            </div>
        </div>
    );
};

export default ToyDetails;