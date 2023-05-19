import { Button, Container} from "./style"
import { Link } from 'react-router-dom'

export function Header(){
  return(
    <Container>
      <div className="links">
      <Link to="/entrar" style={{ textDecoration: 'none', color: "#fff"}}>Entrar</Link>
        <Button>Cadastre-se</Button>
      </div>
    </Container>
  )
}
