import { Request, Response, NextFunction } from 'express';
import fs from 'fs'

export class AppError extends Error {
    public readonly status: number;
    public readonly message: string;

    constructor(message: string, status: number = 400) {
        super(message);
        this.status = status;
    }
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof AppError) {
        return res.status(err.status).json({
            message: err.message,
        });
    }

    fs.appendFile('errors.log', err.stack, (err) => {
        if (err) {
            console.log(err);
        }
    });

    return res.status(500).json({
        message: 'Internal server error',
    });

}

export default AppError