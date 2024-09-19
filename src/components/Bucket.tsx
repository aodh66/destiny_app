// import React from 'react';
import ItemCard from "./ItemCard";
import {
  // itemObjType,
  itemArrayType,
  // characterObjType,
  //   dataStateType,
} from "../CustomTypes";

type value = [string, itemArrayType];

const Bucket = (bucket: value) => {
  // console.log("🚀 ~ Bucket ~ bucket:", bucket)
  if (!bucket) {
    console.log("Bucket component has undefined data");
    return <></>;
  }

  // Object.entries(bucket).map((value) => {
  //     console.log("🚀 ~ BucketsCard ~ Object.entries(bucket).map ~ value:", value)
  //     console.log("🚀 ~ BucketsCard ~ Object.entries(bucket).map ~ value[1][0]:", value[1][0])
  // })

  return (
    <>
      {bucket &&
        bucket[1].map((item, key) => {
          let uniqueKey = item.hash + key
          let id;
          if (!isNaN(item.itemInstanceId)) {
            uniqueKey = item.itemInstanceId + key
            id = item.itemInstanceId
          }
          return (
            <div className="item" key={uniqueKey}  id={`${id}`}>
              <ItemCard {...item} />
            </div>
          );
        })}
    </>
  );
};

export default Bucket;
