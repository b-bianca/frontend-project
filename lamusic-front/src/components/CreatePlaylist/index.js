import React from "react"
//import { useHistory } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { TextField } from '@material-ui/core'
import { Title, ButtonSignup, FormContainer, ModalContainer } from "./styles"
import axios from "axios"

export default function CreatePlayListForm(props) {
    const {form, onChange, resetState} = useForm({title: "", subtitle: "", image: ""})
    
    const onSubmit = (event) => {
        event.preventDefault()

        axios.put("https://lamusic.herokuapp.com/playlist/create", form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            alert("Playlist cadastrada com sucesso!")
            resetState()
            props.closeModal()
            //props.getAllPlaylists()
        }).catch(error => {
            alert("Por favor, confirme seus dados!")
            console.log(error.message)
        })
    }
    
    return(

        <ModalContainer>
            <Title>Criar Playlist</Title> 
            <FormContainer onSubmit ={onSubmit} autoComplete="off">
                <TextField
                    variant="filled"
                    label="Qual o título do álbum?"
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
                    label="Qual o subtítulo do álbum?"
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
                    label="Escolha uma capa para o álbum"
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