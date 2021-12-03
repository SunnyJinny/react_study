import './App.css';
import React, { useState } from 'react';
import { HiCursorClick } from "react-icons/hi";
import MyButton from './components/MyButton';


function App() {

    const types = [
        {id: 0, title: "+1"},
        {id: 1, title: "click me!"},
        {id: 2, title: <HiCursorClick /> },
    ];
    const [ count, setCount ] = useState(types[0]);

    return (
        <div className="Container">
            <p>{count}</p>
            <MyButton data={types} setCount={setCount ( count + 1 )} />
        </div>
    );
}


export default App;
