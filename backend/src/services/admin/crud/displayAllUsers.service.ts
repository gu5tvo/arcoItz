import User from "../../../model/user.model";

import { iDisplayAll } from "../../../interfaces/user.interface";
import { iDisplayAllProps } from "../../../interfaces/admin.interface";
import { formatDiagnosticsWithColorAndContext } from "typescript";

//Algorítmo que faz a ordem de usuáros serem exibidos em ordem aleatória, 
//para que não haja uma ordem de exibição padrão.
function randomizaUsuários(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

export default async function displayAllUsersService({ page, amount, city, id, name, isBanned, isActive }: iDisplayAllProps): Promise<iDisplayAll> {
    const pageNumberNumber = parseInt(page);
    const pageSizeNumber = parseInt(amount);

    //Algoritmo que gera uma 'seed' de paginação, mantendo consistência nos resultados.
    let actualPage, actualPageSize;
    
    actualPage = page ? pageNumberNumber : 1
    actualPageSize = amount ? pageSizeNumber : 10

    const skip = (actualPage - 1) * actualPageSize;

    const query = {
      isBanned: (isBanned.toLowerCase() === 'true'),
      isActive: (isActive.toLowerCase() === 'true')
    } as { isBanned?: boolean, isActive?: boolean, name?: RegExp, id?: RegExp, city?: RegExp };

    if (name) query.name = new RegExp(name, 'i')
    if (id) query.id = new RegExp(id, 'i')
    if (city) query.city = new RegExp(city, 'i')

    const users = await User.find(query).select('-password').skip(skip).limit(pageSizeNumber);

    const fixedUsers = users.map(user => { return { ...user.toObject(), _id: undefined, __v: undefined } })

    return {
        page: actualPage,
        pageSize: actualPageSize,
        content: randomizaUsuários(fixedUsers)
    };
}

/** Sobre o algorítmo de paginação com o embaralhamento:
 * Os usuários da página 1 continuarão os mesmos, mas a ordem de exibição dos usuários
 * será aleatória, para que não haja uma ordem de exibição padrão.
 * 
 * Futuramente, poderemos implementar um algorítmo de paginação que embaralhe os usuários
 * de maneira completamente aleatória, mas por enquanto, isso é o suficiente.
 */
