import './App.css'
import { BrowserRouter } from 'react-router-dom';
import React from "react"
import Router from "../routes/Router"
import Header from '../components/Header'

export default function App() {
    return(
        <div>
            <BrowserRouter>
              <Header/>
              <Router/>
            </BrowserRouter>
        </div>
    )
}

