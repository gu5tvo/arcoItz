import City from "../../../model/city.model";

export default async function registerCityService(name){
    const city = await City.create({name});

    return {...city.toObject(), id: city._id, _id: undefined, __v: undefined};
}