// import React from "react";
// import ItemCard from "./ItemCard";
import BucketsCard from "./BucketsCard";
import {
  // itemObjType,
  // itemArrayType,
  // characterObjType,
  dataStateType,
} from "../CustomTypes";

type propType = {
  data: dataStateType;
};

const Characters = (
  { data }: propType,
  // data
) => {
  if (!data) {
    console.log("Character component has undefined data");
    return <></>;
  }
  // console.log("🚀 ~ Characters ~ prop:", prop)
  // console.log("🚀 ~ Characters ~ prop.data:", prop.data)
  console.log("🚀 ~ Characters ~ data:", data);
  // data;

  // ! Testing
  // if (data[0].characterObj.subclass[0]?.icon) {

  
    // console.log(
    //   "Characters component subclass icon path",
    //   data[0].characterObj.subclass[0].icon,
    // );
  
  // }
  // console.log("test", data[0].characterObj.subclass.find((item) => {
  //   if (item.equipped == true)
  //     // console.log(item)
  //    {return item.icon}
  //   })!.icon)

  // console.log("🚀 ~ Characters ~ data.map:", data[0].characterObj.kineticWeapons.map((item:itemObjType) => {
  //   // item;
  //   // console.log(item)
  //   return item.name
  //   // <ItemCard {...item}/>
  //   }))

  return (
    <>
      {data &&
        data.map((char) => {
          // item;
          // console.log(item)
          // return item.name
          return (
            <div className="character">
              <div className="charHead">
                {char.characterObj.subclass[0].icon && (
                  <img
                    className="charIcon"
                    src={`https://www.bungie.net${char.characterObj.subclass[0].icon}`}
                    alt="character subclass icon"
                  />
                )}
                {/* {data[0].characterObj.subclass[0]?.icon && <img src={`https://www.bungie.net/common/destiny2_content/icons/41c0024ce809085ac16f4e0777ea0ac4.png`} alt="character subclass icon"/>} */}
                <h2 className="charTitle">{char.race + " " + char.class}</h2>
              </div>

              <div className="buckets">
                <BucketsCard {...char.characterObj} />
              </div>
            </div>
          );
        })}
    </>
  );
};

// {char.characterObj && for (const [key, value] of char.characterObj) {
//   console.log(`${key}: ${value}`)
//   return (
//     <div className="kineticWeapons">
//     {/* <h3 className="bucketTitle">{data[0].characterObj[]}</h3> */}
//     {/* {data[0].characterObj.kineticWeapons[0] && data[0].characterObj.kineticWeapons.map((item) => {
//       // item;
//       // console.log(item)
//       // return item.name
//       return <ItemCard {...item}/>
//       })} */}
//       {/* <ItemCard {...char.characterObj.kineticWeapons[0]}/> */}

//       </div>

// char.characterObj.map((char) => {
// return (
// test
// )})

//   <div className="character">
//     <div>
//       {data[0].characterObj.subclass[0].icon && <img src={`https://www.bungie.net${data[0].characterObj.subclass[0]?.icon}`} alt="character subclass icon"/>}
//       {/* {data[0].characterObj.subclass[0]?.icon && <img src={`https://www.bungie.net/common/destiny2_content/icons/41c0024ce809085ac16f4e0777ea0ac4.png`} alt="character subclass icon"/>} */}
//       <h2 className="charTitle">{data[0].race + " " + data[0].class}</h2>
//     </div>
//     <div className="kineticWeapons">
//       {/* <h3 className="bucketTitle">{data[0].characterObj[]}</h3> */}
//       {/* {data[0].characterObj.kineticWeapons[0] && data[0].characterObj.kineticWeapons.map((item) => {
// // item;
// // console.log(item)
// // return item.name
// return <ItemCard {...item}/>
// })} */}
//         {/* <ItemCard {...data[0].characterObj.kineticWeapons[0]}/> */}

//     </div>
//   </div>

// console.log(`key: ${key}, value: ${value}`);
// if (itemObj.bucket === value) {
//   key;
//   dataObj[
//     characterIds[charNum] as keyof object
//   ].characterObj[
//     key as keyof characterObjType
//   ].push(itemObj);
// }
// }

// return <div className="characters"></div>;

export default Characters;

// (<div className="align-items-center mb-6 flex flex-col">
//   <h2 className="mb-2 text-3xl font-semibold">Portfolio</h2>
//   <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
//     {projects.map((project: ExampleProp) => (
//       <Card {...project} />
//     ))}
//   </div>
//   <div className="mt-2">
//     <Link href={`/portfolio`} className="link justify-self-end text-lg">
//       More Projects
//     </Link>
//   </div>
// </div>)
