import { useState, useEffect } from "react";
// import "./main.scss";
import "./App.css";
// import mainStyles from "./main.scss";

import { Database } from "@sqlitecloud/drivers";

import {
  itemObjType,
  itemArrayType,
  characterObjType,
  dataStateType,
  userDataType,
  characterInfoObjType,
  hashArr,
  SQLResponseArr,
  SQLResponseItem,
  hashObj,
  singleCharacterType,
} from "./CustomTypes";

import Characters from "./components/Characters";

import fetchAuthToken from "./functions/FetchAuthToken";
import fetchUserData from "./functions/FetchUserData";
import fetchCharacterInfo from "./functions/FetchCharacterInfo";
import initialiseCharacterData from "./functions/InitialiseCharacterData";
import fetchAllCharInv from "./functions/FetchAllCharInv";
import fetchCharacterInventory from "./functions/FetchCharacterInventory";
import fetchAllCharacterInventories from "./functions/FetchAllCharacterInventories";

function App() {
  const [loginState, setLoginState] = useState(false); // to track if it's logged in, and therefore whether the button is there
  const [data, setData] = useState<dataStateType | undefined>(undefined); // * for the initial load data?, or do I separate it into the individual sections?

  // const hashDict = {
  //   DestinyActivityDefinition: "activityHash",
  //   DestinyActivityTypeDefinition: "activityTypeHash",
  //   DestinyClassDefinition: "classHash",
  //   DestinyGenderDefinition: "genderHash",
  //   DestinyInventoryBucketDefinition: "bucketHash",
  //   DestinyInventoryItemDefinition: "itemHash",
  //   DestinyProgressionDefinition: "progressionHash",
  //   DestinyRaceDefinition: "raceHash",
  //   DestinyTalentGridDefinition: "gridHash",
  //   DestinyUnlockFlagDefinition: "flagHash",
  //   DestinyHistoricalStatsDefinition: "statId",
  //   DestinyDirectorBookDefinition: "bookHash",
  //   DestinyStatDefinition: "statHash",
  //   DestinySandboxPerkDefinition: "perkHash",
  //   DestinyDestinationDefinition: "destinationHash",
  //   DestinyPlaceDefinition: "placeHash",
  //   DestinyActivityBundleDefinition: "bundleHash",
  //   DestinyStatGroupDefinition: "statGroupHash",
  //   DestinySpecialEventDefinition: "eventHash",
  //   DestinyFactionDefinition: "factionHash",
  //   DestinyVendorCategoryDefinition: "categoryHash",
  //   DestinyEnemyRaceDefinition: "raceHash",
  //   DestinyScriptedSkullDefinition: "skullHash",
  //   DestinyGrimoireCardDefinition: "cardId",
  // };

  // dataStateType;
  // hashDict;
  // setData(null)
  // authToken;
  // data;

  // * UseEffect that logs in the user and then gets their character inventories to set the data object
  useEffect(() => {
    async function getAllData() {
      // * Fetch auth token
        // if params are in the url, fetch the auth token and set it in local storage
        // return 
          // true if token fetched
          // false if err
      const authConfirm = await fetchAuthToken();
      // console.log("🚀 ~ getAllData ~ fetchAuthToken ~ authConfirm:", authConfirm)
      
      // * Set the login state
      async function setLoginStateFn(userDataObj: userDataType | boolean | undefined) {
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
        // console.log("🚀 ~ getAllData ~ initialiseCharData ~ initialisedData:", initialisedData)
      
      // have 3 separate fetches and parses
      // So have if statement chain
      // Check characterInfo.characterIds array length, and call based on that
        // If >=1 then first char, 2 then second etc
      // Each function can be a black box for fetching and parsing
      // Would return them in charInventory 1, 2 and 3
      // let characterInventory1 : characterObjType | undefined;
      // // const numOfChars = characterInfo.characterIds.length;
      // if (characterInfo.characterIds.length === 0 || characterInfo.characterIds.length === undefined) {
        
      // }
      // fetchCharacterInventory();
      
      const parsedData = await fetchAllCharacterInventories(initialisedData);
        
      // function that takes in all of the parsed charInventories
        // maps the data onto the initialisedData
        // returns parsedData
        // Aggregation function would take initialisedData object, plus all charInventory objects
          // In props you can have the char objects be charObj type or undefined
          // Do a check for each one
          // If true, map it's values onto the applicable initialisedData character section
          // Return the parsedData object

      // function to setData so the page updates and renders the data
      // setData


      
      // const parseData = await fetchAllCharInv(initialisedData, userData);
      // // const parseData : dataStateType = await fetchAllCharInv(dataState, userData).then(setData(parseData));
      // // console.log("🚀 ~ getAllData ~ fetchAllCharInv ~ parseData:", parseData);
      // // await setData(parseData);
      
      
      //       for (const [key, value] of parseData[0].characterObj) {
        //         console.log(`${key}: ${value}`);
        // }
        
        
        
        
        
        
        
        
        
        // TODO abstract all of these functions into their own files
      // * takes initialisedData and index of initialisedData as charNum
      // * gets the character inventory data (equipped and unequippied) and puts it in charInv, calls parseCharInv to set it on the big data obj, calls setData()
      // * returns dataState as parseData
      async function fetchAllCharInv(
        preBucketData: dataStateType | undefined,
        userData: userDataType | undefined,
      ) {
        if (!preBucketData) {
          return undefined;
        } else if (!userData) {
          return undefined;
        }
        try {
          preBucketData.forEach(async (element, index) => {
            // This needs to be here to silence a warning, I need the index of the thing, not the elements themselves
            element;
            document.getElementsByClassName("loadingMessage")[0].innerHTML =
              `Parsing character ${index} data.`;

            preBucketData = await fetchCharInv(preBucketData, userData, index);
            return preBucketData;
          });

          return preBucketData;
        } catch (error) {
          console.log("🚀 ~ getAllData ~ error:", error);
        }
          return preBucketData;
      }

      // * takes dataState and index of dataState as charNum
      // * gets the character inventory data (equipped and unequippied) and puts it in charInv, calls parseCharInv to set it on the big data obj, calls setData()
      // * returns dataState as parseData
      async function fetchCharInv(
        preBucketData: dataStateType | undefined,
        userData: userDataType | undefined,
        charNum: number | undefined,
      ) {
        // console.log("🚀 ~ getAllData ~ userData:", userData)
        if (!preBucketData) {
          return undefined;
        } else if (!userData) {
          return undefined;
        } else if (charNum === undefined) {
          return undefined;
        }
        try {
          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            `Fetching character ${charNum + 1} inventory.`;
          const characterInventoryResponse = await fetch(
            `https://www.bungie.net/Platform/Destiny2/${userData.membershipType}/Profile/${userData.membershipId}/Character/${preBucketData[charNum].characterId}/?components=CharacterInventories,CharacterEquipment`,
            {
              method: "GET",
              headers: {
                "X-API-Key": `${import.meta.env.VITE_BUNGIE_API_KEY}`,
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
              },
            },
          );

          const characterInventoryResult =
            await characterInventoryResponse.json();
          // console.log("🚀 ~ useEffect ~ characterInventoryResult:", characterInventoryResult)

          const characterInventory = characterInventoryResult.Response;
          // console.log("🚀 ~ useEffect ~ characterInventory:", characterInventory)

          // * Call parseCharInv function twice to populate the equipped items and the unequipped ones
          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            `Parsing character ${charNum + 1} inventory.`;

          let parseData = await parseCharInv(
            characterInventory.equipment.data.items,
            true,
            preBucketData,
            charNum,
          );
          // ! For testing disable this to have the DB load faster
          parseData = await parseCharInv(
            characterInventory.inventory.data.items,
            false,
            preBucketData,
            charNum,
          );

          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            `Character ${charNum + 1} inventory parsed.`;

          // console.log("🚀 ~ getAllData ~ preBucketData.length:", preBucketData.length)
          // console.log("🚀 ~ getAllData ~ charNum:", charNum)
          if (charNum === preBucketData.length - 1) {
            document.getElementsByClassName("loadingMessage")[0].innerHTML =
              "All characters parsed.";
            document.getElementsByClassName(
              "loadingMessage",
            )[0].classList.add("transparent");
            // document.getElementsByClassName(
            //   "loadingMessage",
            // )[0].classList.value = "loadingMessage transparent";
            setData(parseData);
          }

          // console.log("🚀 ~ fetchCharInv ~ parseData:", parseData)
          return parseData;
        } catch (error) {
          console.log("🚀 ~ fetchCharInv ~ error:", error);
        }
      }

      // * takes charInv.equipment.data.items as hashArr, dataState, charNum and equipBool (could kill equipbool so it does equipped items first and sets their equip satus to true)
      // * calls SQL server to get parsed item info, sets it into individual items, pushes that into the correct arrays on dataState, calls setData()
      // * returns dataState as parseData
      // type hashArr = [
      //   {
      //     itemHash: number;
      //     bucketHash: number;
      //   },
      // ];
      async function parseCharInv(
        hashArray: hashArr,
        equipBool: boolean,
        preParseData: dataStateType,
        charNum: number,
      ) {
        // console.log("🚀 ~ useEffect ~ preParseData:", preParseData)
        // console.log("🚀 ~ useEffect ~ equipBool:", equipBool)
        // console.log("🚀 ~ useEffect ~ hashArray:", hashArray)
        const db = new Database(
          `${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`,
        );



        
        
        
        try {
        function queryString(manifestTable : string, hashArray : hashArr) {
          manifestTable;
          let itemQuery = `USE DATABASE Manifest.sqlite;`
          hashArray.forEach((item) => {
          itemQuery = itemQuery.concat(' ', `SELECT * FROM ${`DestinyInventoryItemDefinition`} WHERE id + 4294967296 = ${item.itemHash} OR id = ${item.itemHash}
          UNION`)
          })
          itemQuery = itemQuery.slice(0,-8).concat('', ';')
          
          let bucketQuery = `USE DATABASE Manifest.sqlite;`
          hashArray.forEach((item) => {
          bucketQuery = bucketQuery.concat(' ', `SELECT * FROM ${`DestinyInventoryBucketDefinition`} WHERE id + 4294967296 = ${item.bucketHash} OR id = ${item.bucketHash}
          UNION`)
          })
          bucketQuery = bucketQuery.slice(0,-8).concat('', ';')
          
          const queryObj = {
            itemQuery: itemQuery,
            bucketQuery: bucketQuery,
          }
          
          return queryObj;
        }
      
        const dbQueryObj = queryString("DestinyInventoryItemDefinition", hashArray);
        // console.log("🚀 ~ getAllData ~ dbQueryObj:", dbQueryObj)
      

                    const itemResult = await db.sql(dbQueryObj.itemQuery);
                    // console.log("🚀 ~ getAllData ~ itemResult:", itemResult)
                    const bucketResult = await db.sql(dbQueryObj.bucketQuery);
                    // console.log("🚀 ~ getAllData ~ resultBucket:", bucketResult)
      
                    // const itemResultJson = JSON.parse(itemResult[0].json);
                    // console.log("🚀 ~ getAllData ~ itemResultJson:", itemResultJson)
      
                    // itemResult[index].id is the hash or the hash + 4294967296 to let you find the right one
                    // itemResult[index].json is the actual object with all of the data on the bucket or item

//  TODO: FIX THIS SHIT
        const postParseData = await iterateData(hashArray, itemResult, bucketResult);
        console.log("🚀 ~ getAllData ~ postParseData:", postParseData)
          // setData(postParseData);


async function iterateData(hashArray : hashArr, itemRes : SQLResponseArr, bucketRes : SQLResponseArr) {
          // console.log("🚀 ~ iterateData ~ bucketRes:", bucketRes)
          // console.log("🚀 ~ iterateData ~ itemRes:", itemRes)


          
          // // console.log("🚀 ~ iterateData ~ itemRes:", itemRes[0].id)
          // console.log("🚀 ~ iterateData ~ itemRes:", itemRes[0])
          // const test = itemRes.findIndex((element : SQLResponseItem) => element.id === 2255073244 || element.id + 4294967296 === 2255073244);
          // // const test = itemRes.forEach((element : SQLResponseItem) => {console.log("element", element.id)});
          // console.log("🚀 ~ iterateData ~ itemResTEST:", test)



          
  for (const id of hashArray) {
            let itemIndex = await itemRes.findIndex((element : SQLResponseItem) => element.id === id.itemHash || element.id + 4294967296 === id.itemHash);
            // console.log("🚀 ~ iterateData ~ itemIndex:", itemIndex)
            let bucketIndex = await bucketRes.findIndex((element : SQLResponseItem) => element.id === id.bucketHash || element.id + 4294967296 === id.bucketHash);
            // console.log("🚀 ~ iterateData ~ bucketIndex:", bucketIndex)

            // Get item info
//             const itemRes = await db.sql`
// USE DATABASE Manifest.sqlite;
// SELECT * FROM DestinyInventoryItemDefinition WHERE id + 4294967296 = ${id.itemHash} OR id = ${id.itemHash};`;
            // console.log("🚀 ~ hashArray.forEach ~ itemRes:", itemRes[itemIndex])
            const itemResJson = JSON.parse(itemRes[itemIndex].json);
            // console.log("🚀 ~ useEffect ~ itemResJson:", itemResJson)

            // Get bucket name
//             const bucketRes = await db.sql`
// USE DATABASE Manifest.sqlite;
// SELECT * FROM DestinyInventoryBucketDefinition WHERE id + 4294967296 = ${id.bucketHash} OR id = ${id.bucketHash};`;
            // console.log("🚀 ~ useEffect ~ bucketRes :", bucketRes )
            const bucketResJson = JSON.parse(bucketRes[bucketIndex].json);
            // console.log("🚀 ~ useEffect ~ bucketResJson:", bucketResJson)

            const itemObj: itemObjType = {
              hash: id.itemHash,
              bucketHash: id.bucketHash,
              tableId: itemRes[itemIndex].id,
              name: itemResJson.displayProperties.name,
              icon: itemResJson.displayProperties.icon,
              flavorText: itemResJson.flavorText,
              rarity: itemResJson.inventory.tierTypeName,
              itemType: itemResJson.itemTypeDisplayName,
              bucket: bucketResJson.displayProperties.name,
              equipped: equipBool,
              instance: 0,
              itemInstanceId: id.itemInstanceId,
            };
            // console.log("🚀 ~ useEffect ~ itemObj:", itemObj)
            const bucketSelect = {
              kineticWeapons: "Kinetic Weapons",
              energyWeapons: "Energy Weapons",
              heavyWeapons: "Power Weapons",
              helmet: "Helmet",
              arms: "Gauntlets",
              chest: "Chest Armor",
              legs: "Leg Armor",
              classItem: "Class Armor",
              ghost: "Ghost",
              // "banner": "Clan Banners",
              emblem: "Emblems",
              ship: "Ships",
              sparrow: "Vehicle",
              // "emotes": "Emotes",
              // "inventory": "",
              subclass: "Subclass",
              // "finishers": "Finishers",
            }; 
            
            for (const [key, value] of Object.entries(bucketSelect)) {
              // console.log(`key: ${key}, value: ${value}`);
              if (itemObj.bucket === value) {
                key;
                // The hasharray is an array of objects, each with an itemhash and buckethash, so we just look through the array and compare the entries to the 
                let instance = 0;
                if (key === "kineticWeapons" || key === "energyWeapons" || key === "heavyWeapons" || key === "ghost" || key === "ship" || key === "sparrow") {
                  preParseData.forEach(char => {
                    char.characterObj[key as keyof characterObjType].forEach(element => {
                      if (element.hash === itemObj.hash) {
                        instance++;
                      }
                    });
                  })
                  // TODO iterate over the vault to increase the instance count
                } else {
                  preParseData[charNum].characterObj[key as keyof characterObjType].forEach(element => {
                    if (element.hash === itemObj.hash) {
                      instance++;
                    }
                    // TODO iterate over the vault to increase the instance count
                  });
                }
                itemObj.instance = instance;

                // console.log("🚀 ~ getAllData ~ preParseData[charNum].characterObj[itemObj.bucket as keyof characterObjType]:", preParseData[charNum].characterObj[key as keyof characterObjType])

                

                preParseData[charNum].characterObj[
                  key as keyof characterObjType
                ].push(itemObj);
              }
            }
          }
          // return preParseData;
}






          // After for loop has iterated on the preParseData
          // const parseData = preParseData
          // console.log("🚀 ~ parseCharInv ~ parseData:", parseData)
          // setData(parseData);
          return preParseData;
        } catch (error) {
          console.log("🚀 ~ parseCharInv ~ error:", error);
        }
      }

      // TODO Issue here is that this check makes loginState required, and if I put it in as a dependancy below in the function, then for some reason the app is unable to get the membership id data
      //  if (loginState) {
      setTimeout(
        () => {
          window.location.href = `${import.meta.env.VITE_AUTHORISATION_URL}`;
        },
        1000 * 60 * 60,
      );
      // }
      // };
    }
    getAllData();
    // fetchAuthToken();
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
