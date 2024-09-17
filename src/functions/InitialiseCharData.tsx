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

// * takes characterData
      // * initialises the big data object, sets its values with the characterData stuff, sets the race and class, calls setData()
      // * returns dataState
    //   type characterDataObjType = {
    //     characterIds: string[];
    //     characterData: {
    //       [propType: string]: {
    //         raceType: string;
    //         raceHash: string;
    //         classType: string;
    //         classHash: string;
    //         emblemBackgroundPath: string;
    //       };
    //     };
    //   };
      async function initialiseCharData(
        characterDataObj: characterDataObjType | undefined,
        // characterData : characterData,
        // characterIds : characterIdType,
      ) {
        // console.log("🚀 ~ getAllData ~ characterDataObj:", characterDataObj)

        if (!characterDataObj) {
          return undefined;
        }
        try {
          // * Initialise big data object
          // ! Could initialise an array, then push each thing into it, then make an actual dataStateType equal to it?
          const dataState: dataStateType = [
            {
              characterId: `${characterDataObj.characterIds[0]}`,
              raceType: `${characterDataObj.characterData[characterDataObj.characterIds[0]].raceType}`,
              raceHash: `${characterDataObj.characterData[characterDataObj.characterIds[0]].raceHash}`,
              classType: `${characterDataObj.characterData[characterDataObj.characterIds[0]].classType}`,
              classHash: `${characterDataObj.characterData[characterDataObj.characterIds[0]].classHash}`,
              race: "",
              class: "",
              emblemBackgroundPath: `${characterDataObj.characterData[characterDataObj.characterIds[0]].emblemBackgroundPath}`,
              characterObj: {
                kineticWeapons: [] as itemArrayType,
                energyWeapons: [] as itemArrayType,
                heavyWeapons: [] as itemArrayType,
                helmet: [] as itemArrayType,
                arms: [] as itemArrayType,
                chest: [] as itemArrayType,
                legs: [] as itemArrayType,
                classItem: [] as itemArrayType,
                ghost: [] as itemArrayType,
                // banner: [] as itemArrayType,
                emblem: [] as itemArrayType,
                ship: [] as itemArrayType,
                sparrow: [] as itemArrayType,
                // emotes: [] as itemArrayType,
                // inventory: [] as itemArrayType,
                subclass: [] as itemArrayType,
              },
            },
            {
              characterId: `${characterDataObj.characterIds[1]}`,
              raceType: `${characterDataObj.characterData[characterDataObj.characterIds[1]].raceType}`,
              raceHash: `${characterDataObj.characterData[characterDataObj.characterIds[1]].raceHash}`,
              classType: `${characterDataObj.characterData[characterDataObj.characterIds[1]].classType}`,
              classHash: `${characterDataObj.characterData[characterDataObj.characterIds[1]].classHash}`,
              race: "",
              class: "",
              emblemBackgroundPath: `${characterDataObj.characterData[characterDataObj.characterIds[1]].emblemBackgroundPath}`,
              characterObj: {
                kineticWeapons: [] as itemArrayType,
                energyWeapons: [] as itemArrayType,
                heavyWeapons: [] as itemArrayType,
                helmet: [] as itemArrayType,
                arms: [] as itemArrayType,
                chest: [] as itemArrayType,
                legs: [] as itemArrayType,
                classItem: [] as itemArrayType,
                ghost: [] as itemArrayType,
                // banner: [] as itemArrayType,
                emblem: [] as itemArrayType,
                ship: [] as itemArrayType,
                sparrow: [] as itemArrayType,
                // emotes: [] as itemArrayType,
                // inventory: [] as itemArrayType,
                subclass: [] as itemArrayType,
              },
            },
            {
              characterId: `${characterDataObj.characterIds[2]}`,
              raceType: `${characterDataObj.characterData[characterDataObj.characterIds[2]].raceType}`,
              raceHash: `${characterDataObj.characterData[characterDataObj.characterIds[2]].raceHash}`,
              classType: `${characterDataObj.characterData[characterDataObj.characterIds[2]].classType}`,
              classHash: `${characterDataObj.characterData[characterDataObj.characterIds[2]].classHash}`,
              race: "",
              class: "",
              emblemBackgroundPath: `${characterDataObj.characterData[characterDataObj.characterIds[2]].emblemBackgroundPath}`,
              characterObj: {
                kineticWeapons: [] as itemArrayType,
                energyWeapons: [] as itemArrayType,
                heavyWeapons: [] as itemArrayType,
                helmet: [] as itemArrayType,
                arms: [] as itemArrayType,
                chest: [] as itemArrayType,
                legs: [] as itemArrayType,
                classItem: [] as itemArrayType,
                ghost: [] as itemArrayType,
                // banner: [] as itemArrayType,
                emblem: [] as itemArrayType,
                ship: [] as itemArrayType,
                sparrow: [] as itemArrayType,
                // emotes: [] as itemArrayType,
                // inventory: [] as itemArrayType,
                subclass: [] as itemArrayType,
              },
            },
          ];
          // console.log("🚀 ~ fetchAuthToken ~ dataState just declared:", dataState)

          // * Set character classes and races
          dataState.map((element) => {
            // console.log("🚀 ~ dataState.map ~ element:", element)
            // console.log("🚀 ~ dataState.map ~ index:", index)
            const raceDict = {
              Human: "0",
              Awoken: "1",
              Exo: "2",
            };
            const classDict = {
              Titan: "0",
              Hunter: "1",
              Warlock: "2",
            };
            for (const [key, value] of Object.entries(raceDict)) {
              if (value === element.raceType) {
                element.race = key;
              }
            }
            for (const [key, value] of Object.entries(classDict)) {
              if (value === element.classType) {
                element.class = key;
              }
            }
          });

          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            "Character data initialised.";

          // console.log("first setData", data)
          // setData(dataState);
          return dataState;
        } catch (error) {
          console.log("🚀 ~ initialiseCharData ~ error:", error);
        }
      }

      export default initialiseCharData;