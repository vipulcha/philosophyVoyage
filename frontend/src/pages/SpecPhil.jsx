import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpecPhil = () => {
    const { id } = useParams();
    const [data,setData] = useState([]);

    const fetchQuotes = async () => {
        const response = await fetch(`http://localhost:5000/philosophers/${id}`);
        const data = await response.json();
        setData(data);
        console.log(data);
    }

    useEffect(() => {
        fetchQuotes();
    },[]);


    return (
        <div className="bg-black text-white h-auto">
            <div className='text-9xl'>{data.name}</div>
            <img src={data.photo}/>
            <div>{data.era}</div>
            {(data.school).map((sch,key)=>{
                return (
                    <div key={key}>
                        {sch}
                    </div>
                )
            })}
        </div>
    );
};

export default SpecPhil;