import React from 'react';
import "./Bar.css"

const Bar = (props) => {

    return (
        <div className={"bar"} style={
            {
                height: props.height,
                width: props.width
            }
        }>

        </div>
    );
};

export default Bar;