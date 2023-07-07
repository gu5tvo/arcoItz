import React, {useState, useEffect} from 'react'
import DinamicHeader from '../../components/header'
import { useUser, useAdmin } from '../../hooks/contexts'
import { SearchContainer } from './styles'
import pfp from '../../assets/profile-picture.svg'
import { titles, pages } from '../../utils/search'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

export default function SearchPage(){
    const navigate = useNavigate()
    document.title = "Buscar currículos | DiversiTrampos"

    const { listUsersPage, usersList } = useUser();
    const { cities, listCities } = useAdmin();
    
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);
    const [amount, setAmount] = useState(10);
    const [options, setOptions] = useState<Array<{ value: string, label: string }>>([])
    const [isHovering, setIsHovering] = useState(false)

    function listiUsers(){
        listUsersPage(page, amount, city, area, title)
    }

    const increasePage = ()=> {
        setPage(page + 1)
        listiUsers()
    }

    const decreasePage = ()=> {
        setPage(page > 1 ? page - 1 : 1)
        listiUsers
    }

    useEffect(()=>{
        listiUsers();
        listCities();
        setOptions(cities.map((city)=> {
            return { value: city.id, label: city.name }
        }))
    },[ page ])
    
    return (<>
        <DinamicHeader startBtn loginBtn logoutBtn/>
        <SearchContainer>
            <h1>Buscar currículos</h1>
            <main>
                <section>
                    <div className='search'>
                        <p>Buscar por título</p>
                        <input placeholder={`Ex: ${titles[Math.floor(Math.random() * titles.length)]}`} onChange={(e)=>setTitle(e.target.value)}/>
                        <button className={isHovering ? 'onHover' : ''} onMouseLeave={()=>setIsHovering(false)} onMouseEnter={()=>setIsHovering(true)}>Buscar</button>
                    </div>
                    

                {usersList.map((user, index)=>{
                    const image = user.avatar ? user.avatar : pfp;
                    return (
                        <article onClick={()=>navigate(`/profile/${user.id}`)} className='cv-card' key={index}>
                            <img src={image}/>
                            <div className="basic-infos">
                                <span>
                                    <h2>{user.name}</h2>
                                    <p>{user.pronnouns}</p>
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
                        <Select onChange={(el)=>setCity(el.value.toLowerCase())} options={options} placeholder="Escolher cidade"/>
                    </span>
                    <span>
                        <label>Buscar por área</label>
                        <Select onChange={(el)=>setArea(el.value.toLowerCase())} options={options} placeholder="Escolher área"/>
                    </span>

                    <span>
                        <label>Número de perfis por página</label>
                        <Select onChange={(el)=>setAmount(Number(el.value))} options={pages} placeholder="Número de perfis"/>
                    </span>

                    <button className={isHovering ? 'onHover' : ''} onMouseLeave={()=>setIsHovering(false)} onMouseEnter={()=>setIsHovering(true)} onClick={listiUsers}>Aplicar filtros</button>

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