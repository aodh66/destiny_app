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

      // * takes characterInfo
      // * initialises the big data object, sets its values with the characterInfo stuff, sets the race and class
      // * returns initialisedData
      async function initialiseCharacterData(
        characterInfoObj: characterInfoObjType | undefined,
      ) {
        // console.log("🚀 ~ getAllData ~ characterInfoObj:", characterInfoObj)

        // exit if characterInfoObj is undefined
        if (!characterInfoObj) {
          return undefined;
        }
        
        try {
          // Initialise big data object
          // ! Could initialise an array, then push each thing into it, then make an actual dataStateType equal to it?
          // Initialise array
          const initialisedData: dataStateType = [];

          // Push a character into the array for every one in characterIds
          characterInfoObj.characterIds.forEach((element, index) => {
            element;
            initialisedData.push(
              {
                characterId: `${characterInfoObj.characterIds[index]}`,
                raceType: `${characterInfoObj.characterData[characterInfoObj.characterIds[index]].raceType}`,
                raceHash: `${characterInfoObj.characterData[characterInfoObj.characterIds[index]].raceHash}`,
                classType: `${characterInfoObj.characterData[characterInfoObj.characterIds[index]].classType}`,
                classHash: `${characterInfoObj.characterData[characterInfoObj.characterIds[index]].classHash}`,
                race: "",
                class: "",
                emblemBackgroundPath: `${characterInfoObj.characterData[characterInfoObj.characterIds[index]].emblemBackgroundPath}`,
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
              }
            )
          })

          //  Set character classes and races
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
          initialisedData.map((element) => {
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

          // update loading message
          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            "Character data initialised.";

          console.log("🚀 ~ initialisedData:", initialisedData)
          return initialisedData;
        } catch (error) {
          console.log("🚀 ~ initialiseCharData ~ error:", error);
        }
      }

      export default initialiseCharacterData;