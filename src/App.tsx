import { useState, useEffect } from "react";
// import "./main.scss";
import "./App.css";
// import mainStyles from "./main.scss";
import manifest from './functions/manifest/node/index.js';

import {
  dataStateType,
  userDataType,
  itemArrayType,
  bigDataType,
  characterInfoObjType,
} from "./CustomTypes";

import Characters from "./components/Characters";
import Vault from "./components/Vault";

import fetchAuthToken from "./functions/FetchAuthToken";
import fetchUserData from "./functions/FetchUserData";
import fetchCharacterInfo from "./functions/FetchCharacterInfo";
import initialiseCharacterData from "./functions/InitialiseCharacterData";
import fetchAllCharacterInventories from "./functions/FetchAllCharacterInventories";
import fetchVaultInventory from "./functions/FetchVaultInventory";

function App() {
  const [loginState, setLoginState] = useState(false); // to track if it's logged in, and therefore whether the button is there
  const [data, setData] = useState<bigDataType | undefined>(undefined); // * for the initial load data?, or do I separate it into the individual sections?

  // * UseEffect that logs in the user and then gets their character inventories to set the data object
  useEffect(() => {
    async function getAllData() {
      // ! MANIFEST DOWNLOAD TEST
      // ! ------------------------------------------------------------------------------
      // Test stuff
      manifest.verbose();
(async () => {
  console.log('loading manifest');
  await manifest.load();
  console.log('manifest should be loaded');

  console.log('getting kindled orchid by hash');
  console.log(manifest.get('DestinyInventoryItemDefinition', 2575506895)?.displayProperties);

  console.log('finding Primeval Prime by name');
  console.log(manifest.find('DestinyInventoryItemDefinition', 'Primeval Prime')?.[0]?.displayProperties);
})();
      // ! ------------------------------------------------------------------------------

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
      const characterInfo: characterInfoObjType | undefined =
        await fetchCharacterInfo(userData);
      // console.log("🚀 ~ getAllData ~ fetchCharData ~ characterInfo:", characterInfo)

      // * Initialise the big character data object
      // if characterInfo is there, map over the object and add the appropriate number of char objects
      // return
      // initialisedData object
      // undefined if err
      const initialisedData = await initialiseCharacterData(characterInfo);
      // console.log("🚀 ~ getAllData ~ initialisedData:", initialisedData)

      // * Fetch the vault contents from Bungie
      //  Takes userData, initialises vault, makes API call, parses data
      //  Returns vaultInventory object, with bucket arrays inside
      // const vaultInventory = await fetchVaultInventory(userData, characterInfo);

      // * Fetch all the inventory items from bungie
      //  Make the SQL calls to get the manifest data
      //  Match up all the item data and push them into the initialisedData object
      // return
      // parsedData object
      // undefined if err
      // const parsedData = await fetchAllCharacterInventories(
      //   initialisedData,
      //   userData,
      // );

      // * Run both the vault and character fetches in parallel
      async function fetchAllData(
        userData: userDataType | undefined,
        characterInfo: characterInfoObjType | undefined,
        initialisedData: dataStateType | undefined,
      ) {
        const promises: Promise<any>[] = [
          fetchVaultInventory(userData, characterInfo),
        ];
        promises.push(fetchAllCharacterInventories(initialisedData, userData));

        const [vaultInventory, parsedData] = await Promise.all(promises);
        return [vaultInventory, parsedData];
      }
      const [vaultInventory, parsedData] = await fetchAllData(
        userData,
        characterInfo,
        initialisedData,
      );

      // * Take in the parsed character data and the vault data
      // * combine them in an object and set the state
      // * Set the data state
      async function setDataStateFn(
        dataStateObj: dataStateType | undefined,
        vaultArray: itemArrayType | undefined,
      ) {
        if (!dataStateObj || !vaultArray) {
          return undefined;
        } else {
          document
            .getElementsByClassName("loadingMessage")[0]
            .classList.add("transparent");

          const bigDataObj: bigDataType = {
            vault: vaultArray,
            characters: dataStateObj,
          };

          setData(bigDataObj);
        }
      }
      // * Set the data state to render the data to the page
      setDataStateFn(parsedData, vaultInventory);

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
          <>
            <Characters {...{ data }} />
            <Vault {...{ data }} />
          </>
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
