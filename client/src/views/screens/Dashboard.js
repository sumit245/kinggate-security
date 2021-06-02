import React, { Component } from "react";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import "../../assets/css/dashforge.dashboard.css";
import { BarChart2 } from "react-feather";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
    };
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.LogOutRequest();
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "../../lib/jqvmap/jquery.vmap.min.js";
    script.src = "../../lib/chart.js/Chart.bundle.min.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <TopNav />
        <div className="contact-wrapper">
          <SideNav />
          <div
            className="d-flex mx-5 content content-component"
            style={{
              flexDirection: "column",
              height: 500,
              overflowY: "scroll",
            }}
          >
            <div className="row row-xs">
              <div className="col-sm-6 col-lg-3">
                <div className="card card-body">
                  <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">
                    Conversion Rate
                  </h6>
                  <div className="d-flex d-lg-block d-xl-flex align-items-end">
                    <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">
                      0.81%
                    </h3>
                    <p className="tx-11 tx-color-03 mg-b-0">
                      <span className="tx-medium tx-success">
                        1.2% <i className="icon ion-md-arrow-up" />
                      </span>{" "}
                      than last week
                    </p>
                  </div>
                  <div className="chart-three">
                    <div id="flotChart3" className="flot-chart ht-30" />
                  </div>
                  {/* chart-three */}
                </div>
              </div>
              {/* col */}
              <div className="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
                <div className="card card-body">
                  <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">
                    Unique Purchases
                  </h6>
                  <div className="d-flex d-lg-block d-xl-flex align-items-end">
                    <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">
                      3,137
                    </h3>
                    <p className="tx-11 tx-color-03 mg-b-0">
                      <span className="tx-medium tx-danger">
                        0.7% <i className="icon ion-md-arrow-down" />
                      </span>{" "}
                      than last week
                    </p>
                  </div>
                  <div className="chart-three">
                    <div id="flotChart4" className="flot-chart ht-30" />
                  </div>
                  {/* chart-three */}
                </div>
              </div>
              {/* col */}
              <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                <div className="card card-body">
                  <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">
                    Avg. Order Value
                  </h6>
                  <div className="d-flex d-lg-block d-xl-flex align-items-end">
                    <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">
                      $306.20
                    </h3>
                    <p className="tx-11 tx-color-03 mg-b-0">
                      <span className="tx-medium tx-danger">
                        0.3% <i className="icon ion-md-arrow-down" />
                      </span>{" "}
                      than last week
                    </p>
                  </div>
                  <div className="chart-three">
                    <div id="flotChart5" className="flot-chart ht-30" />
                  </div>
                  {/* chart-three */}
                </div>
              </div>
              {/* col */}
              <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                <div className="card card-body">
                  <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">
                    Order Quantity
                  </h6>
                  <div className="d-flex d-lg-block d-xl-flex align-items-end">
                    <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">
                      1,650
                    </h3>
                    <p className="tx-11 tx-color-03 mg-b-0">
                      <span className="tx-medium tx-success">
                        2.1% <i className="icon ion-md-arrow-up" />
                      </span>{" "}
                      than last week
                    </p>
                  </div>
                  <div className="chart-three">
                    <div id="flotChart6" className="flot-chart ht-30" />
                  </div>
                  {/* chart-three */}
                </div>
              </div>
              {/* col */}
              <div className="col-lg-8 col-xl-7 mg-t-10">
                <div className="card">
                  <div className="card-header pd-y-20 d-md-flex align-items-center justify-content-between">
                    <h6 className="mg-b-0">
                      Account &amp; Monthly Recurring Revenue Growth
                    </h6>
                    <ul className="list-inline d-flex mg-t-20 mg-sm-t-10 mg-md-t-0 mg-b-0">
                      <li className="list-inline-item d-flex align-items-center">
                        <span className="d-block wd-10 ht-10 bg-df-1 rounded mg-r-5" />
                        <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">
                          Growth Actual
                        </span>
                      </li>
                      <li className="list-inline-item d-flex align-items-center mg-l-5">
                        <span className="d-block wd-10 ht-10 bg-df-2 rounded mg-r-5" />
                        <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">
                          Actual
                        </span>
                      </li>
                      <li className="list-inline-item d-flex align-items-center mg-l-5">
                        <span className="d-block wd-10 ht-10 bg-df-3 rounded mg-r-5" />
                        <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">
                          Plan
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* card-header */}
                  <div className="card-body pos-relative pd-0">
                    <div className="pos-absolute t-20 l-20 wd-xl-100p z-index-10">
                      <div className="row">
                        <div className="col-sm-5">
                          <h3 className="tx-normal tx-rubik tx-spacing--2 mg-b-5">
                            $620,076
                          </h3>
                          <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-10">
                            MRR Growth
                          </h6>
                          <p className="mg-b-0 tx-12 tx-color-03">
                            Measure How Fast You’re Growing Monthly Recurring
                            Revenue. <a href="dashboard-one.html">Learn More</a>
                          </p>
                        </div>
                        {/* col */}
                        <div className="col-sm-5 mg-t-20 mg-sm-t-0">
                          <h3 className="tx-normal tx-rubik tx-spacing--2 mg-b-5">
                            $1,200
                          </h3>
                          <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-10">
                            Avg. MRR/Customer
                          </h6>
                          <p className="mg-b-0 tx-12 tx-color-03">
                            The revenue generated per account on a monthly or
                            yearly basis.{" "}
                            <a href="dashboard-one.html">Learn More</a>
                          </p>
                        </div>
                        {/* col */}
                      </div>
                      {/* row */}
                    </div>
                    <div className="chart-one">
                      <div id="flotChart" className="flot-chart" />
                    </div>
                    {/* chart-one */}
                  </div>
                  {/* card-body */}
                </div>
                {/* card */}
              </div>
              <div className="col-lg-4 col-xl-5 mg-t-10">
                <div className="card">
                  <div className="card-header pd-t-20 pd-b-0 bd-b-0">
                    <h6 className="mg-b-5">Account Retention</h6>
                    <p className="tx-12 tx-color-03 mg-b-0">
                      Number of customers who have active subscription with you.
                    </p>
                  </div>
                  {/* card-header */}
                  <div className="card-body pd-20">
                    <div className="chart-two mg-b-20">
                      <div id="flotChart2" className="flot-chart" />
                    </div>
                    {/* chart-two */}
                    <div className="row">
                      <div className="col-sm">
                        <h4 className="tx-normal tx-rubik tx-spacing--1 mg-b-5">
                          $1,680<small>.50</small>
                        </h4>
                        <p className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-10 tx-primary">
                          Expansions
                        </p>
                        <div className="tx-12 tx-color-03">
                          Customers who have upgraded the level of your products
                          or service.
                        </div>
                      </div>
                      {/* col */}
                      <div className="col-sm mg-t-20 mg-sm-t-0">
                        <h4 className="tx-normal tx-rubik tx-spacing--1 mg-b-5">
                          $1,520<small>.00</small>
                        </h4>
                        <p className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-10 tx-pink">
                          Cancellations
                        </p>
                        <div className="tx-12 tx-color-03">
                          Customers who have ended their subscription with you.
                        </div>
                      </div>
                      {/* col */}
                    </div>
                    {/* row */}
                  </div>
                  {/* card-body */}
                </div>
                {/* card */}
              </div>
              <div className="col-md-6 col-xl-4 mg-t-10 order-md-1 order-xl-0">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h6 className="mg-b-0">Sales Revenue</h6>
                    <div className="tx-13 d-flex align-items-center">
                      <span className="mg-r-5">Country:</span>{" "}
                      <a
                        href="dashboard-one.html"
                        className="d-flex align-items-center link-03 lh-0"
                      >
                        USA <i className="icon ion-ios-arrow-down mg-l-5" />
                      </a>
                    </div>
                  </div>
                  {/* card-header */}
                  <div className="card-body pd-0">
                    <div className="table-responsive">
                      <table className="table table-borderless table-dashboard table-dashboard-one">
                        <thead>
                          <tr>
                            <th className="wd-40">States</th>
                            <th className="wd-25 text-right">Orders</th>
                            <th className="wd-35 text-right">Earnings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="tx-medium">California</td>
                            <td className="text-right">12,201</td>
                            <td className="text-right">$150,200.80</td>
                          </tr>
                          <tr>
                            <td className="tx-medium">Texas</td>
                            <td className="text-right">11,950</td>
                            <td className="text-right">$138,910.20</td>
                          </tr>
                          <tr>
                            <td className="tx-medium">Wyoming</td>
                            <td className="text-right">11,198</td>
                            <td className="text-right">$132,050.00</td>
                          </tr>
                          <tr>
                            <td className="tx-medium">Florida</td>
                            <td className="text-right">9,885</td>
                            <td className="text-right">$127,762.10</td>
                          </tr>
                          <tr>
                            <td className="tx-medium">New York</td>
                            <td className="text-right">8,560</td>
                            <td className="text-right">$117,087.50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* table-responsive */}
                  </div>
                  {/* card-body */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-lg-12 col-xl-8 mg-t-10">
                <div className="card mg-b-10">
                  <div className="card-header pd-t-20 d-sm-flex align-items-start justify-content-between bd-b-0 pd-b-0">
                    <div>
                      <h6 className="mg-b-5">Your Most Recent Earnings</h6>
                      <p className="tx-13 tx-color-03 mg-b-0">
                        Your sales and referral earnings over the last 30 days
                      </p>
                    </div>
                    <div className="d-flex mg-t-20 mg-sm-t-0">
                      <div className="btn-group flex-fill">
                        <button className="btn btn-white btn-xs active">
                          Range
                        </button>
                        <button className="btn btn-white btn-xs">Period</button>
                      </div>
                    </div>
                  </div>
                  {/* card-header */}
                  <div className="card-body pd-y-30">
                    <div className="d-sm-flex">
                      <div className="media">
                        <div className="wd-40 wd-md-50 ht-40 ht-md-50 bg-teal tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-6">
                          <BarChart2/>
                        </div>
                        <div className="media-body">
                          <h6 className="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold tx-nowrap mg-b-5 mg-md-b-8">
                            Gross Earnings
                          </h6>
                          <h4 className="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                            $1,958,104
                          </h4>
                        </div>
                      </div>
                      <div className="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                        <div className="wd-40 wd-md-50 ht-40 ht-md-50 bg-pink tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-5">
                          <BarChart2/>
                        </div>
                        <div className="media-body">
                          <h6 className="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8">
                            Tax Withheld
                          </h6>
                          <h4 className="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                            $234,769<small>.50</small>
                          </h4>
                        </div>
                      </div>
                      <div className="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                        <div className="wd-40 wd-md-50 ht-40 ht-md-50 bg-primary tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-4">
                          <BarChart2/>
                        </div>
                        <div className="media-body">
                          <h6 className="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8">
                            Net Earnings
                          </h6>
                          <h4 className="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                            $1,608,469<small>.50</small>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card-body */}
                  <div className="table-responsive">
                    <table className="table table-dashboard mg-b-0">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th className="text-right">Sales Count</th>
                          <th className="text-right">Gross Earnings</th>
                          <th className="text-right">Tax Withheld</th>
                          <th className="text-right">Net Earnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tx-color-03 tx-normal">03/05/2018</td>
                          <td className="tx-medium text-right">1,050</td>
                          <td className="text-right tx-teal">+ $32,580.00</td>
                          <td className="text-right tx-pink">- $3,023.10</td>
                          <td className="tx-medium text-right">
                            $28,670.90{" "}
                            <span className="mg-l-5 tx-10 tx-normal tx-success">
                              <i className="icon ion-md-arrow-up" /> 4.5%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tx-color-03 tx-normal">03/04/2018</td>
                          <td className="tx-medium text-right">980</td>
                          <td className="text-right tx-teal">+ $30,065.10</td>
                          <td className="text-right tx-pink">- $2,780.00</td>
                          <td className="tx-medium text-right">
                            $26,930.40{" "}
                            <span className="mg-l-5 tx-10 tx-normal tx-danger">
                              <i className="icon ion-md-arrow-down" /> 0.8%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tx-color-03 tx-normal">03/04/2018</td>
                          <td className="tx-medium text-right">980</td>
                          <td className="text-right tx-teal">+ $30,065.10</td>
                          <td className="text-right tx-pink">- $2,780.00</td>
                          <td className="tx-medium text-right">
                            $26,930.40{" "}
                            <span className="mg-l-5 tx-10 tx-normal tx-danger">
                              <i className="icon ion-md-arrow-down" /> 0.8%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tx-color-03 tx-normal">03/04/2018</td>
                          <td className="tx-medium text-right">980</td>
                          <td className="text-right tx-teal">+ $30,065.10</td>
                          <td className="text-right tx-pink">- $2,780.00</td>
                          <td className="tx-medium text-right">
                            $26,930.40{" "}
                            <span className="mg-l-5 tx-10 tx-normal tx-danger">
                              <i className="icon ion-md-arrow-down" /> 0.8%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tx-color-03 tx-normal">03/04/2018</td>
                          <td className="tx-medium text-right">980</td>
                          <td className="text-right tx-teal">+ $30,065.10</td>
                          <td className="text-right tx-pink">- $2,780.00</td>
                          <td className="tx-medium text-right">
                            $26,930.40{" "}
                            <span className="mg-l-5 tx-10 tx-normal tx-danger">
                              <i className="icon ion-md-arrow-down" /> 0.8%
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* table-responsive */}
                </div>
                {/* card */}
                <div className="card card-body ht-lg-100">
                  <div className="media">
                    <span className="tx-color-04">
                      <i data-feather="download" className="wd-60 ht-60" />
                    </span>
                    <div className="media-body mg-l-20">
                      <h6 className="mg-b-10">
                        Download your earnings in CSV format.
                      </h6>
                      <p className="tx-color-03 mg-b-0">
                        Open it in a spreadsheet and perform your own
                        calculations, graphing etc. The CSV file contains
                        additional details, such as the buyer location.{" "}
                      </p>
                    </div>
                  </div>
                  {/* media */}
                </div>
              </div>
              {/* col */}
              <div className="col-md-6 col-xl-4 mg-t-10">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h6 className="mg-b-0">Transaction History</h6>
                  </div>
                  <ul className="list-group list-group-flush tx-13">
                    <li className="list-group-item d-flex pd-sm-x-20">
                      <div className="avatar d-none d-sm-block">
                        <span className="avatar-initial rounded-circle bg-teal">
                          <i className="icon ion-md-checkmark" />
                        </span>
                      </div>
                      <div className="pd-sm-l-10">
                        <p className="tx-medium mg-b-0">Payment from #10322</p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Mar 21, 2019, 3:30pm
                        </small>
                      </div>
                      <div className="mg-l-auto text-right">
                        <p className="tx-medium mg-b-0">+ $250.00</p>
                        <small className="tx-12 tx-success mg-b-0">
                          Completed
                        </small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex pd-sm-x-20">
                      <div className="avatar d-none d-sm-block">
                        <span className="avatar-initial rounded-circle bg-indigo op-5">
                          <i className="icon ion-md-return-left" />
                        </span>
                      </div>
                      <div className="pd-sm-l-10">
                        <p className="tx-medium mg-b-2">
                          Process refund to #00910
                        </p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Mar 21, 2019, 1:00pm
                        </small>
                      </div>
                      <div className="mg-l-auto text-right">
                        <p className="tx-medium mg-b-2">-$16.50</p>
                        <small className="tx-12 tx-success mg-b-0">
                          Completed
                        </small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex pd-sm-x-20">
                      <div className="avatar d-none d-sm-block">
                        <span className="avatar-initial rounded-circle bg-orange op-5">
                          <i className="icon ion-md-bus" />
                        </span>
                      </div>
                      <div className="pd-sm-l-10">
                        <p className="tx-medium mg-b-2">
                          Process delivery to #44333
                        </p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Mar 20, 2019, 11:40am
                        </small>
                      </div>
                      <div className="mg-l-auto text-right">
                        <p className="tx-medium mg-b-2">3 Items</p>
                        <small className="tx-12 tx-info mg-b-0">
                          For pickup
                        </small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex pd-sm-x-20">
                      <div className="avatar d-none d-sm-block">
                        <span className="avatar-initial rounded-circle bg-teal">
                          <i className="icon ion-md-checkmark" />
                        </span>
                      </div>
                      <div className="pd-sm-l-10">
                        <p className="tx-medium mg-b-0">Payment from #023328</p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Mar 20, 2019, 10:30pm
                        </small>
                      </div>
                      <div className="mg-l-auto text-right">
                        <p className="tx-medium mg-b-0">+ $129.50</p>
                        <small className="tx-12 tx-success mg-b-0">
                          Completed
                        </small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex pd-sm-x-20">
                      <div className="avatar d-none d-sm-block">
                        <span className="avatar-initial rounded-circle bg-gray-400">
                          <i className="icon ion-md-close" />
                        </span>
                      </div>
                      <div className="pd-sm-l-10">
                        <p className="tx-medium mg-b-0">
                          Payment failed from #087651
                        </p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Mar 19, 2019, 12:54pm
                        </small>
                      </div>
                      <div className="mg-l-auto text-right">
                        <p className="tx-medium mg-b-0">$150.00</p>
                        <small className="tx-12 tx-danger mg-b-0">
                          Declined
                        </small>
                      </div>
                    </li>
                  </ul>
                  <div className="card-footer text-center tx-13">
                    <a href="dashboard-one.html" className="link-03">
                      View All Transactions{" "}
                      <i className="icon ion-md-arrow-down mg-l-5" />
                    </a>
                  </div>
                  {/* card-footer */}
                </div>
                {/* card */}
              </div>
              <div className="col-md-6 col-xl-4 mg-t-10">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h6 className="mg-b-0">New Customers</h6>
                  </div>
                  <ul className="list-group list-group-flush tx-13">
                    <li className="list-group-item d-flex pd-sm-x-20">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-gray-600">
                          s
                        </span>
                      </div>
                      <div className="pd-l-10">
                        <p className="tx-medium mg-b-0">Socrates Itumay</p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Customer ID#00222
                        </small>
                      </div>
                      <div className="mg-l-auto d-flex align-self-center">
                        <nav className="nav nav-icon-only">
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="mail" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="slash" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="user" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-sm-none"
                          >
                            <i data-feather="more-vertical" />
                          </a>
                        </nav>
                      </div>
                    </li>
                    <li className="list-group-item d-flex pd-x-20">
                      <div className="avatar">
                        <img
                          src="../../assets/img/img23.jpg"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="pd-l-10">
                        <p className="tx-medium mg-b-0">Reynante Labares</p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Customer ID#00221
                        </small>
                      </div>
                      <div className="mg-l-auto d-flex align-self-center">
                        <nav className="nav nav-icon-only">
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="mail" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="slash" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="user" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-sm-none"
                          >
                            <i data-feather="more-vertical" />
                          </a>
                        </nav>
                      </div>
                    </li>
                    <li className="list-group-item d-flex pd-x-20">
                      <div className="avatar">
                        <img
                          src="../../assets/img/img16.jpg"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="pd-l-10">
                        <p className="tx-medium mg-b-0">Marianne Audrey</p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Customer ID#00220
                        </small>
                      </div>
                      <div className="mg-l-auto d-flex align-self-center">
                        <nav className="nav nav-icon-only">
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="mail" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="slash" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="user" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-sm-none"
                          >
                            <i data-feather="more-vertical" />
                          </a>
                        </nav>
                      </div>
                    </li>
                    <li className="list-group-item d-flex pd-x-20">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-indigo op-5">
                          o
                        </span>
                      </div>
                      <div className="pd-l-10">
                        <p className="tx-medium mg-b-0">Owen Bongcaras</p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Customer ID#00219
                        </small>
                      </div>
                      <div className="mg-l-auto d-flex align-self-center">
                        <nav className="nav nav-icon-only">
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="mail" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="slash" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="user" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-sm-none"
                          >
                            <i data-feather="more-vertical" />
                          </a>
                        </nav>
                      </div>
                    </li>
                    <li className="list-group-item d-flex pd-x-20">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-primary op-5">
                          k
                        </span>
                      </div>
                      <div className="pd-l-10">
                        <p className="tx-medium mg-b-0">Kirby Avendula</p>
                        <small className="tx-12 tx-color-03 mg-b-0">
                          Customer ID#00218
                        </small>
                      </div>
                      <div className="mg-l-auto d-flex align-self-center">
                        <nav className="nav nav-icon-only">
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="mail" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="slash" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-none d-sm-block"
                          >
                            <i data-feather="user" />
                          </a>
                          <a
                            href="dashboard-one.html"
                            className="nav-link d-sm-none"
                          >
                            <i data-feather="more-vertical" />
                          </a>
                        </nav>
                      </div>
                    </li>
                  </ul>
                  <div className="card-footer text-center tx-13">
                    <a href="dashboard-one.html" className="link-03">
                      View More Customers{" "}
                      <i className="icon ion-md-arrow-down mg-l-5" />
                    </a>
                  </div>
                  {/* card-footer */}
                </div>
                {/* card */}
              </div>
              <div className="col-md-6 col-xl-4 mg-t-10">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h6 className="mg-b-0">Real-Time Sales</h6>
                    <ul className="list-inline d-flex mg-b-0">
                      <li className="list-inline-item d-flex align-items-center">
                        <span className="d-block wd-10 ht-10 bg-df-2 rounded mg-r-5" />
                        <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">
                          Today
                        </span>
                      </li>
                      <li className="list-inline-item d-flex align-items-center mg-l-10">
                        <span className="d-block wd-10 ht-10 bg-df-3 rounded mg-r-5" />
                        <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">
                          Yesterday
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* card-header */}
                  <div className="card-body pd-b-0">
                    <div className="row mg-b-20">
                      <div className="col">
                        <h4 className="tx-normal tx-rubik tx-spacing--1 mg-b-10">
                          $150,200{" "}
                          <small className="tx-11 tx-success letter-spacing--2">
                            <i className="icon ion-md-arrow-up" /> 0.20%
                          </small>
                        </h4>
                        <p className="tx-11 tx-uppercase tx-spacing-1 tx-medium tx-color-03">
                          Total Sales
                        </p>
                      </div>
                      <div className="col">
                        <h4 className="tx-normal tx-rubik tx-spacing--1 mg-b-10">
                          $21,880{" "}
                          <small className="tx-11 tx-danger letter-spacing--2">
                            <i className="icon ion-md-arrow-down" /> 1.04%
                          </small>
                        </h4>
                        <p className="tx-11 tx-uppercase tx-spacing-1 tx-medium tx-color-03">
                          Avg. Sales Per Day
                        </p>
                      </div>
                    </div>
                    {/* row */}
                  </div>
                  {/* card-body */}
                </div>
              </div>
            </div>
            {/* row */}
          </div>
        </div>
      </>
    );
  }
}
