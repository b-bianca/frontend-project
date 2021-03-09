import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    background-color: black;
    justify-content: space-between;
    position: fixed;
`  
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    width: 50%;
`   
export const ButtonSignup = styled.button`  
    margin: 0 1em 0 0;
    padding: 0 1em;
    height:10vh;
    outline: none;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    color: yellow;
    border: transparent;
    &:hover {
    background-color: yellow;
    color:black;
    }
`
export const ButtonLogin = styled.button`  
    margin: 0 6em 0 1em;
    padding: 0 1em;
    height:10vh;
    outline: none;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    color: yellow;
    border: transparent;
    &:hover {
    background-color: yellow;
    color:black;
    }
`      
export const ButtonLogout = styled.button` 
     margin: 0 6em 0 1em;
    padding: 0 1em;
    height:10vh;
    outline: none;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    color: yellow;
    border: transparent;
    &:hover {
    background-color: yellow;
    color:black;
    }
`  
export const LeftContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
`   
export const AnimationContainner = styled.div`   
    position: relative;
`
export const LogoContainner = styled.div`   
    align-content: center;
    margin-left: 3em;
`
export const Logo = styled.h2`
    color: yellow;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
`
export const Span = styled.span`   
    text-align: center;
    border-radius: 10px;
    margin-left: 0.5em;
    margin-top:2.5em;
    position: absolute; 
    bottom: 20%;
    background:violet;  
    animation-delay: 4s;
    animation: wave 0.5s 15 ease; 
    :first-child{  
    left:0px;  
    width:5px;  
    height: 7px; 
    animation-delay:.3s;  
    }  
    :nth-child(2){  
    left:7px;  
    width:5px;  
    height: 10px; 
    animation-delay:.4s;  
    }  
    :nth-child(3){  
    left:14px;  
    width:5px;  
    height: 12px; 
    animation-delay:.6s;  
    }  
    :nth-child(4){  
    left:21px;  
    width:5px;  
    height: 10px; 
    animation-delay:.8s;  
    }  
    :nth-child(5){  
    left:28px;  
    width:5px;  
    height: 14px; 
    animation-delay:1s;  
    }  
    @keyframes wave{  
    0%{height:5px; background: violet}  
    30%{height:15px; background: white }  
    60%{height:20px; background: white }  
    80%{height:15px; background: white}  
    100%{height:5px; background: violet}  
    }
`

