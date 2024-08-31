import { useState, useEffect } from "react";
// import "./main.scss";
import "./App.css";
// import mainStyles from "./main.scss";

import { Database } from "@sqlitecloud/drivers";

import {
  itemObjType,
  itemArrayType,
  characterObjType,
  dataStateType,
  // singleCharacterType,
} from "./CustomTypes";
import Characters from "./components/Characters";

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

// type itemObjType = {
//   hash: number;
//   bucketHash: number;
//   tableId: string;
//   name: string;
//   icon: string;
//   flavorText: string;
//   rarity: string;
//   itemType: string;
//   bucket: string;
//   equipped: boolean;
// };
// type itemArrayType = itemObjType[];
// type characterObjType = {
//   kineticWeapons: itemArrayType;
//   energyWeapons: itemArrayType;
//   heavyWeapons: itemArrayType;
//   helmet: itemArrayType;
//   arms: itemArrayType;
//   chest: itemArrayType;
//   legs: itemArrayType;
//   classItem: itemArrayType;
//   ghost: itemArrayType;
//   // banner: itemArrayType;
//   emblem: itemArrayType;
//   ship: itemArrayType;
//   sparrow: itemArrayType;
//   // emotes: itemArrayType;
//   inventory: itemArrayType;
//   subclass: itemArrayType;
// };
// // type itemArrayType = [itemObjType];
// type dataStateType = {
//   [propName: string]: {
//     raceType: string;
//     raceHash: string;
//     classType: string;
//     classHash: string;
//     race: string;
//     class: string;
//     emblemBackgroundPath: string;
//     characterObj: {
//       kineticWeapons: itemArrayType;
//       energyWeapons: itemArrayType;
//       heavyWeapons: itemArrayType;
//       helmet: itemArrayType;
//       arms: itemArrayType;
//       chest: itemArrayType;
//       legs: itemArrayType;
//       classItem: itemArrayType;
//       ghost: itemArrayType;
//       // banner: itemArrayType;
//       emblem: itemArrayType;
//       ship: itemArrayType;
//       sparrow: itemArrayType;
//       // emotes: itemArrayType;
//       inventory: itemArrayType;
//       subclass: itemArrayType;
//     };
//   };
// };
// const initialDataArr: dataStateType = [
//   {
//     characterId: "",
//     raceType: "",
//     raceHash: "",
//     classType: "",
//     classHash: "",
//     race: "",
//     class: "",
//     emblemBackgroundPath: "",
//     characterObj: {
//       kineticWeapons: [] as itemArrayType,
//       energyWeapons: [] as itemArrayType,
//       heavyWeapons: [] as itemArrayType,
//       helmet: [] as itemArrayType,
//       arms: [] as itemArrayType,
//       chest: [] as itemArrayType,
//       legs: [] as itemArrayType,
//       classItem: [] as itemArrayType,
//       ghost: [] as itemArrayType,
//       // banner: [] as itemArrayType,
//       emblem: [] as itemArrayType,
//       ship: [] as itemArrayType,
//       sparrow: [] as itemArrayType,
//       // emotes: [] as itemArrayType,
//       inventory: [] as itemArrayType,
//       subclass: [] as itemArrayType,
//     },
//   },
//   {
//     characterId: "",
//     raceType: "",
//     raceHash: "",
//     classType: "",
//     classHash: "",
//     race: "",
//     class: "",
//     emblemBackgroundPath: "",
//     characterObj: {
//       kineticWeapons: [] as itemArrayType,
//       energyWeapons: [] as itemArrayType,
//       heavyWeapons: [] as itemArrayType,
//       helmet: [] as itemArrayType,
//       arms: [] as itemArrayType,
//       chest: [] as itemArrayType,
//       legs: [] as itemArrayType,
//       classItem: [] as itemArrayType,
//       ghost: [] as itemArrayType,
//       // banner: [] as itemArrayType,
//       emblem: [] as itemArrayType,
//       ship: [] as itemArrayType,
//       sparrow: [] as itemArrayType,
//       // emotes: [] as itemArrayType,
//       inventory: [] as itemArrayType,
//       subclass: [] as itemArrayType,
//     },
//   },
//   {
//     characterId: "",
//     raceType: "",
//     raceHash: "",
//     classType: "",
//     classHash: "",
//     race: "",
//     class: "",
//     emblemBackgroundPath: "",
//     characterObj: {
//       kineticWeapons: [] as itemArrayType,
//       energyWeapons: [] as itemArrayType,
//       heavyWeapons: [] as itemArrayType,
//       helmet: [] as itemArrayType,
//       arms: [] as itemArrayType,
//       chest: [] as itemArrayType,
//       legs: [] as itemArrayType,
//       classItem: [] as itemArrayType,
//       ghost: [] as itemArrayType,
//       // banner: [] as itemArrayType,
//       emblem: [] as itemArrayType,
//       ship: [] as itemArrayType,
//       sparrow: [] as itemArrayType,
//       // emotes: [] as itemArrayType,
//       inventory: [] as itemArrayType,
//       subclass: [] as itemArrayType,
//     },
//   },
// ];

