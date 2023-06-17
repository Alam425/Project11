import { useLoaderData } from "react-router-dom";
import AddedToyCard from "./AddedToyCard";

const AddedToys = () => {

    const addedToys = useLoaderData();

    return (
        <div>
            {
                addedToys.map(toy => <AddedToyCard key={toy._id} toy={toy} ></AddedToyCard>)
            }
        </div>
    );
};

export default AddedToys;