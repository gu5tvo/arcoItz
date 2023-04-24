import { Router } from "express";
import checkUserExistenceMiddleware from "../middleware/specificProfile/checkUserExistence.middleware";
import specificProfileController from "../controllers/specificProfile.controller";

const specificProfileRouter = Router()

specificProfileRouter.get('/:id', checkUserExistenceMiddleware, specificProfileController)

export default specificProfileRouter