import React from 'react'
import './Flashscreen.css'
import Image from '../../Access/Image/logo1.png';

export default function Flashscreen() {
    return (
        <div>
            <div className="body">
                <div className="pix">
                <img src = {Image} alt="logo"/>
                </div>
            <h2>WELCOME TO ARMOURED</h2>
            </div>
           
        </div>
    )
}
