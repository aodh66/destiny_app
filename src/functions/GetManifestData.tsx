import {
  hashArr,
} from "../CustomTypes";

import { Database } from "@sqlitecloud/drivers";

// * takes manifest table and a hash array
// * gets manifest data from SQLite Cloud
// * returns the SQLite response
async function getManifestData(
  manifestTable: string,
  hashArray: hashArr | undefined,
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
