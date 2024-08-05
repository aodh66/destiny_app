import { useState, useEffect } from "react";
// import "./main.scss";
import "./App.css";
// import mainStyles from "./main.scss";

// import 'sql.js';
import initSqlJs from "sql.js";
// import sqlite3 from 'sqlite3';
// import { decompressSync } from 'fflate';
import * as fflate from 'fflate';
import {
  deflate,
  deflateRaw,
  inflate,
  inflateRaw,
  encode,
  parse,
} from 'uzip-module';
deflate;
deflateRaw;
inflate;
inflateRaw;
encode;
parse;
// useState; //THIS IS FROM PORTFOLIO ON CONDITIONAL RENDERING AND FETCH CALLS

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
  const [authToken, setAuthToken] = useState(null); // auth token that will be used in requests and put into localstorage
  const [manifest, setManifest] = useState(null); // manifest sql database to cross reference with the character inventory
  // const [db, setDb] = useState<any | null>(null);
  // const [data, setData] = useState(null) // for the initial load data?, or do I separate it into the individual sections?
  authToken;
  manifest;

  useEffect(() => {
    const fetchAuthToken = async () => {
      // Clear local storage on initial load
      // localStorage.removeItem("localAuthToken");
      localStorage.clear();
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
        history.pushState (null, 'DiVA | Destiny Vault App', '/');
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

      setTimeout(
        () => {
          window.location.href = `${import.meta.env.VITE_AUTHORISATION_URL}`;
        },
        1000 * 60 * 60,
      );
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
      if(loginStatus) {
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
          console.log(
            "🚀 ~ fetchTotalInventory ~ userProfileResult:",
            userProfileResult,
          );
          const characterIds =
            userProfileResult.Response.profile.data.characterIds;
          console.log("🚀 ~ fetchTotalInventory ~ characterIds:", characterIds);
          document.getElementsByClassName("characterIds")[0].innerHTML = `Character IDs: ${characterIds[0]}, ${characterIds[1]}, ${characterIds[2]}`;

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
  
            const characterInventoryResult = await characterInventoryResponse.json();
            console.log(
              "🚀 ~ fetchTotalInventory ~ characterInventoryResult:",
              characterInventoryResult,
            );
            const characterInventory =
            characterInventoryResult.Response;
            console.log("🚀 ~ fetchTotalInventory ~ characterInventory:", characterInventory)
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

  useEffect(() => {
    const fetchManifest = async () => {
      // const apiKey = `${import.meta.env.VITE_BUNGIE_API_KEY}`;
      
      if(loginStatus) {
        try {
          // fetch Manifest
        const manifestResponse = await fetch(
          "https://www.bungie.net/Platform/Destiny2/Manifest/",
          {
            method: "GET",
            headers: {
            },
            body: null,
          },
        );

        const manifestResult = await manifestResponse.json();
        // console.log("🚀 ~ fetchManifest ~ manifestResult:", manifestResult)
        const manifestData = manifestResult.Response.mobileWorldContentPaths.en
        console.log("🚀 ~ fetchManifest ~ manifestData:", manifestData)
        // localStorage.setItem(
        //   "localManifestData",
        //   manifestData,
        // );
        // console.log('manifest from localstorage', localStorage.getItem("localManifestData"))


        // setManifest(manifestResult.Response.mobileWorldContentPaths.en)
        // console.log("🚀 ~ fetchManifest ~ manifest:", manifest)
        
                // const compressed = new Uint8Array(
                //   await fetch(localStorage.getItem("localManifestData")).then(res => res.arrayBuffer())
                // );
                // // Above example with Node.js Buffers:
                // // Buffer.from('H4sIAAAAAAAAE8tIzcnJBwCGphA2BQAAAA==', 'base64');
                
                // const decompressed = fflate.decompressSync(compressed);
                // // const decompressed = fflate.unzipSync(manifestData);
                // console.log("🚀 ~ fetchManifest ~ decompressed:", decompressed)
        
                // const unzipped = new fflate.Unzip(manifestData);
                // console.log("🚀 ~ fetchManifest ~ unzipper:", unzipped)
                

// const compressed = deflate(manifestData);

//                 const unzippedFiles = parse(compressed);
//                 console.log("🚀 ~ fetchManifest ~ unzippedFiles:", unzippedFiles)





// This is an ArrayBuffer of data
const massiveFileBuf = await fetch(manifestData).then(
  res => res.arrayBuffer()
);
// To use fflate, you need a Uint8Array
const massiveFile = new Uint8Array(massiveFileBuf);
// Note that Node.js Buffers work just fine as well:
// const massiveFile = require('fs').readFileSync('aMassiveFile.txt');

// Higher level means lower performance but better compression
// The level ranges from 0 (no compression) to 9 (max compression)
// The default level is 6
const notSoMassive = fflate.zlibSync(massiveFile, { level: 9 });
const massiveAgain = fflate.unzlibSync(notSoMassive);
// console.log("🚀 ~ fetchManifest ~ massiveAgain:", massiveAgain)






        // TODO Add manifest save to a usestate, to use it with the inventory bits for the future

        const sqlPromise = initSqlJs({ 
          // locateFile: file => `https://sql.js.org/dist/${file}`
          locateFile: file => `/node_modules/sql.js/dist/${file}`
        });
        const dataPromise = fetch(massiveAgain).then(res => res.arrayBuffer());
        const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
        const db = new SQL.Database(new Uint8Array(buf));
        // db;
        console.log("DB:", db)

        // ghorn ID: 1363886209

// Prepare an sql statement
const stmt = db.prepare("SELECT * FROM DestinyInventoryItemDefinition WHERE id=:aval");

// Bind values to the parameters and fetch the results of the query
const result = stmt.getAsObject({':aval' : 1363886209});
console.log(result); // Will print {a:1, b:'world'}

        
        
        // setDb(new SQL.Database(new Uint8Array(buf)));
        // console.log(db)



//         const db = new sqlite3.Database(manifestData);

// db.serialize(() => {
//     db.run("CREATE TABLE lorem (info TEXT)");

//     const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (let i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//         console.log(row.id + ": " + row.info);
//     });
// });

// db.close();


        
      } catch (error) {
        console.error("Error fetching Manifest", error);
      }
      }
    };
    fetchManifest();
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
        {/* <button className='loginBtn'>Login</button> */}
      </div>

      <div className="content">Character items here. Also inventory below.</div>
      <p className="accessToken">Access Token (Copy and put into localhost for url param):</p>
      <p className="characterIds">Character IDs:</p>
      {/* { loginStatus ?
    <p>{loginStatus}</p>: null} */}
    </>
  );
}

export default App;
