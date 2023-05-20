import Input from '../../components/Input/Input';
import { Header } from '../../layouts/Header';
import { LoginButtons } from '../../utils/HeaderButtons';
import { BorderStyle } from "../../utils/Input";
import Checkbox from './components/Checkbox';
import InputArea from './components/InputArea';
import { LoginContainer } from './style';

function Login() {

    return (
        <>
            <Header header={LoginButtons}/>        
            <LoginContainer>
                <h1>Entrar</h1>
                <div>
                    <InputArea title="E-mail" placeholder="Insira seu e-mail" type="email" border={BorderStyle.SolidBorder}/>

                    <InputArea title="Senha" placeholder="Insira sua senha" type="password" border={BorderStyle.SolidBorder}/>

                    <div className="lembrar-acesso">
                        <Checkbox id="checkbox" label="Lembrar acesso"/>
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