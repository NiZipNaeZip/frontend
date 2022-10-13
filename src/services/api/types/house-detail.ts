export type HouseData = {
  address: string;
  filePath: string;
  houseId: number;
  houseInfoDTO: {
    availablePeople: number;
    buildingType: string;
    houseType: string;
    numberOfHouse: string;
    numberOfRooms: string;
  };
  houseName: string;
  region: string;
};

export type HouseListData = {
  houseList: HouseData[];
};
