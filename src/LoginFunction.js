import React, { useState } from 'react'

export default function LoginFunction() {

    var [formData, setFormData] = useState({
        email: '',
        password: '',
        country: 'not selected'
    })
    //var [x, setX] = useState(0)

    const countries = ["Canada", "USA", "UK", "India", "Mexico"]
    
    const onValueChanged = (event) => {
        setFormData({...formData , [event.target.name]:event.target.value})
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log("Form Submitted : " +  JSON.stringify(formData))
    }

  return (
    <>
        <h2>Login Function Form</h2>
        <form onSubmit={(e) => onSubmitForm(e)} > 
            <input 
                name='email'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Enter Email" />

            <input 
                name='password'
                type="password"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Enter Password" />

            <input 
                name='gender'
                type="radio"
                value="Male"
                onChange={(e) => onValueChanged(e)} /> Male
            
            <input 
                name='gender'
                type="radio"
                value="Female"
                onChange={(e) => onValueChanged(e)} /> Female
            
            <select name='country' onChange={(e) => onValueChanged(e)}>
                {
                    countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                    ))
                }
            </select>
            
            <input 
                name='btnSubmit'
                type="submit"
                value="Login" />
        </form>
    </>
  )
}
