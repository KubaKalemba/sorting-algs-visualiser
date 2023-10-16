import React from 'react';
import {useState} from "react";
import './Chart.css'
import Bar from "../Bar/Bar.jsx";

const Chart = (props) => {

    let width = (window.innerWidth*.4) / props.values.length

    let key=0

    const bars = props.values.map(val => {
        return <Bar height={val*7.5 + "px"} width={width+"px"} key={key++}/>
    })

    const handleSlider = (e) => {
        props.setSpeed(e.target.value)
    }

    return (
        <div className={"chart-container"}>
            <div className="title-container">
                <div className="title">
                    SORTING ALGORITHMS VISUALISER
                </div>
            <div className="speed-input">
                SPEED
                <input
                    className="slider"
                    type="range"
                    min="10"
                    max={props.maxSpeed}
                    value={props.speed}
                    onChange={handleSlider}
                />
            </div>
            </div>
            <div className={"chart"}>
                {bars}
            </div>
            <div className="button-container">
                <button onClick={props.selection}>
                    SELECTION
                </button>
                <button onClick={props.bubble}>
                    BUBBLE
                </button>
                <button onClick={() => {props.merge(props.values, 0, props.values.length-1)}}>
                    MERGE
                </button>
                <button onClick={() => {props.quick(props.values, 0, props.values.length-1)}}>
                    QUICK
                </button>
                <button onClick={props.shuffle}>
                    SHUFFLE
                </button>
                <button>
                    LightMode
                </button>
            </div>

        </div>
    );
};

export default Chart;