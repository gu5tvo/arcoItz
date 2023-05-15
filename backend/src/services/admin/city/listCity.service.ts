import City from "../../../model/city.model";

export default async function listCityService(){
    const cities = await City.find();

    return cities.map(city => ({...city.toObject(), id: city._id, _id: undefined, __v: undefined}));
}