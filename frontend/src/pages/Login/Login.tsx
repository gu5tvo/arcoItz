import { Header } from '../../layouts/Header';
import { LoginButtons } from '../../utils/HeaderButtons';
import { BorderStyle } from "../../utils/Input";
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import InputArea from './components/InputArea';
import LoginFooter from './components/LoginFooter';
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
                    <Button onClick={()=> ()=> {}} content="Entrar"/>

                    <LoginFooter/>
                </div>
            </LoginContainer>
        </>
    )
}

export default Login