import User from "../model/user.model"

export default async function getUserService(id: string) {
    const rawUser = await User.findOne({ id })

    const user = rawUser.toObject()

    return { ...user }
}