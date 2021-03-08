import React from "react"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import SignUpForm from "./SignUpForm"

export default function SignUpPage() {
    window.document.title = "Lamusic"
    useUnProtectedPage()

    return (
        <SignUpForm/>
    )
}