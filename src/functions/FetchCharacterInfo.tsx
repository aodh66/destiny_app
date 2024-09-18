import {
  // itemObjType,
  // itemArrayType,
  // characterObjType,
  // dataStateType,
  userDataType,
  // characterDataObjType,
  // hashArr,
  // SQLResponseArr,
  // SQLResponseItem,
  // hashObj,
  // singleCharacterType,
} from "../CustomTypes";

      // * takes userData
      // * gets character data from bungie
      // * returns characterInfo, with the char ids and basic info (userprofileresult2)
      async function fetchCharacterInfo(userData: userDataType | undefined) {
        // exit if userData not set
        if (!userData) {
          return undefined;
        }
        console.log("🚀 ~ fetchCharacterInfo ~ userData:", userData)

        try {
              // get characterData
              const characterDataResponse = await fetch(
                `https://www.bungie.net/Platform/Destiny2/${userData.membershipType}/Profile/${userData.membershipId}/?components=Characters`,
                {
                  method: "GET",
                  headers: {
                    "X-API-Key": `${import.meta.env.VITE_BUNGIE_API_KEY}`,
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
                  },
                },
                );
                
                const characterData = await characterDataResponse.json();
                // console.log("🚀 ~ getAllData ~ characterData:", characterData.Response.characters.data)
                
                // get characterIDs
          const characterIds = Object.getOwnPropertyNames(characterData.Response.characters.data)
          // console.log("🚀 ~ fetchCharData ~ characterIds2:", characterIds)

          const characterInfoObj = {
            characterIds: characterIds,
            characterData: characterData.Response.characters.data,
          };
          console.log("🚀 ~ fetchCharData ~ characterInfoObj:", characterInfoObj)

          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            "Character data received.";

          return characterInfoObj;
        } catch (error) {
          console.log("🚀 ~ fetchCharacterInfo ~ error:", error);
        }
      }

      export default fetchCharacterInfo;