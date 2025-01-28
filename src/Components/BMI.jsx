import React, { useState } from 'react'
import './BMI.css';

const BMI = () => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const calculateBmi = () => {
        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);
        if(isValidHeight && isValidWeight){
            const heightInMeter = height / 100;
            const bmiValue = weight / (heightInMeter * heightInMeter);
            setBmi(bmiValue.toFixed(2));
            if(bmiValue < 18.5){
                setStatus("UnderWeight");
            }else if(bmiValue >= 18.5 && bmiValue < 24.9){
                setStatus("Normal weight");
            }else if(bmiValue >= 24.5 && bmiValue < 29.9){
                setStatus("Over Weight");
            }
            else{
                setStatus("Obese")
            }
            setErrorMsg("")
        }else{
            setBmi(null);
            setStatus("");
            setErrorMsg("Please enter valid numeric values for height and weight.")
        }
    }

    const clearAll = ()=> {
        setHeight("");
        setWeight("");
        setStatus("");
        setBmi(null);
        setErrorMsg("")
    }
  return (
    <>
    <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
            <h1>BMI Calculator</h1>
            <p className='error'>{errorMsg}</p>
            <div className="input-container">
                <label htmlFor="height">Height (cm)</label>
                <input type="text" id='height' value={height} 
                onChange={(e)=>{setHeight(e.target.value)}} />
            </div>
            <div className="input-container">
                <label htmlFor="weight">Weight (kg)</label>
                <input type="text" id='weight' value={weight} 
                onChange={(e)=>{setWeight(e.target.value)}} />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearAll}>Clear</button>
            {bmi !== null && <div className="result">
                <p>Your BMI is : {bmi}</p>
                <p>Status : {status}</p>
            </div>}
        </div>
    </div>
    </>
  )
}

export default BMI
