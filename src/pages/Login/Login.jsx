import React, {useState} from 'react'
import './Login.css';
import Security from '../../Access/Image/security guy 1.png'
import Navbar from '../../Components/Navbar/Navbar'

export default function Login() {

    const [name, setName] = useState({})

    function handleChange(event) {

        setName({
            ...name,
            [event.target.name]: event.target.value
        })
        
    }

    return (
        <div>
            <Navbar/>
            <div className="tain">
            <div className="secure">
               <img src={Security} alt="man"/>
               </div>
               <div className="log">
               <h1>LOGIN</h1>
                   <div className="fields">
                        <input onChange={handleChange} type="text" placeholder="User Name" name="username"/>
                   </div>
                   <div className="fields">
                        <input onChange={handleChange} type="password" placeholder="Password" name="password"/>
                   </div>
                   <div className="btns">
                        <button  
                            onClick={() => console.log(name)}
                        >Login</button>
               </div>
                    <p>Don't have an Account?<a href ="Signup">Sign-Up</a> </p>
               </div>
               
            </div>
        </div>
    )
}
