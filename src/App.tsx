import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

function App() {
    console.log("App rendered")
    return (
        <div>
            <AppTitle/>
            Article1
            <Rating value={2}/>
            <Accordion/>
            Article2
            <Rating value={3}/>
        </div>
    );
}

function AppTitle() {
    return <div>This is APP component</div>
}





export default App;
