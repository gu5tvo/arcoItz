import User from "../../model/user.model";

export async function verifyMailService(id: string) {
    const user = await User.findById(id);

    user.isActive = true;

    const response = await user.save();

    return { ...response.toObject(), password: undefined, __v: undefined, _id: undefined};
}