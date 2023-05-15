import Area from "../../../model/area.model";

export default async function registerAreaService(name){
    const area = await Area.create({name});

    return {...area.toObject(), id: area._id, _id: undefined, __v: undefined};
}