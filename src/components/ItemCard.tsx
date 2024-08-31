// import React from 'react';
import {
  itemObjType,
  //   itemArrayType,
  //   characterObjType,
  //   dataStateType,
} from "../CustomTypes";

// interface ExampleProps {
//   projects: ExampleProp[];
// }

const ItemCard = (item: itemObjType | undefined) => {
  if (!item) {
    return
  }
  // console.log("🚀 ~ ItemCard ~ item:", item)
  return (
  <div className="item">
    <img
                    className="itemIcon"
                    src={`https://www.bungie.net${item.icon}`}
                    alt="item icon"
                  />
    <div className="itemInfo">
      <p className="itemName">{item.name}</p>
      <p className="itemRarity itemType">{item.rarity + " " + item.itemType}</p>
      <p className="itemFlavourText">{item.flavorText}</p>
    </div>
    {/* <p>{JSON.stringify(item)}</p> */}
    </div>
)
  //   return (
  //     <div className="align-items-center mb-6 flex flex-col">
  //       <h2 className="mb-2 text-3xl font-semibold">Portfolio</h2>
  //       <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
  //         {projects.map((project: ExampleProp) => (
  //           <Card {...project} />
  //         ))}
  //       </div>
  //       <div className="mt-2">
  //         <Link href={`/portfolio`} className="link justify-self-end text-lg">
  //           More Projects
  //         </Link>
  //       </div>
  //     </div>
  //   );
};

export default ItemCard;
