import React from 'react';
import {useState} from "react";
import './Chart.css'
import Bar from "../Bar/Bar.jsx";

const Chart = (props) => {

    let width = (window.innerWidth*.4) / props.values.length

    let key=0

    const bars = props.values.map(val => {
        return <Bar height={val*10 + "px"} width={width+"px"} key={key++}/>
    })

    return (
        <div className={"chart-container"}>
            <div className={"chart"}>
                {bars}
            </div>
            <div className="button-container">
                <button onClick={props.selection}>
                    selection
                </button>
                <button onClick={props.bubble}>
                    bubble
                </button>
                <button onClick={() => {props.merge(props.values, 0, props.values.length-1)}}>
                    merge
                </button>
                <button onClick={props.quick}>
                    quick
                </button>
            </div>

        </div>
    );
};

export default Chart;