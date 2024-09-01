// import React from 'react';
import Bucket from "./Bucket";
import {
  // itemObjType,
  //   itemArrayType,
  characterObjType,
  //   dataStateType,
} from "../CustomTypes";

const BucketsCard = (bucket: characterObjType) => {
  //   console.log("🚀 ~ BucketsCard ~ bucket:", bucket);
  if (!bucket) {
    console.log("BucketCard component has undefined data");
    return <></>;
  }

  //   Object.entries(bucket).map((value) => {
  //       console.log("🚀 ~ BucketsCard ~ Object.entries(bucket).map ~ value:", value)
  //     //   console.log("🚀 ~ BucketsCard ~ Object.entries(bucket).map ~ value[1][0]:", value[1][0])
  //     //   console.log("🚀 ~ BucketsCard ~ Object.entries(bucket).map ~ value[1]:", value[1])
  //   })

  return (
    <>
      {bucket &&
        Object.entries(bucket).map((value) => (
          <div className={`bucket ${value[0]}`} key={value[0]}>
            <h3 className="bucketTitle">{value[1][0].bucket}</h3>

            <Bucket {...value} />
          </div>
        ))}
    </>
  );
};

export default BucketsCard;
