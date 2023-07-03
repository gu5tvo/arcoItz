import User from "../../../model/user.model";

import { iDisplayAll } from "../../../interfaces/user.interface";

//Algorítmo que faz a ordem de usuáros serem exibidos em ordem aleatória, 
//para que não haja uma ordem de exibição padrão.
function randomizaUsuários(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

export default async function displayAllUsersService(pageNumber: string, pageSize: string, city: string, name: string, id: string): Promise<iDisplayAll> {
    const pageNumberNumber = parseInt(pageNumber);
    const pageSizeNumber = parseInt(pageSize);

    //Algoritmo que gera uma 'seed' de paginação, mantendo consistência nos resultados.
    let actualPage, actualPageSize;
    
    actualPage = pageNumber ? pageNumberNumber : 1
    actualPageSize = pageSize ? pageSizeNumber : 10

    const skip = (actualPage - 1) * actualPageSize;

    const query = {
      isBanned: false,
      isActive: true,
  };

    const newQuery = {...query, 
      name: (name) ? new RegExp(name, 'i') : undefined,
      city: (city) ? new RegExp(city, 'i') : undefined,
      id: (id) ? new RegExp(id, 'i') : undefined
    }

    const users = await User.find(newQuery).select('-password').skip(skip).limit(pageSizeNumber);

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
