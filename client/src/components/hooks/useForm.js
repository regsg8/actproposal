import { useState } from 'react'

const useForm = (inputs, submitCb) => {
    //inputs, handleChange, handleSubmit
    const [formInputs, setFormInputs] = useState(inputs)
    
    const handleChange = e => {
        const { name, value } = e.target
        setFormInputs(p => ({ ...p, [name]: value }))
    }

    const matchCheck = () => {
        inputs.password === inputs.confirm ? 
        submitCb(formInputs) &&
        setFormInputs(inputs) 
        : 
        alert('Passwords do not match')
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(inputs.confirm){
            matchCheck()
        } else {
        submitCb(formInputs)
        setFormInputs(inputs)}
    }

    return { formInputs, handleChange, handleSubmit }
}

export default useForm