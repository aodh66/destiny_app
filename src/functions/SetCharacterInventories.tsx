import { dataStateType, singleCharacterType } from "../CustomTypes";

// * takes the initialisedData and the parsed characterInventories
// * sets the characterInventories into the initialisedData
// * returns the parsed initialisedData, with the char inventories
async function setCharacterInventories(
  initialisedData: dataStateType | undefined,
  characterInventory1: singleCharacterType | undefined,
  characterInventory2: singleCharacterType | undefined,
  characterInventory3: singleCharacterType | undefined,
) {
  // exit if character not initialised
  if (!initialisedData) {
    return undefined;
  }

  // add the character inventories to the initialisedData
  try {
    if (initialisedData[0].characterId === characterInventory1?.characterId) {
      initialisedData[0].characterObj = characterInventory1.characterObj;
    }
    if (initialisedData[1].characterId === characterInventory2?.characterId) {
      initialisedData[1].characterObj = characterInventory2.characterObj;
    }
    if (initialisedData[2].characterId === characterInventory3?.characterId) {
      initialisedData[2].characterObj = characterInventory3.characterObj;
    }

    // update loadingMessage
    document.getElementsByClassName("loadingMessage")[0].innerHTML =
      "All characters parsed.";

    return initialisedData;
  } catch (error) {
    console.log("🚀 ~ setCharacterInventories ~ error:", error);
  }
}

export default setCharacterInventories;
