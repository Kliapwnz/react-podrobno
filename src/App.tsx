import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontolledRating/Rating";

type pageTitlePropsType = {
    title: string
}


function App() {
    console.log("App rendered")
    return (
        <div className={"App"}>
            <OnOff/>
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            <UncontrolledAccordion title={"Menu"} />
            <UncontrolledRating />
            {/*<UncontrolledAccordion title={"Users"} />*/}
            {/*<OnOff on={false} />*/}
            {/*<OnOff on={true} />*/}
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"Manchester City"}/>*/}
            {/*Article1*/}
            {/*<Rating value={2}/>*/}
            {/*<Accordion title={"Menu"} collapsed={true}/>*/}
            {/*<Accordion title={"Users"} collapsed={false}/>*/}
            {/*Article2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

function PageTitle(props: pageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
