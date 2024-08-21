import { useState, useEffect } from "react";
// import "./main.scss";
import "./App.css";
// import mainStyles from "./main.scss";

import { Database } from "@sqlitecloud/drivers";

// const db = new Database(`${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`);

// !----------------------------------------------------------------------------------------
// !----------------------------------------------------------------------------------------
// !----------------------------------------------------------------------------------------
// !----------------------------------------------------------------------------------------
// // !----------------------------------------------------------------------------------------
// interface Post {
//   body: string;
//   createdAt: string;
//   title: string;
//   id: string;
//   slug: string;
//   updatedAt: string;
//   heroImage: HeroImage;
// }

// export function Blog() {
//   const [data, setData] = useState([]);
//   const apiUrl = `${import.meta.env.VITE_HYGRAPH_FAST_ENDPOINT}`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             "query": "query here",
//           }),
//         });

//         const result = await response.json();
//         setData(result.data.blogPosts);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col">

//       <div className="align-items-center mb-6 flex flex-col">
//         <div className="flex flex-col gap-4">
//           {data &&
//             data.map((post: Post) => (
//               <Link href={`/blog/${post.slug}`}>
//                 <div className="card flex min-w-full items-center justify-between gap-3 rounded-xl border-2 border-transparent p-2">
//                   {/* {post.heroImage ? (
//                 <>
//                 <p className="splashTitle text-3xl font-semibold">
//                 {post.title}
//                 </p>
//                 <img
//                 src={post.heroImage.url}
//                 alt={post.title}
//                 className="cardSplash"
//                 />
//                 <img
//                 src={post.heroImage.url}
//                 alt={post.title}
//                 className="w-30 h-20"
//                 />
//                 </>
//               ) : null} */}
//                   <h3 className=" justify-self-center text-xl font-semibold">
//                     {/* <Link
//                   href={`/blog/${post.slug}`}
//                   > */}
//                     {post.title}
//                     {/* </Link> */}
//                   </h3>
//                   <p className="justify-self-end italic">
//                     {new Date(post.createdAt).toLocaleDateString("en-gb", {
//                       year: "numeric",
//                       month: "short",
//                       day: "numeric",
//                     })}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// !----------------------------------------------------------------------------------------
// !----------------------------------------------------------------------------------------
// !----------------------------------------------------------------------------------------
// !----------------------------------------------------------------------------------------
// !----------------------------------------------------------------------------------------

