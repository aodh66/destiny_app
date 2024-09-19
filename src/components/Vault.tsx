// import React from "react";
import ItemCard from "./ItemCard";
import {
  bigDataType
} from "../CustomTypes";

type propType = {
  data: bigDataType;
};

const Vault = ({ data }: propType) => {
  if (!data) {
    console.log("Vault component has undefined data");
    return <></>;
  }
  // console.log("🚀 ~ Vault ~ data:", data);

  return (
    <>

        <div className={`bucket vault`} key={"vault"}>
        <h2 className="bucketTitle">Vault</h2>
        <div className="bucketContent">
        {data.vault &&
        data.vault.map((item, key) => {
          let uniqueKey = item.hash + key
          let id;
          if (!isNaN(item.itemInstanceId)) {
            uniqueKey = item.itemInstanceId + key
            id = item.itemInstanceId
          }
          
          return (
            <div className="item" key={uniqueKey} id={`${id}`}>
              <ItemCard {...item} />
            </div>
          );
        })}
          </div>
      </div>
    </>
  );
};

export default Vault;
