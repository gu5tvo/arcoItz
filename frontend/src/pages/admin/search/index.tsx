import React, {useState, useEffect} from 'react'
import { ProfilePreview } from './ProfilePreview'
import DinamicHeader from '../../../components/header'
import { useUser, useAdmin } from '../../../hooks/contexts'
import { SearchContainer, SearchForm, SearchView } from './styles'

export default function SearchPage(){

    document.title = "Buscar currículos | DiversiTrampos"

    const { cities, listCities, adminListUsers, usersList } = useAdmin();
    
    const [city, setCity] = useState("");
    const [page, setPage] = useState(1);
    const [amount, setAmount] = useState(10);
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [search, setSearch] = useState(false)

    function listUsers(){
        adminListUsers(page, amount, city, name, id)
    }

    const onSearch = ()=> {
        if (name !== '' || id !== '')
            setSearch(true)
    }

    useEffect(()=>{
        listUsers();
        setSearch(false)
    },[ search ])

    const onBan = (e: React.MouseEvent<SVGSVGElement, MouseEvent>)=> {
        e.stopPropagation()
      }
  
      const onEdit = (e: React.MouseEvent<SVGSVGElement, MouseEvent>)=> {
        e.stopPropagation()
      }
  
      const onDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>)=> {
        e.stopPropagation()
      }
    
    return (
        <>
            <DinamicHeader 
                startBtn={true}
                loginBtn={true}
                registerBtn={true}
            />

                <SearchContainer>
                    <SearchForm onSubmit={(e)=>e.preventDefault()}>
                        <h3>Filtrar resultados</h3>
                        <label>Perfís por página:</label>
                        <select onChange={(e) => setAmount(Number(e.target.value))}>
                            <option value="10">10 Perfís</option>
                            <option value="15">15 Perfís</option>
                            <option value="20">20 Perfís</option>
                            <option value="25">25 Perfís</option>
                            <option value="30">30 Perfís</option>
                        </select>
                        <label>Cidade:</label>
                        <select onChange={(e) => setCity(e.target.value)}>
                            <option value="">Todas as cidades</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                        {/* <button onClick={listCities}>Aplicar filtros</button> <-- useless */}
                        <label className='label-pagina'>Página:</label>
                        <nav>
                            <button onClick={() => {
                                if(page > 1){
                                    setPage(page-1)
                                    listUsers();
                                }
                            }}>{'<'}</button>
                            <input type="number" value={page} onChange={(e) => setPage(Number(e.target.value))}/>
                            <button onClick={() => {
                                setPage(page+1)
                                listUsers();
                            }}>{'>'}</button>
                        </nav>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <button onClick={onSearch}>Pesquisar</button>
                    </SearchForm>
                    <SearchView>
                                {
                                    usersList.map((user, index) => { 

                                        return <ProfilePreview
                                            key={index}
                                            id={user.id}
                                            image={user.avatar}
                                            name={user.name}
                                            area={user.area}
                                            gender={user.gender}
                                            pronouns={user.pronnouns}
                                            onEdit={(e)=>onEdit(e)}
                                            onDelete={(e)=>onDelete(e)}
                                            onBan={(e)=>onBan(e)}
                                        />

                                    })
                                }
                    </SearchView> 
                </SearchContainer>
        </>
    )
}