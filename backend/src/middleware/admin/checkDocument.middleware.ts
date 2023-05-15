import {Request, Response, NextFunction} from 'express';
import AppError from '../../errors';
import Document from '../../model/documents.model';

export default async function checkDocumentMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.params;
    if(!id) throw new AppError('Id não informado', 400);
    const document = await Document.findOne({id})
    if(!document) throw new AppError('Documento não encontrado', 404);
    return next();
}