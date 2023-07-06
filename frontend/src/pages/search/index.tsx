import React, {useState, useEffect} from 'react'
import { ProfilePreview } from '../../components/ProfilePreview'
import DinamicHeader from '../../components/header'
import { useUser, useAdmin } from '../../hooks/contexts'
import { SearchContainer, SearchForm, SearchView } from './styles'

export default function SearchPage(){

    document.title = "Buscar currículos | DiversiTrampos"

    const { listUsersPage, usersList } = useUser();
    const { cities, listCities } = useAdmin();
    
    const [city, setCity] = useState('');
    const [page, setPage] = useState(1);
    const [amount, setAmount] = useState(10);

    function listiUsers(){
        listUsersPage(page, amount, city)
    }

    useEffect(()=>{
        listiUsers();
        listCities();
    },[ city, amount, page ])

    return (
        <>
            <DinamicHeader 
                startBtn={true}
                loginBtn={true}
                registerBtn={true}
            />

                <SearchContainer>
                    <SearchForm onSubmit={(e)=>e.preventDefault()}>
                        <span className='form-section'>
                            <label>Perfis por página:</label>
                            <select onChange={(e) => setAmount(Number(e.target.value))}>
                                <option value="10">10 Perfís</option>
                                <option value="15">15 Perfís</option>
                                <option value="20">20 Perfís</option>
                                <option value="25">25 Perfís</option>
                                <option value="30">30 Perfís</option>
                            </select>
                        </span>
                        <span className='form-section'>
                            <label>Cidade:</label>
                            <select onChange={(e) => setCity(e.target.value)}>
                                <option value="">Todas as cidades</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.name}>{city.name}</option>
                                ))}
                            </select>
                        </span>
                        {/* <button onClick={listCities}>Aplicar filtros</button> <-- useless */}
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
                                        />

                                    })
                                }
                    </SearchView> 
                    <section className='nav-page'>
                        <label className='label-pagina'>Página:</label>
                        <nav>
                            <button onClick={() => {
                                    if(page > 1){
                                        setPage(page-1)
                                            listiUsers();
                                    }
                                    }}>{'<'}</button>
                            <input type="number" value={page} onChange={(e) => setPage(Number(e.target.value))}/>
                            <button onClick={() => {
                                    setPage(page+1)
                                    listiUsers();
                                }}>{'>'}</button>
                        </nav>
                    </section>
                </SearchContainer>
        </>
    )
}