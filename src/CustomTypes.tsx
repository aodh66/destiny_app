type itemObjType = {
  hash: number;
  bucketHash: number;
  tableId: number;
  name: string;
  icon: string;
  flavorText: string;
  rarity: string;
  itemType: string;
  bucket: string;
  equipped: boolean;
  instance: string;
  itemInstanceId: number;
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
  // inventory: itemArrayType;
  subclass: itemArrayType;
};

// type itemArrayType = [itemObjType];
type singleCharacterType = {
  characterId: string;
  raceType: string;
  raceHash: string;
  classType: string;
  classHash: string;
  charNumber: number;
  race: string;
  class: string;
  emblemBackgroundPath: string;
  characterObj: {
    "kineticWeapons": itemArrayType;
    "energyWeapons": itemArrayType;
    "heavyWeapons": itemArrayType;
    "helmet": itemArrayType;
    "arms": itemArrayType;
    "chest": itemArrayType;
    "legs": itemArrayType;
    "classItem": itemArrayType;
    "ghost": itemArrayType;
    // banner: itemArrayType;
    "emblem": itemArrayType;
    "ship": itemArrayType;
    "sparrow": itemArrayType;
    // emotes: itemArrayType;
    // inventory: itemArrayType;
    "subclass": itemArrayType;
  };
};

type dataStateType = singleCharacterType[];

type userDataType = {
  membershipType: number;
  membershipId: string;
};

type characterInfoObjType = {
  characterIds: string[];
  characterData: {
    [propType: string]: {
      raceType: string;
      raceHash: string;
      classType: string;
      classHash: string;
      emblemBackgroundPath: string;
    };
  };
};

type hashObj = {
    itemHash: number;
    bucketHash: number;
    itemInstanceId: number;
  }


type hashArr = hashObj[];

type SQLResponseItem = {
    id: number;
    json: string;
  }

type SQLResponseArr = SQLResponseItem[]

export {
  type itemObjType,
  type itemArrayType,
  type characterObjType,
  type dataStateType,
  type singleCharacterType,
  type userDataType,
  type characterInfoObjType,
  type hashArr,
  type SQLResponseArr,
  type SQLResponseItem,
  type hashObj,
};
