import React, {useState} from 'react'
import './Contact.css'
import Security from '../../Access/Image/security guy 1.png';
import Navbar from '../../Components/Navbar/Navbar'

export default function Contact() {
    const [info, setInfo] = useState({})

    function handleChange(event) {

        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }  
    return (
        <div>
            <Navbar/>
            <div className="board">
                <img src={Security} alt="guy"/>
                <h1>Contact Us</h1>
            <div className="file">
                <h1>General Information</h1>
                <div className="info">
                <div className="gen">
                <input onChange={handleChange} type="Title" placeholder="Title" name="Title"  list = "Title"/>
                 <datalist  id="Title">
                    <option value="Mr."/>
                    <option value="Mrs."/>
                 </datalist>
                </div>
                <div className="gen">
                <input onChange={handleChange} type="text" placeholder="Additional Information" name="Additional Information"/>
                </div>
                <div className="gen">
                <input onChange={handleChange} type="text" placeholder="First Name" name="First Name"/>
                </div>
                <div className="gen">
                <input onChange={handleChange} type="text" placeholder="Zip Code" name="Zip code"/>
                </div>
                <div className="gen">
                <input onChange={handleChange} type="text" placeholder="Last Name" name="Last Name"/>
                </div>
                <div className="gen">
                <input onChange={handleChange} type="text" placeholder="Place" name="Place"/>
                </div>
                <div className="gen">
                <input onChange={handleChange} type="text" placeholder="Position" name="Position"/>
                </div>
                <div className="net">
                <input onChange={handleChange} type="text" placeholder="Country" name="Country"/>
                </div>
                <div className="net">
                <input onChange={handleChange} type="text" placeholder="Company" name="Company"/>
                </div>
                <div className="net">
                <input onChange={handleChange} type="text" placeholder="Phone Number" name="Phone Number"/>
                </div>
                <div className="net">
                <input onChange={handleChange} type="text" placeholder="Business Area" name="Business Area"/>
                </div>
                <div className="net">
                <input onChange={handleChange} type="text" placeholder="Email" name="Email"/>
                </div>
                <div className="net">
                <input onChange={handleChange} type="text" placeholder="Employee's Name" name="search"/>
                </div>
                <div className="net">
                <input onChange={handleChange} type="text" placeholder="Address/Residents" name="search"/>
                </div>
                <div className="aba">
                    <button onClick={() => console.log(info)}>
                        Submit
                    </button>
                </div>
                </div>
                </div>
            </div> 
        </div>
    )
}
