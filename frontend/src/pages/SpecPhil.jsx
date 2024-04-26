import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpecPhil = () => {
    const { id } = useParams();
    const [data,setData] = useState([]);

    const fetchQuotes = async () => {
        const response = await fetch(`http://localhost:5000/philosophers/${id}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        fetchQuotes();
    },[]);


    return (
        <div className='bg-black'>
            
        </div>
    );
};

export default SpecPhil;