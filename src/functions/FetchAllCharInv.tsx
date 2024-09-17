import {
  itemObjType,
  itemArrayType,
  characterObjType,
  dataStateType,
  userDataType,
  characterDataObjType,
  hashArr,
  SQLResponseArr,
  SQLResponseItem,
  hashObj,
  singleCharacterType,
} from "../CustomTypes";

  import { Database } from "@sqlitecloud/drivers";

// * takes dataState and index of dataState as charNum
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
      }

      // * takes dataState and index of dataState as charNum
      // * gets the character inventory data (equipped and unequippied) and puts it in charInv, calls parseCharInv to set it on the big data obj, calls setData()
      // * returns dataState as parseData
      async function fetchCharInv(
        preBucketData: dataStateType | undefined,
        userData: userDataType | undefined,
        charNum: number | undefined,
      ) {
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
                "X-API-Key": apiKey,
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
            )[0].classList.value = "transparent";
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
      type hashArr = [
        {
          itemHash: number;
          bucketHash: number;
        },
      ];
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
          for (const id of hashArray) {
            // Get item info
            const result = await db.sql`
USE DATABASE Manifest.sqlite;
SELECT * FROM DestinyInventoryItemDefinition WHERE id + 4294967296 = ${id.itemHash} OR id = ${id.itemHash};`;
            // console.log("🚀 ~ hashArray.forEach ~ result:", result)
            const resultJson = JSON.parse(result[0].json);
            // console.log("🚀 ~ useEffect ~ resultJson:", resultJson)

            // Get bucket name
            const bucketResult = await db.sql`
USE DATABASE Manifest.sqlite;
SELECT * FROM DestinyInventoryBucketDefinition WHERE id + 4294967296 = ${id.bucketHash} OR id = ${id.bucketHash};`;
            // console.log("🚀 ~ useEffect ~ bucketResult :", bucketResult )
            const bucketResultJson = JSON.parse(bucketResult[0].json);
            // console.log("🚀 ~ useEffect ~ bucketResultJson:", bucketResultJson)

            const itemObj: itemObjType = {
              hash: id.itemHash,
              bucketHash: id.bucketHash,
              tableId: result[0].id,
              name: resultJson.displayProperties.name,
              icon: resultJson.displayProperties.icon,
              flavorText: resultJson.flavorText,
              rarity: resultJson.inventory.tierTypeName,
              itemType: resultJson.itemTypeDisplayName,
              bucket: bucketResultJson.displayProperties.name,
              equipped: equipBool,
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
                preParseData[charNum].characterObj[
                  key as keyof characterObjType
                ].push(itemObj);
              }
            }
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

      export default fetchAllCharInv;