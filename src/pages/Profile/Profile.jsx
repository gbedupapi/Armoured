import React from 'react'
import './Profile.css'
import Security from '../../Access/Image/security guy 1.png'
import Man from '../../Access/Image/man head.png'
import Navbar from '../../Components/Navbar/Navbar'
export default function Profile() {
    return (
        <div>
            <Navbar/>
            <div className="contain">
            <div className="sere">
               <img src={Security} alt="man"/>
               </div>
              <div className="sided">
                <img src={Man} alt="man"/>
               </div>
               <div className="name"><h2>Peter Emphraim</h2>
                <a href="Security"><h3>Security</h3></a>
                <a href="My Plan"><h3>My Plan</h3></a>
                <a href="Request"><h3>Request</h3></a>
                <a href="Logout"><h3>Logout</h3></a>
               </div>
                    <div className="profile">
                        <h1>Customer Portal</h1>
                    </div>
                    <div className="pin">
                        <ul>
                            <li>Services</li>
                            <li>Request</li>
                            <li>Complain</li>
                            <li>Message</li>
                        </ul>
                    </div>
            </div>
            <div className="sect">
                <p>41,000 <br/> Application</p>
            </div>
            <div className="sector">
                <p>99% <br/>Security Level</p>
            </div>
        </div>
    )
}
