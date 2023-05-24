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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './schemas';
import { Form } from './components/style'

type EventType = React.ChangeEvent<HTMLInputElement>;

function Login() {
    const { login, token } = useUser()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onChangeEmail = (e: EventType)=> {
        setEmail(e.target.value);
    }

    const onChangePassword = (e: EventType)=> {
        setPassword(e.target.value);
    }

    const onLogin = async ()=> {
        console.log(await login({ email, password }));
    }

    return (
        <>
            <Header header={ LoginHeader } />        
            <CenterFullpage>
                <LoginContainer>
                    <h1>Entrar</h1>
                    
                    <Form onSubmit={handleSubmit(onLogin)}>
                            <InputArea value={email} onChange={onChangeEmail} title="E-mail" placeholder="Insira seu e-mail" type="email" name="email" register={register} border={BorderStyle.SolidBorder}/>
                            { errors.email && <p className="error-message"><>{ errors.email.message }</></p>}

                            <InputArea title="Senha" name="password" register={register} value={password} onChange={onChangePassword} placeholder="Insira sua senha" type="password" border={BorderStyle.SolidBorder}/>
                            { errors.password && <p className="error-message"><>{ errors.password.message }</></p>}

                            <div className="lembrar-acesso">
                                <Checkbox id="checkbox" label="Lembrar acesso"/>
                            </div>

                            <Button type="submit" content="Entrar" />
                    </Form>

                    <LoginFooter/>
                </LoginContainer>
            </CenterFullpage>
        </>
    )
}

export default Login