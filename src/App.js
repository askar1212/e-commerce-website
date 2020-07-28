import React, { Component } from 'react';
import NavBar from './Components/Header/NavBar';
import MainPage from './Components/HomePage/MainPage'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Footer from './Components/Footer/Footer'
import Pricing from './Components/Pricing/Pricing'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductPage from './Components/ProductPage/ProductPage';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={MainPage}></Route>
                        <Route exact path="/howitworks" component={HowItWorks} />
                        <Route path="/productpage/:id" component={ProductPage} />
                        <Route exact path="/pricing" component={Pricing} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }
}


export default App;