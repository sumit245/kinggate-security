import React, { Component } from "react";
import $ from "jquery";
import { NavLink as Link } from 'react-router-dom'
import { Home, User, FileText, Tag, CreditCard, ShoppingBag } from 'react-feather'

export default class SideNav extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    // $("#dash").on("click", function () {
    //   $(this).toggleClass('active')
    // });
    // $("#homedash").on("click", function () {
    //   $(this).toggleClass('active')
    // });
    // $("#dashClient").on("click", function () {
    //   $(this).toggleClass('active')
    // });
    // $("#dashProd").on("click", function () {
    //   $(this).toggleClass('active')
    // });
    // $("#dashBill").on("click", function () {
    //   $(this).toggleClass('active')
    // });
    // $("#dashPay").on("click", function () {
    //   $(this).toggleClass('active')
    // });

  }
  render() {

    return (
      <>
        <div className="contact-wrapper">
          <div className="contact-navleft">
            <nav className="nav flex-column">
              <Link
                to="/"
                id="dash"
                className="nav-link"
              >
                <span
                  data-toggle="tooltip"
                  title="Clients"
                  data-placement="right"
                >
                  <Home />
                </span>
              </Link>
              <Link
                to="/Home"
                id="homedash"
                className="nav-link"
              >
                <span
                  data-toggle="tooltip"
                  title="Clients"
                  data-placement="right"
                >
                  <User />
                </span>
              </Link>
              <Link
                to="/Challans"
                id="dashClient"
                className="nav-link"
              >
                <span
                  data-toggle="tooltip"
                  title="Challans"
                  data-placement="right"
                >
                  <FileText />
                </span>
              </Link>
              <Link
                to="/Bills"
                id="dashBill"
                className="nav-link"
                data-toggle="tab"
              >
                <span
                  data-toggle="tooltip"
                  title="Bills"
                  data-placement="right"
                >
                  <Tag />
                </span>
              </Link>
              <Link
                to="/Payments"
                id="dashPay"
                className="nav-link"
              >
                <span
                  data-toggle="tooltip"
                  title="Payments"
                  data-placement="right"
                >
                  <CreditCard />
                </span>
              </Link>
              <Link
                to="/Products"
                id="dashProd"
                className="nav-link"
              >
                <span
                  data-toggle="tooltip"
                  title="Product"
                  data-placement="right"
                >
                  <ShoppingBag />
                </span>
              </Link>
            </nav>
          </div>
          {/* contact-navleft */}
        </div>
      </>
    );
  }
}