function App() {
  const [loginStatus, setLoginStatus] = useState(false); // to track if it's logged in, and therefore whether the button is there
  // const [data, setData] = useState([]);
  // Todo if this authtoken state is not used, then get rid of it, it's currently set and never called
  const [authToken, setAuthToken] = useState(null); // auth token that will be used in requests and put into localstorage
  // const [db, setDb] = useState<any | null>(null);
  // const [data, setData] = useState(null) // for the initial load data?, or do I separate it into the individual sections?
  authToken;
  // data;

  useEffect(() => {
    const fetchAuthToken = async () => {
      // Clear local storage on initial load
      // localStorage.removeItem("localAuthToken");
      // ! REENABLE THIS, ONLY GONE DUE TO LOCAL TESTING TO STOP ERRORS
      // localStorage.clear();
      const urlParams = new URL(document.location.toString()).searchParams;
      const apiKey = `${import.meta.env.VITE_BUNGIE_API_KEY}`;
      const authCode = urlParams.get("code");
      // console.log("🚀 ~ fetchAuthToken ~ authCode:", authCode)

      // ! Debug for HTTP localhost. Put access token into url under debug param
      // !----------------------------------------------------------------------------------------
      // if (urlParams.get("debug")) {
      //   const token = { access_token: urlParams.get("debug") };
      //   console.log("🚀 ~ token:", token)
      //   localStorage.setItem("localAuthToken", JSON.stringify(token));
      //   // setAuthToken(token);
      //   // try to get user account data using auth token
      //   try {
      //     // console.log("🚀 ~ token:", token)
      //     const userDataResponse = await fetch(
      //       "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/",
      //       {
      //         method: "GET",
      //         headers: {
      //           "X-API-Key": apiKey,
      //           Authorization: `Bearer ${token.access_token}`,
      //         },
      //         body: null,
      //       },
      //     );

      //     setLoginStatus(true);
      //     const userDataResult = await userDataResponse.json();
      //     // console.log(
      //     //   "🚀 ~ fetchAuthToken ~ DEBUG userDataResult:",
      //     //   userDataResult,
      //     // );
      //     document.getElementsByClassName("username")[0].innerHTML =
      //       userDataResult.Response.uniqueName;
      //     // console.log(`https://www.bungie.net${userDataResult.Response.profilePicturePath.replaceAll("'", "")}`)
      //     document
      //       .getElementsByClassName("userIcon")[0]
      //       .setAttribute(
      //         "src",
      //         `https://www.bungie.net${userDataResult.Response.profilePicturePath.replaceAll("'", "")}`,
      //       );
      //   } catch (err) {
      //     console.error("Error fetching user data:", err);
      //   }
      //   // console.log(JSON.parse(localStorage.getItem("localAuthToken")!).access_token)
      // }
      // !----------------------------------------------------------------------------------------

      if (authCode) {
        // console.log("🚀 ~ authCode:", authCode);
        const data = `client_id=${import.meta.env.VITE_OAUTH_CLIENT_ID}&grant_type=authorization_code&code=${authCode}`;
        history.pushState(null, "DiVA | Destiny Vault App", "/");
        // try to get auth token
        try {
          const authTokenResponse = await fetch(
            "https://www.bungie.net/Platform/App/OAuth/Token/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-API-Key": apiKey,
              },
              body: data,
            },
          );

          const authTokenResult = await authTokenResponse.json();
          if (!authTokenResult.error) {
            // console.log(
            //   "🚀 ~ fetchAuthToken ~ authTokenResult:",
            //   authTokenResult,
            // );
            document.getElementsByClassName("accessToken")[0].innerHTML =
              `Access Token (Copy and put into localhost for url param): ${authTokenResult.access_token}`;
            localStorage.setItem(
              "localAuthToken",
              JSON.stringify(authTokenResult),
            );
            setAuthToken(authTokenResult);

            // try to get user account data using auth token
            try {
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

              setLoginStatus(true);
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
            } catch (err) {
              console.error("Error fetching user data:", err);
            }
          }
        } catch (error) {
          console.error("Error fetching auth token:", error);
        }
      }

      // TODO Issue here is that this check makes loginStatus required, and if I put it in as a dependancy below in the function, then for some reason the app is unable to get the membership id data
      //  if (loginStatus) {
      setTimeout(
        () => {
          window.location.href = `${import.meta.env.VITE_AUTHORISATION_URL}`;
        },
        1000 * 60 * 60,
      );
      // }
    };

    fetchAuthToken();
  }, []);

  // try to get initial slot and inventory data
  // TODO You might need to put this in a separate useEffect hook or something. You want it to trigger on state change of login, so might need an event listener
  // TODO You might need to put this in a separate useEffect hook or something. You want it to trigger on state change of login, so might need an event listener
  // TODO You might need to put this in a separate useEffect hook or something. You want it to trigger on state change of login, so might need an event listener
  // TODO You might need to put this in a separate useEffect hook or something. You want it to trigger on state change of login, so might need an event listener
  useEffect(() => {
    const fetchTotalInventory = async () => {
      const apiKey = `${import.meta.env.VITE_BUNGIE_API_KEY}`;
      if (loginStatus) {
        // console.log("🚀 ~ fetchTotalInventory ~ loginStatus:", loginStatus)
        try {
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
          // console.log(
          //   "🚀 ~ fetchAuthToken ~ userMembershipsResult:",
          //   userMembershipsResult,
          // );
          const membershipType =
            userMembershipsResult.Response.destinyMemberships[0].membershipType;
          const membershipId =
            userMembershipsResult.Response.destinyMemberships[0].membershipId;
          // console.log(
          //   "🚀 ~ fetchAuthToken ~ userMembershipsResult type and id:",
          //   userMembershipsResult.Response.destinyMemberships[0].membershipType,
          //   userMembershipsResult.Response.destinyMemberships[0].membershipId,
          // );

          // fetch character ids
          try {
            const userProfileResponse = await fetch(
              `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=Profiles`,
              {
                method: "GET",
                headers: {
                  "X-API-Key": apiKey,
                  Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
                },
              },
            );

            const userProfileResult = await userProfileResponse.json();
            // console.log(
            //   "🚀 ~ fetchTotalInventory ~ userProfileResult:",
            //   userProfileResult,
            // );
            const characterIds =
              userProfileResult.Response.profile.data.characterIds;
            console.log(
              "🚀 ~ fetchTotalInventory ~ characterIds:",
              characterIds,
            );
            document.getElementsByClassName("characterIds")[0].innerHTML =
              `Character IDs: ${characterIds[0]}, ${characterIds[1]}, ${characterIds[2]}`;

            // fetch character inventories
            try {
              const characterInventoryResponse = await fetch(
                `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/Character/${characterIds[0]}/?components=CharacterInventories,CharacterEquipment`,
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
              // console.log(
              //   "🚀 ~ fetchTotalInventory ~ characterInventoryResult:",
              //   characterInventoryResult,
              // );
              const characterInventory = characterInventoryResult.Response;
              console.log(
                "🚀 ~ fetchTotalInventory ~ characterInventory:",
                characterInventory,
              );
            } catch (err) {
              console.error("Error fetching character inventories:", err);
            }
          } catch (error) {
            console.error("Error fetching character IDs:", error);
          }
        } catch (error) {
          console.error("Error fetching membership ID:", error);
        }
      }
    };
    fetchTotalInventory();
  }, [loginStatus]);

  // ! Figure out how you want to structure the function to call the DB, and get items out of it
  // ! likely need to set up the DB accessing object for mapping onto the correct table based
  // ! on the place it's being called from. Also need to chunk the requests for efficiency.
  useEffect(() => {
    const fetchInventory = async () => {
      if (loginStatus) {
        try {
          // Prepare an sql statement
          // const hash = 347366834;
          // const hash2 = 4184808992;
          const itemTable = "DestinyInventoryItemDefinition";
          const bucketTable = "DestinyInventoryBucketDefinition";
          // type hashArray = [
          //   {
          //     itemHash:number,
          //     bucketHash:number
          //   }, ...object[]
          // ]
          type hashObj = {
              itemHash:number,
              bucketHash:number
            }
          
          const charHashArray = [
            {itemHash:347366834,
              bucketHash:1498876634
            },
            {itemHash:4184808992,
              bucketHash:2465295065
            },
            {itemHash:1399243961,
              bucketHash:953998645
            },
            {itemHash:2255073244,
              bucketHash:3448274439
            },
            // 4184808992,
            // 1399243961,
            // 2255073244
          ]
          // console.log("🚀 ~ fetchInventory ~ kineticHashObj:", kineticHashObj)
          // const stmt2 = db.prepare(`SELECT * FROM ${table} WHERE  id + 4294967296 = ${hash} OR id = ${hash}`);
          
          const db = new Database(`${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`,);
          
          // ! Test Request
          // const testHash = 3183180185;
          // const testHash = 358788212;
          // const testHash = 2255073244;
          const testHash = 1498876634;
          // const testTable = "DestinyInventoryItemDefinition";
          // ! The bucket or category of items (like kinetic weapon) is listed in the inventory 
          // ! entry with its hash code initially under bucketHash, you then need to call 
          // ! another sql request on the DestinyInventoryBucketDefinition table to give you the name 
          // ! of the bucket.
          const testTable = "DestinyInventoryBucketDefinition";
          const testResult = await db.sql`
  USE DATABASE Manifest.sqlite;
  SELECT * FROM ${testTable} WHERE id + 4294967296 = ${testHash} OR id = ${testHash};`;
          console.log("🚀 ~ fetchInventory ~ testResult:", testResult)
          const testResultJson = JSON.parse(testResult[0].json)
          console.log("🚀 ~ fetchInventory ~ testResultJson:", testResultJson)

          // ! Temporary individual call function to get it running before server hosting is patched
          // ! Feed in the data object, then after each query, modify the object and setdata again
const getInventoryData = async (manifestItemTable : string, manifestBucketTable : string, hashArray : Array<hashObj>) => {
  for (const id of hashArray) {
    
    // Get item info
      const result = await db.sql`
  USE DATABASE Manifest.sqlite;
  SELECT * FROM ${manifestItemTable} WHERE id + 4294967296 = ${id.itemHash} OR id = ${id.itemHash};`;
      // console.log("🚀 ~ hashArray.forEach ~ result:", result)
      // ! See if you can index directly into the JSON so you can directly make an object and save it to data
      const resultJson = JSON.parse(result[0].json)
      // console.log("🚀 ~ getInventoryData ~ resultJson:", resultJson)
      
      // Get bucket name
      const bucketResult = await db.sql`
  USE DATABASE Manifest.sqlite;
  SELECT * FROM ${manifestBucketTable} WHERE id + 4294967296 = ${id.bucketHash} OR id = ${id.bucketHash};`;
      // console.log("🚀 ~ getInventoryData ~ bucketResult:", bucketResult)
      const bucketResultJson = JSON.parse(bucketResult[0].json)
      // console.log("🚀 ~ getInventoryData ~ bucketResultJson:", bucketResultJson)

      const itemObj = {
        hash: id.itemHash,
        bucketHash: id.bucketHash,
        tableId: result[0].id,
        name: resultJson.displayProperties.name,
        icon: resultJson.displayProperties.icon,
        flavorText: resultJson.flavorText,
        rarity: resultJson.inventory.tierTypeName,
        itemType: resultJson.itemTypeDisplayName,
        bucket: bucketResultJson.displayProperties.name,
      }
      console.log("🚀 ~ getInventoryData ~ itemObj:", itemObj)
      // return itemObj
      // ! Modify the data object with setData
      
    }
}
getInventoryData(itemTable, bucketTable, charHashArray)

// ! Previous attempt to get SQL query chunking up and running
//           const getInventory = async () => {

// function queryString(manifestTable : string, hashArray : Array<number>) {
//   let query = `USE DATABASE Manifest.sqlite;`
//   // let query = ``
  
//   // console.log(hashArray.length)
//   hashArray.forEach((hash : number) => {
//   // console.log("🚀 ~ hashArray.forEach ~ hash:", hash)

//     query = query.concat(' ', `SELECT * FROM ${manifestTable} WHERE id + 4294967296 = ${hash} OR id = ${hash};
//   UNION;`)
//   })
//   // console.log("🚀 ~ queryString ~ query:", query)
//   query = query.slice(0,-8).concat('', ';')
//   // query = query.slice(0,-6)
//   // console.log("🚀 ~ queryString ~ querySLICE:", query)
//   // query = query.
//   return query;
// }

// const dbQuery = queryString(table, kineticHashObj).trim();
// // console.log("🚀 ~ getInventory ~ dbQuery:", dbQuery)
// // console.log("🚀 ~ getInventory ~ dbQuery:", dbQuery.slice(30))


// // const testQuery = `SELECT * FROM ${table} WHERE id + 4294967296 = ${hash} OR id = ${hash}
// //   UNION
// //   SELECT * FROM ${table} WHERE id + 4294967296 = ${hash2} OR id = ${hash2}`
// // console.log("🚀 ~ getInventory ~ testQuery:", testQuery)


            
//   //           const result = await db.sql`
//   // USE DATABASE Manifest.sqlite; 
//   // SELECT * FROM ${table} WHERE id + 4294967296 = ${hash} OR id = ${hash}
//   // UNION
//   // SELECT * FROM ${table} WHERE id + 4294967296 = ${hash2} OR id = ${hash2}
//   // ORDER BY id;`;
//   // // // const result = await db.sql`
//   // // // USE DATABASE Manifest.sqlite;
//   // // // SELECT * FROM ${table} WHERE id + 4294967296 = ${hash} OR id = ${hash};`;
//   // console.log("🚀 ~ getInventory ~ result:", result);
//   // try {
//   // const result2 = await db.sql`${dbQuery}`;
//   //           console.log("🚀 ~ getInventory ~ result2:", result2)
//   // } catch (error) {
//     //   console.log('Error executing query:', error)
//     //   throw error
//     // }
    
//     // const result3 = await db.sql`
//     // USE DATABASE Manifest.sqlite; ${testQuery} ORDER BY id;`;
//     //           console.log("🚀 ~ getInventory ~ result2:", result3)
            
            

//             // setData(result);
//           };

          // getInventory();
        } catch (error) {
          console.error("Error fetching Inventory", error);
        }
      }
    };
    fetchInventory();
  }, [loginStatus]);

  return (
    <>
      <div className="header">
        <div className="logoname five">DiVA</div>

        {loginStatus ? (
          <div className="user">
            <img src="https://" className="userIcon" alt="bungie user icon" />
            <div className="username">Username Placeholder</div>
          </div>
        ) : (
          <a href={import.meta.env.VITE_AUTHORISATION_URL}>
            <button className="loginBtn">Login</button>
            {/* Login */}
          </a>
        )}
      </div>

      <div className="content">Character items here. Also inventory below.</div>
      <p className="accessToken">
        Access Token (Copy and put into localhost for url param):
      </p>
      <p className="characterIds">Character IDs:</p>
    </>
  );
}

export default App;
