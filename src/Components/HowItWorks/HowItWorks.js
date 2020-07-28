import React, { Component } from 'react';

import signIcon from '../../images/works-icon-01.png'
import searchIcon from '../../images/works-icon-02.png'
import ContactIcon from '../../images/works-icon-03.png'
import safetyIcon1 from '../../images/icon-b1.png'
import safetyIcon2 from '../../images/icon-b2.png'
import safetyIcon3 from '../../images/icon-b3.png'
import safetyIcon4 from '../../images/icon-b4.png'
import safetyIcon5 from '../../images/icon-b5.png'
import './HowItWorks.css';



class HowItWorks extends Component {
    render() {
        return (
         
               
            <div>
                <div className="HowItWorksBody">
                  <div className="LsContainer">
                        <h2>
                            How it works if 
                             <br/>
                            <span>you’re a buyer.</span>
                          
                        </h2>
                        <p>
                            We explained the buying proces of Chamb in three simple steps. See how it works, benefits and FAQ.
                        </p>
                        <div className = "emailBox">
                            <h3>
                                Sign up for free
                           </h3>
                            <form className="emailForm">
                                <input type="email" placeholder="Enter your e-mail" />
                                <button>Continue</button>
                            </form>
                        </div>
                  </div>
                  <div className="RsContainer">  
                        {/* <div className="rightSideContent"> */}
                        <div className="firstContainer">
                            <div className="LeftSideNumber">
                                01
                           </div>
                            <div className="rsContent">
                            <div className="rsIcon">
                                <img src={signIcon} />    
                            </div>
                            <h3 className="firstHeading">SIGN UP</h3>
                            <h2 className="secondHeading" >
                                Small or Big,
                                   <br />
                                <span >We have the solution.</span>
                                </h2>
                                <div className ="paraBox">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                            </p>
                                    <p>
                                        laudantium rem aperiam, eaque ipsa quae ab illo
                                        inventore veritatis
                                </p>
                            </div>
                            </div>
                           <div className="line1">
                                
                                </div>
                        </div>
                        <div className="firstContainer search">
                            <div className="LeftSideNumber" style={{ color: "#0a284c" }}>
                                02
                           </div>
                            <div className="rsContent">
                                <div className="rsIcon " >
                                    <img src={searchIcon} />
                                </div>
                                <h3 className="firstHeading">SEARCH</h3>
                                <h2 className="secondHeading" >
                                    We revolutionized
                                   <br />
                                    <span >searching.</span>
                                </h2>
                                <div className="paraBox">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium doloremque laudantium rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.
                            </p>
                                    <p>
                                        laudantium rem aperiam, eaque ipsa quae ab illo
                                        inventore veritatis
                                </p>
                                </div>
                            </div>
                            <div className="line2">

                            </div>
                        </div>
                        <div className="firstContainer contact">
                            <div className="LeftSideNumber" style={{ color: "#4eadff" }}>
                                03
                           </div>
                            <div className="rsContent">
                                <div className="rsIcon">
                                    <img src={ContactIcon} />
                                </div>
                                <h3 className="firstHeading">CONTACT & BUY</h3>
                                <h2 className="secondHeading" >
                                    Contact sellers
                                   <br />
                                    <span >  and start buying</span>
                                </h2>
                                <div className="paraBox">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium doloremque laudantium rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.
                            </p>
                                    <p>
                                        laudantium rem aperiam, eaque ipsa quae ab illo
                                        inventore veritatis
                                </p>
                                </div>
                            </div>
                            
                        </div>

                  </div>

                </div>

                    <div className="sectionSafety">
                        <div className = "fitContainer">
                            <div>
                                <h2>
                                    Benefits with trust and safety
                            </h2>
                            </div>
                            <div className="container1">
                                <div className="sfBoxes">
                                    <img src={safetyIcon1} /> 
                                    <h3> Branden Minisite</h3>
                                    <p>
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
                                    </p>
                                </div>
                                <div className="sfBoxes">
                                    <img src={safetyIcon2} />
                                    <h3> Vetted Sellers</h3>
                                    <p>
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
                                    </p>
                                </div>
                                <div className="sfBoxes">
                                    <img src={safetyIcon3} />
                                    <h3>Verified with 3. part</h3>
                                    <p>
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
                                    </p>
                                </div>
                                <div className="containerSecondPart">
                                <div className="sfBoxes">
                                    <img src={safetyIcon4} />
                                        <h3> Data Protection</h3>
                                    <p>
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
                                    </p>
                                </div>
                                <div className="sfBoxes">
                                    <img src={safetyIcon5} />
                                        <h3>Support</h3>
                                    <p>
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
                                    </p>
                                </div>
                                <div className="sfBoxes">
                                    <img src={safetyIcon1} />
                                    <h3> Branden Minisite</h3>
                                    <p>
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
                                    </p>
                                    </div>
                                </div>
                           </div>

                       </div>
                    </div>
            </div>
         
        )
    }
}


export default HowItWorks;