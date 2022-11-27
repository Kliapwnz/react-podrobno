import React from 'react';

type accordionTitlePropsType = {
    title: string
}

export const AccordionTitle = (props: accordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <h3>---{props.title}---</h3>
    );
};

