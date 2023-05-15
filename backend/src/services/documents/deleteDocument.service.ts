import Document from "../../model/documents.model";

export default async function deleteDocumentService(id){
    await Document.findOneAndDelete({id});
    return;
}