import Admin from "../../../model/admin.model";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export default async function verifyAdminService(id){
    const admin = await Admin.findOne({id});

    return admin;
}