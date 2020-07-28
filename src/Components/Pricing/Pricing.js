import React, { Component } from 'react';
import './Pricing.css'
import ReactCardFlip from 'react-card-flip';


class Pricing extends Component {
//    constructor(Super){
    state = {
        monthly: true,
        yearly: false,
        isFlipped: false
    }
//    }
    handleClick=(e)=> {
        // e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    toggleButton = (monthly,yearly) => {
      
        if (monthly) {
            console.log("mon")
            this.state.monthly = true;
            this.state.yearly = false;
        }
        else if (yearly) {
            console.log("yr")
            this.state.monthly = false;
            this.state.yearly = true;

        }
        this.setState(this.state)
    }


    render() {
        return (
            <div className="pricingBody">
                <div className="pricingIntro" >
                    <h1>Pricing on Chamb</h1>
                    <p>Get targeted distribution to Chamb's built-in network of global companies.</p>
                     <p className="piPara">  Choose the right one for you.</p>
                </div>
                <div className="pricingSwitch">       
                    <div className={this.state.monthly == true ? "monthlyBg" : "Monthly"}
                        onClick={(e) => { this.toggleButton(true, false); this.handleClick(e) }}
                    >
                        Monthly
                    </div>
                    <div className={this.state.yearly == true ? "yearlyBg" :"Yearly"}
                        onClick={(e) => { this.toggleButton(false, true); this.handleClick(e) }}>
                        Yearly
                    </div>
                </div>
                <div className="pricingList">
                    {/* <div className="card"> */}
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className={"pricingListBoxf"}>
                        
                        <div className="pricingHeader">
                            <h2>Chamb Free</h2>
                            <p>No binding</p>
                        </div>
                        <div>
                            <ul className="listsInPricingBox">
                                <li>
                                       Logo and Branding
                                </li>
                                <li>
                                          Unlimited products
                                </li>
                                <li>
                                          Analytics 
                                </li>
                            </ul>
                            <div className="pricefooter">
                                Free
                            </div>
                           <button className="pricingbutton">Sign up</button>
                        </div>

                        </div>
                        <div className={"pricingListBoxf"}>

                            <div className="pricingHeader">
                                <h2>Chamb Free</h2>
                                <p>No binding</p>
                            </div>
                            <div>
                                <ul className="listsInPricingBox">
                                    <li>
                                        Logo and Branding
                                </li>
                                    <li>
                                        Unlimited products
                                </li>
                                    <li>
                                        Analytics
                                </li>
                                </ul>
                                <div className="pricefooter">
                                    Free
                            </div>
                                <button className="pricingbutton">Sign up</button>
                            </div>

                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="pricingListBoxf" style={{marginLeft:"20px "}}>
                        <div className="pricingHeader">
                            {this.state.yearly == true ? <div className="popular">
                                popular
                        </div>:""}
                            <h2>Chamb Free</h2>
                            <p>No binding</p>
                        </div>
                        <div>
                            <ul className="listsInPricingBox">
                                <li>
                                    Logo and Branding
                                </li>
                                <li>
                                    Unlimited products
                                </li>
                                <li>
                                    Better search
                                </li>
                                <li>
                                    Analytics
                                </li>
                                <li>
                                    Support
                                </li>
                                
                              
                            </ul>
                            <div className="pricefooter" style={{marginTop:"20px"}}>
                                $15 trl. per. mth.
                            </div>
                            <button className="pricingbutton">Sign up</button>
                        </div>
                        </div>

                        <div className="pricingListBoxf" style={{ marginLeft: "20px " }}>
                            <div className="pricingHeader">
                                {this.state.yearly == true ? <div className="popular">
                                    Popular
                        </div> : ""}
                                <h2>Chamb Free</h2>
                                <p>No binding</p>
                            </div>
                            <div>
                                <ul className="listsInPricingBox">
                                    <li>
                                        Logo and Branding
                                </li>
                                    <li>
                                        Unlimited products
                                </li>
                                    <li>
                                        Better search
                                </li>
                                    <li>
                                        Analytics
                                </li>
                                    <li>
                                        Support
                                </li>


                                </ul>
                                <div className="pricefooter" style={{ marginTop: "20px" }}>
                                    $15 trl. per. mth.
                            </div>
                                <button className="pricingbutton">Sign up</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="pricingListBoxf" style={{ marginLeft: "20px " }}>
                        
                        <div className="pricingHeader">
                            {this.state.monthly == true ? <div className="popular">
                                Popular
                        </div> : ""}
                            <h2>Chamb Growth</h2>
                            <p>No binding</p>
                        </div>
                        <div>
                            <ul className="listsInPricingBox">
                                <li>
                                    As Chamb Pro with extra:
                                </li>
                                <li>
                                    Google adwords 30 %
                                </li>
                                <li>
                                    Sponsored links 
                                </li>
                            </ul>
                            <div className="pricefooter">
                                $40 trl. per. mth.
                            </div>
                            <button className="pricingbutton">Sign up</button>
                        </div>
                        </div>
                        <div className="pricingListBoxf" style={{ marginLeft: "20px " }}>

                            <div className="pricingHeader">
                                {this.state.monthly == true ? <div className="popular">
                                    popular
                        </div> : ""}
                                <h2>Chamb Growth</h2>
                                <p>No binding</p>
                            </div>
                            <div>
                                <ul className="listsInPricingBox">
                                    <li>
                                        As Chamb Pro with extra:
                                </li>
                                    <li>
                                        Google adwords 30 %
                                </li>
                                    <li>
                                        Sponsored links
                                </li>
                                </ul>
                                <div className="pricefooter">
                                    $40 trl. per. mth.
                            </div>
                                <button className="pricingbutton">Sign up</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="pricingListBoxf" style={{ marginLeft: "20px " }}>
                        <div className="pricingHeader">
                            <h2>Custom solution</h2>
                            <p>No binding</p>
                        </div>
                        <div>
                            <ul className="listsInPricingBox">
                                <li>
                                    Do you have special needs?
                                </li>
                                <li>
                                    Send us a message and
                                </li>
                                <li>
                                    we will contact you within
                                </li>
                                <li>
                                    2-3 business days.
                                </li>
                            </ul>
                            <div className="pricefooter" style={{ marginTop: "50px" }}>
                                Custom per. mth.
                            </div>
                            <button className="pricingbutton">Sign up</button>
                        </div>
                        </div>
                        <div className="pricingListBoxf" style={{ marginLeft: "20px " }}>
                            <div className="pricingHeader">
                                <h2>Custom solution</h2>
                                <p>No binding</p>
                            </div>
                            <div>
                                <ul className="listsInPricingBox">
                                    <li>
                                        Do you have special needs?
                                </li>
                                    <li>
                                        Send us a message and
                                </li>
                                    <li>
                                        we will contact you within
                                </li>
                                    <li>
                                        2-3 business days.
                                </li>
                                </ul>
                                <div className="pricefooter" style={{ marginTop: "50px" }}>
                                    Custom per. mth.
                            </div>
                                <button className="pricingbutton">Sign up</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
                
            </div>
        )
    }
}


export default Pricing;