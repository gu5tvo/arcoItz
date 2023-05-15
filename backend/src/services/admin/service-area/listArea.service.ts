import Area from "../../../model/area.model";

export default async function listAreaService(){
    const areas = await Area.find();

    return areas.map(area => ({...area.toObject(), id: area._id, _id: undefined, __v: undefined}));
}