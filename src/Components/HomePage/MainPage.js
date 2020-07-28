import React, { Component } from 'react';

import BGMain from "../../images/bg_main.png"
import './MainPage.css'
import Axios from 'axios';
import PNG1 from "../../images/xpann-icon.jpg"
import PNG2 from "../../images/create-icon.jpg"
import PNG3 from "../../images/get-icon.jpg"
import PNG4 from "../../images/exciting_img-01.jpg"
import PNG5 from "../../images/exciting_img-02.jpg"
import PNG6 from "../../images/bg_img1.png"
import PNG7 from "../../images/supplier-pc-img.png"


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            landingSection: [],
            carouselCards: []
        }
    }

    componentDidMount() {
        Axios.get('https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data')
            .then(res => {
                let arr = [...res.data[0].carouselCards, res.data[0].carouselCards[1], res.data[0].carouselCards[2], res.data[0].carouselCards[3]]
                this.setState({ landingSection: res.data[0].landingSection, carouselCards: arr })
            })
    }
    render() {
        return (
            <div>
                <div className="MainPageContainer">
                    {/* <img src="../../images/get-icon.jpg"></img> */}
                    <div className="productIntro" >
                        <h1>Find your next product here.</h1>
                        <h4>It has never been easier.</h4>
                    </div>
                    <div className="productcontainer">
                        <div />
                        <div className="pcInputField">
                            <input placeholder="Search something you want" />
                        </div>
                        <div />
                        <div className="pcInputField">
                            <select className="selectHome" placeholder="Furniture">
                                <option className="customoption" value="0">Furniture</option>
                                <option className="customoption" value="1">Appliances</option>
                                <option className="customoption" value="2">Stationery</option>
                            </select>
                        </div>
                        <div />
                        <button className="searchButton">Search</button>
                        <a></a>
                        <div />
                    </div>
                    <div style={{ marginTop: '12vh' }}>
                        {this.state.landingSection.map(each => {
                            return (
                                <div onClick={() => { this.props.history.push(`/productpage/${each.id}`) }} className="landingSec">
                                    <h4 >{each.name}</h4>
                                    <img src={each.preview_image}></img>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={{ clear: 'both', backgroundColor: '#f4f9fd' }}>
                    <div className="container-3">
                        <div />
                        <div className="container-3-1">
                            <img src={PNG1}></img>
                            <h4>“Chamb” Your Business</h4>
                            <p>Grow easily with chamb. Create free account.
                            We help expanding your business easily.
                     </p>
                        </div>
                        <div />
                        <div className="container-3-1">
                            <img src={PNG2}></img>
                            <h4>Create and add</h4>
                            <p>Grow easily with chamb. Create free account.
                            We help expanding your business easily.
                     </p>
                        </div>
                        <div />
                        <div className="container-3-1">
                            <img src={PNG3}></img>
                            <h4>Get inspired</h4>
                            <p>Grow easily with chamb. Create free account.
                            We help expanding your business easily.
                             </p>
                        </div>
                        <div />
                    </div>
                    <div className="container-4">
                        <div className="container-4-1">
                            <div className="container-4-1-1">
                                <div className="container-4-1-1-1">
                                    <img src={PNG4}></img>
                                    <h4>Explore <strong>exiciting </strong>
                                        and exotic products
                                        tailored to you.
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..</p>
                                </div>
                                <div />
                                <div className="container-4-1-1-1 right-container-4">
                                    <img src={PNG5}></img>
                                    <h4><strong>List your products</strong> on chamb and grow connections.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-5">
                    <div className="container-5-1">
                        <div className="container-5-1-1">
                            <img src={PNG6} />
                        </div>
                        <div className="container-5-1-2">
                            <div className="container-5-1-2-1">
                                <div className="container-5-1-2-1-1">
                                    <h4>SUPPLIER</h4>
                                    <h2>Grow your store <br />
                                        <span>With a new sales channel</span>
                                    </h2>
                                    <p>Never worry about sales or income ftom outbound channels. with chamb your store is directly connected to thousands of interested in your products.</p>
                                    <button className="createBtn">Create a supplier account</button>
                                </div>
                                <div style={{ marginLeft: '-30px' }} className="container-5-1-2-1-2">
                                    <img src={PNG7} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-6">
                    <div className="container-6-1">
                        <h2>TRENDING PRODUCTS ON CHAMB</h2>
                    </div>
                    <div className="carousal">
                        <div className="carousalInside">
                            <div className="carousalInner">
                                {this.state.carouselCards.map(eachCarousal => {
                                    return (
                                        <div id={eachCarousal.id} className="eachCarousal">
                                            <img className="carousalImg" src={eachCarousal.preview_image}></img>
                                            <div className="carousalMiddle">
                                                <div>
                                                    <h4 className="carousalName">{eachCarousal.name}</h4>
                                                    <p className="carousalSubName">By <span style={{ color: "#2da0ff" }}>{eachCarousal.posted_by}</span> under <span style={{ color: "#2da0ff" }}>{eachCarousal.category}</span></p>
                                                </div>
                                                <div style={{ marginTop: '12px' }}>
                                                    <a className="carousalPrice">${eachCarousal.price}</a>
                                                </div>
                                            </div>
                                            <div className="carousalBottom">
                                                <div>
                                                    <a className="bottomCarousalLinks">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        {' '}  Save to wishlist
                                                </a>
                                                </div>
                                                <div>
                                                    <a className="bottomCarousalLinks">
                                                        <i className="fa fa-thumbs-up"></i>
                                                        {' '}Like This
                                                </a>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MainPage;