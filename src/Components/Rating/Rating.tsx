import React from 'react';

type ratingPropsType = {
    selected: boolean
}


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


function Star(props: ratingPropsType) {
    if (props.selected) {
        return (<span><b>star</b> </span>)
    } else {
        return <span>star </span>
    }


}

