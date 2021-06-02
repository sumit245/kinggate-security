import React, { Component } from "react";
import "jquery";
import "../../assets/css/dashforge.css";
import { getChallans } from "../../controllers/ChallanController";
import { getClients } from "../../controllers/ClientController";
import Bills from '../components/Bills'
import {
  getProducts,
  updateProduct,
} from "../../controllers/ProductController";
export default class AddBills extends Component {
  constructor(props) {
    super(props);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      client_name: "",
      mobile_number: "",
      phone_number: "",
      company: "",
      address: "",
      item_name: "",
      quantity: "",
      item_cost: "",
      item_description: "",
      item_price: "",
      grand_total: "",
      challan_date: "",
      grand_disc: "",
      balance: "",
      gst_num: "",
      clients: [],
      client: {},
      products: [],
      item: {},
      challan_num: "",
    };
  }
  render() {
    if (this.props.addState) {
      return <div id="contactInformation" className=" pd-20 pd-xl-25"></div>;
    } else {
      return (
        <div className="contact-content">
          <div className="tab-content" style={{ position: "absolute", left: 0, width: "80%" }}>
            <div id="contactInformation" className=" pd-20 pd-xl-25">
            <div
                  className="row row-sm"
                  style={{ backgroundColor: "#fff", marginTop: -10 }}
                >
                  <div className="col-sm mg-t-10 mg-sm-t-10 mg-b-10">
                    <h5 className="tx mg-t-5">Add Bills</h5>
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

              <Bills />
            </div>
          </div>
          </div>
      );
    }
  }
}
