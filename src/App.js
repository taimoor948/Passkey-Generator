// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { LC, SC, UC ,NC } from "./data/passChar";

function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [numbers,setNumbers]=useState(false)
  let [symbols,setSymbols]=useState(false)
  let [passwordLen,setPasswordLen]=useState(10)
  let [fpass,setPass]=useState("")

  let createPassword=()=>{
    let finalPass=""
    let charSet=""
    if (uppercase || lowercase || numbers || symbols) {
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(numbers) charSet+= NC;
      if(symbols) charSet+=SC;
      for(let i=0;i<passwordLen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))

      }
      setPass(finalPass)

    }
    else{
      alert("Please check one box..")
    }
    

  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)

  }

  return (
    <>
      <div className="passwordBox">
        <h2>PassKey Generator</h2>

        <div className="passwordBoxin">
          <input type="text" value={fpass} readOnly /> <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passLength">
          <label>Password length :</label>
          <input type="number" max={20} min={10} value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)}/>
        </div>
        <div className="passLength">
          <label>Include Uppercase Letters</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>
        <div className="passLength">
          <label>Include Lowercase Letters</label>
          <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>
        <div className="passLength">
          <label>Include Numbers</label>
          <input type="checkbox" checked={numbers} onChange={()=>setNumbers(!numbers)} />
        </div>
        <div className="passLength">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)} />
        </div>
        <button className="btn" onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
