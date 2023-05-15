import Document from "../../model/documents.model";

export default async function editDocumentService(id, data){
    const document = await Document.findOne({id});

    if(data.name) document.name = data.name;
    if(data.description) document.description = data.description;

    const response = await document.save();

    return { ...response.toObject(), __v: undefined, _id: undefined, ownerId: undefined }

}