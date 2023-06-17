import { useContext } from "react";
import { AuthContext } from "./AuthConte";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Update = () => {

    const navigate = useNavigate();
    const { update } = useContext(AuthContext);
    const { name, img, price, rating, sellerName, sellerEmail, category, quantity, _id,description } = update;

    const updateTheToy = e =>{
    e.preventDefault();
    const form = e.target;
    const ame = form.name.value;
    const mg = form.img.value;
    const ating = form.rating.value;
    const rice = form.price.value;
    const uantity = form.quantity.value;
    const escription = form.description.value;
    const ategory = form.category.value;
    const ellerName = form.sellerName.value;
    const ellerEmail = form.sellerEmail.value;
    const updatedToy = {ame, mg, ating, rice, uantity, escription, ategory, ellerName, ellerEmail}

    fetch(`https://assignment1111.vercel.app/addToy/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
    })
        .then(res => res.json())
        .then(data => { 
            console.log(data); 
            if(data.modifiedCount > 0){
                navigate('/addedToy', {replace : true });
                Swal.fire({
                    title: 'Success!',
                    text: `Successfully updated ${name}`,
                    icon: 'success',
                    confirmButtonText: 'Sweet..!!!!'
                  });
            }
        })
    }

    return (
        <div className="text-center sm:flex flex-row gap-2 justify-center m-5 items-center">
            <h3 className="text-4xl m-3 font-semibold text-slate-600">Update Toy Here</h3>
            <form onSubmit={updateTheToy} className="w-96">
                <input defaultValue={name} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Toy Name" type="text" name="name" id="" /><br />
                <input defaultValue={img} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Toy Image" type="text" name="img" id="" /><br />
                <input defaultValue={price} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Price" type="number" name="price" id="" /><br />
                <input defaultValue={quantity} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Available Quantity" type="number" name="quantity" id="" /><br />
                <input defaultValue={description} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Toy Description" type="text" name="description" id="" /><br />
                <input defaultValue={rating} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Rate The Toy" type="number" name="rating" id="" /><br />
                <input defaultValue={category} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Category" type="text" name="category" id="" /><br />
                <input defaultValue={sellerName} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Seller Name" type="text" name="sellerName" id="" /><br />
                <input defaultValue={sellerEmail} className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Seller Email Address" type="email" name="sellerEmail" id="" /><br />
                <input type="submit" value="Update Now" className="btn btn-outline btn-info w-full" />
            </form >
        </div>
    );
};

export default Update;