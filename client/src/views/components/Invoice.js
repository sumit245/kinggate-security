import React, { Component } from "react";
import styles from "./Invoices.module.scss";
import LineItems from "./LineItems";
import uuidv4 from "uuid/v4";
import $ from "jquery";
import { getClients } from "../../controllers/ClientController";
import { searchTable, searchColumn } from "../../helper/search";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { addChallans } from "../../controllers/ChallanController";

let Clients = getClients();

export const getData = (data) => {
  console.log(data);
  addChallans(data)
};
class Invoice extends Component {
  locale = "en-US";
  currency = "INR";
  state = {
    dates: new Date(),
    taxRate: 0.0,
    lineItems: [
      {
        id: "initial", // react-beautiful-dnd unique key
        name: "",
        description: "",
        quantity: 0,
        price: 0.0,
        linediscount: 0.0,
      },
    ],
    clients: [],
    client: {},
    dat: "",
  };
  
  editDate = () => {
    document.getElementById("challandateedit").contentEditable = "true";
    document.getElementById("reactCalender").style.display = "block";
  };
  searchColumns = (clientNameSearch, ClientTable) => {
    searchColumn(clientNameSearch, ClientTable);
    console.log("Searching...", clientNameSearch);
  };
  fillData = (data) => {
    const client = {
      mobile_number: data.mobile_number,
      client_name: data.client_name,
      company: data.company,
      gst_num: data.gst_num,
      address: data.address,
    };
    this.setState({ client: client });
    let modal = document.getElementById("clienttable");
    modal.style.display = "none";
  };
  handleInvoiceChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onItemSelected = (element) => {
    let lineItems = this.state.lineItems;
    this.setState({
      [lineItems.name]: [element.name],
      [lineItems.price]: [element.cost],
    });
    console.log(this.state.lineItems);
  };
  handleLineItemChange = (elementIndex) => (event) => {
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) return item;
      return { ...item, [event.target.name]: event.target.value };
    });
    this.setState({ lineItems });
    this.props.onData1Changed(this.state.lineItems)
  };

  handleAddLineItem = (event) => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat([
        {
          id: uuidv4(),
          name: "",
          description: "",
          quantity: 0,
          price: 0.0,
          linediscount: 0.0,
        },
      ]),
    });
  };

  handleRemoveLineItem = (elementIndex) => (event) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => {
        return elementIndex !== i;
      }),
    });
  };

  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lineItems: newLineItems,
    });
  };

  handleFocusSelect = (event) => {
    event.target.select();
  };

  formatCurrency = (amount) => {
    return new Intl.NumberFormat(this.locale, {
      style: "currency",
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  calcTaxAmount = (c) => {
    return c * (this.state.taxRate / 100);
  };

  calcLineItemsTotal = () => {
    return this.state.lineItems.reduce(
      (prev, cur) => prev + cur.quantity * cur.price - cur.linediscount,
      0
    );
  };

  calcTaxTotal = () => {
    return this.calcLineItemsTotal() * (this.state.taxRate / 100);
  };
  onChangeDate = (calDate) => {
    let dat = calDate.toString();
    const newCalDateFormat = calDate.toLocaleString().split(",")[0];
    this.setState({ dat: newCalDateFormat });
    document.getElementById("reactCalender").style.display = "none";
  };
  calcGrandTotal = () => {
    return this.calcLineItemsTotal() + this.calcTaxTotal();
  };

  componentDidMount() {
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    Clients.then((data) => data)
      .then((json) => {
        this.setState({ clients: json, dat: today });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  showClientTable = () => {
    let modal = document.getElementById("clienttable");
    modal.style.display = "block";
  };

  render = () => {
    const { clients, client } = this.state;
    
    return (
      <>
        <div
          className={styles.invoice}
          style={{
            overflowY: "scroll",
            height: 500,
            top: 80,
            left: 0,
            position: "absolute",
          }}
        >
          <div className={styles.addresses}>
            <div className="row row-sm">
              <div className="col-6 col-sm-4 ">
                <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                  Company
                </label>
                <p className="mg-b-0">
                  <input
                    onClick={this.showClientTable}
                    name="company"
                    value={client.company}
                  />
                </p>
              </div>
              <div className="col-6 col-sm-4 ">
                <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                  Client name
                </label>
                <p className="mg-b-0">
                  <input name="gst_num" value={client.client_name} />
                </p>
              </div>
              <div className="col-6 col-sm-4 ">
                <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                  Gst no.
                </label>
                <p className=" mg-b-0">
                  <input
                    onChange={this.onChangeHandler}
                    name="gst_num"
                    value={client.gst_num}
                  />
                </p>
              </div>
              <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-30">
                <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                  challan date
                </label>
                <p className="mg-b-0">
                  <input
                    id="challandateedit"
                    onClick={this.editDate}
                    name="challan_date"
                    value={this.state.dat}
                  />
                </p>
              </div>
              {/* col */}
              <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-30">
                <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                  challan no.
                </label>
                <p className="mg-b-0">
                  <input name="challan_num" defaultValue="2" readOnly />
                </p>
              </div>
              {/* col */}
              <div className="col-sm col-sm-4 mg-t-20 mg-sm-t-30 ">
                <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                  status
                </label>
                <p className="mg-b-0 tx-uppercase">
                  <input
                    onChange={this.onChangeHandler}
                    className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans"
                    name="status"
                    defaultValue="unpaid"
                  />
                </p>
              </div>
              {/* col */}
            </div>
          </div>
          <hr />
          <LineItems
            items={this.state.lineItems}
            currencyFormatter={this.formatCurrency}
            addHandler={this.handleAddLineItem}
            itemPicked={this.onItemSelected}
            changeHandler={this.handleLineItemChange}
            focusHandler={this.handleFocusSelect}
            deleteHandler={this.handleRemoveLineItem}
            reorderHandler={this.handleReorderLineItems}
          />
          <form className="d-flex justify-content-end">
            <div className={styles.valueTable}>
              <div className={styles.row}>
                <div className={styles.label}>Total</div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcLineItemsTotal())}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Discount</div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcTaxTotal())}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Grand Total </div>
                <div className={`${styles.value} ${styles.currency}`}>
                  {this.formatCurrency(this.calcGrandTotal())}
                </div>
              </div>
            </div>
          </form>
          <div className={styles.footer}>
            <div className={styles.comments}>
              <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                Notes
              </label>
              <textarea className="col-12" />
            </div>
            <div className={styles.closing}>
              <div>Thank-you for your business</div>
            </div>
          </div>
        </div>
        <div
          className="modal modal-open"
          id="clienttable"
          tabIndex={-1}
          style={{ width: "fit-content", height: 450, position: "absolute" }}
          role="dialog"
        >
          <div
            className="modal-content"
            style={{
              position: "relative",
              width: 650,
              maxHeight: 450,
              padding: 0,
              margin: 0,
            }}
          >
            <div className="modal-body" style={{ margin: 0, padding: 0 }}>
              <table className="table table-dashboard" id="ClientTable">
                <thead>
                  <tr className="d-sm-table-row tx-bolder">
                    <th className="tx-bolder">Company</th>
                    <th className="tx-bolder">GST</th>
                    <th className="tx-bolder">Client Name</th>
                    <th className="tx-bolder">Mobile</th>
                    <th
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => {
                        let modal = document.getElementById("clienttable");
                        modal.style.display = "none";
                      }}
                    >
                      X
                    </th>
                  </tr>
                </thead>
                <tr className="d-sm-table-row">
                  <th>
                    <input
                      className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-sans"
                      id="clientNameSearch"
                      onKeyUp={() => {
                        this.searchColumns("clientNameSearch", "ClientTable");
                      }}
                      placeholder="Search..."
                    />
                  </th>
                  <th>
                    <input
                      className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-sans"
                      id="clientCompanySearch"
                      onKeyUp={() => {
                        this.searchColumns(
                          "clientCompanySearch",
                          "ClientTable"
                        );
                      }}
                      placeholder="Search..."
                    />
                  </th>
                  <th>
                    <input
                      className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-sans"
                      onKeyUp={() => {
                        this.searchColumns("clientMobileSearch", "ClientTable");
                      }}
                      placeholder="Search..."
                    />
                  </th>
                  <th>
                    <input
                      className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-sans"
                      id="clientAddressSearch"
                      onKeyUp={() => {
                        this.searchColumns(
                          "clientAddressSearch",
                          "ClientTable"
                        );
                      }}
                      placeholder="Search..."
                    />
                  </th>
                </tr>
                <tbody>
                  {clients.map((data, key) => {
                    return (
                      <tr
                        key={key}
                        onClick={() => this.fillData(data)}
                        style={{ height: 20, padding: 0 }}
                      >
                        <td
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {data.client_name}
                        </td>
                        <td
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {data.company}
                        </td>
                        <td
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {data.mobile_number}
                        </td>

                        <td
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {data.address}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="modal"
          id="reactCalender"
          tabIndex={-1}
          style={{ width: 300, position: "absolute" }}
          role="dialog"
        >
          <div
            className="modal-content"
            style={{
              position: "fixed",
              top: 80,
              right: 150,
              width: 300,
              maxHeight: 400,
              padding: 0,
              margin: 0,
            }}
          >
            <div className="modal-body" style={{ margin: 0, padding: 0 }}>
              <Calendar
                // formatLongDate="DD/MM/YYY"
                onChange={this.onChangeDate}
                value={this.state.dates}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default Invoice;
