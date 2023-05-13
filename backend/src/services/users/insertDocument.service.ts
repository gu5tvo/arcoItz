import Document from "../../model/documents.model";

export default async function insertDocumentService(data, id) {
    const document = await Document.create({
        name: data.name,
        description: data.description,
        document: data.document,
        ownerId: id
    });

    return {
        ...document.toObject(),
        __v: undefined,
        _id: undefined
    }
}