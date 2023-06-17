import Rating from "react-rating";
import Swal from "sweetalert2";

const MyToyCard = ({ toy }) => {

    const { name, img, price, rating, seller_name, seller_email, sub_category, _id } = toy;

    const deleteToy = () => {

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
                    // fetch(`https://localhost:5500/toy/${_id}`,
                    fetch(`https://assignment1111.vercel.app/toy/${_id}`,
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
                                )
                                window.location.reload(false);
                            }
                            
                        })
                }
            })


    }

    return (
        <div className="m-5">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={img} className="w-52 h-full rounded-3xl p-3" alt="Movie" />
                </figure>
                <div className="card-body pt-2 pb-0">
                    <h2 className="card-title text-3xl font-semibold text-slate-600 text-left">{name}</h2>
                    <p className="text-lg font-semibold text-slate-600 text-left"> Seller : {seller_name > seller_email}  </p>
                    <p className="text-lg font-semibold text-slate-600 text-left"> Category : {sub_category} </p>
                <p className="text-lg font-semibold text-slate-600 text-left">Price: <span className="text-purple-800 font-bold text-xl">{price}</span></p>
                    <div className="tooltip text-left" data-tip={rating}>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<img src="../img/retingEmpty.jpg" className="icon" />}
                            placeholderSymbol={<img src="../img/rating.png" className="icon" />}
                            fullSymbol={<img src="../img/rating.png" className="icon" />} />
                    </div>
                    <div className="card-actions p-0 justify-end">
                        <button onClick={deleteToy} className="btn text-3xl">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToyCard;