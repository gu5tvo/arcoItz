import { Request, Response } from 'express';
import insertDocumentService from "../services/documents/insertDocument.service";
import deleteDocumentService from "../services/documents/deleteDocument.service";
import editDocumentService from "../services/documents/editDocument.service";

export async function insertDocumentController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const response = await insertDocumentService(req.body, id);
    return res.status(201).json(response);
}

export async function deleteDocumentController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await deleteDocumentService(id);
    return res.status(204).send();
}

export async function editDocumentController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await editDocumentService(id, req.body);
    return res.status(200).send(response);
}
