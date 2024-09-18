import { useState, useEffect } from "react";
// import "./main.scss";
import "./App.css";
// import mainStyles from "./main.scss";

import { dataStateType, userDataType } from "./CustomTypes";

import Characters from "./components/Characters";

import fetchAuthToken from "./functions/FetchAuthToken";
import fetchUserData from "./functions/FetchUserData";
import fetchCharacterInfo from "./functions/FetchCharacterInfo";
import initialiseCharacterData from "./functions/InitialiseCharacterData";
import fetchAllCharacterInventories from "./functions/FetchAllCharacterInventories";

function App() {
  const [loginState, setLoginState] = useState(false); // to track if it's logged in, and therefore whether the button is there
  const [data, setData] = useState<dataStateType | undefined>(undefined); // * for the initial load data?, or do I separate it into the individual sections?

  // * UseEffect that logs in the user and then gets their character inventories to set the data object
  useEffect(() => {
    async function getAllData() {
      // ! Get new buckets obj in the browser console
      // const db = new Database(`${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`);

      // let query = `USE DATABASE Manifest.sqlite;
      // SELECT * FROM DestinyInventoryBucketDefinition;`;

      // try {
      //   const queryResult = await db.sql(query);
      //   console.log("🚀 ~ buckets:", queryResult)
      // } catch (error) {
      //   console.log("🚀 ~ getItemData ~ error:", error);
      // }

      // * Fetch auth token
      // if params are in the url, fetch the auth token and set it in local storage
      // return
      // true if token fetched
      // false if err
      const authConfirm = await fetchAuthToken();
      // console.log("🚀 ~ getAllData ~ fetchAuthToken ~ authConfirm:", authConfirm)

      // * Set the login state
      async function setLoginStateFn(
        userDataObj: userDataType | boolean | undefined,
      ) {
        if (userDataObj !== false && userDataObj !== undefined) {
          setLoginState(true);
        }
      }
      // * Set the login state to swap the button for placeholders
      setLoginStateFn(authConfirm);

      // * Fetch user data (membershipType and membershipId)
      // if authConfirm is true, fetch user data and return it
      // return
      // object with membershipType and membershipId
      // undefined if err
      const userData = await fetchUserData(authConfirm);
      // console.log("🚀 ~ getAllData ~ fetchUserData ~ userData:", userData)

      // * Set the login state to update the placeholders with user data
      setLoginStateFn(userData);

      // * Fetch character info
      const characterInfo = await fetchCharacterInfo(userData);
      // console.log("🚀 ~ getAllData ~ fetchCharData ~ characterInfo:", characterInfo)

      // * Initialise the big character data object
      // if characterInfo is there, map over the object and add the appropriate number of char objects
      // return
      // initialisedData object
      // undefined if err
      const initialisedData = await initialiseCharacterData(characterInfo);
      // console.log("🚀 ~ getAllData ~ initialisedData:", initialisedData)

      // * Fetch all the inventory items from bungie
      // * Make the SQL calls to get the manifest data
      // * Match up all the item data and push them into the initialisedData object
      // return
      // parsedData object
      // undefined if err
      const parsedData = await fetchAllCharacterInventories(
        initialisedData,
        userData,
      );
      // console.log("🚀 ~ getAllData ~ parsedData:", parsedData)

      // * Set the data state
      async function setDataStateFn(dataStateObj: dataStateType | undefined) {
        if (!dataStateObj) {
          return undefined;
        } else {
          document
            .getElementsByClassName("loadingMessage")[0]
            .classList.add("transparent");
          setData(dataStateObj);
        }
      }
      // * Set the data state to render the data to the page
      setDataStateFn(parsedData);

      setTimeout(
        () => {
          window.location.href = `${import.meta.env.VITE_AUTHORISATION_URL}`;
        },
        1000 * 60 * 60,
      );
    }
    getAllData();
  }, []);

  return (
    <>
      <div className="header">
        <div className="logoname five">DiVA</div>
        {loginState ? (
          <div className="user">
            <img src="https://" className="userIcon" alt="bungie user icon" />
            <div className="username">Username Placeholder</div>
          </div>
        ) : (
          <a href={import.meta.env.VITE_AUTHORISATION_URL}>
            <button className="loginBtn">Login</button>
          </a>
        )}
      </div>

      <div className="characters">
        <p className="loadingMessage">
          Please log in with the button at the top right.
        </p>
        {data ? (
          <Characters {...{ data }} />
        ) : (
          <p className="placeholder">Awaiting character data</p>
        )}
      </div>

      {/* <div className="debug">
        <div className="content">
          Character items here. Also inventory below.
        </div>
        <p className="accessToken">
          Access Token (Copy and put into localhost for url param):
        </p>
        <p className="characterIds">Character IDs:</p>
      </div> */}
    </>
  );
}

export default App;
