import Rating from "react-rating";
import Swal from "sweetalert2";

const AddedToyCard = ({ toy }) => {

    const { name, img, price, rating, sellerName, sellerEmail, category, quantity, _id, description } = toy;

    const deleteT = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    // fetch(`http://localhost:5500/addToy/${_id}`,
                    fetch(`https://assignment1111.vercel.app/addToy/${_id}`,
                        {
                            method: 'DELETE'
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                );
                                window.location.reload(false);
                            }

                        })
                }
            })
    }

    const toyUpdate = () => {
        console.log('object');
    }

    return (
        <div className="m-5">

            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box" onSubmit={toyUpdate}>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <input type="submit" className="btn btn-outline btn-accent" value="Update" />
                    </div>
                </form>
            </dialog>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={img} className="w-52 h-full rounded-3xl p-3" alt="Movie" />
                </figure>
                <div className="card-body pt-2 pb-0">
                    <h2 className="card-title text-3xl font-semibold text-slate-600 text-left">{name}</h2>
                    <p className="text-lg font-semibold text-slate-600 text-left"> Description : {description}  </p>
                    <p className="text-lg font-semibold text-slate-600 text-left"> Seller : {sellerName}  </p>
                    <p className="text-lg font-semibold text-slate-600 text-left"> Seller Email : {sellerEmail}  </p>
                    <p className="text-lg font-semibold text-slate-600 text-left"> Category : {category} </p>
                    <p className="text-lg font-semibold text-slate-600 text-left"> Available Quantity : {quantity} </p>
                    <p className="text-lg font-semibold text-slate-600 text-left">Price: <span className="text-purple-800 font-bold text-xl">$ {price}</span></p>
                    <div className="tooltip text-left" data-tip={rating}>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<img src="../img/retingEmpty.jpg" className="icon" />}
                            placeholderSymbol={<img src="../img/rating.png" className="icon" />}
                            fullSymbol={<img src="../img/rating.png" className="icon" />} />
                    </div>

                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical">
                                <button className="btn btn-primary btn-outline mb-2 text-xl rounded font-semibold" onClick={() => window.my_modal_5}>Update</button>
                            <button onClick={deleteT} className="btn btn-info btn-outline rounded text-3xl">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedToyCard;