import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";

function App() {
    console.log("App rendered")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return <>This is APP component</>
}

function Rating() {
    console.log("Rating rendered")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}



function Star() {
    console.log("Star rendered")
    return (
        <span>star </span>
    )
}




export default App;
