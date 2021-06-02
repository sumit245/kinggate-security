import React, { Component } from "react";
import "jquery";
import "../../assets/css/dashforge.css";
import {
  getChallans,
  updateChallans,
} from "../../controllers/ChallanController";
import $ from "jquery";
import { addPayments } from "../../controllers/PaymentController";
let Challans = getChallans();
export default class DisplayChallan extends Component {
  onChangeHandler;
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      challandetails: [],
      allChallans: [],
    };
  }

  onAcceptPay = () => {
    let modal = document.getElementById("acceptPayForm");
    modal.style.display = "block";
  };
  acceptPayment = () => {
    const challanupdater = {};
    const newPayment = this.state;
    newPayment.collected_by = "Admin";
    newPayment.challan_num = newPayment.challandetails.challan_num;
    newPayment.client_name = newPayment.challandetails.client_name;
    newPayment.collection_date = "12 jan 2012";
    let x = parseInt(newPayment.collection_amount);
    let y = parseInt(newPayment.challandetails.balance);
    console.log(x, y);
    if (x > y) {
      $("#amountHelper").text("invalid amount").fadeOut(3000);
    } else {
      console.log("no");
      newPayment.balance =
        newPayment.challandetails.balance - newPayment.collection_amount;
      if (newPayment.balance > 0) {
        newPayment.status = "Pending";
      } else {
        newPayment.status = "Settled";
      }
      challanupdater.balance = newPayment.balance;
      challanupdater.status = newPayment.status;
      challanupdater.challan_num = newPayment.challandetails.challan_num
      challanupdater.challan_date = newPayment.challandetails.challan_date
      challanupdater.client_name =  newPayment.challandetails.client_name 
      challanupdater.mobile_number = newPayment.challandetails.mobile_number
      challanupdater.company = newPayment.challandetails.company
      challanupdater.address=newPayment.challandetails.address
      challanupdater.item_name =  newPayment.challandetails.item_name 
      challanupdater.item_cost = newPayment.challandetails.item_cost
      challanupdater.quantity =  newPayment.challandetails.quantity
      challanupdater.item_disc =  newPayment.challandetails.item_disc
      challanupdater.item_description =  newPayment.challandetails.item_description
      challanupdater.gst_num =  newPayment.challandetails.gst_num 
      challanupdater.item_price =  newPayment.challandetails.item_price 
      challanupdater.grand_disc =  newPayment.challandetails.grand_disc 
      challanupdater.grand_total =  newPayment.challandetails.grand_total
      challanupdater.amount_paid =  newPayment.collection_amount
      
      updateChallans(newPayment.challandetails._id, challanupdater);
      addPayments(newPayment);
      window.location.href =
        "/challandetail?data=" + newPayment.challandetails.challan_num;
    }
    console.log(newPayment);
  };

  componentDidMount = () => {
    Challans.then((data) => data)
      .then((json) => {
        this.setState({ allChallans: json });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentWillReceiveProps(nextprops) {
    const thisState = nextprops.challan;
    this.setState({ challandetails: thisState });
  }
  abortController = new AbortController();
  componentWillUnmount() {
    this.abortController.abort();
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
  render() {
    const { challandetails } = this.state;
    if (!this.state.challandetails) {
      return <div />;
    }
      return (
        <div id="contactInformation" className="pd-20 pd-xl-25">
          <div class="container">
            <div class="card">
              <div class="card-header my-0 py-0">
                Challan&nbsp;
                <strong>{challandetails.challan_num}</strong>
                <span class="float-right">
                  {" "}
                  <strong>Status:</strong> Pending
                </span>
              </div>
              <div class="card-body">
                <div class="row mb-1">
                  <div class="col-sm-6">
                    <h6 class="mb-0">From:</h6>
                    <div>
                      <strong>KhataBook</strong>
                    </div>
                    <div>56/8,B, Noida</div>
                    <div>Phone: .987210</div>
                  </div>

                  <div class="col-sm-6">
                    <h6 class="mb-0">To:</h6>
                    <div>
                      <strong>{challandetails.client_name}</strong>
                    </div>
                    <div>{challandetails.company}</div>
                    {/* <div>43-190 Mikolow, Poland</div> */}
                    <div>{challandetails.gst_num}</div>
                    <div>Mob: {challandetails.mobile_number}</div>
                  </div>
                </div>

                <div class="table-responsive-sm">
                  <table class="table table-striped">
                    <thead className="tx-14 my-0 py-0">
                      <tr>
                        <th class="center">#</th>
                        <th>Item</th>
                        <th class="right">Unit Cost</th>
                        <th class="center">Qty</th>
                        <th class="center">Disc</th>
                        <th class="right">Subtotal</th>
                      </  tr>
                    </thead>
                    <tbody className="tx-12 my-0 py-0">
                      <tr>
                        <td class="center">1</td>
                        <td class="left strong">{challandetails.item_name}</td>
                        <td class="right">{challandetails.item_cost}</td>
                        <td class="center">{challandetails.quantity}</td>
                        <td class="right">{challandetails.item_disc}</td>
                        <td class="right">{challandetails.item_price}</td>
                        {/* <td class="right"></td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-sm-5"></div>

                  <div class="col-lg-4 col-sm-5 ml-auto">
                    <table class="table table-clear">
                      <tbody className="tx-12 my-0 py-0">
                        <tr>
                          <td class="left">
                            <strong>Total</strong>
                          </td>
                          <td class="right">{challandetails.item_price}</td>
                        </tr>
                        <tr>
                          <td class="left">
                            <strong>Discount</strong>
                          </td>
                          <td class="right">{challandetails.grand_disc}</td>
                        </tr>
                        <tr>
                          <td class="left">
                            <strong>Grand Total</strong>
                          </td>
                          <td class="right">
                            <strong>{challandetails.grand_total}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td class="left">
                            <strong>Paid</strong>
                          </td>
                          <td class="right">
                            <strong>{challandetails.amount_paid}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td class="left">
                            <strong>Balance</strong>
                          </td>
                          <td class="right">
                            <strong>{challandetails.balance}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      );
    }
  }
