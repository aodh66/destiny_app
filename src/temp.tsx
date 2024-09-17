// // SQL query chunking 
// const testArr : hashArr = [
//     {
//       bucketHash: 1498876634,
//       itemHash: 347366834,
//       itemInstanceId: 0,
//     },
//     {
//       bucketHash: 3448274439,
//       itemHash: 2255073244,
//       itemInstanceId: 0,
//     },
//     {
//       bucketHash: 2465295065,
//       itemHash: 4184808992,
//       itemInstanceId: 0,
//     },
//     {
//       bucketHash: 1585787867,
//       itemHash: 265279665,
//       itemInstanceId: 0,
//     },
//     {
//       bucketHash: 1498876634,
//       itemHash: 347366834,
//       itemInstanceId: 0,
//     },
//   ]
//     function queryString(manifestTable : string, hashArray : hashArr) {
//       manifestTable;
//       let itemQuery = `USE DATABASE Manifest.sqlite;`
//       hashArray.forEach((item) => {
//       itemQuery = itemQuery.concat(' ', `SELECT * FROM ${`DestinyInventoryItemDefinition`} WHERE id + 4294967296 = ${item.itemHash} OR id = ${item.itemHash}
//       UNION`)
//       })
//       itemQuery = itemQuery.slice(0,-8).concat('', ';')
      
//       let bucketQuery = `USE DATABASE Manifest.sqlite;`
//       hashArray.forEach((item) => {
//       bucketQuery = bucketQuery.concat(' ', `SELECT * FROM ${`DestinyInventoryBucketDefinition`} WHERE id + 4294967296 = ${item.bucketHash} OR id = ${item.bucketHash}
//       UNION`)
//       })
//       bucketQuery = bucketQuery.slice(0,-8).concat('', ';')
      
//       const queryObj = {
//         itemQuery: itemQuery,
//         bucketQuery: bucketQuery,
//       }
      
//       return queryObj;
//     }
  
//     // const dbQueryObj = queryString("DestinyInventoryItemDefinition", testArr);
//     // // console.log("🚀 ~ getInventory ~ dbQuery:", dbQueryObj)
  
//     //   const db = new Database(
//     //     `${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`,
//     //   );
//                 // const result = await db.sql(dbQueryObj.itemQuery);
//                 // console.log("🚀 ~ getAllData ~ result:", result)
//                 // const resultBucket = await db.sql(dbQueryObj.bucketQuery);
//                 // console.log("🚀 ~ getAllData ~ resultBucket:", resultBucket)
  
//                 // const resultJson = JSON.parse(result[0].json);
//                 // console.log("🚀 ~ getAllData ~ resultJson:", resultJson)
  
//                 // result[index].id is the hash or the hash + 4294967296 to let you find the right one
//                 // result[index].json is the actual object with all of the data













  // Figure out how you want to structure the function to call the DB, and get items out of it
  // ! likely need to set up the DB accessing object for mapping onto the correct table based
  // ! on the place it's being called from. Also need to chunk the requests for efficiency.
  // ! Previous attempt to get SQL query chunking up and running
// const testArr : hashArr = [
//   {
//     bucketHash: 1498876634,
//     itemHash: 347366834,
//     itemInstanceId: 0,
//   },
//   {
//     bucketHash: 3448274439,
//     itemHash: 2255073244,
//     itemInstanceId: 0,
//   },
//   {
//     bucketHash: 2465295065,
//     itemHash: 4184808992,
//     itemInstanceId: 0,
//   },
//   {
//     bucketHash: 1585787867,
//     itemHash: 265279665,
//     itemInstanceId: 0,
//   },
//   {
//     bucketHash: 1498876634,
//     itemHash: 347366834,
//     itemInstanceId: 0,
//   },
// ]
//   function queryString(manifestTable : string, hashArray : hashArr) {
//     manifestTable;
//     let itemQuery = `USE DATABASE Manifest.sqlite;`
//     hashArray.forEach((item) => {
//     itemQuery = itemQuery.concat(' ', `SELECT * FROM ${`DestinyInventoryItemDefinition`} WHERE id + 4294967296 = ${item.itemHash} OR id = ${item.itemHash}
//     UNION`)
//     })
//     itemQuery = itemQuery.slice(0,-8).concat('', ';')
    
//     let bucketQuery = `USE DATABASE Manifest.sqlite;`
//     hashArray.forEach((item) => {
//     bucketQuery = bucketQuery.concat(' ', `SELECT * FROM ${`DestinyInventoryBucketDefinition`} WHERE id + 4294967296 = ${item.bucketHash} OR id = ${item.bucketHash}
//     UNION`)
//     })
//     bucketQuery = bucketQuery.slice(0,-8).concat('', ';')
    
//     const queryObj = {
//       itemQuery: itemQuery,
//       bucketQuery: bucketQuery,
//     }
    
//     return queryObj;
//   }

//   const dbQueryObj = queryString("DestinyInventoryItemDefinition", testArr);
//   console.log("🚀 ~ getInventory ~ dbQuery:", dbQueryObj)

//   const testQuery = `USE DATABASE Manifest.sqlite; 
//   SELECT * FROM DestinyInventoryItemDefinition WHERE id + 4294967296 = ${testArr[0]} OR id = ${testArr[0]}
//   UNION
//   SELECT * FROM DestinyInventoryItemDefinition WHERE id + 4294967296 = ${testArr[1]} OR id = ${testArr[1]};`
//   // console.log("🚀 ~ getInventory ~ testQuery:", testQuery)

  

//     const db = new Database(
//       `${import.meta.env.VITE_SQLITE_CONNECTION_STRING}`,
//     );
//               const result = await db.sql(dbQueryObj.itemQuery);
//               console.log("🚀 ~ getAllData ~ result:", result)
//               const resultBucket = await db.sql(dbQueryObj.bucketQuery);
//               console.log("🚀 ~ getAllData ~ resultBucket:", resultBucket)

//               // const resultJson = JSON.parse(result[0].json);
//               // console.log("🚀 ~ getAllData ~ resultJson:", resultJson)

//               // result[index].id is the hash or the hash + 4294967296 to let you find the right one
//               // result[index].json is the actual object with all of the data