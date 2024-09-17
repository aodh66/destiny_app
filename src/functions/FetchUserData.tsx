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

// * takes authConfirm if anything,
      // * grabs api key from localstorage, gets the user data,
      // * returns userData, object with the membershipType and membershipId (userprofileresult)
      async function fetchUserData(authConfirm: boolean | undefined) {
        if (!authConfirm) {
          return undefined;
        } else if (!localStorage.getItem("localAuthToken")) {
          return undefined;
        }
        try {
          // if (authConfirm) {
          document.getElementsByClassName("loadingMessage")[0].innerHTML =
            "Getting user data";
          const userDataResponse = await fetch(
            "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/",
            {
              method: "GET",
              headers: {
                "X-API-Key": apiKey,
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
              },
              body: null,
            },
          );

          setLoginState(true);
          const userDataResult = await userDataResponse.json();
          // console.log(
          //   "🚀 ~ fetchAuthToken ~ userDataResult:",
          //   userDataResult,
          // );
          document.getElementsByClassName("username")[0].innerHTML =
            userDataResult.Response.uniqueName;
          document
            .getElementsByClassName("userIcon")[0]
            .setAttribute(
              "src",
              `https://www.bungie.net${userDataResult.Response.profilePicturePath.replaceAll("'", "")}`,
            );

          if (userDataResult) {
            // console.log("🚀 ~ fetchTotalInventory ~ loginState:", loginState)

            // console.log(JSON.parse(localStorage.getItem("localAuthToken")!).access_token)
            // fetch Membership type and ID
            const userMembershipsResponse = await fetch(
              "https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/",
              {
                method: "GET",
                headers: {
                  "X-API-Key": apiKey,
                  Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
                },
                body: null,
              },
            );

            const userMembershipsResult = await userMembershipsResponse.json();

            const userData = {
              membershipType:
                userMembershipsResult.Response.destinyMemberships[0]
                  .membershipType,
              membershipId:
                userMembershipsResult.Response.destinyMemberships[0]
                  .membershipId,
            };
            // console.log("🚀 ~ useEffect ~ userData:", userData)

            document.getElementsByClassName("loadingMessage")[0].innerHTML =
              "User data received.";

            return userData;
          }
          // }
        } catch (error) {
          console.log("🚀 ~ fetchUserData ~ error:", error);
        }
      }

      export default fetchUserData;