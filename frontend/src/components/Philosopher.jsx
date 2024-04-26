import { useEffect, useState } from "react";

const Philosopher = (prop) => {
    // console.log(prop);
    return (
        <div className="size-5/6 pb-10">
        <img src={prop.mamla.photo} className="h-64 w-60"></img>
        <div className="position-relative">{prop.mamla.name}</div>
        <div>{prop.mamla.nationality}</div>
        <div className="grid grid-cols-2">
        <div>Born</div>
        <div>Died</div>
        <div>{prop.mamla.born_date}</div>
        <div>{prop.mamla.death_date}</div>
        </div>
        </div>
    )
}

export default Philosopher;