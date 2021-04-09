import React from 'react';
import './Home.css'
import Testimony from '../Testimony/Testimony';
import Navbar from '../../Components/Navbar/Navbar';
import Service from '../Service/Service'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="cure">
                <div className="write">
                    <div className="firstDivInWrite">
                        <h2>Security is not a product, It is a call to serve.</h2>
                        <p id = "seck">
                        Security is freedom from, or resilience against, potential harm caused by others. Beneficiaries of security may be of persons and social groups, objects and institutions, ecosystems or any other entity or phenomenon vulnerable to unwanted change.
                        </p>
                    </div>
                    <div className="covered">
                        <div className="covers">
                        </div>
                        <div className="covers1">
                        </div>
                    </div>
                </div>
                <div className="next-up">
                    <div className="next">
                    <a href="signup"><button>JOIN US</button></a>
                    <a href="contact"><button>CONTACT US</button></a>
                    </div>
                    </div>
            </div>
            <Service/>
            <Testimony/>
        </div>
    )
}

export default Home
