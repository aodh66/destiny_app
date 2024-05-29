// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./main.scss";
import './App.css'
// import mainStyles from "./main.scss";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='header'>
      
  <div className='logoname five'>
        {/* <p className='three'>Di<span className='threel'>VA</span></p> */}
        {/* <p className='five'>DiVA</p> */}
        {/* <p className='six'>Di<span className='sixl'>VA</span></p> */}
        DiVA
  </div>

  <a href={import.meta.env.VITE_AUTHORISATION_URL}>
    <button className='loginBtn'>Login</button>
    {/* Login */}
    </a>
    {/* <button className='loginBtn'>Login</button> */}
  
    </div>

    <div className='content'>
      Character items here. Also inventory below.
    </div>
    <p>need to add a redirect url and origin header on bungie app config</p>
    {/* <button>Authorise</button> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

// ! test Bungie API call
const apiKey = `${import.meta.env.VITE_BUNGIE_API_KEY}`;

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  const json = JSON.parse(this.responseText);
  console.log("🚀 ~ json:", json)
  console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
 }
}

xhr.send();

// on load
// look at url
// console.log(window.location.pathname)
if(window.location.pathname) {
  // console.log("🚀 ~ authCodeText:", authCodeText)
  const authCodeText = window.location.pathname
  const urlAuthCode = authCodeText.slice(6)
  console.log("🚀 ~ urlAuthCode:", urlAuthCode)
  localStorage.setItem("localauthCode", JSON.stringify(urlAuthCode));
}
// save the number to local storage
const localCode = JSON.parse(localStorage.getItem("localauthCode")!);
console.log("🚀 ~ localCode:", localCode)
// use that number with each request