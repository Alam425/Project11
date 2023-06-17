import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {

    const { price, quantity, seller_name, sub_category, name, img, serial } = toy;

    const saveSerialToLocalStorage = () => {
        sessionStorage.setItem('toy_serial', JSON.stringify(serial))
    }
    
    return (
        <div>
            <div className="card card-compact bg-slate-300 max-h-fit p-2">
                <figure>
                    <img className="w-52 h-52 rounded-xl" src={img} alt={name} />
                    </figure>
                <div className="card-body text-slate-600">
                    <h2 className="card-title">{name}</h2>
                    <p>Seller Name: {seller_name}</p>
                    <p>Category: {sub_category}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/toy/${serial}`}> 
                            <button onClick={saveSerialToLocalStorage} className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;