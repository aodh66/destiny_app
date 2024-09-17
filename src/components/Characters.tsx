// import React from "react";
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

const Characters = ({ data }: propType) => {
  if (!data) {
    console.log("Character component has undefined data");
    return <></>;
  }
  console.log("🚀 ~ Characters ~ data:", data);

  // console.log(
  //   "Characters component subclass icon path",
  //   data[0].characterObj.subclass[0].icon,
  // );

  return (
    <>
      {data &&
        data.map((char) => {
          // if (!char) {
          //   console.log(`Character component has undefined data`);
          //   return <></>;
          // }
          return (
            <div className="character" key={char.characterId}>
              <div className="charHead">
                {char.characterObj.subclass[0].icon ? (
                  <img
                    className="charIcon"
                    src={`https://www.bungie.net${char.characterObj.subclass[0].icon}`}
                    alt="character subclass icon"
                  />
                ) : (
                  <></>
                )}
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

export default Characters;
