import React, { useState } from "react"
import {useForm} from 'react-hook-form'
import {Container, Form, CheckBoxContainer, CheckboxInput, CheckBoxLabel, ForgotLabel, Button, Button2} from './styles.tsx'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import switchForm from '../../store/showRegister.ts'
import Header from '../../components/header/index.tsx'
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../auth/AuthContext.tsx"


function Signin (){
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const {show, showRegisterForm} = switchForm()
    const {login} = useAuth()

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

const onSubmit = (data:any) => {
    console.log("dados a serem submetidos:", data)

    axios.post("http://localhost:3000/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword
    })
    .then(response => {
        alert('Cadastro realizado corretamente')

        //Redirecionando para a página Inicial
        showRegisterForm()
    })
    .catch(err => {
        alert('Email ou senhas inválidos')
    })
}

const authSubmit = async (data: any) => {
    console.log("dados a serem submetidos:", data)

    try {
        //envia solicitação POST 
        const response = await axios.post("http://localhost:3000/signin", {
            email: data.email,
            password: data.senha,
        })

        console.log("Resposta do servidor:", response.data)

        if(response.data) {
            localStorage.setItem('email', data.email)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.id)
            localStorage.setItem('userName', response.data.name)
            login(response.data.token)
           navigate("/user")
        } else {
            alert("Usuários ou senha incorretos")
        }
    } catch (err) {
        alert('Email ou senha inválidos')
    }
}

    return (
        <div>
            <Header title={'LOGIN'}/>
            <Container>
                <h2>ACESSO</h2>
                <div style={{
                        display: "flex",
                        flexDirection: "column",
                }}>

                {show ? (
                <div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <TextField {...register('name')} id = "name" label = "Nome" variant = "outlined" margin="normal"></TextField>
                        <TextField {...register('email')} id = "email" label ="Email" variant="outlined" margin="normal"></TextField>
                        <TextField {...register('password')} id = "password" label ="Senha" variant="outlined" type={passwordVisible ? 'text': 'password'} margin="normal"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <IconButton onClick = {togglePasswordVisibility} edge = 'end'>
                                                                {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        )
                                                    }}></TextField>
                        <TextField {...register('confirmPassword')} id = "confirmPassword" label ="Confirme a senha" variant="outlined" type={passwordVisible ? 'text': 'password'} margin="normal"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <IconButton onClick = {togglePasswordVisibility} edge = 'end'>
                                                                {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        )
                                                    }}></TextField>
                        <Button type="submit">Enviar</Button>
                    </Form>
                    <Button2 onClick={showRegisterForm}>Acersar</Button2>
                </div>
                ) : (
                <div>
                    <Form onSubmit={handleSubmit(authSubmit)}>
                        <TextField {...register('email')} id = "email" label ="Email" variant="outlined" margin="normal"></TextField>
                        <TextField {...register('senha')} id = "senha" label ="senha" variant="outlined" type={passwordVisible ? "text" : "password"} margin="normal"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <IconButton onClick = {togglePasswordVisibility} edge = 'end'>
                                                                {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        )
                                                    }}></TextField>
                        <Button type="submit">Enviar</Button>
                        <CheckBoxContainer>
                            <div>
                                <CheckboxInput type = "checkbox" id="remember"/>
                                <CheckBoxLabel htmlFor="remember">Lembre-me</CheckBoxLabel>
                            </div>
                            <ForgotLabel>
                                Esqueceu a senha ?
                            </ForgotLabel>
                        </CheckBoxContainer>
                    </Form>
                    <Button2 onClick={showRegisterForm}>Registrar</Button2>
                </div>
            )}
                </div>
            </Container>
        </div>
    )

}

export default Signin