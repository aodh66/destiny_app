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

import { Database } from "@sqlitecloud/drivers";

// * takes initialisedData
// * gets character inventories from bungie,
// * parses them,
// * sets them into initialisedData
// * returns initialisedData
async function getManifestData(
  manifestTable: string,
  hashArray: hashArr | undefined,
  // hashArray2: hashArr | undefined,
) {
  // exit if not given a manifest table or hash array
  if (!manifestTable || !hashArray) {
    return undefined;
  }

  const db = new Database(`${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`);

  let query = `USE DATABASE Manifest.sqlite;`;

  // get item info from SQLite Cloud
  if (manifestTable === "DestinyInventoryItemDefinition") {
    hashArray.forEach((item) => {
      query = query.concat(
        " ",
        `SELECT * FROM ${manifestTable} WHERE id + 4294967296 = ${item.itemHash} OR id = ${item.itemHash}
      UNION`,
      );
    });
  } 
  // else if (manifestTable === "DestinyInventoryBucketDefinition") {
  //   hashArray.forEach((item) => {
  //     query = query.concat(
  //       " ",
  //       `SELECT * FROM ${manifestTable} WHERE id + 4294967296 = ${item.bucketHash} OR id = ${item.bucketHash}
  //     UNION`,
  //     );
  //   });
  //   if (hashArray2) {
  //     hashArray2.forEach((item) => {
  //       query = query.concat(
  //         " ",
  //         `SELECT * FROM ${manifestTable} WHERE id + 4294967296 = ${item.bucketHash} OR id = ${item.bucketHash}
  //         UNION`,
  //       );
  //     });
  //   }
  // }
  query = query.slice(0, -8).concat("", ";");

  try {
    const queryResult = await db.sql(query);
    // console.log("🚀 ~ queryResult:", queryResult)
    return queryResult;
  } catch (error) {
    console.log("🚀 ~ getItemData ~ error:", error);
  }
}

export default getManifestData;
