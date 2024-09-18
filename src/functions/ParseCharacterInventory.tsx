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

import getManifestData from "./GetManifestData";

import bucketDict from "../assets/BucketDict.json";

// * takes character, equipped items and uequipped items
// * matches up hashes, ids and buckets
// * pushes the items into the correct characterObj array
// * returns updated character
async function parseCharacterInventory(
  character: singleCharacterType | undefined,
  characterInventory:
    | {
        equipment: {
          data: {
            items: hashArr;
          };
        };
        inventory: {
          data: {
            items: hashArr;
          };
        };
      }
    | undefined,
  items: SQLResponseArr | undefined,
  equipBool: boolean | undefined,
) {
  // exit if character not initialised
  if (!character || !characterInventory || !items || equipBool === undefined) {
    return undefined;
  }
  //   console.log("🚀 ~ bucketDict:", bucketDict)
  let itemPool: hashArr = [];
  if (equipBool === true) {
    itemPool = characterInventory.equipment.data.items;
  } else if (equipBool === false) {
    itemPool = characterInventory.inventory.data.items;
  }

  try {
    for (const id of itemPool) {
      let itemIndex = items.findIndex(
        (element: SQLResponseItem) =>
          element.id === id.itemHash || element.id + 4294967296 === id.itemHash,
      );
      let bucketIndex = bucketDict.findIndex(
        (element: SQLResponseItem) =>
          element.id === id.bucketHash ||
          element.id + 4294967296 === id.bucketHash,
      );

      const itemResJson = JSON.parse(items[itemIndex].json);
      const bucketResJson = JSON.parse(bucketDict[bucketIndex].json);

      const itemObj: itemObjType = {
        hash: id.itemHash,
        bucketHash: id.bucketHash,
        tableId: items[itemIndex].id,
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
          if (
            key === "kineticWeapons" ||
            key === "energyWeapons" ||
            key === "heavyWeapons" ||
            key === "ghost" ||
            key === "ship" ||
            key === "sparrow"
          ) {
            //   preParseData.forEach(char => {
            character.characterObj[key as keyof characterObjType].forEach(
              (element) => {
                if (element.hash === itemObj.hash) {
                  instance++;
                }
              },
            );
            //   })
            // TODO iterate over the vault to increase the instance count
          } else {
            character.characterObj[key as keyof characterObjType].forEach(
              (element) => {
                if (element.hash === itemObj.hash) {
                  instance++;
                }
                // TODO iterate over the vault to increase the instance count
              },
            );
          }
          itemObj.instance = instance;

          character.characterObj[key as keyof characterObjType].push(itemObj);
        }
      }
    }

    // console.log("🚀 ~ character:", character);
    return character;
  } catch (error) {
    console.log("🚀 ~ parseCharacterInventory ~ error:", error);
  }
}

export default parseCharacterInventory;
