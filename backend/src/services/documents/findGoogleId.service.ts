import Document from "../../model/documents.model";

export default async function findGoogleIdService(id){

    const {document} = await Document.findOne({id});
    const regex = /\/d\/([^/]+)\/view/;
    const googleId = document.match(regex)[1];

    return googleId;
}