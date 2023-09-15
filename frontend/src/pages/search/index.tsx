import React, {useState, useEffect} from 'react'
import DinamicHeader from '../../layouts/Header'
import { useUser, useAdmin } from '../../hooks/contexts'
import { SearchContainer, customSelectStyles } from './styles'
import pfp from '../../assets/profile-picture.svg'
import { titles, pages } from '../../utils/search'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

interface SearchContent {
    city?: string,
    area?: string,
    title?: string,
    page?: number,
    amount?: number
}

export default function SearchPage(){
    const navigate = useNavigate()
    document.title = "Buscar currículos | DiversiTrampos"

    const { listUsersPage, usersList } = useUser();
    const { cities, listCities, sectors, listSectors } = useAdmin();
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);
    const [amount, setAmount] = useState(10);
    const [query, setQuery] = useState<SearchContent>({ page: 1, amount: 10, title: "", city: "", area: "" })
    const [cityOptions, setCityOptions] = useState<Array<{ value: string, label: string }>>([])
    const [areaOptions, setAreaOptions] = useState<Array<{ value: string, label: string }>>([])
    const [random, setRandom] = useState(0)

    const listiUsersInput = ()=> {
        setPage(1)
        const newQuery = { ...query, page, title }
        setQuery(newQuery)
        listUsersPage(newQuery)
    }

    function listiUsersForm(){
        setPage(1)
        const newQuery = { ...query, page, amount, city, area }
        setQuery(newQuery)
        listUsersPage(newQuery)
    }

    const increasePage = ()=> {
        setPage(page + 1)
        const newQuery = { ...query, page: (page + 1) }
        setQuery(newQuery)
        listUsersPage(newQuery)
    }

    const decreasePage = ()=> {
        setPage(page > 1 ? page - 1 : 1)
        const newQuery = { ...query, page: (page > 1 ? page - 1 : 1) }
        setQuery(newQuery)
        listUsersPage(newQuery)
    }
    
    useEffect(()=>{
        listUsersPage(query)
        listCities()
        listSectors
    },[ page ])

    useEffect(() => {
        setCityOptions([{ value: '', label: "Todas as cidades "}, ...cities.map((city) => {
            return { value: city.id, label: city.name };
          })]
        );

        setAreaOptions([{ value: '', label: "Todos os setores "}, ...sectors.map((sector) => {
            return { value: sector.id, label: sector.name };
          })]
        );        

        setRandom(Math.floor(Math.random() * titles.length))
      }, [cities, sectors]);
    
    return (<>
        <DinamicHeader startBtn loginBtn registerBtn/>
        <SearchContainer>
            <h1>Buscar currículos</h1>
            <main>
                <section>
                    <div className='search'>
                        <p>Buscar por título</p>
                        <input placeholder={`Ex: ${titles[random]}`} onChange={(e)=>setTitle(e.target.value)}/>
                        <button onClick={listiUsersInput}>Buscar</button>
                    </div>
                    

                {usersList.map((user, index)=>{
                    const image = user.avatar ? user.avatar : pfp;
                    return (
                        <article onClick={()=>navigate(`/perfil/${user.id}`)} className='cv-card' key={index}>
                            <img src={image}/>
                            <div className="basic-infos">
                                <span>
                                    <h2>{user.name}</h2>
                                    <p>{user.pronouns}</p>
                                </span>
                                <p>{user.title}</p>
                                {user.area && <p>Área: {user.area}</p>}
                            </div>
                        </article>
                    )
                })}

                </section>

                <aside>
                    <h2>Filtrar buscas</h2>
                    <span>
                        <label>Buscar por cidade</label>
                        <Select onChange={(el)=>setCity(el.value.toLowerCase())} options={cityOptions} placeholder="Escolher cidade" styles={customSelectStyles}/>
                    </span>
                    <span>
                        <label>Buscar por área</label>
                        <Select onChange={(el)=>setArea(el.value.toLowerCase())} options={areaOptions} placeholder="Escolher área" styles={customSelectStyles}/>
                    </span>

                    <span>
                        <label>Número de perfis por página</label>
                        <Select onChange={(el)=>setAmount(Number(el.value))} options={pages} placeholder="Número de perfis" styles={customSelectStyles}/>
                    </span>

                    <button onClick={listiUsersForm}>Aplicar filtros</button>

                    <nav>
                        <button onClick={decreasePage}>{'<'}</button>
                        <input type="number" value={page} onChange={(e) => setPage(Number(e.target.value))}/>
                        <button onClick={increasePage}>{'>'}</button>
                    </nav>
                </aside>
            </main>
        </SearchContainer>
        </>
    )
}