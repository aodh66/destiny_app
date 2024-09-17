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

        // * doesn't take any arguments, if anything apikey
        // * gets and sets the auth token in localStorage
        // * returns authConfirm boolean nothing
        async function fetchAuthToken() {
          const urlParams = new URL(document.location.toString()).searchParams;
          const authCode = urlParams.get("code");
          if (!authCode) {
            return false;
          }
          try {
            // console.log("🚀 ~ useEffect ~ authCode:", authCode)
            // if (authCode) {
            document.getElementsByClassName("loadingMessage")[0].innerHTML =
              "Getting user authorisation.";
  
            const data = `client_id=${import.meta.env.VITE_OAUTH_CLIENT_ID}&grant_type=authorization_code&code=${authCode}`;
            history.pushState(null, "DiVA | Destiny Vault App", "/");
            // try to get auth token
  
            const authTokenResponse = await fetch(
              "https://www.bungie.net/Platform/App/OAuth/Token/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "X-API-Key": `${import.meta.env.VITE_BUNGIE_API_KEY}`,
                },
                body: data,
              },
            );
  
            const authTokenResult = await authTokenResponse.json();
  
            if (!authTokenResult.error) {
              // document.getElementsByClassName("accessToken")[0].innerHTML =
              //   `Access Token (Copy and put into localhost for url param): ${authTokenResult.access_token}`;
              localStorage.setItem(
                "localAuthToken",
                JSON.stringify(authTokenResult),
              );
              document.getElementsByClassName("loadingMessage")[0].innerHTML =
                "User authorised.";
              return true;
            }
            // }
          } catch (error) {
            console.log("🚀 ~ fetchAuthToken ~ error:", error);
            return false
          }
        }

        export default fetchAuthToken;