import { useState } from "react"


const Advice = () => {
    const [advice, setAdvice] =  useState("Click butten to get advice");
    const [count, setCount] = useState(0);

    async function handle() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=>c+1);
    }
  return (
    <div style={{backgroundColor:"#fc427b", height:"97vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{textAlign:"center"}}>
        <h1 style={{color:"white"}}>{advice}</h1>
        <button style={{border:"none", backgroundColor:"#182c61", color:"white",padding:"10px",borderRadius:"10px", cursor:"pointer"}} onClick={handle}>Get advice</button>
        <p style={{color:"white", fontSize:"1.5rem"}}>You have read <b style={{color:"#2c3a47"}}>{count}</b> pieces of advice</p>
        </div>
    </div>
  )
}

export default Advice
