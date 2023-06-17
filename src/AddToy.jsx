import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddToy = () => {

    const navigate = useNavigate();

    const addTheToy = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const toy = { name, img, price, quantity, description, rating, category, sellerName, sellerEmail };
        console.log(toy);
        fetch('https://assignment1111.vercel.app/addToy', {
            method: "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire('Toy Addition Successful')
            }
        })
        form.reset();
        navigate('/addedToy', {replace : true});
    }

    return (
        <div className="text-center sm:flex flex-row gap-2 justify-center m-5 items-center">
            <h3 className="text-4xl m-3 font-semibold text-slate-600">Add A Toy Here</h3>
            <form onSubmit={addTheToy} className="w-96">
                <input required className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Toy Name" type="text" name="name" id="" /><br />
                <input required className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Toy Image" type="text" name="img" id="" /><br />
                <input required className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Price" type="number" name="price" id="" /><br />
                <input  className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Available Quantity" type="number" name="quantity" id="" /><br />
                <input  className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Toy Description" type="text" name="description" id="" /><br />
                <input  className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Rate The Toy" type="number" name="rating" id="" /><br />
                <input required className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Category" type="text" name="category" id="" /><br />
                <input required className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Seller Name" type="text" name="sellerName" id="" /><br />
                <input required className="p-2 w-full rounded px-5 m-2 text-slate-500" placeholder="Seller Email Address" type="email" name="sellerEmail" id="" /><br />
                <input type="submit" value="Add" className="btn btn-outline btn-info w-full" />
            </form >            
        </div>
    );
};

export default AddToy;