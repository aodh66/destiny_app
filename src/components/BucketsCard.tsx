// import React from 'react';
import ItemCard from "./ItemCard";
import {
  // itemObjType,
  //   itemArrayType,
  characterObjType,
  //   dataStateType,
} from "../CustomTypes";

// interface ExampleProps {
//   projects: ExampleProp[];
// }

const BucketsCard = (bucket: characterObjType) => {
//   console.log("🚀 ~ BucketsCard ~ bucket:", bucket);
  if (!bucket) {
    console.log("Bucket component has undefined data");
    return <></>;
  }
  // console.log("🚀 ~ ItemCard ~ item:", item)

  // Object.entries(bucket).map((value) => {
  //     console.log("🚀 ~ BucketsCard ~ Object.entries(bucket).map ~ value:", value)
  //     console.log("🚀 ~ BucketsCard ~ Object.entries(bucket).map ~ value[1][0]:", value[1][0])
  // })

  return (
    <>
      {bucket &&
        Object.entries(bucket).map((value) => (
          <div className={`bucket ${value[0]}`}>
            <h3 className="bucketTitle">{value[1][0].bucket}</h3>
            <ItemCard {...value[1][0]} />
          </div>
        ))}
    </>
  );
};

export default BucketsCard;
