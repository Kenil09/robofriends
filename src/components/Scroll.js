import React from "react";

const Scroll = (props) => {
    return (
        <div classname="ma2" style={{overflow : 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;