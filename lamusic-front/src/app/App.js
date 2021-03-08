import './App.css'
import React from "react"
import Router from "../routes/Router"
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../constants/theme'

export default function App() {
    return(
        <ThemeProvider theme={theme}>
         
             <Router/>
          
        </ThemeProvider>
    )
}

