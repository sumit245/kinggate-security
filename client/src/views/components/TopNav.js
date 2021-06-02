import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Search, Settings, Edit3, LifeBuoy, LogOut } from "react-feather";
import Eincopsoft from "../../views/images/Eincopsoft.png";

export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
      adminName: sessionStorage.getItem("adminName"),
      adminRole: sessionStorage.getItem("adminRole"),
    };
    this.drpDownClicked = this.drpDownClicked.bind(this);
  }

  drpDownClicked() {
    console.log(this.state.check);
    if (this.state.check) {
      let drp = document.getElementById("drpdn");
      drp.style.display = "block";
    } else {
      let drp = document.getElementById("drpdn");
      drp.style.display = "none";
    }
  }
  render() {
    const { adminName, adminRole } = this.state;
    return (
      <>
        <header className="navbar navbar-header navbar-header-fixed">
          <div className="navbar-brand">
            <img src={Eincopsoft} alt="Eincopsoft" height={42} width={114} />
          </div>
          {/* navbar-brand */}
          <div id="navbarMenu" className="navbar-menu-wrapper">
            <div className="nav navbar-menu">
              <div className="nav-item">
                <div className=" search-form">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn" type="button">
                    <Search />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* navbar-menu-wrapper */}
          <div className="navbar-right">
            <div
              className="dropdown dropdown-profile"
              style={{ position: "absolute", right: 120, top: 10 }}
            >
              <a
                className="dropdown-link"
                data-toggle="dropdown"
                data-display="static"
                onClick={() => {
                  this.setState((prevState) => ({
                    check: !prevState.check,
                  }));
                  this.drpDownClicked();
                }}
              >
                <div className="avatar avatar-sm">
                  <Avatar className="rounded-circle">Ad</Avatar>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: 50,
                    top: 0,
                    fontSize: 16,
                  }}
                >
                  <p>{adminName}</p>
                  <p
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 15,
                      fontSize: 16,
                      color:'#777'
                    }}
                  >
                    {adminRole}
                  </p>
                </div>
              </a>
              {/* dropdown-link */}
              {/* dropdown-link */}
              <div
                className="dropdown-menu dropdown-menu-right mr-n5 tx-13"
                id="drpdn"
              >
                <div className="avatar avatar-lg mg-b-15">
                  <Avatar className="rounded-circle">Ad</Avatar>
                
                  <div
                  style={{
                    position: "absolute",
                    left: 50,
                    top: 0,
                    fontSize: 16,
                  }}
                >
                  <p>{adminName}</p>
                  <p
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 15,
                      fontSize: 16,
                      color:'#777'
                    }}
                  >
                    {adminRole}
                  </p>
                </div>
                  
                </div>
                {adminRole === "admin" ? (
                  <>
                    <Link to="/settings" className="dropdown-item">
                      <Edit3 /> View Profile
                    </Link>
                    <div className="dropdown-divider" />
                    <Link to="/settings" className="dropdown-item">
                      <LifeBuoy /> Company Setting
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                      <Settings />
                      Account Settings
                    </Link>
                    <Link to="/logout" className="dropdown-item">
                      <LogOut />
                      Sign Out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/settings" className="dropdown-item">
                      <Edit3 /> View Profile
                    </Link>
                    <div className="dropdown-divider" />
                    <Link to="/logout" className="dropdown-item">
                      <LogOut />
                      Sign Out
                    </Link>
                  </>
                )}
              </div>
              {/* dropdown-menu */}
            </div>
            {/* dropdown */}
          </div>
          {/* navbar-right */}
        </header>
        {/* navbar */}
      </>
    );
  }
}
