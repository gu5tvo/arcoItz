import {Request, Response} from "express";

import deleteExperienceService from "../services/experiences/deleteExperience.service";
import editExperienceService from "../services/experiences/editExperience.service";
import registerExperienceService from "../services/experiences/registerExperience.service";

export async function registerExperienceController(req: Request, res: Response){
    const {id} = req.user;
    const response = await registerExperienceService(id, req.body);
    res.status(201).json(response);
}

export async function editExperienceController(req: Request, res: Response){
    const {id} = req.params;
    const response = await editExperienceService(id, req.body);
    res.status(200).json(response);
}

export async function deleteExperienceController(req: Request, res: Response){
    const {id} = req.params;
    const response = await deleteExperienceService(id);
    res.status(200).json(response);
}
