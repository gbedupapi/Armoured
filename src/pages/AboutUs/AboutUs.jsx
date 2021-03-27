import React from 'react'
import './About.css'
import Logo from '../../Access/Image/lop 3.png'
import Navbar from '../../Components/Navbar/Navbar'

export default function AboutUs() {
    return (
        <div>
            <Navbar/>
            <div className="cover">
                <div className="back">
                    <img src={Logo} alt="man"/>
                </div>
            <div className="About">
                    ABOUT US
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat doloremque hic magnam, blanditiis delectus vel id iusto cum ab omnis obcaecati eum, animi deserunt, quam fuga reprehenderit in eos dignissimos?</p>
            </div>

            </div>
            
        </div>
    )
}
