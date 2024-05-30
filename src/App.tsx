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
// const apiKey = `${import.meta.env.VITE_BUNGIE_API_KEY}`;

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
// xhr.setRequestHeader("X-API-Key", apiKey);

// xhr.onreadystatechange = function(){
  //  if(this.readyState === 4 && this.status === 200){
    //   const json = JSON.parse(this.responseText);
    //   console.log("🚀 ~ json:", json)
    //   console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
    //  }
    // }
    
    // xhr.send();
    
    
    
    // on load
    // look at url
    // console.log(document.location.search)
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    console.log("🚀 ~ code:", code)
    const apiKey = `${import.meta.env.VITE_BUNGIE_API_KEY}`;
    
    if(code) {
      // Get Authorization Token from Bungie
      // const data = "client_id=46895&grant_type=authorization_code&code=801bbc8ae8c653d52c319d7ef13bc397";
      const data = `client_id=${import.meta.env.VITE_OAUTH_CLIENT_ID}&grant_type=authorization_code&code=${code}`;
      
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log("Token Response", this.responseText);
          // ! Add local storage of response variables
          // {
          //   "access_token": "CIWXBhKGAgAg0a4TvtBtRJ6iloLCXZ0YwN4Aqzh0kYl7Kd9mwjlEwhDgAAAA+2BJeB7j7DeU91Quvw1skyCHSQcycEpb+o30wZSzHGcU4MpnD+w5X0c125qyH7Sevru1KkgkBmYr0PRWcBgj7XYbqeL5aYdUc1ylLUPRsahjFPG9T63heFOS/S6WCqOKv/MSHGdoYpiEvJPxjAdWfWyGITSTxk1J9Q4bAEIAipqYtHWecmWmAnuP6wKVtFkKe7v2V+PwjZZM2kx/3c9ckwS/GMOZoOk9eDtOdQKi8JufxXtNW24mgZ5FUclqjGT1OlJRELYeWZxuvHzhL3ZL/E4O2CDcvx0vVuOKfbJvfyM=",
          //   "token_type": "Bearer",
          //   "expires_in": 3600,
          //   "membership_id": "14924801"
          // }
          // ! Add timer to note that this will expire after 3600secs aka 1hr

        }
      });
  
  xhr.open("POST", "https://www.bungie.net/Platform/App/OAuth/Token/");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xhr.setRequestHeader("client_id", "46895");
  xhr.setRequestHeader("X-API-Key", apiKey);
  
  xhr.send(data);
  
}





// if(window.location.pathname) {
//   // console.log("🚀 ~ authCodeText:", authCodeText)
//   const authCodeText = window.location.pathname
//   const urlAuthCode = authCodeText.slice(6)
//   // console.log("🚀 ~ urlAuthCode:", urlAuthCode)
//   localStorage.setItem("localauthCode", JSON.stringify(urlAuthCode));
// }
// // save the number to local storage
// const localCode = JSON.parse(localStorage.getItem("localauthCode")!);
// // console.log("🚀 ~ localCode:", localCode)
// // use that number with each request




