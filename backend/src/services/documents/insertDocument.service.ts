import Document from "../../model/documents.model";

export default async function insertDocumentService( fileName: string , documentUrl : string, id : string) {
    const document = await Document.create({
        name: fileName,
        description: '',
        document: documentUrl,
        ownerId: id
    });

    return {
        ...document.toObject(),
        __v: undefined,
        _id: undefined
    }
}