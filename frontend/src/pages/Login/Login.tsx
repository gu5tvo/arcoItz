import { Header } from '../../layouts/Header';
import { LoginHeader } from '../../utils/HeaderButtons';
import { BorderStyle } from "../../utils/Input";
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import InputArea from './components/InputArea';
import LoginFooter from './components/LoginFooter';
import { LoginContainer, CenterFullpage } from './style';
import { useUser } from '../../hooks/contexts'
import { useState } from 'react';

type EventType = React.ChangeEvent<HTMLInputElement>;

function Login() {
    const { login, token } = useUser()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (e: EventType)=> {
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const onChangePassword = (e: EventType)=> {
        setPassword(e.target.value);
        console.log(e.target.value)
    }

    const onLogin = async ()=> {
        await login({ email, password });
        console.log(token)
    }
    return (
        <>
            <Header header={ LoginHeader } />        
            <CenterFullpage>
                <LoginContainer>
                    <form onSubmit={onLogin}>
                        <h1>Entrar</h1>
                        <div>
                            <InputArea value={email} onChange={onChangeEmail} title="E-mail" placeholder="Insira seu e-mail" type="email" border={BorderStyle.SolidBorder}/>

                            <InputArea title="Senha" value={password} onChange={onChangePassword} placeholder="Insira sua senha" type="password" border={BorderStyle.SolidBorder}/>

                            <div className="lembrar-acesso">
                                <Checkbox id="checkbox" label="Lembrar acesso"/>
                            </div>
                            <Button type="submit" content="Entrar"/>

                            <LoginFooter/>
                        </div>
                    </form>
                </LoginContainer>
            </CenterFullpage>
        </>
    )
}

export default Login