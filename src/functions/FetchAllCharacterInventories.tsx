import {
  dataStateType,
  userDataType,
} from "../CustomTypes";

import fetchCharacterInventory from "./FetchCharacterInventory";
import setCharacterInventories from "./SetCharacterInventories";

// * takes initialisedData
// * gets character inventories from bungie,
// * parses them,
// * sets them into initialisedData
// * returns initialisedData
async function fetchAllCharacterInventories(
  initialisedData: dataStateType | undefined,
  userData: userDataType | undefined,
) {
  // exit if characters have not been initialised or there are no characters
  if (!initialisedData) {
    return undefined;
  } else if (initialisedData.length === 0) {
    return undefined;
  }

  //   update loadingMessage
  document.getElementsByClassName("loadingMessage")[0].innerHTML =
    "Fetching character inventories.";

  // 3 async fetches and parses
  // Check characterInfo.characterIds array length, and call based on that, so you can handle less that 3 chars
  if (initialisedData.length >= 1) {
    const promises = [fetchCharacterInventory(initialisedData[0], userData)];

    if (initialisedData.length >= 2) {
      promises.push(fetchCharacterInventory(initialisedData[1], userData));

      if (initialisedData.length === 3) {
        promises.push(fetchCharacterInventory(initialisedData[2], userData));
      }
    }

    const [charInventory1, charInventory2, charInventory3] =
      await Promise.all(promises);

    const parsedData = await setCharacterInventories(
      initialisedData,
      charInventory1,
      charInventory2,
      charInventory3,
    );
    // console.log("🚀 ~ parsedData:", parsedData)

    return parsedData;
  }
}

export default fetchAllCharacterInventories;
