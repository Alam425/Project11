import { useLoaderData } from "react-router-dom";
import MyToyCard from "./MyToyCard";

const MyToy = () => {
    
    const toys = useLoaderData();
   
    return (
        <div>
            {
                toys.map(toy => 
                    <MyToyCard key={toy._id} toy={toy}></MyToyCard>
                )
            }
        </div>
    );
};

export default MyToy;