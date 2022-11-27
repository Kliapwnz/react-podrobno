import React, {useState} from 'react';

type PropsType = {
    // on: boolean
}


export const OnOff = (props: PropsType) => {
    let on = false

    useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "greenYellow" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "greenYellow" : "red"
    };


    return (
        <div>
            <div style={onStyle} onClick={() => {
                on = true
            }}>on
            </div>
            <div style={offStyle} onClick={() => {
                on = false
            }}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

