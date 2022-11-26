import React from 'react';
import './App.css';

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

function Accordion() {
    console.log("Accordion rendered")
    return (
        <div>
           <AccordionTitle/>
           <AccordionBody/>
        </div>
    )
}

function Star() {
    console.log("Star rendered")
    return (
        <div>star</div>
    )
}

function AccordionTitle() {
    return(
        <h3>Menu</h3>
    )
}
function AccordionBody() {
    return (<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}


export default App;
