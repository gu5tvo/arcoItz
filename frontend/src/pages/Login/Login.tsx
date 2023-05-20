import Input from '../../components/Input/Input';
import { Header } from '../../layouts/Header';
import { LoginButtons } from '../../utils/HeaderButtons';
import { BorderStyle } from "../../utils/Input";
import { LoginContainer } from './style';

function Login() {

    return (
        <>
            <Header header={LoginButtons}/>        
            <LoginContainer>
                <h1>Entrar</h1>
                <div>
                    <div>
                        <h2>Email</h2>
                        <Input placeholder={"Texto teste"} type={"email"} style={BorderStyle.SolidBorder}/>
                    </div>
                    <div>
                        <h2>Senha</h2>
                        <Input placeholder={"Texto teste"} type={"password"} style={BorderStyle.SolidBorder}/>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>Lembrar acesso</span>
                    </div>
                    <button>Entrar</button>
                    <div>
                        <span>Não possui uma conta? Cadastre-se.</span>
                        <span>Esqueceu sua senha? Clique aqui.</span>
                    </div>
                </div>
            </LoginContainer>
        </>
    )
}

export default Login