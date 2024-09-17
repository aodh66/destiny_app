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
    <div className={`item ${item.equipped}`} key={item.hash}>
      <div className="iconBox" title={`${item.name} - ${item.rarity + " " + item.itemType}`}>
        <img
          className="itemIcon"
          src={`https://www.bungie.net${item.icon}`}
          alt="item icon"
        />
        <p className="itemInstance">{item.instance}</p>
      </div>
      {/* <div className="itemInfo">
        <p className="itemName">{item.name}</p>
        <p className="itemRarity itemType">
          {item.rarity + " " + item.itemType}
        </p>
        <p className="itemFlavourText">{item.flavorText}</p>
      </div> */}
    </div>
  );
};

export default ItemCard;
