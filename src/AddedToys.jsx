import { useLoaderData } from "react-router-dom";
import AddedToyCard from "./AddedToyCard";

const AddedToys = () => {

    const addedToys = useLoaderData();

    return (
        <div>
            {
                addedToys.map(toy => <AddedToyCard key={toy._id} toy={toy} ></AddedToyCard>)
            }

            {/* Open the modal using ID.showModal() method */}
            <button className="btn" onClick={() => window.my_modal_5.showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default AddedToys;