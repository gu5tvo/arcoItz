import React, {useState, useEffect} from 'react'
import DinamicHeader from '../../../components/header'
import { useAdmin } from '../../../hooks/contexts'
import { SearchContainer } from './style'
import pfp from '../../assets/profile-picture.svg'
import { titles, pages } from '../../../utils/search'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

import Modal from '../../../components/Modal'
import DeleteUserModal from './DeleteModal'
import BanUserModal from './BanModal'
import UnbanUserModal from './UnbanModal'
import { TrashIcon, PenIcon, BanIcon } from '../../../components/Icons'

type ModalOptions =  'edit' | 'delete' | 'ban' | null

export default function SearchPage(){
    const navigate = useNavigate()
    document.title = "Buscar currículos | DiversiTrampos"

    const { cities, listCities, adminListUsers, usersList } = useAdmin();
    
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);
    const [amount, setAmount] = useState(10);
    const [options, setOptions] = useState<Array<{ value: string, label: string }>>([])
    const [isHovering, setIsHovering] = useState(false)
    const [name, setName] = useState("")
    const [id, setId] = useState("")

    const [showModal, setShowModal] = useState(false)
    const [modalChoice, setModalChoice] = useState<ModalOptions>(null)

    function listiUsers(){
        adminListUsers({ page, amount, city, name, id, isBanned: showBanned, isActive: active })
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

    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const [banned, setBanned] = useState(false)    
    const [showBanned, setShowBanned] = useState(false)
    const [active, setActive] = useState(true)

    const toggleShowBanned = ()=> {
        setShowBanned(!showBanned)
    }

    const toggleShowInactive = ()=> {
        setActive(!active)
    }

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

    const toggleModal = (choice: 'edit' | 'delete' | 'ban')=> {
        setShowModal(!showModal)
        setModalChoice(choice)
    }
    
    const displayModal = ()=>{
        if (modalChoice === 'edit') {

        } else if (modalChoice === 'ban') {
            return (banned) ? <UnbanUserModal name={userName} id={userId} /> : <BanUserModal name={userName} id={userId}/>
        } else if (modalChoice === 'delete') {
            return <DeleteUserModal name={userName} id={userId} />
        }
    }
    

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
                    const splitName = user.name.split(' ');
                    const firstName = splitName[0];
                    const lastName = splitName[splitName.length - 1]

                    const names = (firstName === lastName) ? firstName : firstName + ' ' + lastName;

                    return (
                        <article onClick={()=>navigate(`/profile/${user.id}`)} className='cv-card' key={index}>
                            <img src={image}/>
                            <div className="basic-infos">
                                <span>
                                    <h2>{names}</h2>
                                    <p>{user.pronnouns}</p>
                                </span>
                                <p>{user.title}</p>
                                {user.area && <p>Área: {user.area}</p>}
                            </div>

                            <div className='action-icons'>
                                <TrashIcon className="trash-icon" onClick={(e)=>onDelete(e, user.name, user.id)} />
                                <PenIcon className="pen-icon" onClick={(e)=>onEdit(e)} />
                                <BanIcon className={`ban-icon ${user.isBanned ? 'banned' : ''}`} onClick={(e)=>onBan(e, user.name, user.id, user.isBanned)} />
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

                    <span className="checkbox" >
                        <input className="checkbox" type="checkbox" onChange={(e)=>setActive(e.target.checked)} />
                        <label>Mostrar usuários inativos</label>
                    </span>
                    <span className="checkbox" >
                        <input type="checkbox" onChange={(e)=> setShowBanned(e.target.checked)} />
                        <label>Mostrar usuários banidos</label>
                    </span>

                    <button className={isHovering ? 'onHover' : ''} onMouseLeave={()=>setIsHovering(false)} onMouseEnter={()=>setIsHovering(true)} onClick={listiUsers}>Aplicar filtros</button>

                    <nav>
                        <button onClick={decreasePage}>{'<'}</button>
                        <input className="page-number" type="number" value={page} onChange={(e) => setPage(Number(e.target.value))}/>
                        <button onClick={increasePage}>{'>'}</button>
                    </nav>
                </aside>
            </main>
        </SearchContainer>

        <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
            {
                showModal && displayModal()
            }
        </Modal> 
        </>
    )
}