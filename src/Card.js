import React from "react";

function Card({name,email,id}){
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="Robot">
            </img>
            <div>
                <h1>{name}</h1>
                <h3>{email}</h3> 
            </div>
        </div>
    )
}
export default Card;