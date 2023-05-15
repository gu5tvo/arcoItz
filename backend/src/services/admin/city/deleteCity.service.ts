import City from "../../../model/city.model";

export default async function deleteCityService(id: string){
    await City.findOneAndDelete({_id: id});

    return;
}