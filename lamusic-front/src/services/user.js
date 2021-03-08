import api from "./api"
import { goToHome } from "../routes/coordinator"

export const signup = (body, history) => {
    api.post("/user/signup", body)
      .then(response => {
        localStorage.setItem("token", response.data.token.accessToken)
        goToHome(history)
      }).catch(error => {
        alert("Por favor, confirme seus dados!")
        console.log(error.message)
      })
}

export const login = (body, history) => {
    api.post("/user/login", body)
      .then(response => {
        localStorage.setItem("token", response.data.token.accessToken)
        goToHome(history)
      }).catch(error => {
        alert("Por favor, confirme seus dados!")
        console.log(error.message)
      })
}