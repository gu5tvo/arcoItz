import User from "../../model/user.model";
import { iUserReturn } from "../../interfaces/user.interface";

export async function verifyMailService(id: string): Promise<iUserReturn> {
    const user = await User.findById(id);

    user.isActive = true;

    const response = await user.save();

    return { ...response.toObject(), password: undefined, __v: undefined, _id: undefined};
}