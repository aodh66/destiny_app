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

// * takes userData, apikey
      // * gets character data
      // * returns characterData, with the char ids and basic info (userprofileresult2)
    //   type userDataType = {
    //     membershipType: number;
    //     membershipId: string;
    //   };
      async function fetchCharData(userData: userDataType | undefined) {
        if (!userData) {
          return undefined;
        }
        try {
          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            "Getting character data.";
          const userProfileResponse = await fetch(
            `https://www.bungie.net/Platform/Destiny2/${userData.membershipType}/Profile/${userData.membershipId}/?components=Profiles`,
            {
              method: "GET",
              headers: {
                "X-API-Key": apiKey,
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
              },
            },
          );

          const userProfileResult = await userProfileResponse.json();

          const characterIds =
            userProfileResult.Response.profile.data.characterIds;
          // console.log("🚀 ~ useEffect ~ characterIds:", characterIds)

          // document.getElementsByClassName(
          //   "characterIds",
          // )[0].innerHTML =
          //   `Character IDs: ${characterIds[0]}, ${characterIds[1]}, ${characterIds[2]}`;

          const characterDataResponse2 = await fetch(
            `https://www.bungie.net/Platform/Destiny2/${userData.membershipType}/Profile/${userData.membershipId}/?components=Characters`,
            {
              method: "GET",
              headers: {
                "X-API-Key": apiKey,
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
              },
            },
          );

          const characterData = await characterDataResponse2.json();
          // console.log("🚀 ~ getAllData ~ characterData:", characterData.Response.characters.data)

          const characterDataObj = {
            characterIds: characterIds,
            // JSON.stringify(characterData),
            characterData: characterData.Response.characters.data,
          };

          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            "Character data received.";

          return characterDataObj;
        } catch (error) {
          console.log("🚀 ~ fetchCharData ~ error:", error);
        }
      }

      export default fetchCharData;