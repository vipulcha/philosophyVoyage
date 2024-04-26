import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpecPhil = () => {
    const { id } = useParams();
    const [data,setData] = useState(null);

    const fetchQuotes = async () => {
        const response = await fetch(`http://localhost:5000/philosophers/${id}`);
        const dataa = await response.json();
        setData(dataa);
        console.log(dataa);
    }

    useEffect(() => {
        fetchQuotes();
    },[]);

    
    if(data === null){
        return <div>Loading...</div>;
    }

    return (
       
        <div className="bg-black text-white h-auto flex flex-col text-center">
            <div className='text-5xl pb-10'>{data.name}</div>
            <div className='flex justify-center'>
            <img src={data.photo} className='h-64 w-60 '/>
            </div>
            <div className='flex flex-row text-center justify-center'>
            <div>ERA</div>
            <div>{data.era}</div>
            </div>
            <div>SCHOOLS</div>
            {(data.school).map((sch,key)=>{
                return (
                    <div key={key}>
                        {sch}
                    </div>
                )
            })}
            <div>IDEAS</div>
            {(data.ideas).map((sch,key)=>{
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