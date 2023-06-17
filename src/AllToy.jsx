import { useContext, useState } from "react";
import ToyCard from "./ToyCard";
import { AuthContext } from "./AuthConte";
import Swal from "sweetalert2";

const AllToy = () => {

    const [toy, setToy] = useState([]);
    const [display, setDisplay] = useState(false);
    const [disp, setDisp] = useState(true);

    const { toys } = useContext(AuthContext);
    const slicedToys = toys.slice(0, 20);

    const handleSeeAll = () => {
        setDisplay(true);
    }

    const searchToy = (e) => {
        e.preventDefault();
        setDisp(false);
        const searchedText = e.target.search.value.toLowerCase();
        const drr = toys.filter(ttoy => ttoy.name.toLowerCase().includes(searchedText));
        setToy(drr);
        e.target.reset();
        if(drr.length < 1){
            setDisp(true);
            Swal.fire("None Matched Your Search!!");
            return;
        }
    }

    const toyy = <>
        {display ? <>
            {
                toys.map(toy => <ToyCard key={toy.serial} toy={toy}></ToyCard>)
            }</>
            : <>
                {
                    slicedToys.map(toy => <ToyCard key={toy.serial} toy={toy}></ToyCard>)
                }
                <button onClick={handleSeeAll} className="btn w-full btn-info btn-outline">Show All</button></>}
    </>

    return (
        <div className="mx-auto w-full py-5">
            <form onSubmit={searchToy} className="mx-auto mb-5 flex gap-2">
                <input type="search" name="search" className="px-5 py-3 w-full rounded-lg" placeholder="Search A Toy" id="" /><br />
                <input type="submit" value="Search" className="btn btn-outline btn-info" />
            </form >
            <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 grid">
                {
                    disp && toyy
                }
                {
                        toy.map(toy => <ToyCard toy={toy} key={toy.serial}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToy;