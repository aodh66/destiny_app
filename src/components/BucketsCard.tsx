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

  return (
    <>
      {bucket &&
        Object.entries(bucket).map((value) => (
          // if (value[0] === "subclass") {return}
          <div className={`bucket ${value[0]}`} key={value[0]}>
            <h3 className="bucketTitle">{value[1][0].bucket}</h3>
            <div className="bucketContent">
              <Bucket {...value} />
              </div>
          </div>
        ))}
    </>
  );
};

export default BucketsCard;
