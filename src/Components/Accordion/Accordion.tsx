import React from 'react';
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type accordionPropsType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: accordionPropsType) => {
    console.log("Accordion rendering")
        return <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed &&  <AccordionBody/>}
        </div>

};


