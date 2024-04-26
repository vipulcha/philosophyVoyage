import Philosopher from "../components/Philosopher";
import { useEffect, useState } from "react";

const HomeCard = () => {

    const [phil, setPhil] = useState([]);
    const extractPhil = async () => {
        const response = await fetch('http://localhost:5000/philosophers');
        const data = await response.json();
        setPhil(data.results);
        console.log(data);
    }

    
    useEffect(()=>{
        extractPhil();
    },[]);

    return(
        <div className="bg-black text-white h-auto flex flex-col">
            <div className="text-center text-9xl pb-20"> PHILOSOPHY VOYAGE </div>
            <div className="text-center text-3xl pb-2">Dive Into The Wisdom Of Some Of The Greatest Philosophers Ever</div>
            <div className="text-center italic text-1xl pl-2 pr-2 pb-12">Quite literally, the term "philosophy" means, "love of wisdom." In a broad sense, philosophy is an activity people undertake when they seek to understand fundamental truths about themselves, the world in which they live, and their relationships to the world and to each other.</div>
            <div className="grid grid-cols-4 pl-40">
            {phil.map((ph,key) => {
                return (
                    <div key={key} >
                    <Philosopher mamla={ph} />
                    </div>
                )
            })}
            </div>
        </div>
    )
};

export default HomeCard;