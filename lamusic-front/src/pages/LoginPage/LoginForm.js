import React, { useState} from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { InputLabel, IconButton, InputAdornment, FilledInput, FormControl, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { LoginContainer, Background, FormContainer, Title, ButtonLogin } from "./styles"
import { login } from "../../services/user"

export default function LoginForm() {
    const history = useHistory()
    const {form, onChange} = useForm({input: "", password: ""})
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

      const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
   
    const onSubmit = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return(
        
        <LoginContainer>
          <Background>
            <Title>Pode entrar</Title>  
            <FormContainer onSubmit ={onSubmit} autoComplete="off">
                <TextField
                    variant="filled"
                    label="Qual seu email ou nickname?"
                    placeholder="Email ou nickname"
                    type="text"
                    name="input"
                    value= {form.input}
                    onChange= {onChange}
                    size="small"
                    style={{ margin: '8px 0'}}
                    required= "true"
                />
                <FormControl variant="filled" size="small" required="true" style={{ margin: '8px 0' }} >
                <InputLabel htmlFor="filled-adornment-password" size="small" margin="dense">Qual sua senha?</InputLabel>
                <FilledInput
                    margin="dense" 
                    label="Digite sua senha"
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
                </FormControl>
                <ButtonLogin>ENTRAR</ButtonLogin>
            </FormContainer>
          </Background>
        </LoginContainer>
    )
}