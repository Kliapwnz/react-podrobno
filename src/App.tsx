import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

type pageTitlePropsType={
    title:string
}


function App() {
    console.log("App rendered")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"Manchester City"}/>
            Article1
            <Rating value={2}/>
            <Accordion/>
            Article2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props:pageTitlePropsType) {
    return <h1>{props.title}</h1>
}





export default App;
