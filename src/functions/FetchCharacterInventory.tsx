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
  
        // * takes an initialised character
        // * gets character inventory from bungie
        // * parses it with the manifest
        // * sets it into the initialised character
        // * returns updated character object
        async function fetchCharacterInventory(character : singleCharacterType | undefined) {
          // exit if character not initialised
          if (!character) {
              return undefined;
            }
            console.log("🚀 ~ fetchCharacterInventory ~ character:", character)
            return character.characterId
          try {
                // get character inventory from bungie
                
  
            return ;
          } catch (error) {
            console.log("🚀 ~ fetchCharData ~ error:", error);
          }
        }
  
        export default fetchCharacterInventory;