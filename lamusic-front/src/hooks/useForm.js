import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

    const onChange = (event) => {
        const {value, name} = event.target
        setForm({ ...form, [name]: value })
    }
  
    const resetState = () => {
        setForm(initialValues)
    }

    return { form, onChange, resetState }

}