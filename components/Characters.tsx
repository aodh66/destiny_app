import React from 'react';
// import { ItemCard } from "./ItemCard";
// import {itemObjType, itemArrayType, characterObjType, dataStateType} from "../src/CustomTypes"
// let i:itemObjType;
// let a:itemArrayType;
// let e:characterObjType;
// let h:dataStateType;


// interface ExampleProps {
//   projects: ExampleProp[];
// }

const Characters = (data) => {

    for (const [key, value] of Object.entries(
        data,
      )) {
        console.log(`${key}: ${value}`);
        // return (
        //     <div className=""></div>
        // )











        // console.log(`key: ${key}, value: ${value}`);
        // if (itemObj.bucket === value) {
        //   key;
        //   dataObj[
        //     characterIds[charNum] as keyof object
        //   ].characterObj[
        //     key as keyof characterObjType
        //   ].push(itemObj);
        // }
      }











  return (
<div className="characters">
    
</div>










  );
};

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