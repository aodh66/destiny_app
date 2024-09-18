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
  } from "../CustomTypes";

  import fetchCharacterInventory from "./FetchCharacterInventory";
  import setCharacterInventories from "./SetCharacterInventories";

  // * takes initialisedData
  // * gets character inventories from bungie, 
    // * parses them, 
    // * sets them into initialisedData
  // * returns initialisedData
  async function fetchAllCharacterInventories(
    initialisedData : dataStateType | undefined
  ) {
    // exit if characters have not been initialised or there are no characters
    if (!initialisedData) {
        return undefined;
    } else if (initialisedData.length === 0) {
        return undefined;
    }
// have 3 separate fetches and parses
      // So have if statement chain
      // Check characterInfo.characterIds array length, and call based on that
        // If >=1 then first char, 2 then second etc
      // Each function can be a black box for fetching and parsing
      // Would return them in charInventory 1, 2 and 3

    //   update loadingMessage
    document.getElementsByClassName("loadingMessage")[0].innerHTML =
              "Fetching character inventories.";

    if (initialisedData.length >= 1) {
        const charInventory1 = await fetchCharacterInventory(initialisedData[0]);
        // console.log("🚀 ~ initialisedData[0]:", initialisedData[0])
        
        if (initialisedData.length >= 2) {
            const charInventory2 = await fetchCharacterInventory(initialisedData[1]);
            // console.log("🚀 ~ initialisedData[1]:", initialisedData[1])
            
            if (initialisedData.length === 3) {
                const charInventory3 = await fetchCharacterInventory(initialisedData[2]);
                // console.log("🚀 ~ initialisedData[2]:", initialisedData[2])
                console.log("🚀 ~ charInventories:", charInventory1, charInventory2, charInventory3)

                // const parsedData = await setCharacterInventories(initialisedData, charInventory1, charInventory2, charInventory3);
                // return parsedData;
                
            }
        }
    }
  }

  export default fetchAllCharacterInventories;