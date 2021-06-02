import React, { Component } from "react";
import "jquery";
import "../../assets/css/dashforge.css";

export default class DisplayProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdetails: [],
    };
  }

  componentWillReceiveProps(nextprops) {
    const thisState = nextprops.product;
    this.setState({ productdetails: thisState });
  }
  abortController = new AbortController();
  componentWillUnmount() {
    this.abortController.abort();
  }
  render() {
    const { productdetails } = this.state;
    if (!this.state.productdetails) {
      return <div />;
    }
    return (
      <div id="contactInformation" className="pd-20 pd-xl-25">
        <div className="d-flex align-items-center justify-content-between mg-b-25">
            <h6 className="mg-b-0">Product Details</h6>
          </div>
        <div className="row row-sm mg-t-20">
          <div className="col-6 col-sm-4">
            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
              item number
            </label>
            <p className="mg-b-0">{productdetails.product_num}</p>
          </div>
          <div className="col-6 col-sm-4">
            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
              item type
            </label>
            <p className="mg-b-0">{productdetails.product_type}</p>
          </div>
          <div className="col-6 col-sm-4">
            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
              item Name
            </label>
            <p className="mg-b-0">{productdetails.product_name}</p>
          </div>
          {/* col */}
        </div>
        <div className="row row-sm mg-t-20">
          <div className="col-6 col-sm-4">
            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
              Model Number
            </label>
            <p className="mg-b-0">{productdetails.model_num}</p>
          </div>
          {/* col */}
          <div className="col-6 col-sm-4">
            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
              quantity available
            </label>
            <p className="mg-b-0">{productdetails.quantity}</p>
          </div>
          <div className="col-6 col-sm-4">
            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
              unit price
            </label>
            <p className="mg-b-0">{productdetails.cost}</p>
          </div>
          {/* col */}
        </div>
        {/* row */}
        <hr style={{ height: 1 }} />
        <div className="row row-sm mg-t-20">
        <div className="col-sm-4">
              <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                remarks
              </label>
              <p className="mg-b-0">{productdetails.remarks}</p>
            </div>

        </div>
      </div>
    );
  }
}
