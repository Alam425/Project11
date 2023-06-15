import { useContext } from "react";
import ToyCard from "./ToyCard";
import { AuthContext } from "./AuthConte";

const AllToy = () => {

    // const [display, setDisplay] = useState(false);
    const { toys } = useContext(AuthContext);

    // const handleSeeAll = () => {
    //     setDisplay(true);
    // }

    // const toyy = <>
    //     display ? <>
    //         {
    //             toys.map(toy => <ToyCard key={toy.serial} toy={toy}></ToyCard>)
    //         }</>
    //     : <>
    //         <button onClick={handleSeeAll} className="btn w-full btn-ghost btn-outline">Show All</button></>
    // </>

    return (
        <div className="mx-auto w-full py-5">
            <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 grid ">
                {
                    toys.map(toy => <ToyCard key={toy.serial} toy={toy}></ToyCard>)
                }
                {/* <br />
                <div className="min-w-full my-5">
                    {
                        display ?
                            {
                                toys.map(toy => <ToyCard key={toy.serial} toy={toy}></ToyCard>)
                            }
                            :
                            <button onClick={handleSeeAll} className="btn w-full btn-ghost btn-outline">Show All</button>
                    } */}
            </div>
        </div>
        // </div>
    );
};

export default AllToy;