function App() {
  const [loginState, setLoginState] = useState(false); // to track if it's logged in, and therefore whether the button is there
  // const [data, setData] = useState([]);
  // Todo if this authtoken state is not used, then get rid of it, it's currently set and never called
  // const [authToken, setAuthToken] = useState(null); // auth token that will be used in requests and put into localstorage
  // const [db, setDb] = useState<any | null>(null);
  const [data, setData] = useState<dataStateType | undefined>(undefined); // * for the initial load data?, or do I separate it into the individual sections?
  // ! Kill this if you aren't using it
  const [doneFetching, setDoneFetching] = useState(false)
  doneFetching;
  // const [char1, setChar1] = useState({})
  // console.log("props", Object.getOwnPropertyNames(data).length)
  // const hashDict = {
  //   DestinyActivityDefinition: "activityHash",
  //   DestinyActivityTypeDefinition: "activityTypeHash",
  //   DestinyClassDefinition: "classHash",
  //   DestinyGenderDefinition: "genderHash",
  //   DestinyInventoryBucketDefinition: "bucketHash",
  //   DestinyInventoryItemDefinition: "itemHash",
  //   DestinyProgressionDefinition: "progressionHash",
  //   DestinyRaceDefinition: "raceHash",
  //   DestinyTalentGridDefinition: "gridHash",
  //   DestinyUnlockFlagDefinition: "flagHash",
  //   DestinyHistoricalStatsDefinition: "statId",
  //   DestinyDirectorBookDefinition: "bookHash",
  //   DestinyStatDefinition: "statHash",
  //   DestinySandboxPerkDefinition: "perkHash",
  //   DestinyDestinationDefinition: "destinationHash",
  //   DestinyPlaceDefinition: "placeHash",
  //   DestinyActivityBundleDefinition: "bundleHash",
  //   DestinyStatGroupDefinition: "statGroupHash",
  //   DestinySpecialEventDefinition: "eventHash",
  //   DestinyFactionDefinition: "factionHash",
  //   DestinyVendorCategoryDefinition: "categoryHash",
  //   DestinyEnemyRaceDefinition: "raceHash",
  //   DestinyScriptedSkullDefinition: "skullHash",
  //   DestinyGrimoireCardDefinition: "cardId",
  // };

  // dataStateType;
  // hashDict;
  // setData(null)
  // authToken;
  // data;

  // * UseEffect that logs in the user and then gets their character inventories to set the data object
  // useEffect(() => {
  //   const fetchAuthToken = async () => {
  //     // Clear local storage on initial load
  //     // localStorage.removeItem("localAuthToken");
  //     // ! REENABLE THIS, ONLY GONE DUE TO LOCAL TESTING TO STOP ERRORS
  //     // localStorage.clear();
  //     const urlParams = new URL(document.location.toString()).searchParams;
  //     const apiKey = `${import.meta.env.VITE_BUNGIE_API_KEY}`;
  //     const authCode = urlParams.get("code");
  //     // console.log("🚀 ~ fetchAuthToken ~ authCode:", authCode)

  //     if (authCode) {
  //       document.getElementsByClassName("loadingMessage")[0].innerHTML =
  //         "Getting user authorisation.";
  //       // console.log("🚀 ~ authCode:", authCode);
  //       const data = `client_id=${import.meta.env.VITE_OAUTH_CLIENT_ID}&grant_type=authorization_code&code=${authCode}`;
  //       history.pushState(null, "DiVA | Destiny Vault App", "/");
  //       // try to get auth token
  //       try {
  //         const authTokenResponse = await fetch(
  //           "https://www.bungie.net/Platform/App/OAuth/Token/",
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/x-www-form-urlencoded",
  //               "X-API-Key": apiKey,
  //             },
  //             body: data,
  //           },
  //         );

  //         const authTokenResult = await authTokenResponse.json();
  //         if (!authTokenResult.error) {
  //           // console.log(
  //           //   "🚀 ~ fetchAuthToken ~ authTokenResult:",
  //           //   authTokenResult,
  //           // );
  //           document.getElementsByClassName("accessToken")[0].innerHTML =
  //             `Access Token (Copy and put into localhost for url param): ${authTokenResult.access_token}`;
  //           localStorage.setItem(
  //             "localAuthToken",
  //             JSON.stringify(authTokenResult),
  //           );
  //           document.getElementsByClassName("loadingMessage")[0].innerHTML =
  //             "User authorised.";
  //           // setAuthToken(authTokenResult);

  //           // try to get user account data using auth token
  //           try {
  //             document.getElementsByClassName("loadingMessage")[0].innerHTML =
  //               "Getting user data";
  //             const userDataResponse = await fetch(
  //               "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/",
  //               {
  //                 method: "GET",
  //                 headers: {
  //                   "X-API-Key": apiKey,
  //                   Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
  //                 },
  //                 body: null,
  //               },
  //             );

  //             setLoginState(true);
  //             // const login = true
  //             const userDataResult = await userDataResponse.json();
  //             // console.log(
  //             //   "🚀 ~ fetchAuthToken ~ userDataResult:",
  //             //   userDataResult,
  //             // );
  //             document.getElementsByClassName("username")[0].innerHTML =
  //               userDataResult.Response.uniqueName;
  //             document
  //               .getElementsByClassName("userIcon")[0]
  //               .setAttribute(
  //                 "src",
  //                 `https://www.bungie.net${userDataResult.Response.profilePicturePath.replaceAll("'", "")}`,
  //               );

  //             if (userDataResult) {
  //               // console.log("🚀 ~ fetchTotalInventory ~ loginState:", loginState)
  //               try {
  //                 // console.log(JSON.parse(localStorage.getItem("localAuthToken")!).access_token)
  //                 // fetch Membership type and ID
  //                 const userMembershipsResponse = await fetch(
  //                   "https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/",
  //                   {
  //                     method: "GET",
  //                     headers: {
  //                       "X-API-Key": apiKey,
  //                       Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
  //                     },
  //                     body: null,
  //                   },
  //                 );

  //                 const userMembershipsResult =
  //                   await userMembershipsResponse.json();
  //                 // console.log(
  //                 //   "🚀 ~ fetchAuthToken ~ userMembershipsResult:",
  //                 //   userMembershipsResult,
  //                 // );
  //                 const membershipType =
  //                   userMembershipsResult.Response.destinyMemberships[0]
  //                     .membershipType;
  //                 const membershipId =
  //                   userMembershipsResult.Response.destinyMemberships[0]
  //                     .membershipId;
  //                 // console.log(
  //                 //   "🚀 ~ fetchAuthToken ~ userMembershipsResult type and id:",
  //                 //   userMembershipsResult.Response.destinyMemberships[0].membershipType,
  //                 //   userMembershipsResult.Response.destinyMemberships[0].membershipId,
  //                 // );
  //                 document.getElementsByClassName(
  //                   "loadingMessage",
  //                 )[0].innerHTML = "User data received.";

  //                 // fetch character ids
  //                 try {
  //                   document.getElementsByClassName(
  //                     "loadingMessage",
  //                   )[0].innerHTML = "Getting character data.";
  //                   const userProfileResponse = await fetch(
  //                     `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=Profiles`,
  //                     {
  //                       method: "GET",
  //                       headers: {
  //                         "X-API-Key": apiKey,
  //                         Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
  //                       },
  //                     },
  //                   );

  //                   const userProfileResult = await userProfileResponse.json();
  //                   // console.log(
  //                   //   "🚀 ~ fetchTotalInventory ~ userProfileResult:",
  //                   //   userProfileResult,
  //                   // );
  //                   const characterIds =
  //                     userProfileResult.Response.profile.data.characterIds;
  //                   console.log(
  //                     "🚀 ~ fetchTotalInventory ~ characterIds:",
  //                     characterIds,
  //                   );
  //                   document.getElementsByClassName(
  //                     "characterIds",
  //                   )[0].innerHTML =
  //                     `Character IDs: ${characterIds[0]}, ${characterIds[1]}, ${characterIds[2]}`;

  //                   const userProfileResponse2 = await fetch(
  //                     `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=Characters`,
  //                     {
  //                       method: "GET",
  //                       headers: {
  //                         "X-API-Key": apiKey,
  //                         Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
  //                       },
  //                     },
  //                   );

  //                   const userProfileResult2 =
  //                     await userProfileResponse2.json();
  //                   // console.log(
  //                   //   "🚀 ~ fetchTotalInventory ~ userProfileResult2:",
  //                   //   userProfileResult2,
  //                   // );
  //                   // console.log("drill", userProfileResult2.Response.characters.data[characterIds[0]])
  //                   document.getElementsByClassName(
  //                     "loadingMessage",
  //                   )[0].innerHTML = "Character data received.";

  //                   // * Initialise big data object
  //                   // ! Could initialise an array, then push each thing into it, then make an actual dataStateType equal to it?
  //                   let dataState: dataStateType = [
  //                     {
  //                       characterId: `${characterIds[0]}`,
  //                       raceType: `${userProfileResult2.Response.characters.data[characterIds[0]].raceType}`,
  //                       raceHash: `${userProfileResult2.Response.characters.data[characterIds[0]].raceHash}`,
  //                       classType: `${userProfileResult2.Response.characters.data[characterIds[0]].classType}`,
  //                       classHash: `${userProfileResult2.Response.characters.data[characterIds[0]].classHash}`,
  //                       race: "",
  //                       class: "",
  //                       emblemBackgroundPath: `${userProfileResult2.Response.characters.data[characterIds[0]].emblemBackgroundPath}`,
  //                       characterObj: {
  //                         kineticWeapons: [] as itemArrayType,
  //                         energyWeapons: [] as itemArrayType,
  //                         heavyWeapons: [] as itemArrayType,
  //                         helmet: [] as itemArrayType,
  //                         arms: [] as itemArrayType,
  //                         chest: [] as itemArrayType,
  //                         legs: [] as itemArrayType,
  //                         classItem: [] as itemArrayType,
  //                         ghost: [] as itemArrayType,
  //                         // banner: [] as itemArrayType,
  //                         emblem: [] as itemArrayType,
  //                         ship: [] as itemArrayType,
  //                         sparrow: [] as itemArrayType,
  //                         // emotes: [] as itemArrayType,
  //                         inventory: [] as itemArrayType,
  //                         subclass: [] as itemArrayType,
  //                       },
  //                     },
  //                     {
  //                       characterId: `${characterIds[1]}`,
  //                       raceType: `${userProfileResult2.Response.characters.data[characterIds[1]].raceType}`,
  //                       raceHash: `${userProfileResult2.Response.characters.data[characterIds[1]].raceHash}`,
  //                       classType: `${userProfileResult2.Response.characters.data[characterIds[1]].classType}`,
  //                       classHash: `${userProfileResult2.Response.characters.data[characterIds[1]].classHash}`,
  //                       race: "",
  //                       class: "",
  //                       emblemBackgroundPath: `${userProfileResult2.Response.characters.data[characterIds[1]].emblemBackgroundPath}`,
  //                       characterObj: {
  //                         kineticWeapons: [] as itemArrayType,
  //                         energyWeapons: [] as itemArrayType,
  //                         heavyWeapons: [] as itemArrayType,
  //                         helmet: [] as itemArrayType,
  //                         arms: [] as itemArrayType,
  //                         chest: [] as itemArrayType,
  //                         legs: [] as itemArrayType,
  //                         classItem: [] as itemArrayType,
  //                         ghost: [] as itemArrayType,
  //                         // banner: [] as itemArrayType,
  //                         emblem: [] as itemArrayType,
  //                         ship: [] as itemArrayType,
  //                         sparrow: [] as itemArrayType,
  //                         // emotes: [] as itemArrayType,
  //                         inventory: [] as itemArrayType,
  //                         subclass: [] as itemArrayType,
  //                       },
  //                     },
  //                     {
  //                       characterId: `${characterIds[2]}`,
  //                       raceType: `${userProfileResult2.Response.characters.data[characterIds[2]].raceType}`,
  //                       raceHash: `${userProfileResult2.Response.characters.data[characterIds[2]].raceHash}`,
  //                       classType: `${userProfileResult2.Response.characters.data[characterIds[2]].classType}`,
  //                       classHash: `${userProfileResult2.Response.characters.data[characterIds[2]].classHash}`,
  //                       race: "",
  //                       class: "",
  //                       emblemBackgroundPath: `${userProfileResult2.Response.characters.data[characterIds[2]].emblemBackgroundPath}`,
  //                       characterObj: {
  //                         kineticWeapons: [] as itemArrayType,
  //                         energyWeapons: [] as itemArrayType,
  //                         heavyWeapons: [] as itemArrayType,
  //                         helmet: [] as itemArrayType,
  //                         arms: [] as itemArrayType,
  //                         chest: [] as itemArrayType,
  //                         legs: [] as itemArrayType,
  //                         classItem: [] as itemArrayType,
  //                         ghost: [] as itemArrayType,
  //                         // banner: [] as itemArrayType,
  //                         emblem: [] as itemArrayType,
  //                         ship: [] as itemArrayType,
  //                         sparrow: [] as itemArrayType,
  //                         // emotes: [] as itemArrayType,
  //                         inventory: [] as itemArrayType,
  //                         subclass: [] as itemArrayType,
  //                       },
  //                     },
  //                   ];
  //                   // console.log("🚀 ~ fetchAuthToken ~ dataState just declared:", dataState)

  //                   // * Set character classes and races
  //                   dataState.map((element) => {
  //                     // console.log("🚀 ~ dataState.map ~ element:", element)
  //                     // console.log("🚀 ~ dataState.map ~ index:", index)
  //                     const raceDict = {
  //                       Human: "0",
  //                       Awoken: "1",
  //                       Exo: "2",
  //                     };
  //                     const classDict = {
  //                       Titan: "0",
  //                       Hunter: "1",
  //                       Warlock: "2",
  //                     };
  //                     for (const [key, value] of Object.entries(raceDict)) {
  //                       if (value === element.raceType) {
  //                         element.race = key;
  //                       }
  //                     }
  //                     for (const [key, value] of Object.entries(classDict)) {
  //                       if (value === element.classType) {
  //                         element.class = key;
  //                       }
  //                     }
  //                   });

  //                   setData(dataState);
  //                   // console.log("first setData", data)
  //                   document.getElementsByClassName(
  //                     "loadingMessage",
  //                   )[0].innerHTML = "Character data initialised.";

  //                   // * Function to populate data object with char items
  //                   const setCharacterInventories = async (
  //                     dataObj: dataStateType,
  //                     charNum: number,
  //                   ) => {
  //                     // console.log("🚀 ~ setCharacterInventories ~ dataObj:", dataObj)
  //                     // * Fetch character inventories
  //                     try {
  //                       const characterInventoryResponse = await fetch(
  //                         `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/Character/${dataObj[charNum].characterId}/?components=CharacterInventories,CharacterEquipment`,
  //                         {
  //                           method: "GET",
  //                           headers: {
  //                             "X-API-Key": apiKey,
  //                             Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
  //                           },
  //                         },
  //                       );

  //                       const characterInventoryResult =
  //                         await characterInventoryResponse.json();
  //                       // console.log(
  //                       //   "🚀 ~ fetchTotalInventory ~ characterInventoryResult:",
  //                       //   characterInventoryResult,
  //                       // );
  //                       const characterInventory =
  //                         characterInventoryResult.Response;
  //                       // console.log(
  //                       //   "🚀 ~ fetchTotalInventory ~ characterInventory:",
  //                       //   characterInventory,
  //                       // );
  //                       // console.log("test", characterInventory.equipment.data.items)

  //                       type hashArr = [
  //                         {
  //                           itemHash: number;
  //                           bucketHash: number;
  //                         },
  //                       ];

  //                       // * Function to call sqlite server to retrieve character item info and populate the data object
  //                       const getCharacterInventoryData = async (
  //                         hashArray: hashArr,
  //                         equipBool: boolean,
  //                       ) => {
  //                         const db = new Database(
  //                           `${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`,
  //                         );
  //                         // hashArray.forEach((id) => {

  //                         // })
  //                         // const dataObj : dataStateType = data;
  //                         // console.log("🚀 ~ //getCharacterInventoryData ~ data:", data)
  //                         // console.log("🚀 ~ //getCharacterInventoryData ~ dataObj:", dataObj)
  //                         // const hashArray : hashArr = characterInventory.equipment.data.items;
  //                         // const equipBool = true;
  //                         for (const id of hashArray) {
  //                           // Get item info
  //                           const result = await db.sql`
  //     USE DATABASE Manifest.sqlite;
  //     SELECT * FROM DestinyInventoryItemDefinition WHERE id + 4294967296 = ${id.itemHash} OR id = ${id.itemHash};`;
  //                           // console.log("🚀 ~ hashArray.forEach ~ result:", result)
  //                           const resultJson = JSON.parse(result[0].json);
  //                           // console.log("🚀 ~ getInventoryData ~ resultJson:", resultJson)

  //                           // Get bucket name
  //                           const bucketResult = await db.sql`
  //     USE DATABASE Manifest.sqlite;
  //     SELECT * FROM DestinyInventoryBucketDefinition WHERE id + 4294967296 = ${id.bucketHash} OR id = ${id.bucketHash};`;
  //                           // console.log("🚀 ~ getInventoryData ~ bucketResult:", bucketResult)
  //                           const bucketResultJson = JSON.parse(
  //                             bucketResult[0].json,
  //                           );
  //                           // console.log(
  //                           //   "🚀 ~ getInventoryData ~ bucketResultJson:",
  //                           //   bucketResultJson,
  //                           // );

  //                           const itemObj: itemObjType = {
  //                             hash: id.itemHash,
  //                             bucketHash: id.bucketHash,
  //                             tableId: result[0].id,
  //                             name: resultJson.displayProperties.name,
  //                             icon: resultJson.displayProperties.icon,
  //                             flavorText: resultJson.flavorText,
  //                             rarity: resultJson.inventory.tierTypeName,
  //                             itemType: resultJson.itemTypeDisplayName,
  //                             bucket: bucketResultJson.displayProperties.name,
  //                             equipped: equipBool,
  //                           };
  //                           // console.log("🚀 ~ getInventoryData ~ itemObj:", itemObj);
  //                           const bucketSelect = {
  //                             kineticWeapons: "Kinetic Weapons",
  //                             energyWeapons: "Energy Weapons",
  //                             heavyWeapons: "Power Weapons",
  //                             helmet: "Helmet",
  //                             arms: "Gauntlets",
  //                             chest: "Chest Armor",
  //                             legs: "Leg Armor",
  //                             classItem: "Class Armor",
  //                             ghost: "Ghost",
  //                             // "banner": "Clan Banners",
  //                             emblem: "Emblems",
  //                             ship: "Ships",
  //                             sparrow: "Vehicle",
  //                             // "emotes": "Emotes",
  //                             // "inventory": "",
  //                             subclass: "Subclass",
  //                             // "finishers": "Finishers",
  //                           };

  //                           for (const [key, value] of Object.entries(
  //                             bucketSelect,
  //                           )) {
  //                             // console.log(`key: ${key}, value: ${value}`);
  //                             if (itemObj.bucket === value) {
  //                               key;
  //                               dataObj[charNum].characterObj[
  //                                 key as keyof characterObjType
  //                               ].push(itemObj);
  //                             }
  //                           }
  //                         }
  //                         // console.log(
  //                         //   "🚀 ~ fetchTotalInventory ~ dataObj with arrays:",
  //                         //   dataObj,
  //                         // );
  //                         setData(dataObj);
  //                         return dataObj;
  //                       };
  //                       // const datarelay = data as dataStateType;
  //                       // * Call the function twice to populate the equipped items and the unequipped ones
  //                       dataObj = await getCharacterInventoryData(
  //                         characterInventory.equipment.data.items,
  //                         true,
  //                       );
  //                       // ! For testing disable this to have the DB load faster
  //                       dataObj = await getCharacterInventoryData(
  //                         characterInventory.inventory.data.items,
  //                         false,
  //                       );

  //                       return dataObj;
  //                       // console.log(
  //                       //   "🚀 ~ getCharacterInventoryData ~ dataState post charinv:",
  //                       //   dataState,
  //                       // );
  //                     } catch (err) {
  //                       console.error(
  //                         "Error fetching character inventories:",
  //                         err,
  //                       );
  //                     }
  //                     return dataObj;
  //                   };
  //                   // * Call the inventory function 3 times to populate all characters
  //                   // dataState.map(async (element, index) => {
  //                   //   // This needs to be here to silence an error, I need the index of the thing, not the elements themselves
  //                   //   element;
  //                   //   document.getElementsByClassName("loadingMessage")[0].innerHTML = `Parsing character ${index} data.`;
  //                   //   dataState = await setCharacterInventories(dataState, index)
  //                   // })
  //                   dataState.forEach(async (element, index) => {
  //                     // This needs to be here to silence a warning, I need the index of the thing, not the elements themselves
  //                     element;
  //                     document.getElementsByClassName(
  //                       "loadingMessage",
  //                     )[0].innerHTML = `Parsing character ${index} data.`;
  //                     dataState = await setCharacterInventories(
  //                       dataState,
  //                       index,
  //                     );
  //                   });

  //                   console.log(
  //                     "🚀 ~ fetchAuthToken ~ dataState post sql:",
  //                     dataState,
  //                   );
  //                   setData([...dataState]);
  //                   document.getElementsByClassName(
  //                     "loadingMessage",
  //                   )[0].innerHTML = "Character data parsed.";
  //                   // setIsFetching(false)
  //                 } catch (error) {
  //                   console.error("Error fetching character IDs:", error);
  //                 }
  //               } catch (error) {
  //                 console.error("Error fetching membership ID:", error);
  //               }
  //             }
  //           } catch (err) {
  //             console.error("Error fetching user data:", err);
  //           }
  //         }
  //       } catch (error) {
  //         console.error("Error fetching auth token:", error);
  //       }
  //     }

  //     // TODO Issue here is that this check makes loginState required, and if I put it in as a dependancy below in the function, then for some reason the app is unable to get the membership id data
  //     //  if (loginState) {
  //     setTimeout(
  //       () => {
  //         window.location.href = `${import.meta.env.VITE_AUTHORISATION_URL}`;
  //       },
  //       1000 * 60 * 60,
  //     );
  //     // }
  //   };

  //   fetchAuthToken();
  // }, []);

  // ! New structure of useEffect where it's all split into functions
  useEffect(() => {
    async function getAllData() {
    const apiKey = `${import.meta.env.VITE_BUNGIE_API_KEY}`;
    const urlParams = new URL(document.location.toString()).searchParams;
    const authCode = urlParams.get("code");
    // if (authCode) {
      const authConfirm = await fetchAuthToken()
      // console.log("🚀 ~ getAllData ~ fetchAuthToken ~ authConfirm:", authConfirm)
      const userData = await fetchUserData(authConfirm)
      // console.log("🚀 ~ getAllData ~ fetchUserData ~ userData:", userData)
      const characterData = await fetchCharData(userData)
      // console.log("🚀 ~ getAllData ~ fetchCharData ~ characterData:", characterData)
      const dataState = await initialiseCharData(characterData)
      // console.log("🚀 ~ getAllData ~ initialiseCharData ~ dataState:", dataState)
      const parseData = await fetchAllCharInv(dataState, userData)
      console.log("🚀 ~ getAllData ~ fetchAllCharInv ~ parseData:", parseData)
      // const finishedFetching = await toggleDoneFetching(parseData)
      // console.log("🚀 ~ getAllData ~ finishedFetching:", finishedFetching)
      // finishedFetching;
      // setData(parseData)
      // }

      // async function toggleDoneFetching(parseData:dataStateType | undefined) {
      //   if (parseData) {
      //     setDoneFetching(true)
      //     return true
      //   }
      // }

//       for (const [key, value] of parseData[0].characterObj) {
//         console.log(`${key}: ${value}`);
// }

      
                     
                    // }

    // * doesn't take any arguments, if anything apikey
    // * gets and sets the auth token in localStorage
    // * returns authConfirm boolean nothing
    async function fetchAuthToken(
      // urlParams : string,
      // authCode : string,
    ) {
      if (!authCode) {
        return false
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
                  "X-API-Key": apiKey,
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
              return true
            }
          // }
      } catch (error) {
        console.log("🚀 ~ fetchAuthToken ~ error:", error)
      }
    }
    


    // * takes authConfirm if anything, 
    // * grabs api key from localstorage, gets the user data, 
    // * returns userData, object with the membershipType and membershipId (userprofileresult)
    async function fetchUserData(
      authConfirm : boolean | undefined,
    ) {
      if (!authConfirm) {
        return undefined
      } 
      else if (!localStorage.getItem("localAuthToken")) {
        return undefined
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

                  const userMembershipsResult =
                    await userMembershipsResponse.json();
                  
                    const userData = {
                    membershipType: userMembershipsResult.Response.destinyMemberships[0].membershipType,
                    membershipId: userMembershipsResult.Response.destinyMemberships[0]
                      .membershipId,
                  }
                  // console.log("🚀 ~ useEffect ~ userData:", userData)
                  
                  document.getElementsByClassName(
                    "loadingMessage",
                  )[0].innerHTML = "User data received.";
                  
                  return userData
                }
              // }
      } catch (error) {
        console.log("🚀 ~ fetchUserData ~ error:", error)
      }
    }

    // * takes userData, apikey
    // * gets character data
    // * returns characterData, with the char ids and basic info (userprofileresult2)
    type userDataType = {
      membershipType: number;
      membershipId: string;
    }
    async function fetchCharData(
      userData: userDataType | undefined,
    ) {
      if (!userData) {
        return undefined
      }
      try {
        document.getElementsByClassName(
          "loadingMessage",
        )[0].innerHTML = "Getting character data.";
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

        const characterData =
        await characterDataResponse2.json();
        // console.log("🚀 ~ getAllData ~ characterData:", characterData.Response.characters.data)

          const characterDataObj = {
            characterIds: characterIds,
          // JSON.stringify(characterData),
          characterData: characterData.Response.characters.data,
          }

        document.getElementsByClassName(
          "loadingMessage",
        )[0].innerHTML = "Character data received.";

        return characterDataObj
      } catch (error) {
        console.log("🚀 ~ fetchCharData ~ error:", error)
      }
    }

    // * takes characterData
    // * initialises the big data object, sets its values with the characterData stuff, sets the race and class, calls setData()
    // * returns dataState
    // ! type structure here
    type characterDataObjType = {
      characterIds: string[];
      characterData: {
        [propType: string]: {
          raceType: string;
          raceHash: string;
          classType: string;
          classHash: string;
          emblemBackgroundPath: string;
        }
      }
    }
    async function initialiseCharData(
      characterDataObj : characterDataObjType | undefined,
      // characterData : characterData,
      // characterIds : characterIdType,
    ) {
      // console.log("🚀 ~ getAllData ~ characterDataObj:", characterDataObj)
      
      if (!characterDataObj) {
        return undefined
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

                    document.getElementsByClassName(
                      "loadingMessage",
                    )[0].innerHTML = "Character data initialised.";

                    // console.log("first setData", data)
                    // setData(dataState);
                    return dataState
      } catch (error) {
        console.log("🚀 ~ initialiseCharData ~ error:", error)
      }
    }

    // * takes dataState and index of dataState as charNum
    // * gets the character inventory data (equipped and unequippied) and puts it in charInv, calls parseCharInv to set it on the big data obj, calls setData()
    // * returns dataState as parseData
    async function fetchAllCharInv(
      preBucketData: dataStateType | undefined,
      userData: userDataType | undefined,
    ) {
      if (!preBucketData) {
        return undefined
      } else if (!userData) {
        return undefined
      }
      try {
        preBucketData.forEach(async (element, index) => {
          // This needs to be here to silence a warning, I need the index of the thing, not the elements themselves
                        element;
                        document.getElementsByClassName(
                          "loadingMessage",
                        )[0].innerHTML = `Parsing character ${index} data.`;

                        preBucketData = await fetchCharInv(
                          preBucketData,
                          userData,
                          index,
                        );
                        return preBucketData
                      });
                      // const parseData = preBucketData;
                      
                      // console.log("🚀 ~ getAllData ~ parseData:", parseData)

                      
                      // document.getElementsByClassName(
                      //   "loadingMessage",
                      // )[0].innerHTML = "All characters parsed.";
                      // document.getElementsByClassName(
                        //   "loadingMessage",
                        // )[0].classList = "transparent";
                        // setData(preBucketData)
                        // setDoneFetching(true)

                      return preBucketData
      } catch (error) {
        console.log("🚀 ~ getAllData ~ error:", error)
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
        return undefined
      } else if (!userData) {
        return undefined
      } else if (charNum === undefined) {
        return undefined
      }
      try {
        document.getElementsByClassName(
          "loadingMessage",
        )[0].innerHTML = `Fetching character ${charNum+1} inventory.`;
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
        
        const characterInventory =
        characterInventoryResult.Response;
        // console.log("🚀 ~ useEffect ~ characterInventory:", characterInventory)
        
        // * Call parseCharInv function twice to populate the equipped items and the unequipped ones
        document.getElementsByClassName(
          "loadingMessage",
        )[0].innerHTML = `Parsing character ${charNum+1} inventory.`;

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

      document.getElementsByClassName(
        "loadingMessage",
      )[0].innerHTML = `Character ${charNum+1} inventory parsed.`;

      // console.log("🚀 ~ getAllData ~ preBucketData.length:", preBucketData.length)
      // console.log("🚀 ~ getAllData ~ charNum:", charNum)
      if (charNum === preBucketData.length-1) {
        document.getElementsByClassName(
          "loadingMessage",
        )[0].innerHTML = "All characters parsed.";
        setData(parseData)
        setDoneFetching(true)
      }
      
      // console.log("🚀 ~ fetchCharInv ~ parseData:", parseData)
      return parseData;
    } catch (error) {
      console.log("🚀 ~ fetchCharInv ~ error:", error)
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
        const bucketResultJson = JSON.parse(
          bucketResult[0].json,
        );
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

        for (const [key, value] of Object.entries(
          bucketSelect,
        )) {
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
      console.log("🚀 ~ parseCharInv ~ error:", error)
    }
    }

    // ! BEING REPLACED
    // ! BEING REPLACED
    // ! BEING REPLACED
    // ! BEING REPLACED
    // ! BEING REPLACED
    // ! BEING REPLACED
    // ! BEING REPLACED
    // const fetchAuthToken = async () => {
    //   // Clear local storage on initial load
    //   // localStorage.removeItem("localAuthToken");
    //   // ! REENABLE THIS, ONLY GONE DUE TO LOCAL TESTING TO STOP ERRORS
    //   // localStorage.clear();
    //   const urlParams = new URL(document.location.toString()).searchParams;
    //   const authCode = urlParams.get("code");
    //   // console.log("🚀 ~ fetchAuthToken ~ authCode:", authCode)
      
    //   if (authCode) {
    //     document.getElementsByClassName("loadingMessage")[0].innerHTML =
    //       "Getting user authorisation.";
    //     // console.log("🚀 ~ authCode:", authCode);
    //     const data = `client_id=${import.meta.env.VITE_OAUTH_CLIENT_ID}&grant_type=authorization_code&code=${authCode}`;
    //     history.pushState(null, "DiVA | Destiny Vault App", "/");
    //     // try to get auth token
    //     try {
    //       const authTokenResponse = await fetch(
    //         "https://www.bungie.net/Platform/App/OAuth/Token/",
    //         {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             "X-API-Key": apiKey,
    //           },
    //           body: data,
    //         },
    //       );

    //       const authTokenResult = await authTokenResponse.json();
    //       if (!authTokenResult.error) {
    //         // console.log(
    //         //   "🚀 ~ fetchAuthToken ~ authTokenResult:",
    //         //   authTokenResult,
    //         // );
    //         document.getElementsByClassName("accessToken")[0].innerHTML =
    //           `Access Token (Copy and put into localhost for url param): ${authTokenResult.access_token}`;
    //         localStorage.setItem(
    //           "localAuthToken",
    //           JSON.stringify(authTokenResult),
    //         );
    //         document.getElementsByClassName("loadingMessage")[0].innerHTML =
    //           "User authorised.";
    //         // setAuthToken(authTokenResult);

    //         // try to get user account data using auth token
    //         try {
    //           document.getElementsByClassName("loadingMessage")[0].innerHTML =
    //             "Getting user data";
    //           const userDataResponse = await fetch(
    //             "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/",
    //             {
    //               method: "GET",
    //               headers: {
    //                 "X-API-Key": apiKey,
    //                 Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
    //               },
    //               body: null,
    //             },
    //           );

    //           setLoginState(true);
    //           // const login = true
    //           const userDataResult = await userDataResponse.json();
    //           // console.log(
    //           //   "🚀 ~ fetchAuthToken ~ userDataResult:",
    //           //   userDataResult,
    //           // );
    //           document.getElementsByClassName("username")[0].innerHTML =
    //             userDataResult.Response.uniqueName;
    //           document
    //             .getElementsByClassName("userIcon")[0]
    //             .setAttribute(
    //               "src",
    //               `https://www.bungie.net${userDataResult.Response.profilePicturePath.replaceAll("'", "")}`,
    //             );

    //           if (userDataResult) {
    //             // console.log("🚀 ~ fetchTotalInventory ~ loginState:", loginState)
    //             try {
    //               // console.log(JSON.parse(localStorage.getItem("localAuthToken")!).access_token)
    //               // fetch Membership type and ID
    //               const userMembershipsResponse = await fetch(
    //                 "https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/",
    //                 {
    //                   method: "GET",
    //                   headers: {
    //                     "X-API-Key": apiKey,
    //                     Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
    //                   },
    //                   body: null,
    //                 },
    //               );

    //               const userMembershipsResult =
    //                 await userMembershipsResponse.json();
    //               // console.log(
    //               //   "🚀 ~ fetchAuthToken ~ userMembershipsResult:",
    //               //   userMembershipsResult,
    //               // );
    //               const membershipType =
    //                 userMembershipsResult.Response.destinyMemberships[0]
    //                   .membershipType;
    //               const membershipId =
    //                 userMembershipsResult.Response.destinyMemberships[0]
    //                   .membershipId;
    //               // console.log(
    //               //   "🚀 ~ fetchAuthToken ~ userMembershipsResult type and id:",
    //               //   userMembershipsResult.Response.destinyMemberships[0].membershipType,
    //               //   userMembershipsResult.Response.destinyMemberships[0].membershipId,
    //               // );
    //               document.getElementsByClassName(
    //                 "loadingMessage",
    //               )[0].innerHTML = "User data received.";

    //               // fetch character ids
    //               try {
    //                 document.getElementsByClassName(
    //                   "loadingMessage",
    //                 )[0].innerHTML = "Getting character data.";
    //                 const userProfileResponse = await fetch(
    //                   `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=Profiles`,
    //                   {
    //                     method: "GET",
    //                     headers: {
    //                       "X-API-Key": apiKey,
    //                       Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
    //                     },
    //                   },
    //                 );

    //                 const userProfileResult = await userProfileResponse.json();
    //                 // console.log(
    //                 //   "🚀 ~ fetchTotalInventory ~ userProfileResult:",
    //                 //   userProfileResult,
    //                 // );
    //                 const characterIds =
    //                   userProfileResult.Response.profile.data.characterIds;
    //                 console.log(
    //                   "🚀 ~ fetchTotalInventory ~ characterIds:",
    //                   characterIds,
    //                 );
    //                 document.getElementsByClassName(
    //                   "characterIds",
    //                 )[0].innerHTML =
    //                   `Character IDs: ${characterIds[0]}, ${characterIds[1]}, ${characterIds[2]}`;

    //                 const userProfileResponse2 = await fetch(
    //                   `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=Characters`,
    //                   {
    //                     method: "GET",
    //                     headers: {
    //                       "X-API-Key": apiKey,
    //                       Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
    //                     },
    //                   },
    //                 );

    //                 const userProfileResult2 =
    //                   await userProfileResponse2.json();
    //                 // console.log(
    //                 //   "🚀 ~ fetchTotalInventory ~ userProfileResult2:",
    //                 //   userProfileResult2,
    //                 // );
    //                 // console.log("drill", userProfileResult2.Response.characters.data[characterIds[0]])
    //                 document.getElementsByClassName(
    //                   "loadingMessage",
    //                 )[0].innerHTML = "Character data received.";

    //                 // * Initialise big data object
    //                 // ! Could initialise an array, then push each thing into it, then make an actual dataStateType equal to it?
    //                 let dataState: dataStateType = [
    //                   {
    //                     characterId: `${characterIds[0]}`,
    //                     raceType: `${userProfileResult2.Response.characters.data[characterIds[0]].raceType}`,
    //                     raceHash: `${userProfileResult2.Response.characters.data[characterIds[0]].raceHash}`,
    //                     classType: `${userProfileResult2.Response.characters.data[characterIds[0]].classType}`,
    //                     classHash: `${userProfileResult2.Response.characters.data[characterIds[0]].classHash}`,
    //                     race: "",
    //                     class: "",
    //                     emblemBackgroundPath: `${userProfileResult2.Response.characters.data[characterIds[0]].emblemBackgroundPath}`,
    //                     characterObj: {
    //                       kineticWeapons: [] as itemArrayType,
    //                       energyWeapons: [] as itemArrayType,
    //                       heavyWeapons: [] as itemArrayType,
    //                       helmet: [] as itemArrayType,
    //                       arms: [] as itemArrayType,
    //                       chest: [] as itemArrayType,
    //                       legs: [] as itemArrayType,
    //                       classItem: [] as itemArrayType,
    //                       ghost: [] as itemArrayType,
    //                       // banner: [] as itemArrayType,
    //                       emblem: [] as itemArrayType,
    //                       ship: [] as itemArrayType,
    //                       sparrow: [] as itemArrayType,
    //                       // emotes: [] as itemArrayType,
    //                       inventory: [] as itemArrayType,
    //                       subclass: [] as itemArrayType,
    //                     },
    //                   },
    //                   {
    //                     characterId: `${characterIds[1]}`,
    //                     raceType: `${userProfileResult2.Response.characters.data[characterIds[1]].raceType}`,
    //                     raceHash: `${userProfileResult2.Response.characters.data[characterIds[1]].raceHash}`,
    //                     classType: `${userProfileResult2.Response.characters.data[characterIds[1]].classType}`,
    //                     classHash: `${userProfileResult2.Response.characters.data[characterIds[1]].classHash}`,
    //                     race: "",
    //                     class: "",
    //                     emblemBackgroundPath: `${userProfileResult2.Response.characters.data[characterIds[1]].emblemBackgroundPath}`,
    //                     characterObj: {
    //                       kineticWeapons: [] as itemArrayType,
    //                       energyWeapons: [] as itemArrayType,
    //                       heavyWeapons: [] as itemArrayType,
    //                       helmet: [] as itemArrayType,
    //                       arms: [] as itemArrayType,
    //                       chest: [] as itemArrayType,
    //                       legs: [] as itemArrayType,
    //                       classItem: [] as itemArrayType,
    //                       ghost: [] as itemArrayType,
    //                       // banner: [] as itemArrayType,
    //                       emblem: [] as itemArrayType,
    //                       ship: [] as itemArrayType,
    //                       sparrow: [] as itemArrayType,
    //                       // emotes: [] as itemArrayType,
    //                       inventory: [] as itemArrayType,
    //                       subclass: [] as itemArrayType,
    //                     },
    //                   },
    //                   {
    //                     characterId: `${characterIds[2]}`,
    //                     raceType: `${userProfileResult2.Response.characters.data[characterIds[2]].raceType}`,
    //                     raceHash: `${userProfileResult2.Response.characters.data[characterIds[2]].raceHash}`,
    //                     classType: `${userProfileResult2.Response.characters.data[characterIds[2]].classType}`,
    //                     classHash: `${userProfileResult2.Response.characters.data[characterIds[2]].classHash}`,
    //                     race: "",
    //                     class: "",
    //                     emblemBackgroundPath: `${userProfileResult2.Response.characters.data[characterIds[2]].emblemBackgroundPath}`,
    //                     characterObj: {
    //                       kineticWeapons: [] as itemArrayType,
    //                       energyWeapons: [] as itemArrayType,
    //                       heavyWeapons: [] as itemArrayType,
    //                       helmet: [] as itemArrayType,
    //                       arms: [] as itemArrayType,
    //                       chest: [] as itemArrayType,
    //                       legs: [] as itemArrayType,
    //                       classItem: [] as itemArrayType,
    //                       ghost: [] as itemArrayType,
    //                       // banner: [] as itemArrayType,
    //                       emblem: [] as itemArrayType,
    //                       ship: [] as itemArrayType,
    //                       sparrow: [] as itemArrayType,
    //                       // emotes: [] as itemArrayType,
    //                       inventory: [] as itemArrayType,
    //                       subclass: [] as itemArrayType,
    //                     },
    //                   },
    //                 ];
    //                 // console.log("🚀 ~ fetchAuthToken ~ dataState just declared:", dataState)

    //                 // * Set character classes and races
    //                 dataState.map((element) => {
    //                   // console.log("🚀 ~ dataState.map ~ element:", element)
    //                   // console.log("🚀 ~ dataState.map ~ index:", index)
    //                   const raceDict = {
    //                     Human: "0",
    //                     Awoken: "1",
    //                     Exo: "2",
    //                   };
    //                   const classDict = {
    //                     Titan: "0",
    //                     Hunter: "1",
    //                     Warlock: "2",
    //                   };
    //                   for (const [key, value] of Object.entries(raceDict)) {
    //                     if (value === element.raceType) {
    //                       element.race = key;
    //                     }
    //                   }
    //                   for (const [key, value] of Object.entries(classDict)) {
    //                     if (value === element.classType) {
    //                       element.class = key;
    //                     }
    //                   }
    //                 });

    //                 setData(dataState);
    //                 // console.log("first setData", data)
    //                 document.getElementsByClassName(
    //                   "loadingMessage",
    //                 )[0].innerHTML = "Character data initialised.";

    //                 // * Function to populate data object with char items
    //                 const setCharacterInventories = async (
    //                   dataObj: dataStateType,
    //                   charNum: number,
    //                 ) => {
    //                   // console.log("🚀 ~ setCharacterInventories ~ dataObj:", dataObj)
    //                   // * Fetch character inventories
    //                   try {
    //                     const characterInventoryResponse = await fetch(
    //                       `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/Character/${dataObj[charNum].characterId}/?components=CharacterInventories,CharacterEquipment`,
    //                       {
    //                         method: "GET",
    //                         headers: {
    //                           "X-API-Key": apiKey,
    //                           Authorization: `Bearer ${JSON.parse(localStorage.getItem("localAuthToken")!).access_token}`,
    //                         },
    //                       },
    //                     );

    //                     const characterInventoryResult =
    //                       await characterInventoryResponse.json();
    //                     // console.log(
    //                     //   "🚀 ~ fetchTotalInventory ~ characterInventoryResult:",
    //                     //   characterInventoryResult,
    //                     // );
    //                     const characterInventory =
    //                       characterInventoryResult.Response;
    //                     // console.log(
    //                     //   "🚀 ~ fetchTotalInventory ~ characterInventory:",
    //                     //   characterInventory,
    //                     // );
    //                     // console.log("test", characterInventory.equipment.data.items)

    //                     type hashArr = [
    //                       {
    //                         itemHash: number;
    //                         bucketHash: number;
    //                       },
    //                     ];

    //                     // * Function to call sqlite server to retrieve character item info and populate the data object
    //                     const getCharacterInventoryData = async (
    //                       hashArray: hashArr,
    //                       equipBool: boolean,
    //                     ) => {
    //                       const db = new Database(
    //                         `${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`,
    //                       );
    //                       // hashArray.forEach((id) => {

    //                       // })
    //                       // const dataObj : dataStateType = data;
    //                       // console.log("🚀 ~ //getCharacterInventoryData ~ data:", data)
    //                       // console.log("🚀 ~ //getCharacterInventoryData ~ dataObj:", dataObj)
    //                       // const hashArray : hashArr = characterInventory.equipment.data.items;
    //                       // const equipBool = true;
    //                       for (const id of hashArray) {
    //                         // Get item info
    //                         const result = await db.sql`
    //   USE DATABASE Manifest.sqlite;
    //   SELECT * FROM DestinyInventoryItemDefinition WHERE id + 4294967296 = ${id.itemHash} OR id = ${id.itemHash};`;
    //                         // console.log("🚀 ~ hashArray.forEach ~ result:", result)
    //                         const resultJson = JSON.parse(result[0].json);
    //                         // console.log("🚀 ~ getInventoryData ~ resultJson:", resultJson)

    //                         // Get bucket name
    //                         const bucketResult = await db.sql`
    //   USE DATABASE Manifest.sqlite;
    //   SELECT * FROM DestinyInventoryBucketDefinition WHERE id + 4294967296 = ${id.bucketHash} OR id = ${id.bucketHash};`;
    //                         // console.log("🚀 ~ getInventoryData ~ bucketResult:", bucketResult)
    //                         const bucketResultJson = JSON.parse(
    //                           bucketResult[0].json,
    //                         );
    //                         // console.log(
    //                         //   "🚀 ~ getInventoryData ~ bucketResultJson:",
    //                         //   bucketResultJson,
    //                         // );

    //                         const itemObj: itemObjType = {
    //                           hash: id.itemHash,
    //                           bucketHash: id.bucketHash,
    //                           tableId: result[0].id,
    //                           name: resultJson.displayProperties.name,
    //                           icon: resultJson.displayProperties.icon,
    //                           flavorText: resultJson.flavorText,
    //                           rarity: resultJson.inventory.tierTypeName,
    //                           itemType: resultJson.itemTypeDisplayName,
    //                           bucket: bucketResultJson.displayProperties.name,
    //                           equipped: equipBool,
    //                         };
    //                         // console.log("🚀 ~ getInventoryData ~ itemObj:", itemObj);
    //                         const bucketSelect = {
    //                           kineticWeapons: "Kinetic Weapons",
    //                           energyWeapons: "Energy Weapons",
    //                           heavyWeapons: "Power Weapons",
    //                           helmet: "Helmet",
    //                           arms: "Gauntlets",
    //                           chest: "Chest Armor",
    //                           legs: "Leg Armor",
    //                           classItem: "Class Armor",
    //                           ghost: "Ghost",
    //                           // "banner": "Clan Banners",
    //                           emblem: "Emblems",
    //                           ship: "Ships",
    //                           sparrow: "Vehicle",
    //                           // "emotes": "Emotes",
    //                           // "inventory": "",
    //                           subclass: "Subclass",
    //                           // "finishers": "Finishers",
    //                         };

    //                         for (const [key, value] of Object.entries(
    //                           bucketSelect,
    //                         )) {
    //                           // console.log(`key: ${key}, value: ${value}`);
    //                           if (itemObj.bucket === value) {
    //                             key;
    //                             dataObj[charNum].characterObj[
    //                               key as keyof characterObjType
    //                             ].push(itemObj);
    //                           }
    //                         }
    //                       }
    //                       // console.log(
    //                       //   "🚀 ~ fetchTotalInventory ~ dataObj with arrays:",
    //                       //   dataObj,
    //                       // );
    //                       setData(dataObj);
    //                       return dataObj;
    //                     };
    //                     // const datarelay = data as dataStateType;
    //                     // * Call the function twice to populate the equipped items and the unequipped ones
    //                     dataObj = await getCharacterInventoryData(
    //                       characterInventory.equipment.data.items,
    //                       true,
    //                     );
    //                     // ! For testing disable this to have the DB load faster
    //                     dataObj = await getCharacterInventoryData(
    //                       characterInventory.inventory.data.items,
    //                       false,
    //                     );

    //                     return dataObj;
    //                     // console.log(
    //                     //   "🚀 ~ getCharacterInventoryData ~ dataState post charinv:",
    //                     //   dataState,
    //                     // );
    //                   } catch (err) {
    //                     console.error(
    //                       "Error fetching character inventories:",
    //                       err,
    //                     );
    //                   }
    //                   return dataObj;
    //                 };
    //                 // * Call the inventory function 3 times to populate all characters
    //                 // dataState.map(async (element, index) => {
    //                 //   // This needs to be here to silence an error, I need the index of the thing, not the elements themselves
    //                 //   element;
    //                 //   document.getElementsByClassName("loadingMessage")[0].innerHTML = `Parsing character ${index} data.`;
    //                 //   dataState = await setCharacterInventories(dataState, index)
    //                 // })
    //                 dataState.forEach(async (element, index) => {
    //                   // This needs to be here to silence a warning, I need the index of the thing, not the elements themselves
    //                   element;
    //                   document.getElementsByClassName(
    //                     "loadingMessage",
    //                   )[0].innerHTML = `Parsing character ${index} data.`;
    //                   dataState = await setCharacterInventories(
    //                     dataState,
    //                     index,
    //                   );
    //                 });

    //                 console.log(
    //                   "🚀 ~ fetchAuthToken ~ dataState post sql:",
    //                   dataState,
    //                 );
    //                 setData([...dataState]);
    //                 document.getElementsByClassName(
    //                   "loadingMessage",
    //                 )[0].innerHTML = "Character data parsed.";
    //                 // setIsFetching(false)
    //               } catch (error) {
    //                 console.error("Error fetching character IDs:", error);
    //               }
    //             } catch (error) {
    //               console.error("Error fetching membership ID:", error);
    //             }
    //           }
    //         } catch (err) {
    //           console.error("Error fetching user data:", err);
    //         }
    //       }
    //     } catch (error) {
    //       console.error("Error fetching auth token:", error);
    //     }
    //   }

      // TODO Issue here is that this check makes loginState required, and if I put it in as a dependancy below in the function, then for some reason the app is unable to get the membership id data
      //  if (loginState) {
      setTimeout(
        () => {
          window.location.href = `${import.meta.env.VITE_AUTHORISATION_URL}`;
        },
        1000 * 60 * 60,
      );
      // }
    // };
  }
  getAllData()
    // fetchAuthToken();
  }, []);

  // ! Figure out how you want to structure the function to call the DB, and get items out of it
  // ! likely need to set up the DB accessing object for mapping onto the correct table based
  // ! on the place it's being called from. Also need to chunk the requests for efficiency.
  // useEffect(() => {
  //   const fetchInventory = async () => {
  //     if (loginState) {
  //       try {
  //         // Prepare an sql statement
  //         // const hash = 347366834;
  //         // const hash2 = 4184808992;
  //         //       const tableSelect = {
  //         // "classHash": "DestinyClassDefinition",
  //         // "genderHash": "DestinyGenderDefinition" ,
  //         // "bucketHash": "DestinyInventoryBucketDefinition",
  //         // "itemHash": "DestinyInventoryItemDefinition",
  //         // "raceHash": "DestinyRaceDefinition",
  //         // "perkHash": "DestinySandboxPerkDefinition",
  //         //       }
  //         const itemTable = "DestinyInventoryItemDefinition";
  //         const bucketTable = "DestinyInventoryBucketDefinition";
  //         // type hashArray = [
  //         //   {
  //         //     itemHash:number,
  //         //     bucketHash:number
  //         //   }, ...object[]
  //         // ]
  //         type hashObj = {
  //           itemHash: number;
  //           bucketHash: number;
  //         };

  //         const charHashArray = [
  //           { itemHash: 347366834, bucketHash: 1498876634 },
  //           { itemHash: 4184808992, bucketHash: 2465295065 },
  //           { itemHash: 1399243961, bucketHash: 953998645 },
  //           { itemHash: 2255073244, bucketHash: 3448274439 },
  //           // 4184808992,
  //           // 1399243961,
  //           // 2255073244
  //         ];
  //         // console.log("🚀 ~ fetchInventory ~ kineticHashObj:", kineticHashObj)
  //         // const stmt2 = db.prepare(`SELECT * FROM ${table} WHERE  id + 4294967296 = ${hash} OR id = ${hash}`);

  //         const db = new Database(
  //           `${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`,
  //         );

  //         // ! Test Request
  //         // const testHash = 3183180185;
  //         // const testHash = 358788212;
  //         // const testHash = 2255073244;
  //         const testHash = 1498876634;
  //         // const testTable = "DestinyInventoryItemDefinition";
  //         // ! The bucket or category of items (like kinetic weapon) is listed in the inventory
  //         // ! entry with its hash code initially under bucketHash, you then need to call
  //         // ! another sql request on the DestinyInventoryBucketDefinition table to give you the name
  //         // ! of the bucket.
  //         const testTable = "DestinyInventoryBucketDefinition";
  //         const testResult = await db.sql`
  // USE DATABASE Manifest.sqlite;
  // SELECT * FROM ${testTable} WHERE id + 4294967296 = ${testHash} OR id = ${testHash};`;
  //         // console.log("🚀 ~ fetchInventory ~ testResult:", testResult);
  //         const testResultJson = JSON.parse(testResult[0].json);
  //         testResultJson;
  //         // console.log("🚀 ~ fetchInventory ~ testResultJson:", testResultJson);

  //         // ! Temporary individual call function to get it running before server hosting is patched
  //         // ! Feed in the data object, then after each query, modify the object and setdata again
  //         const getInventoryData = async (
  //           manifestItemTable: string,
  //           manifestBucketTable: string,
  //           hashArray: Array<hashObj>,
  //         ) => {
  //           for (const id of hashArray) {
  //             // Get item info
  //             const result = await db.sql`
  // USE DATABASE Manifest.sqlite;
  // SELECT * FROM ${manifestItemTable} WHERE id + 4294967296 = ${id.itemHash} OR id = ${id.itemHash};`;
  //             // console.log("🚀 ~ hashArray.forEach ~ result:", result)
  //             // ! See if you can index directly into the JSON so you can directly make an object and save it to data
  //             const resultJson = JSON.parse(result[0].json);
  //             // console.log("🚀 ~ getInventoryData ~ resultJson:", resultJson)

  //             // Get bucket name
  //             const bucketResult = await db.sql`
  // USE DATABASE Manifest.sqlite;
  // SELECT * FROM ${manifestBucketTable} WHERE id + 4294967296 = ${id.bucketHash} OR id = ${id.bucketHash};`;
  //             // console.log("🚀 ~ getInventoryData ~ bucketResult:", bucketResult)
  //             const bucketResultJson = JSON.parse(bucketResult[0].json);
  //             // console.log(
  //             //   "🚀 ~ getInventoryData ~ bucketResultJson:",
  //             //   bucketResultJson,
  //             // );

  //             const itemObj = {
  //               hash: id.itemHash,
  //               bucketHash: id.bucketHash,
  //               tableId: result[0].id,
  //               name: resultJson.displayProperties.name,
  //               icon: resultJson.displayProperties.icon,
  //               flavorText: resultJson.flavorText,
  //               rarity: resultJson.inventory.tierTypeName,
  //               itemType: resultJson.itemTypeDisplayName,
  //               bucket: bucketResultJson.displayProperties.name,
  //               equipped: true,
  //             };
  //             // console.log("🚀 ~ getInventoryData ~ itemObj:", itemObj);
  //             return itemObj;
  //             // ! Modify the data object with setData
  //           }
  //         };
  //         getInventoryData(itemTable, bucketTable, charHashArray);

  //         // ! Previous attempt to get SQL query chunking up and running
  //         //           const getInventory = async () => {

  //         // function queryString(manifestTable : string, hashArray : Array<number>) {
  //         //   let query = `USE DATABASE Manifest.sqlite;`
  //         //   // let query = ``

  //         //   // console.log(hashArray.length)
  //         //   hashArray.forEach((hash : number) => {
  //         //   // console.log("🚀 ~ hashArray.forEach ~ hash:", hash)

  //         //     query = query.concat(' ', `SELECT * FROM ${manifestTable} WHERE id + 4294967296 = ${hash} OR id = ${hash};
  //         //   UNION;`)
  //         //   })
  //         //   // console.log("🚀 ~ queryString ~ query:", query)
  //         //   query = query.slice(0,-8).concat('', ';')
  //         //   // query = query.slice(0,-6)
  //         //   // console.log("🚀 ~ queryString ~ querySLICE:", query)
  //         //   // query = query.
  //         //   return query;
  //         // }

  //         // const dbQuery = queryString(table, kineticHashObj).trim();
  //         // // console.log("🚀 ~ getInventory ~ dbQuery:", dbQuery)
  //         // // console.log("🚀 ~ getInventory ~ dbQuery:", dbQuery.slice(30))

  //         // // const testQuery = `SELECT * FROM ${table} WHERE id + 4294967296 = ${hash} OR id = ${hash}
  //         // //   UNION
  //         // //   SELECT * FROM ${table} WHERE id + 4294967296 = ${hash2} OR id = ${hash2}`
  //         // // console.log("🚀 ~ getInventory ~ testQuery:", testQuery)

  //         //   //           const result = await db.sql`
  //         //   // USE DATABASE Manifest.sqlite;
  //         //   // SELECT * FROM ${table} WHERE id + 4294967296 = ${hash} OR id = ${hash}
  //         //   // UNION
  //         //   // SELECT * FROM ${table} WHERE id + 4294967296 = ${hash2} OR id = ${hash2}
  //         //   // ORDER BY id;`;
  //         //   // // // const result = await db.sql`
  //         //   // // // USE DATABASE Manifest.sqlite;
  //         //   // // // SELECT * FROM ${table} WHERE id + 4294967296 = ${hash} OR id = ${hash};`;
  //         //   // console.log("🚀 ~ getInventory ~ result:", result);
  //         //   // try {
  //         //   // const result2 = await db.sql`${dbQuery}`;
  //         //   //           console.log("🚀 ~ getInventory ~ result2:", result2)
  //         //   // } catch (error) {
  //         //     //   console.log('Error executing query:', error)
  //         //     //   throw error
  //         //     // }

  //         //     // const result3 = await db.sql`
  //         //     // USE DATABASE Manifest.sqlite; ${testQuery} ORDER BY id;`;
  //         //     //           console.log("🚀 ~ getInventory ~ result2:", result3)

  //         //             // setData(result);
  //         //           };

  //         // getInventory();
  //       } catch (error) {
  //         console.error("Error fetching Inventory", error);
  //       }
  //     }
  //   };
  //   fetchInventory();
  // }, [loginState]);

  // useEffect(() => {
  //  return (
  //   <>
  //     <Characters {...data}/>
  //   </>
  //  )
  // }, [data]);

  return (
    <>
      <div className="header">
        <div className="logoname five">DiVA</div>
        {loginState ? (
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

      <div className="characters">
        <p className="loadingMessage">
          Please log in with the button at the top right.
        </p>
        {data ? (
          // <Characters data={data} />
          <Characters {...{data}} />
          // <p>test</p>
        ) : (
          <p>Awaiting character data</p>
        )}
        {/* {data[0].characterObj.kineticWeapons[0].equipped ? (
          <Characters {...data} />
        ) : (
          <p>Awaiting character data</p>
        )} */}
        {/* <Characters {...data}/> */}
        {/* <p className="data">{JSON.stringify(data)}</p> */}
      </div>

      {/* <div className="debug">
        <div className="content">
          Character items here. Also inventory below.
        </div>
        <p className="accessToken">
          Access Token (Copy and put into localhost for url param):
        </p>
        <p className="characterIds">Character IDs:</p>
      </div> */}
    </>
  );
}

export default App;
