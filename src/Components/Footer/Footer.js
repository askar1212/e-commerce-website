import React, { Component } from 'react';
import footerImg from '../../images/footer_bg.png';
import './Footer.css'


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/* <img src={footerImg} /> */}
                <div className="footerFirstContainer">
                    <div className="ffcbox1">
                        <h2>Start a free
                        account today
                     </h2>
                    </div>
                    <div className="ffcbox2">
                        <form className="emailForm">
                            <input type="email" placeholder="Enter your e-mail" />
                            <button>Continue</button>
                        </form>
                    </div>
                    <div className="ffcbox3">
                        <h4>Question? Call us on 12 34 56 78 for help</h4>
                        <p>Easy setup - no payment fees - up to 100 products for free</p>
                    </div>

                </div>
                <div className="footerSecondContainer">
                    <div className="fscbox1">
                        <h2>SELL ON CHAMB</h2>
                        <p>Pricing</p>
                    </div>
                    <div className="fscbox1">
                        <h2>BUY ON CHAMB</h2>
                        <p>How it works suppliers</p>
                    </div>
                    <div className="fscbox1">
                        <h2>COMPANY</h2>
                        <p>Contact us</p>
                    </div>
                    <div className="fscbox1 " >
                        <h2 >INDUSTRIES</h2>
                        <p>Textiles
                        </p>
                        <p>Furniture</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;