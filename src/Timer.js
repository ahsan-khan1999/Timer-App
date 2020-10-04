import React, { useState, useRef } from 'react'

export default function Timer() {
    const [time, setTime] = useState(0);
    let [isOn, setIsOn] = useState(false);
    let [interva, setInterva] = useState();
    let intervalId = useRef();
    const startTime = () => {
        // run();
        setIsOn(true);
        const now = Date.now();
        setInterva(setInterval(() => {
            return setTime((Date.now() - now) / 1000)
        }, 1000));

    }
    const stopTime = () => {

    }
    const resetTime = () => {
        clearInterval(interva);
        setTime(0)
        
        console.log(time,interva);
    }
    var updatedS = time.s, updatedM = time.m, updatedH = time.h;
    // const run = () => {
    //     return setTime();
    // }
    return (
        <div>
            <h1>Timer App : </h1>
            <div style={{ height: 400, width: 800, marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'grey' }}>
                <br />
                <h3 >Timer : {time}</h3>

                <div>
                    <button onClick={startTime} style={{ border: '3px solid purple', marginTop: 20, marginRight: 100, height: 50, width: 80, fontSize: 22, backgroundColor: 'pink' }}>Start</button>
                    <button style={{ border: '3px solid purple', height: 50, width: 80, fontSize: 22, backgroundColor: 'pink' }}>Stop</button>
                    <button onClick={resetTime} style={{ border: '3px solid purple', height: 50, width: 80, fontSize: 22, backgroundColor: 'pink' }}>Reset</button>
                </div>
            </div>

        </div>
    )
}
