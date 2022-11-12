import React, { Component } from 'react'

export default class LoginClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            country: 'not selected'
        }

        this.countries = ["Canada", "USA", "UK", "India", "Mexico"]
    }

    onValueChanged = (event) => {
        //console.log(event.target.value)
        this.setState({...this.state, [event.target.name]:event.target.value})
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        console.log("Form Submitted : " +  JSON.stringify(this.state))
    }

    render() {
        return (
            <>
                <h2>Login Class Form</h2>
                <form onSubmit={(e) => this.onSubmitForm(e)} > 
                    <input 
                        name='email'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Email" />

                    <input 
                        name='password'
                        type="password"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Password" />

                    <input 
                        name='gender'
                        type="radio"
                        value="Male"
                        onChange={(e) => this.onValueChanged(e)} /> Male
                    
                    <input 
                        name='gender'
                        type="radio"
                        value="Female"
                        onChange={(e) => this.onValueChanged(e)} /> Female
                    
                    <select name='country' onChange={(e) => this.onValueChanged(e)}>
                        {
                            this.countries.map((country) => (
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
}
