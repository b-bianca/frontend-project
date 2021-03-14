import {createContext} from "react"

const AllPlaylistsContext = createContext()

const AllPlaylistProvider = (props) => {
    const data = []

    return(
        <AllPlaylistsContext.Provider value={data}>
            {props.children}
        </AllPlaylistsContext.Provider>
    )
}
export default AllPlaylistProvider