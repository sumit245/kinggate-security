import React, { Component } from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons-dt";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-select-dt";
import { getPayments } from "../../controllers/PaymentController";
import "../../assets/css/dashforge.contacts.css";
import * as jzip from "jszip";
import "pdfmake";
import $ from "jquery";
import "jquery";

window.JSZip = jzip;
const Payment = getPayments();

export default class DummyPymentTable extends Component {
  state = {
    loading: false,
    ChallanData: [],
    challantable: "",
    rowData: [],
  };
  handleRowsSelectionChanged = () => {
    let rows = this.state.rowData;
    this.props.onRowsSelected(rows);
  };
  componentDidMount() {
    const self = this;
    $("#challanstab").DataTable().destroy();
    $("#challanstab tfoot th").each(function () {
      var title = $(this).text();
      $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });
    Payment.then((data) => data)
      .then((json) => {
        this.setState({ isLoaded: true, ChallanData: json });
      })
      .then((json) => {
        var selected = [];
        var tableRow = [];
        var table = $("#challanstab").DataTable({
          paging: true,
          dom: "Bfrtip",
          responsive: true,
          buttons: [],
          processing: true,
          initComplete: function () {
            this.api()
              .columns()
              .every(function () {
                var that = this;
                return $("input", this.footer()).on(
                  "keyup change clear",
                  function () {
                    if (that.search() !== this.value) {
                      that.search(this.value).draw();
                    }
                  }
                );
              });
          },
        });
        table.on("click", "tr", function () {
          var id = this.id;
          var index = $.inArray(id, selected);
          if (index === -1) {
            selected.push(id);
          } else {
            selected.splice(index, 1);
          }
          $(this).toggleClass("selected");
          if ($(this).hasClass("selected")) {
            var val = $(this).closest("tr").find("td:eq(3)").text();
            tableRow.push(val);
          } else {
            var val = $(this).closest("tr").find("td:eq(3)").text();
            if (tableRow.indexOf(val) >= 0) {
              tableRow.splice(tableRow.indexOf(val), 1);
            }
          }
          self.setState({ rowData: tableRow });
          self.handleRowsSelectionChanged();
        });
        table.on("dblclick", "tr", function () {
          $(this).addClass("selected");
          var val = $(this).closest("tr").find("td:eq(1)").text();
          console.log(val);
          var new_url = "/challandetail?data=" + val;

          $("#challanstab").hide();
          $("#challanstab_wrapper").hide();
          window.location.href = new_url;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    $("#challanstab").DataTable().destroy();
  }

  render() {
    const tableData = this.state.ChallanData;
    return (
      <div>
        <table id="challanstab" className=" table" style={{ width: 1260 }}>
          <thead>
            <tr>
              <th style={{ width: 4 }}></th>
              <th className="wd-10">#</th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Challan Date
              </th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Company
              </th>

              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Mode
              </th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Transaction Id
              </th>

              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, key) => {
              return (
                <tr key={key}>
                  <td style={{ width: 4 }}></td>
                  <td>{data.challan_num}</td>

                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.challan_date}
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
                    {data.amount}
                  </td>
                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.mode}
                  </td>
                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.transaction_id}
                  </td>
                  <td>{data.balance}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
