import Area from "../../../model/area.model";

export default async function deleteAreaService(id){
    await Area.findByIdAndDelete(id);

    return;
}