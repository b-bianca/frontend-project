import React from "react"
import axios from "axios"
import { useForm } from "../../hooks/useForm"
import { TextField } from '@material-ui/core'
import { Title, ButtonSignup, FormContainer, ModalContainer } from "./styles"

export default function CreatePlayListForm(props) {
    const { form, onChange } = useForm({title: "", subtitle: "", image: ""})
    
    const onSubmit = (event) => {
        event.preventDefault()

        axios.put("https://lamusic.herokuapp.com/playlist/create", form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(() => {
            alert("Playlist cadastrada com sucesso!")
            //props.getAllPlaylists()
            props.closeModal()
        }).catch(error => {
            alert("Playlist não cadastrada")
            console.log(error.message)
        })
    }
    
    return(

        <ModalContainer>
            <Title>Criar Playlist</Title> 
            <FormContainer onSubmit ={onSubmit} autoComplete="off">
                <TextField
                    variant="filled"
                    label="Qual o título da playlist?"
                    placeholder="Título"
                    type="text"
                    name="title"
                    value= {form.title}
                    onChange= {onChange}
                    size="small"
                    style={{ margin: '8px 0'}}
                    required= "true"
                />
                <TextField
                    variant="filled"
                    label="Qual o subtítulo da playlist?"
                    placeholder="Subtítulo"
                    type="text"
                    name="subtitle"
                    value= {form.subtitle}
                    onChange= {onChange}
                    size="small"
                    style={{ margin: '8px 0'}}
                    required= "true"
                />
                <TextField
                    variant="filled"
                    label="Escolha uma capa para a playlist"
                    placeholder="Imagem para capa"
                    type="text"
                    name="image"
                    value= {form.image}
                    onChange= {onChange}
                    size="small"
                    style={{ margin: '8px 0'}}
                />
            
              <ButtonSignup>CADASTRAR</ButtonSignup> 
             
            </FormContainer>
            
        </ModalContainer>
    )
}