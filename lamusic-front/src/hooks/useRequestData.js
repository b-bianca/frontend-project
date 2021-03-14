import {useEffect, useState} from "react"
import axios from "axios"

export function useRequestData(url,initialState) {
 const [data, setData] = useState(initialState)

    useEffect(()=> {
        axios.get(url, { 
            headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response) => {
        setData(response.data)
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}
, [url])
        //return data
        return [data, setData]
}