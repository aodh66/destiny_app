type itemObjType = {
    hash: number;
    bucketHash: number;
    tableId: string;
    name: string;
    icon: string;
    flavorText: string;
    rarity: string;
    itemType: string;
    bucket: string;
    equipped: boolean;
  };
  type itemArrayType = itemObjType[];
  type characterObjType = {
    kineticWeapons: itemArrayType;
    energyWeapons: itemArrayType;
    heavyWeapons: itemArrayType;
    helmet: itemArrayType;
    arms: itemArrayType;
    chest: itemArrayType;
    legs: itemArrayType;
    classItem: itemArrayType;
    ghost: itemArrayType;
    // banner: itemArrayType;
    emblem: itemArrayType;
    ship: itemArrayType;
    sparrow: itemArrayType;
    // emotes: itemArrayType;
    inventory: itemArrayType;
    subclass: itemArrayType;
  };
  // type itemArrayType = [itemObjType];
  type singleCharacterType = {
    characterId: string | undefined;
    raceType: string;
    raceHash: string;
    classType: string;
    classHash: string;
    race: string;
    class: string;
    emblemBackgroundPath: string;
    characterObj: {
      kineticWeapons: itemArrayType;
      energyWeapons: itemArrayType;
      heavyWeapons: itemArrayType;
      helmet: itemArrayType;
      arms: itemArrayType;
      chest: itemArrayType;
      legs: itemArrayType;
      classItem: itemArrayType;
      ghost: itemArrayType;
      // banner: itemArrayType;
      emblem: itemArrayType;
      ship: itemArrayType;
      sparrow: itemArrayType;
      // emotes: itemArrayType;
      inventory: itemArrayType;
      subclass: itemArrayType;
    };
  };
  type dataStateType = [
    // initialised: boolean;
    singleCharacterType,
    singleCharacterType,
    singleCharacterType,
  ]
  //  | undefined;

  export { type itemObjType, type itemArrayType, type characterObjType, type dataStateType, type singleCharacterType,};