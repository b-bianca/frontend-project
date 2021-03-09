import React from "react"
import { Route, useHistory } from 'react-router-dom';
import { goToLogin, goToSignUp } from "../../routes/coordinator";
import { Filter } from "../Filter";
import { HeaderContainer, LeftContainer, AnimationContainner, Span, LogoContainner, Logo, ButtonsContainer, ButtonLogin, ButtonSignup, ButtonLogout } from "./styles"

export default function Header() {
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token");
        goToLogin(history);
    }

    return (
        <HeaderContainer>
          <Route exact path={["/", "/entrar", "/cadastrar", "/home"]}>
            <LeftContainer>
                <AnimationContainner>
                    <Span></Span>  
                    <Span></Span>  
                    <Span></Span>  
                    <Span></Span>  
                    <Span></Span>  
                </AnimationContainner>

                <LogoContainner> 
                    <Logo>lamusic</Logo>
                </LogoContainner>

            </LeftContainer>
          </Route>  
            <ButtonsContainer>
                <Route exact path={["/", "/entrar", "/cadastrar"]}>   
                    <ButtonSignup onClick={() => goToSignUp(history)}>INSCREVA-SE</ButtonSignup>
                    <ButtonLogin onClick={() => goToLogin(history)}>ENTRAR</ButtonLogin>
                </Route> 

                <Route exact path={["/home"]}>   
                    <Filter/>
                    <ButtonLogout onClick={logout}>SAIR</ButtonLogout> 
                </Route> 
            </ButtonsContainer>
        </HeaderContainer>
    )
}