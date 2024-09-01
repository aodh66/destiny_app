// import React from 'react';
import {
  itemObjType,
  //   itemArrayType,
  //   characterObjType,
  //   dataStateType,
} from "../CustomTypes";

const ItemCard = (item: itemObjType) => {
  if (!item) {
    console.log("Item component has undefined data");
    return <></>;
  }
  // console.log("🚀 ~ ItemCard ~ item:", item)
  return (
    <div className="item" key={item.hash}>
      <img
        className="itemIcon"
        src={`https://www.bungie.net${item.icon}`}
        alt="item icon"
      />
      <div className="itemInfo">
        <p className="itemName">{item.name}</p>
        <p className="itemRarity itemType">
          {item.rarity + " " + item.itemType}
        </p>
        <p className="itemFlavourText">{item.flavorText}</p>
      </div>
      {/* <p>{JSON.stringify(item)}</p> */}
    </div>
  );
};

export default ItemCard;
