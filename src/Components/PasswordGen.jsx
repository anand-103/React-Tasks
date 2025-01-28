import React, { useState } from 'react'
import './PasswordGen.css'

const PasswordGen = () => {
    const [length, setLength] = useState(8);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeNumericCase, setIncludeNumericCase] = useState(true);
    const [includeSymbolCase, setIncludeSymbolCase] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        let charset = "";
        if(includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
        if(includeNumericCase) charset += "0123456789";
        if(includeSymbolCase) charset += "!@#$%^&*";
        let generatedPassword = "";
        for(let i=0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
    };

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(password);
        alert("Password Coiped");
    }

  return (
    <div className="password-gen">
        <h1>Strong Password Generator</h1>
        <div className="input-group">
            <label htmlFor="num">Password Length : </label>
            <input type="number" value={length} id="num" 
            onChange={(e)=>{setLength(parseInt(e.target.value))}}/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="upper" checked={includeUpperCase} 
            onChange={(e) => setIncludeUpperCase(e.target.checked)}/>
            <label htmlFor="upper">Include UpperCase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="lower" checked={includeLowerCase} 
            onChange={(e) => setIncludeLowerCase(e.target.checked)}/>
            <label htmlFor="lower">Include LowerCase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="numeric" checked={includeNumericCase} 
            onChange={(e) => setIncludeNumericCase(e.target.checked)}/>
            <label htmlFor="numeric">Include NumericCase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="symbol" checked={includeSymbolCase} 
            onChange={(e) => setIncludeSymbolCase(e.target.checked)}/>
            <label htmlFor="symbol">Include SymbolCase</label>
        </div>
        <div className="generate-password">
            <button onClick={generatePassword}>Generate Password</button>
        </div>
        <div className="generated-password">
            <input type="text" readOnly value={password} />
            <button onClick={copyToClipBoard}>Copy</button>
        </div>
    </div>
  )
}

export default PasswordGen