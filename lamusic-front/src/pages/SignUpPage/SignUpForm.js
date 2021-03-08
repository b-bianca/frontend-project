import React, { useState} from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { InputLabel, IconButton, InputAdornment, FilledInput, FormControl, TextField, FormHelperText } from '@material-ui/core'
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { SignUpContainer, Background, FormContainer, Title, ButtonCreate } from "./styles"
import { signup } from "../../services/user"

export default function SignUpForm() {
    const history = useHistory()
    const {form, onChange} = useForm({name: "", email: "", nickname: "", password: "", confirmPassword: ""})
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    
    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const validate = (event) => {
        const passwordOne = form.password
        const passwordTwo = form.confirmPassword
        event.preventDefault()
        if(passwordOne === passwordTwo) {
            signup(form, history)
        } else {
            alert("Por favor, confira sua senha")
        }
    }

    return(
        
        <SignUpContainer>
          <Background>
            <Title>Vem com a gente</Title>  
            <FormContainer onSubmit ={validate} autoComplete="off">
                <TextField
                    variant="filled"
                    label="Qual seu nome?"
                    placeholder="Nome"
                    type="text"
                    name="name"
                    value= {form.name}
                    onChange= {onChange}
                    size="small"
                    minLength="3"
                    style={{ margin: '8px 0'}}
                    required= "true"
                />
                <TextField
                    variant="filled"
                    label="Qual seu email?"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value= {form.email}
                    onChange= {onChange}
                    size="small"
                    style={{ margin: '8px 0'}}
                    required= "true"
                />
                <TextField
                    variant="filled"
                    label="Crie um nickname"
                    placeholder="Nickname"
                    type="text"
                    name="nickname"
                    value= {form.nickname}
                    onChange= {onChange}
                    size="small"
                    minLength="3"
                    style={{ margin: '8px 0'}}
                    required= "true"
                />
                <FormControl variant="filled" size="small" required="true" style={{ margin: '8px 0' }} >
                <InputLabel htmlFor="filled-adornment-password" size="small" margin="dense">Crie uma senha</InputLabel>
                <FilledInput
                    margin="dense" 
                    label="Crie uma senha"
                    placeholder="Senha"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value= {form.password}
                    onChange= {onChange}
                    size="small"
                    minLength="6"
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>}
              
                />
                <FormHelperText id="my-helper-text">Mínimo de 06 caracteres</FormHelperText>
                </FormControl>
                <FormControl variant="filled" size="small" required="true" style={{ margin: '8px 0' }} >
                <InputLabel htmlFor="filled-adornment-password" size="small" margin="dense">Confirme sua senha</InputLabel>
                <FilledInput
                    margin="dense" 
                    label="Confirme sua senha"
                    placeholder="Senha"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value= {form.confirmPassword}
                    onChange= {onChange}
                    size="small"
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton 
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>}
                />
                </FormControl>
                <ButtonCreate>CRIAR</ButtonCreate>
            </FormContainer>
          </Background>
        </SignUpContainer>
    )
}