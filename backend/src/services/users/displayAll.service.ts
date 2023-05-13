import User from "../../model/user.model";

export default async function displayAllUsersService(pageNumber: string, pageSize: string, city: string) {
    const pageNumberNumber = parseInt(pageNumber);
    const pageSizeNumber = parseInt(pageSize);
    let actualPage, actualPageSize;
    pageNumber ? actualPage = pageNumberNumber : actualPage = 1;
    pageSize ? actualPageSize = pageSizeNumber : actualPageSize = 10;
    const skip = (actualPage - 1) * actualPageSize;

    const query = {
        isBanned: false,
        isActive: true,
        if(city) {
            city: city
        }
    }

    const users = await User.find(query)
                            .select('-password').skip(skip).limit(pageSizeNumber);

    return {
        page: actualPage,
        pageSize: actualPageSize,
        content: users
    };
}
