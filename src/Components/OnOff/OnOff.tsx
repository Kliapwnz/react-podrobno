import React from 'react';

type PropsType = {
    on: boolean
}

export const OnOff = (props: PropsType) => {
   const onStyle ={};
   const offStyle ={};
   const indicatorStyle ={
       width: "30px",
       height: "30px",
       borderRadius: "15px",
       border: "1px solid black"
   };



    return (
        <div>
            <div>1</div>
            <div>2</div>
            <div style={indicatorStyle}>3</div>
        </div>
    );
};

