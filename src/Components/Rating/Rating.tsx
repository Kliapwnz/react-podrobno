import React from 'react';

export const Rating = () => {
    console.log("Rating rendered")
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}



function Star() {
    console.log("Star rendered")
    return (
        <span><b>star</b> </span>
    )
}

