import { TextField } from '@material-ui/core';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useForm } from "../../hooks/useForm";
import { ButtonSignup, FormContainer, ModalContainer, Title, GenreContainer, InputContainer, Input } from "./styles";

export default function CreateMusicForm(props) {
    const { form, onChange } = useForm({ title: "", author: "", file: "", album: "", genres: [] })
    const [checked, setChecked] = useState([])
    const [genres, setGenres] = useState()

    useEffect(() => {
        getGenre() //assim que abre, ele atualiza a função
    }, [])


    const onSubmit = event => {
        event.preventDefault()

        form.genres = checked
        
        axios.post("https://lamusic.herokuapp.com/music/create", form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                alert("Música cadastrada com sucesso!")
                props.closeModal()
            }).catch(error => {
                alert("Música não cadastrada")
                console.log(error.message)
            })
    }

    const getGenre = async () => {
        const genresPromise = await axios.get("https://lamusic.herokuapp.com/music/genre", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        const genreMap = genresPromise.data.result.map((item) => {
            return {
                checked: false,
                genre: item.genre
            }
        })

        setGenres(genreMap)
        //return genres
    }

    const handleCheckBox = (event) => {

        const { value } = event.target

        const getAllChecked = checked.find(check => check === value)

        if(getAllChecked === undefined){
            checked.push(value)
        } else {
            checked.splice(checked.indexOf(value), 1)
        }
        setChecked([...checked])

        genres.map((item) => { //genres da api, não do form
              if (item.genre === value) item.checked = !item.checked
        })
       setGenres(genres)
    }

    return (
        <ModalContainer>
            <Title>Criar Música</Title>
            <FormContainer onSubmit={onSubmit} autoComplete="off">
                <TextField
                    variant="filled"
                    label="Qual o título da música?"
                    placeholder="Título"
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    size="small"
                    style={{ margin: '8px 0' }}
                    required="true"
                />
                <TextField
                    variant="filled"
                    label="Qual o autor da música?"
                    placeholder="Autor"
                    type="text"
                    name="author"
                    value={form.author}
                    onChange={onChange}
                    size="small"
                    style={{ margin: '8px 0' }}
                    required="true"
                />
                <TextField
                    variant="filled"
                    label="Qual o link da música?"
                    placeholder="Imagem para capa"
                    type="text"
                    name="file"
                    value={form.file}
                    onChange={onChange}
                    size="small"
                    style={{ margin: '8px 0' }}
                    required="true"
                />
                <TextField
                    variant="filled"
                    label="Qual o álbum da música?"
                    placeholder="Álbum"
                    type="text"
                    name="album"
                    value={form.album}
                    onChange={onChange}
                    size="small"
                    style={{ margin: '8px 0' }}
                    required="true"
                />
                <GenreContainer>
                {genres && genres.map((item) => {
                    return (
                        <InputContainer key={item.genre}>
                            <Input
                                id={item.genre}
                                value={item.genre}
                                label={item.genre}
                                type="checkbox"
                                checked={item.checked}
                                onChange={(event) => handleCheckBox(event)}
                                color="white"
                                name={item.genre}
                            />
                            <label for={item.genre}>{item.genre}</label>
                        </InputContainer>
                    )
                })}
                </GenreContainer>
                <ButtonSignup>CRIAR</ButtonSignup>
            </FormContainer>
        </ModalContainer>
    )
}