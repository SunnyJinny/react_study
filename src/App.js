import './App.css';
import React, { useState } from 'react';
import { HiCursorClick } from "react-icons/hi";


function App() {
    const [ count, setCount ] = useState(0);
    
    const types = [
        {id: 0, value: "+1"},
        {id: 1, value: "click me!"},
        {id: 2, value: <HiCursorClick /> },
    ];
    
    const buttons = () => {
        const result = [] ;
        for (let i =0; i < types.length; i++) {
            result.push(
                <button key={i} onClick={ () => setCount ( count + 1 ) }>
                     {types[i].value}
                </button>);
        }
        return result;
    }

    return (
        <div className="Container">
            <p>{count}</p>
            {buttons()}
        </div>
    );
}


export default App;



            {/* {types.map((values, index) => (
                <button key={index} onClick={ () => setCount ( count + 1 ) }>{types.value}
                </button>
            ))} */}

                /* {types.map((option, index) => (
                    <option key={option.id}>
                    {option.value}</option>
                ))} */
