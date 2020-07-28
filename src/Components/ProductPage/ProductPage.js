import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import IMG1 from "../../images/150x150.png"
import "./index.css"

class ProductPage extends Component {
  state = {
    id: null,
    productInfo: {},
    active: 0
  }

  componentDidMount() {
    this.setState({ id: this.props.match.params.id })
    Axios.get(`https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ productInfo: res.data })
        console.log(res.data)
      })
  }

  render() {
    return (
      <div className="productPage">
        <h2 className="heading">{this.state.productInfo.product_name}</h2>
        <p className="subHeading"> By <span style={{ color: '#3ba2ff' }}> Dex {this.state.productInfo.posted_by}</span></p>
        <div className="mainContent">
          <div className="leftContainer">
            <div className="imgDiv">
              <img className="userImg" src={IMG1}></img>
            </div>
            <h3 className="userName">{this.state.productInfo.posted_by}<i style={{ color: '#27cb98', paddingLeft: '8px' }} className="fa fa-check-circle" aria-hidden="true"></i></h3>
            <a className="visitStore">Visit Store</a>
          </div>
          <div className="centerContainer">
            <div className="mainImgDiv">
              <img className="mainImg" src={this.state.productInfo.photos && this.state.productInfo.photos[this.state.active]}></img>
            </div>
            <div>
              {this.state.productInfo.photos && this.state.productInfo.photos.map((each, index) => {
                return (
                  <div onClick={() => { this.setState({ active: index }) }} className="subImgDiv">
                    <img className={this.state.active === index ? "subImgActive" : "subImg"} src={this.state.productInfo.photos[index]}></img>
                  </div>
                )
              })}
            </div>
            <div className="bottomLinks" style={{ clear: 'both' }}>
              <div>
                <a className="bottomLikeLinks">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {' '}  Save to wishlist
                                                </a>
              </div>
              <div>
                <a className="bottomLikeLinks">
                  <i className="fa fa-thumbs-up"></i>
                  {' '}Like This
              </a>
              </div>
              <div>
                <p className="likes">
                  23 Likes
                </p>
              </div>
            </div>
            <div className="descriptionDiv">
              <h4>Description</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..</p>
            </div>
            <div className="specificationDiv">
              <h4>Specification</h4>
              <table>
                <tr className="eachTableRow">
                  <td className="tableHeading">Measurments</td>
                  <td className="tableRow">{this.state.productInfo.specifications && this.state.productInfo.specifications.measurements}</td>
                </tr>
                <tr className="eachTableRow">
                  <td className="tableHeading">Material</td>
                  <td className="tableRow">{this.state.productInfo.specifications && this.state.productInfo.specifications.material}</td>
                </tr>
                <tr className="eachTableRow">
                  <td className="tableHeading">Condition</td>
                  <td className="tableRow">{this.state.productInfo.specifications && this.state.productInfo.specifications.condition}</td>
                </tr>
                <tr className="eachTableRow">
                  <td className="tableHeading">SKU number</td>
                  <td className="tableRow">{this.state.productInfo.specifications && this.state.productInfo.specifications.sku_number}</td>
                </tr>
                <tr className="eachTableRow">
                  <td className="tableHeading">Warranty</td>
                  <td className="tableRow">{this.state.productInfo.specifications && this.state.productInfo.specifications.warranty}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="rightContainer">
            <h4>Price</h4>
            <h3>${this.state.productInfo && this.state.productInfo.price}<span className="perPiece"> pr.piece</span></h3>
            {/* <p className="option">Option</p>
            <div className="pcInputField">
              <select className="selectHome1" placeholder="Furniture">
                <option className="customoption" value="0">Furniture</option>
                <option className="customoption" value="1">Appliances</option>
                <option className="customoption" value="2">Stationery</option>
              </select>
            </div> */}
            <button className="rightButton">Contact company </button>
            <h5> <i class="fa fa-clock-o" aria-hidden="true"></i><strong>16</strong> avg. responsive time
            </h5>
          </div>
        </div>
      </div >
    )
  }
}

export default withRouter(ProductPage)