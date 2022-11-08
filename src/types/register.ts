export type RegisterInfoType = {
  addressDTO: {
    address: string;
    detailedAddress: string;
    postalCode: number;
  };
  houseAmenityDTO: {
    activity: boolean;
    beach: boolean;
    culturalLife: boolean;
    hotPlace: boolean;
    olleTrail: boolean;
    pickingTangerine: boolean;
    sportsEquipment: boolean;
    waterPlayEquipment: boolean;
  };
  houseInfoDTO: {
    availablePeople: number;
    buildingType: string;
    houseType: string;
    numberOfHouse: string;
    numberOfRooms: string;
  };
  houseIntroduction: string;
  houseName: string;
  messageLink: string;
  precautionList: string[];
  region: string;
  userId: number;
};
