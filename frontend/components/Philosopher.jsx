import { useEffect, useState } from "react";

const Philosopher = (prop) => {
    // console.log(prop);
    return (
        <div className="size-24">
        <img src={prop.mamla.photo}></img>
        <div>{prop.mamla.name}</div>
        <div>{prop.mamla.born_date}</div>
        <div>{prop.mamla.death_date}</div>
        <div>{prop.mamla.nationality}</div>
        </div>
    )
}

export default Philosopher;