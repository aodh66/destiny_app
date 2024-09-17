        // * doesn't take any arguments
        // * gets and sets the auth token in localStorage
        // * returns authConfirm boolean
        async function fetchAuthToken() {
          const urlParams = new URL(document.location.toString()).searchParams;
          const authCode = urlParams.get("code");
          // console.log("🚀 ~ useEffect ~ authCode:", authCode)
          
          // exit if no auth code in the url
          if (!authCode) {
            return false;
          }

          try {
            // set loading message
            document.getElementsByClassName("loadingMessage")[0].innerHTML =
              "Getting user authorisation.";
  
            const data = `client_id=${import.meta.env.VITE_OAUTH_CLIENT_ID}&grant_type=authorization_code&code=${authCode}`;
            history.pushState(null, "DiVA | Destiny Vault App", "/");
            
            // try to get auth token from bungie
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
            // console.log("🚀 ~ fetchAuthToken ~ authTokenResult:", authTokenResult)
            
            // check that the response is not an error
            if (!authTokenResult.error) {
              // store the token in local storage
              localStorage.setItem(
                "localAuthToken",
                JSON.stringify(authTokenResult),
                );
                // update loading message
                document.getElementsByClassName("loadingMessage")[0].innerHTML =
                "User authorised.";
                
                // return value
                // console.log("🚀 ~ fetchAuthToken:", true)
              return true;
            }
          } catch (error) {
            console.log("🚀 ~ fetchAuthToken ~ error:", error);
            return false
          }
        }

        export default fetchAuthToken;