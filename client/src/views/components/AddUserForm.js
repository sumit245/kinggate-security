import React, { Component } from "react";
import "jquery";
import "../../assets/css/dashforge.css";
import { addClient } from "../../controllers/ClientController";
import $ from "jquery";
import { deleteClient, getClients } from "../../controllers/ClientController";
const Clt = getClients();
export default class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      client_name: "",
      mobile_number: "",
      phone_number: "",
      company: "",
      sector: "",
      block: "",
      address: "",
      gst_num: "",
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
    const data = this.state;
    addClient(data);
    window.location.href = "/clientdetail?data="+data.mobile_number;
  }
  componentDidMount() {
    const self = this;
    Clt.then((data) => data)
      .then(
        (json) => {
          this.setState({ isLoaded: true, ClientData: json });
        },
        (err) => {
          this.setState({ isLoaded: true, err });
          console.log(err);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    if (this.props.addState) {
      return (
         <div id="contactInformation" className=" pd-20 pd-xl-25">
              <form action="">
                <div
                  className="row row-sm"
                  style={{ backgroundColor: "#fff", marginTop: -10 }}
                >
                  <div className="col-sm mg-t-10 mg-sm-t-10 mg-b-10">
                    <h5 className="tx mg-t-5">Add Client</h5>
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
                        id="submitBtn"
                        className="btn btn-sm  btn-icon btn-primary px-4 mx-1"
                        style={{ zIndex: 1000 }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between mg-t-25 mg-b-25">
                  <h6 className="mg-b-0">Company Details</h6>
                </div>
                <div className="row row-sm">
                  <div className="col-6 col-sm-4 ">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Company
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="company"
                        value={this.state.company}
                      />
                    </p>
                  </div>
                  <div className="col-6 col-sm-4 ">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      GST Number
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="gst_num"
                        value={this.state.gst_num}
                      />
                    </p>
                  </div>
                  <div className="col-6 col-sm-4 ">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Email Address
                    </label>
                    <p className=" mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="email_id"
                        value={this.state.email_id}
                      />
                    </p>
                  </div>
                  <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-30">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Client Name
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="client_name"
                        value={this.state.client_name}
                      />
                    </p>
                  </div>
                  {/* col */}
                  <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-30">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Mobile Number
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="mobile_number"
                        value={this.state.mobile_number}
                        required
                      />
                    </p>
                  </div>
                  {/* col */}
                  <div className="col-sm col-sm-4 mg-t-20 mg-sm-t-30 ">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Phone Number
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="phone_number"
                        value={this.state.phone_number}
                      />
                    </p>
                  </div>
                  {/* col */}
                </div>
                <div className="d-flex align-items-center justify-content-between mg-t-25 mg-b-20">
                  <h6 className="mg-b-0">Billing Address</h6>
                </div>

                <div className="row row-sm">
                  <div className="col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Sector
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="sector"
                        value={this.state.sector}
                      />
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Block
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="block"
                        value={this.state.block}
                      />
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Address
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="address"
                        value={this.state.address}
                      />
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mg-t-25 mg-b-10">
                  <h6 className="mg-b-0">Communication Action</h6>
                </div>
                <div className="row row-sm">
                  <div className="col col-3 mg-t-10">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="check1"
                      />
                      <label
                        className="custom-control-label tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                        htmlFor="check1"
                      >
                        SMS Opt-Out
                      </label>
                    </div>
                  </div>
                  <div className="col col-3 mg-t-10">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="check2"
                      />
                      <label
                        className="custom-control-label tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                        htmlFor="check2"
                      >
                        Email Opt-Out
                      </label>
                    </div>
                  </div>
                </div>

                {/* row */}
              </form>
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
                    <h5 className="tx mg-t-5">Add Client</h5>
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

                <div className="d-flex align-items-center justify-content-between mg-t-25 mg-b-25">
                  <h6 className="mg-b-0">Company Details</h6>
                </div>
                <div className="row row-sm">
                  <div className="col-6 col-sm-4 ">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Company
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="company"
                        value={this.state.company}
                      />
                    </p>
                  </div>
                  <div className="col-6 col-sm-4 ">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      GST Number
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="gst_num"
                        value={this.state.gst_num}
                      />
                    </p>
                  </div>
                  <div className="col-6 col-sm-4 ">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Email Address
                    </label>
                    <p className=" mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="email_id"
                        value={this.state.email_id}
                      />
                    </p>
                  </div>
                  <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-30">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Client Name
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="client_name"
                        value={this.state.client_name}
                      />
                    </p>
                  </div>
                  {/* col */}
                  <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-30">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Mobile Number
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="mobile_number"
                        value={this.state.mobile_number}
                        required
                      />
                    </p>
                  </div>
                  {/* col */}
                  <div className="col-sm col-sm-4 mg-t-20 mg-sm-t-30 ">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Phone Number
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="phone_number"
                        value={this.state.phone_number}
                      />
                    </p>
                  </div>
                  {/* col */}
                </div>
                <div className="d-flex align-items-center justify-content-between mg-t-25 mg-b-20">
                  <h6 className="mg-b-0">Billing Address</h6>
                </div>

                <div className="row row-sm">
                  <div className="col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Sector
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="sector"
                        value={this.state.sector}
                      />
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Block
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="block"
                        value={this.state.block}
                      />
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                      Address
                    </label>
                    <p className="mg-b-0">
                      <input
                        onChange={this.onChangeHandler}
                        name="address"
                        value={this.state.address}
                      />
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mg-t-25 mg-b-10">
                  <h6 className="mg-b-0">Communication Action</h6>
                </div>
                <div className="row row-sm">
                  <div className="col col-3 mg-t-10">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="check1"
                      />
                      <label
                        className="custom-control-label tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                        htmlFor="check1"
                      >
                        SMS Opt-Out
                      </label>
                    </div>
                  </div>
                  <div className="col col-3 mg-t-10">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="check2"
                      />
                      <label
                        className="custom-control-label tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                        htmlFor="check2"
                      >
                        Email Opt-Out
                      </label>
                    </div>
                  </div>
                </div>

                {/* row */}
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}
