import React, { Component } from "react";
import "jquery";
import "../../assets/css/dashforge.css";
import { addProduct, getProducts } from "../../controllers/ProductController";
import $ from "jquery";

export default class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      product_num: "",
      product_name: "",
      product_type:"product",
      model_num: "",
      cost: "₹ 0.00",
      quantity: "0.00",
      products: "",
      remarks: "",
    };
  }
  onChangeHandler(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
    const newVal = {
      [e.target.name]: value,
    };
    console.log(newVal);
  }
  onSubmit(e) {
    e.preventDefault();

    // console.log(prods);
    const data = this.state;
    console.log(data);
    addProduct(data);
    window.location.href = "/Products";
  }
  componentDidMount() {
    const self = this;
    let products = getProducts();
    products
      .then((data) => data)
      .then((json) => {
        let count = json.length;
        this.setState({ product_num: count + 1 });
      });

    $(document).ready(function () {
      if (self.props.addState) {
        var client_name = $("#clnt_name");
        $("#sbmtBtn").click(function () {
          $("#myForm").submit();
          // addClient(newClient)
          console.log(client_name);
        });
      }
    });
    // document.querySelector("form").addEventListener("submit", this.onSubmit);
  }
  render() {
    if (this.props.addState) {
      return (
        <div id="contactInformation" className=" pd-20 pd-xl-25">
          <div className="row">
            <div className="col-6 col-sm">
              <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                Product Name
              </label>
              <p className="mg-b-0">
                <input id="prod_name" name="prod_name" value="1" />
              </p>
            </div>
            {/* col */}
            <div className="col-6 col-sm">
              <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                Unit Cost
              </label>
              <p className="mg-b-0">
                <input id="prodcost" name="product_cost" value="1" />
              </p>
            </div>
            {/* col */}
            <div className="col-sm mg-t-20 mg-sm-t-0">
              <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                Quantity
              </label>
              <p className="mg-b-0">
                <input id="quantity" name="quantity" value="1" />
              </p>
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
      );
    } else {
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
      );
    }
  }
}
