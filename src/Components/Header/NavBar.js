import React, { Component } from 'react';
import './NavBar.css'
import ChambLogo from '../../images/logo.png'
import { withRouter } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div className="NavBarContainer">
                <div className="Navbar-left">
                    <div className="ChambLogo">
                        <img style={{cursor:'pointer'}} onClick={() => { this.props.history.push('/') }} className="ChambImg" src={ChambLogo} alt="" />

                    </div>
                    <div className="NBSearch">
                        <input className="NBSearch input" type="text" placeholder="Search for products" />
                    </div>

                </div>
                <div className="Navbar-right">
                    <div />
                    <div className="NavBox">
                        <a ><span onClick={() => { this.props.history.push('/howitworks') }}>How it works</span></a>
                        <a ><span onClick={() => { this.props.history.push('/pricing') }}>Pricing</span></a>
                    </div>
                    <div className="signupLogin">
                        <a href="#">Login</a>
                        <button className="suButton">Sign Up</button>
                    </div>

                </div>


            </div>
        )
    }
}


export default withRouter(NavBar);