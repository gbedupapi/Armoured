import React from 'react';
import Security from '../../Access/Image/security guy 1.png';
import './Home.css'
import Testimony from '../Testimony/Testimony';
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="cure">
                <img src={Security} alt="man-with-glass"/>
                <div className="write">
                    <div className="firstDivInWrite">
                        <h2>Security is not a product it is a process.</h2>
                    </div>

                    <div className="next">
                    <a href="signup"><button>SIGN UP</button></a>
                    <a href="contact"><button>CONTACT US</button></a>
                    </div>
                </div>
            </div>
            <Testimony/>
        </div>
    )
}

export default Home
