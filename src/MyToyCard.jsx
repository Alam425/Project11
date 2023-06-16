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
                    fetch(`https://assignment1111.vercel.app/toy/${_id}`, {
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
                            }
                        })
                }
            })


    }

    return (
        <div className="m-5">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={img} className="w-40 h-40 rounded-3xl p-3" alt="Movie" />
                </figure>
                <div className="card-body pt-2 pb-0">
                    <h2 className="card-title">{name}</h2>
                    <p> Seller : {seller_name > seller_email || "N/A"}  </p>
                    <p> Category : {sub_category} </p>
                    <p> Price : {price} </p>
                    <p> Rating : {rating} </p>
                    <div className="card-actions p-0 justify-end">
                        <button onClick={deleteToy} className="btn text-3xl">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToyCard;