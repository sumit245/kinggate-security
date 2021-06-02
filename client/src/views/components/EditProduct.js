import React, { Component } from 'react'

export default class EditProduct extends Component {
  render() {
    return (
      <div className="contact-content">
          <div
            className="tab-content"
            style={{ position: "absolute", left: 0, width: "80%" }}
          >
            <div id="contactInformation" className=" pd-20 pd-xl-25">
              <form action="">
                <div
                  className="row row-sm"
                  style={{ backgroundColor: "#fff", marginTop: -10 }}
                >
                  <div className="col-sm mg-t-10 mg-sm-t-10 mg-b-10">
                    <h5 className="tx mg-t-5">Add Item</h5>
                  </div>
                  <div className="col-sm mg-t-10 mg-sm-t-10 mg-b-10">
                    {" "}
                    <div className="d-flex px-5 justify-content-end">
                      <button
                        onClick={() => {
                          window.location.href = "/Home";
                        }}
                        className="btn btn-sm btn-white mr-2"
                        style={{ zIndex: 1000 }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={this.onSubmit}
                        className="btn btn-sm  btn-icon btn-primary px-4 mx-1"
                        style={{ zIndex: 1000 }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mg-b-25"></div>
                <div className="row row-sm">
                  <div className="col-6 col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Item Type
                    </label>
                    <p className="mg-b-0">
                      <select
                        name="product_type"
                        className="custom-select custom-select-sm"
                        onChange={this.onChangeHandler}
                        value={this.state.product_type}
                        required
                      >
                        <option name="product" value="product">
                          Product
                        </option>
                        <option name="service" value="service">
                          Service
                        </option>
                      </select>
                    </p>
                  </div>
                  <div className="col-6 col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Item Name
                    </label>
                    <p className="mg-b-0">
                      <input
                        name="product_name"
                        onChange={this.onChangeHandler}
                        value={this.state.product_name}
                        required
                      />
                    </p>
                  </div>
                  <div className="col-6 col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      HSN/SAC Code
                    </label>
                    <p className="mg-b-0">
                      <input
                        name="hsn_code"
                        onChange={this.onChangeHandler}
                        value={this.state.hsn_code}
                      />
                    </p>
                  </div>
                  {/* col */}
                </div>

                <div className="row row-sm mg-t-20">
                  <div className="col-6 col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Model Number
                    </label>
                    <p className="mg-b-0">
                      <input
                        name="model_num"
                        onChange={this.onChangeHandler}
                        value={this.state.model_num}
                      />
                    </p>
                  </div>
                  <div className="col-6 col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Quantity
                    </label>
                    <p className="mg-b-0">
                      <input
                        name="quantity"
                        type="numeric"
                        onChange={this.onChangeHandler}
                        value={this.state.quantity}
                      />
                    </p>
                  </div>

                  <div className="col-6 col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Unit Price
                    </label>
                    <p className="mg-b-0">
                      <input
                        name="cost"
                        type="numeric"
                        onChange={this.onChangeHandler}
                        value={this.state.cost}
                      />
                    </p>
                  </div>
                </div>
                <div className="row row-sm mg-t-20">
                  <div className="col-6 col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Remarks
                    </label>
                    <p className="mg-b-0">
                      <textarea
                        name="remarks"
                        onChange={this.onChangeHandler}
                        value={this.state.remarks}
                      />
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

    )
  }
}
