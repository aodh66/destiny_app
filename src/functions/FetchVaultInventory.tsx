import {
  userDataType,
  characterInfoObjType,
  itemArrayType,
  // vaultObjType
} from "../CustomTypes";

import getManifestData from "./GetManifestData";
import parseVaultInventory from "./ParseVaultInventory";

// * Takes userData
// * Initialises vault
// * gets vault from Bungie
// * parses it with the manifest
// * sets it into the initialised vault object
// * Returns updated vaultInventory object
async function fetchVaultInventory(
  userData: userDataType | undefined,
  characterInfoObj: characterInfoObjType | undefined,
) {
  // exit if character not initialised
  if (!userData || !characterInfoObj?.characterIds[0]) {
    return undefined;
  }
  // console.log("🚀 ~ fetchVaultInventory ~ userData:", userData)

  try {
    // get vault inventory from bungie
    document.getElementsByClassName("loadingMessage")[0].innerHTML =
      "Fetching vault contents.";
    const vaultInventoryResponse = await fetch(
      `https://www.bungie.net/Platform/Destiny2/${userData.membershipType}/Profile/${userData.membershipId}/?components=ProfileInventories`,
      {
        method: "GET",
        headers: {
          "X-API-Key": `${import.meta.env.VITE_BUNGIE_API_KEY}`,
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
        },
      },
    );

    const vaultInventoryResult = await vaultInventoryResponse.json();
    console.log("🚀 ~ vaultInventoryResult:", vaultInventoryResult);

    const vaultInventory = vaultInventoryResult.Response;
    // console.log("🚀 ~ vaultInventory:", vaultInventory);

    const vaultItems = await getManifestData(
      "DestinyInventoryItemDefinition",
      vaultInventory.profileInventory.data.items,
      // undefined,
    );
    // console.log("🚀 ~ vaultItems:", vaultItems)

    // ? Currently manually setting the bucket data with DLed table, only 61 entries
    // get the bucket data for all items
    // const bucketData = await getManifestData(
    //   "DestinyInventoryBucketDefinition",
    //   vaultInventory.equipment.data.items,
    //   vaultInventory.inventory.data.items,
    //   );

    // ! Might change the structure of the vault, to let it be organised, would have to
    // ! loop over and auto generate buckets based on item type to sort
    const initialisedVault: itemArrayType = [];
    // const initialisedVault : itemArrayType = {
    //   General: [] as itemArrayType,
    // };
    // const initialisedVault : vaultObjType = {
    //   kineticWeapons: [] as itemArrayType,
    //   energyWeapons: [] as itemArrayType,
    //   heavyWeapons: [] as itemArrayType,
    //   helmet: [] as itemArrayType,
    //   arms: [] as itemArrayType,
    //   chest: [] as itemArrayType,
    //   legs: [] as itemArrayType,
    //   classItem: [] as itemArrayType,
    //   ghost: [] as itemArrayType,
    //   ship: [] as itemArrayType,
    //   sparrow: [] as itemArrayType,
    //   // inventory: [] as itemArrayType,
    // };

    // match up the data and set all of the items into the character object
    const parsedVaultInventory = await parseVaultInventory(
      initialisedVault,
      vaultInventory.profileInventory.data.items,
      vaultItems,
    );

    // console.log("🚀 ~ parsedVaultInventory :", parsedVaultInventory )
    return parsedVaultInventory;
  } catch (error) {
    console.log("🚀 ~ fetchCharacterInventory ~ error:", error);
  }
}

export default fetchVaultInventory;
