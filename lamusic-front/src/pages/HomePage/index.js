import React, {useState, useEffect} from "react"
import axios from "axios"
//import { useHistory } from "react-router"
import { useRequestData } from "../../hooks/useRequestData"
//import api from "../../services/api"

export default function HomePage() {
    //const history = useHistory()
    
    const [ data ] = useRequestData("https://lamusic.herokuapp.com/playlist", undefined)
    
    return (
        <div>
            {data && data.playlist.map(item => {
                return (
                    <div>
                    <p>key= {item.id}</p>
                    <p>title= {item.title}</p>
                                       
                    </div>
                )
            })} 
        </div>
    )
}