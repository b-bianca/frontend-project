import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* Páginas */
import ScreenPage from "../pages/ScreenPage"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import ErrorPage from "../pages/ErrorPage"

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <ScreenPage/>
                </Route>    
                <Route exact path={"/entrar"}>
                    <SignUpPage/>
                </Route>    
                <Route exact path={"/cadastrar"}>
                    <LoginPage/>
                </Route> 
                <Route>
                    <ErrorPage/>
                </Route> 
            </Switch>
        </BrowserRouter>
    )
}