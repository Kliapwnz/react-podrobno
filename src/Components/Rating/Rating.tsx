import React from 'react';

type starPropsType = {
    selected: boolean

}
type ratingPropsType ={
    value:number
}

export const Rating = (props:ratingPropsType) => {
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


function Star(props: starPropsType) {
    if (props.selected) {
        return (<span><b>star</b> </span>)
    } else {
        return <span>star </span>
    }


}

