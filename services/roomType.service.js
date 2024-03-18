import RoomType from '../models/roomType.model.js';

//Checking if Roomtype already exists with same name field
export const checkExistingRoomType = async ({name})=>{
  const existingRoomType = await RoomType.findOne({name})
  return(existingRoomType);
};

export const saveNewRoomType = async ({ name }) => {
    //create room type
    const newRoomType = await RoomType.create({ name });
    return newRoomType;
};

export const fetchAllRoomTypes = async () => {
    const roomTypes = await RoomType.find();
    return roomTypes;
};
