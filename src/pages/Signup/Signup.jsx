import React, { useState } from 'react'
import './Signup.css'
import Logo from '../../Access/Image/logo1.png'
import Navbar from '../../Components/Navbar/Navbar'

export default function Login() {
    const [submit, setSubmit] = useState({})

    function handleChange(event) {

        setSubmit({
            ...submit,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="sure">
                    <div className="ama">
                        <img src={Logo} alt="companypicture" />
                    </div>
                    <div className="details">
                        <h2>SIGN UP</h2>
                        <div className="fields">
                            <input onChange={handleChange} type="first name" placeholder="First Name" name="First Name" />
                        </div>
                        <div className="fields">
                            <input onChange={handleChange} type="last name" placeholder="Last Name" name="Last Name" />
                        </div>
                        <div className="fields">
                            <input onChange={handleChange} type="email" placeholder="Email" name="Email" />
                        </div>
                        <div className="fields">
                            <input onChange={handleChange} type="phone number" placeholder="Phone Number" name="Phone Number" />
                        </div>
                        <div className="fields">
                            <input onChange={handleChange} type="password" placeholder="Password" name="Password" />
                        </div>
                    </div>
                </div>
                <div className="but">
                        <button onClick={() => console.log(submit)}> Login </button>
                    </div>
            </div>

        </div>
    )
}
