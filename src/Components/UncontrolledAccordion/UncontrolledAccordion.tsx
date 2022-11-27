import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type accordionPropsType = {
    title: string

}

export const UncontrolledAccordion = (props: accordionPropsType) => {
    console.log("Accordion rendering")
    let [control, setControl] =useState( false)

    return <div>
            <AccordionTitle title={props.title}/>
        <button onClick={()=> {setControl(!control)}}>TOGGLE</button>
            {control &&  <AccordionBody/>}
        </div>

};


