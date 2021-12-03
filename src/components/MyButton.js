import React from "react";

const buttons = (props) => {
    const result = [] ;
    var data = props.data;
    for (let i = 0; i < data.length; i++) {
        result.push(
            <button onClick={ () => props.setCount}>
                 {data[i].title}
            </button>);
    }
    return result;
}

function MyButton () {
    return (
        {buttons}
    )
}

export default MyButton;


