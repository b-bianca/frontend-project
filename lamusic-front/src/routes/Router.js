import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* Componentes */
import Header from "../components/Header"

/* Páginas */
import ScreenPage from "../pages/ScreenPage"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import PlaylistPage from "../pages/PlaylistPage"

export default function Router() {
    return(
        <BrowserRouter>
            <Header exact path={["/", "/cadastrar", "/entrar", "/home", "/playlist/:id"]}/>
            <Switch>
                <Route exact path={"/"}>
                    <ScreenPage/>
                </Route>    
                <Route exact path={"/entrar"}>
                    <LoginPage/>
                </Route>    
                <Route exact path={"/cadastrar"}>
                    <SignUpPage/>
                </Route> 
                <Route exact path={"/home"}>
                    <HomePage/>
                </Route> 
                <Route exact path={"/playlist/:id"}>
                    <PlaylistPage/>
                </Route> 
                <Route>
                    <ErrorPage/>
                </Route> 
            </Switch>
        </BrowserRouter>
    )
}
//children o que ta entre o Route