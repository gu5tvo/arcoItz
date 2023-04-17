import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "yup";
import { ObjectShape } from "yup";

const verifyShape =
    (serialize: ObjectSchema<ObjectShape | any>) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const validated = await serialize.validate(req.body, {
                    stripUnknown: true,
                    abortEarly: false,
                });
                req.body = validated;
                return next();
            } catch (error) {
                return res.status(400).json({ message: error.errors });
            }
        };

export default verifyShape;

/** Middleware para filtragem de dados de entrada, deve ser usado como primeiro middleware de uma rota,
 *  pois ele modifica o body da requisição, removendo os dados que não foram validados, impedindo que
 *  seja enviado dados não esperados para o banco de dados. (Ex: dados sensíveis, ou danosos.)
 * 
 * Exemplo de utilização em uma rota:
 *  rotaExemplo.post('/', verifyShape(schema importado), ...middlewaresAdicionais, controllerExemplo);
 */