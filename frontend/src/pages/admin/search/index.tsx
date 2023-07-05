import React, {useState, useEffect} from 'react'
import { ProfilePreview } from './ProfilePreview'
import DinamicHeader from '../../../components/header'
import { useUser, useAdmin } from '../../../hooks/contexts'
import { SearchContainer, SearchForm, SearchView } from './style'
import Modal from '../../../components/Modal'
import DeleteUserModal from './DeleteModal'
import BanUserModal from './BanModal'
import UnbanUserModal from './UnbanModal'

type ModalOptions =  'edit' | 'delete' | 'ban' | null

export default function SearchPage(){

    document.title = "Buscar currículos | DiversiTrampos"

    const { cities, listCities, adminListUsers, usersList } = useAdmin();

    const [showModal, setShowModal] = useState(false)
    const [modalChoice, setModalChoice] = useState<ModalOptions>(null)

    const [city, setCity] = useState("");
    const [page, setPage] = useState(1);
    const [amount, setAmount] = useState(10);
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [search, setSearch] = useState(false)
    const [showBanned, setShowBanned] = useState(false)
    const [active, setActive] = useState(true)

    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const [banned, setBanned] = useState(false)

    function listUsers(){
        adminListUsers({ page, amount, city, name, id, isBanned: showBanned, isActive: active })
    }

    const toggleShowBanned = ()=> {
        setShowBanned(!showBanned)
    }

    const toggleShowInactive = ()=> {
        setActive(!active)
    }

    const toggleModal = (choice: 'edit' | 'delete' | 'ban')=> {
        setShowModal(!showModal)
        setModalChoice(choice)
    }

    const onSearch = ()=> {
            setSearch(!search)
    }

    useEffect(()=>{
        listUsers();
        listCities();
    },[ search ])

    const onBan = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, name: string, id: string, isBanned: boolean)=> {
        toggleModal('ban')
        e.stopPropagation()

        setBanned(isBanned)
        setUserName(name)
        setUserId(id)
    }

    const onEdit = (e: React.MouseEvent<SVGSVGElement, MouseEvent>)=> {
        toggleModal('edit')
        e.stopPropagation()
    }

    const onDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, name: string, id: string)=> {
        toggleModal('delete')
        e.stopPropagation()

        setUserName(name)
        setUserId(id)
    }

    const displayModal = ()=>{
        if (modalChoice === 'edit') {

        } else if (modalChoice === 'ban') {
            return (banned) ? <UnbanUserModal name={userName} id={userId} /> : <BanUserModal name={userName} id={userId}/>
        } else if (modalChoice === 'delete') {
            return <DeleteUserModal name={userName} id={userId} />
        }
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
                        <label>Perfis por página:</label>
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
                        <div style={{margin: '0 auto' }}>
                            <input type="checkbox" onClick={toggleShowInactive} />
                            <label>Mostrar usuários inativos</label>
                        </div>
                        <div style={{margin: '0 auto', marginBottom: '1em'}}>
                            <input type="checkbox" onClick={toggleShowBanned} />
                            <label>Mostrar usuários banidos</label>
                        </div>
                        <label>Filtrar por nome</label>
                        <input type="text" className="filter-input" value={name} onChange={(e) => setName(e.target.value)}/>
                        <label>Filtrar por id</label>
                        <input type="text" className="filter-input" value={id} onChange={(e) => setId(e.target.value)}/>
                        <label className='label-pagina'>Página atual</label>
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

                        <button onClick={onSearch}>Aplicar filtros</button>
                    </SearchForm>
                    <SearchView>
                                {
                                    usersList.map((user, index) => { 
                                        if (user)
                                        return <ProfilePreview
                                            key={index}
                                            id={user.id}
                                            image={user.avatar}
                                            name={user.name}
                                            area={user.area}
                                            gender={user.gender}
                                            pronouns={user.pronnouns}
                                            onEdit={(e)=>onEdit(e)}
                                            onDelete={(e)=>onDelete(e, user.name, user.id)}
                                            onBan={(e)=>onBan(e, user.name, user.id, user.isBanned)}
                                            banned={user.isBanned}
                                        />

                                    })
                                }
                    </SearchView> 
                </SearchContainer>
                <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
                {
                    showModal && displayModal()
                }
            </Modal> 
        </>
    )
}