import { userDataType, singleCharacterType } from "../CustomTypes";

import getManifestData from "./GetManifestData";
import parseCharacterInventory from "./ParseCharacterInventory";

// * takes an initialised character
// * gets character inventory from bungie
// * parses it with the manifest
// * sets it into the initialised character
// * returns updated character object
async function fetchCharacterInventory(
  character: singleCharacterType | undefined,
  userData: userDataType | undefined,
) {
  // exit if character not initialised
  if (!character || !userData) {
    return undefined;
  }
  // console.log("🚀 ~ fetchCharacterInventory ~ character:", character)
  // return character.characterId
  // console.log("🚀 ~ bucketDict:", bucketDict)

  try {
    // get character inventory from bungie
    document.getElementsByClassName("loadingMessage")[0].innerHTML =
      `Fetching character ${character.charNumber + 1} inventory.`;
    const characterInventoryResponse = await fetch(
      `https://www.bungie.net/Platform/Destiny2/${userData.membershipType}/Profile/${userData.membershipId}/Character/${character.characterId}/?components=CharacterInventories,CharacterEquipment`,
      {
        method: "GET",
        headers: {
          "X-API-Key": `${import.meta.env.VITE_BUNGIE_API_KEY}`,
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
        },
      },
    );

    const characterInventoryResult = await characterInventoryResponse.json();

    const characterInventory = characterInventoryResult.Response;
    // console.log("🚀 ~ characterInventoryResult:", characterInventory);

    // get the equipped item info from the manifest
    const equippedItems = await getManifestData(
      "DestinyInventoryItemDefinition",
      characterInventory.equipment.data.items,
      // undefined,
    );
    // get the unequipped item info from the manifest
    const unequippedItems = await getManifestData(
      "DestinyInventoryItemDefinition",
      characterInventory.inventory.data.items,
      // undefined,
    );

    // ? Currently manually setting the bucket data with DLed table, only 61 entries
    // get the bucket data for all items
    // const bucketData = await getManifestData(
    //   "DestinyInventoryBucketDefinition",
    //   characterInventory.equipment.data.items,
    //   characterInventory.inventory.data.items,
    //   );

    // match up the data and set all of the items into the character object
    let parsedCharacterInventory = await parseCharacterInventory(
      character,
      characterInventory,
      equippedItems,
      true,
    );
    parsedCharacterInventory = await parseCharacterInventory(
      character,
      characterInventory,
      unequippedItems,
      false,
    );
      // console.log("🚀 ~ unequippedItems:", unequippedItems)

    return parsedCharacterInventory;
  } catch (error) {
    console.log("🚀 ~ fetchCharacterInventory ~ error:", error);
  }
}

export default fetchCharacterInventory;
