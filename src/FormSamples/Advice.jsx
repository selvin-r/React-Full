import React, {useEffect } from 'react'
import "./Advice.css";
import { useState } from 'react';

export function Advice() {

    const [advice, setAdvice] = useState("Please Click Button To Get Advice");
    const [count, setCount] = useState(0);


    async function getAdvice() {

        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }
    // UseEffect  U Change Tha Value User Dynamical The call u

    useEffect(() => {
        getAdvice();
    }, []);


    return (
        <>

            <div>
                <h3>{advice}</h3>

                <button onClick={getAdvice}>Get Advice</button>

                <Counter count={count} />

            </div>
        </>
    );
};


function Counter(props) {

    return (

        <p>

            You Have read <b>{props.count}</b> pieces of advice.
        </p>

    )
};

