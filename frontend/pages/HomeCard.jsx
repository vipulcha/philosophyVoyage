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
        <div>
            <div className='bg-indigo-500'> PHILOSOPHY VOYAGE </div>
            <div>Dive Into The Wisdom Of Some Of The Greatest Philosophers Ever</div>
            <div>Quite literally, the term "philosophy" means, "love of wisdom." In a broad sense, philosophy is an activity people undertake when they seek to understand fundamental truths about themselves, the world in which they live, and their relationships to the world and to each other.</div>
            {phil.map((ph,key) => {
                return (
                    <div key={key} >
                    <Philosopher mamla={ph} />
                    </div>
                )
            })}
        </div>
    )
};

export default HomeCard;