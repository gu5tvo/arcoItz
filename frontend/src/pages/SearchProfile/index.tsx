import {ProfilePreview} from "../../components/ProfilePreview";
import {EditResults} from './EditResults'
import { ProfilePreviewDivCollection, MainSearchProfileDiv } from './style'
import { Header } from "../../layouts/Header";
import { SearchProfileButtons } from "../../utils/HeaderButtons";
import { Container } from "../Painel/style";


const profiles = 
[{
  image: '',
  fullname: 'Marcele da Silva Soares',
  area: 'Vendedor',
  pronouns: 'Elu/Delu',
  gender: 'Não Binárie',
},
{
  image: '',
  fullname: 'Marcele da Silva Soares',
  area: 'Vendedor',
  pronouns: 'Elu/Delu',
  gender: 'Não Binárie',
},
{
  image: '',
  fullname: 'Marcele da Silva Soares',
  area: 'Vendedor',
  pronouns: 'Elu/Delu',
  gender: 'Não Binárie',
},
{
  image: '',
  fullname: 'Marcele da Silva Soares',
  area: 'Vendedor',
  pronouns: 'Elu/Delu',
  gender: 'Não Binárie',
},
{
  image: '',
  fullname: 'Marcele da Silva Soares',
  area: 'Vendedor',
  pronouns: 'Elu/Delu',
  gender: 'Não Binárie',
},
{
  image: '',
  fullname: 'Marcele da Silva Soares',
  area: 'Vendedor',
  pronouns: 'Elu/Delu',
  gender: 'Não Binárie',
},
]

export function SearchProfile() {
    
    return (
      <Container>
      <Header header={SearchProfileButtons}/>
      <MainSearchProfileDiv>
        <EditResults/>
        <ProfilePreviewDivCollection>
          {profiles?.map((profile, index) => (
            <ProfilePreview 
            id={profile.fullname + index}
            image={profile.image} 
            name={profile.fullname}
            area={profile.area} 
            pronouns={profile.pronouns} 
            gender={profile.gender}/>
          ))}
        </ProfilePreviewDivCollection>
      </MainSearchProfileDiv>
      </Container>
    )
}