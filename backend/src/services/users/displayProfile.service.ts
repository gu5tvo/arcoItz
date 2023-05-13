import User from "../../model/user.model";
import Document from "../../model/documents.model";


export default async function displayProfileService(id: string){
    const user = await User.findOne({id});

    user.toObject();

    const documents = await Document.find({user: user.id});

    const response = {
        ...user.toObject(),
        documents: documents.map(document => document.toObject())
    }

    return {
        ...response,
        password: undefined,
        __v: undefined,
        _id: undefined
    }
}