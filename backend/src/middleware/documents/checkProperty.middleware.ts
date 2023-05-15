import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import Document from '../../model/documents.model';

export default async function checkProperty(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const document = await Document.findOne({ id });

    if(!document) throw new AppError('Documento não encontrado, verifique o id', 404);

    if(document.ownerId !== req.user.id) throw new AppError('Você não tem permissão para editar esse documento', 403);

    return next();
}