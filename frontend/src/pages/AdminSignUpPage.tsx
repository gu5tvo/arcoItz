import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import registerSchema from "../schemas/register"
import { useAdmin } from "../hooks/contexts"
import { SignUp } from "../features"

export default function AdminSignUpPage(): JSX.Element{

	const { register, handleSubmit, trigger, formState: { errors } } = useForm({
		resolver: yupResolver(registerSchema)
	})
    
	const { adminRegister: signUp } = useAdmin()
	document.title = "Cadastre-se | DiversiTrampo"


	const signUpData: any = { signUp, handleSubmit, register, trigger, errors }

	return <SignUp {...signUpData}/>
}