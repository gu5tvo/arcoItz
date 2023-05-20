import { Header } from "../../layouts/Header"
import { HomepageButtons } from "../../utils/HeaderButtons"
import { Container, CoverSection } from "./style"
import coverImage from "../../assets/images/cover.png"
import { Button } from "../../components/Button"


export function Home() {

  return (
    <Container>
      <Header header={HomepageButtons}/>
      <CoverSection>
        <div className="text-cover">
          <h1>Trabalhar é um direito de todes.</h1>
          <p>Apoie essa causa, clique em ”saiba mais”.</p>
          <Button>Saiba Mais</Button>
        </div>
        <div className="image-cover">
        <img src={coverImage} alt="Imagem de Cover" />
        </div>
      </CoverSection>
    </Container>
  )
}
