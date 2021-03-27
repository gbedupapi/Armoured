import React from 'react'
import './Testimony.css';
import Security from '../../Access/Image/security guy 1.png'

export default function Testimony() {
    return (
        <div>
            <div className="test">
                <div className="guy">
                    <img src={Security} alt="guy"/> 
                </div>
                <div className="bill">
                    <h1>Client Testimonial</h1>
                        <p>
                             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet animi dolorum fugit laborum corporis ratione dicta dolore quos earum debitis, beatae similique architecto officiis quasi adipisci veniam labore vitae voluptatibus".
                        </p>
                    <h4>Ephraim Dandizzy</h4>
                </div>
                        <div className="lyn1"></div>
                            <div className="lyn2"></div>
                        <div className="lyn3"></div>
                            
                <div className="bills">
                        <p>
                             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet animi dolorum fugit laborum corporis ratione dicta dolore quos earum debitis, beatae similique architecto officiis quasi adipisci veniam labore vitae voluptatibus".
                        </p>
                    <h4>Daniel Amiebi</h4>
                </div>
                    <div className="box"></div>
                    <div className="boxes"></div>
            </div>
            
        </div>
    )
}
