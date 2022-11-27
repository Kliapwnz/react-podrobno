import React from 'react';

type starPropsType = {
    selected: boolean

}
type ratingPropsType = {

}

export const UncontrolledRating = (props: ratingPropsType) => {
    console.log("Rating rendered")


    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

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

