import React from "react"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import LoginForm from "./LoginForm"

export default function LoginPage() {
    window.document.title = "Lamusic"
    useUnProtectedPage()

    return (
        <LoginForm/>
    )
}