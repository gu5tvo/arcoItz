import { Request, Response, NextFunction } from "express";
import AppError from "../../errors";

export default function sanitizePagesMiddleware(req: Request, res: Response, next: NextFunction): void {
    const { page, pageSize } = req.query;
    if (page && pageSize) {
        const pageNumber = parseInt(page as string);
        const pageSizeNumber = parseInt(pageSize as string);
        if (isNaN(pageNumber) || isNaN(pageSizeNumber)) {
        throw new AppError('Os parâmetros de paginação que você enviou estão inválidos.', 400);
        }
    }
    return next();
}