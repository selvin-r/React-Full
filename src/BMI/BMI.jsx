import React from 'react';
import "./BMI.css";

export function BMI() {
    return (
        <>



            <div className='bmi-calculator'>

                <div className='box'></div>
                <div className='data'>

                    <h1>BMI Calculator</h1>
                    <div className='input=container'>
                        <label htmlFor="Height">Height (cm):</label>
                        <input type="text" name='' id='height' />


                    </div>

                     <div className='input=container'>
                        <label htmlFor="Weight">Weight (kg):</label>
                        <input type="text" name='' id='Weight' />


                    </div>

                    <button>Calculate BMI</button>

                    <div className='result'>
                        <p>Your BMI is: 30</p>
                        <p>status: Over Weight</p>
                    </div>
                </div>

            </div>

        </>
    )
};

