import React, { Component } from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons-dt";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-select-dt";
import "../../assets/css/dashforge.contacts.css";
import * as jzip from "jszip";
import "pdfmake";
import $ from "jquery";
import { arrayFindObjectByProp } from "../../helper/arrayFindObjectByProp";
import {
  deleteProduct,
  getProducts,
} from "../../controllers/ProductController";

window.JSZip = jzip;
const Products = getProducts();
export default class DummyProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, tableData: [], deleManyarr: [] };
  }

  componentDidMount() {
    const self = this;
    $("#productsTable").DataTable().destroy();
    $("#deleteBtnProductGlobal").on("click", function () {
      console.log($("#deleteBtnProductGlobal"));
      console.log(self.state.deleManyarr);
      let deletarr = self.state.deleManyarr;
      var i = 0;
      for (i = 0; i < deletarr.length; i++) {
        console.log(deletarr[i]);
        deleteProduct(deletarr[i]);
      }

      console.log("Deleted" + i + "Entries");
      // window.location.href='/'
    });
    $("#productsTable tfoot th").each(function () {
      var title = $(this).text();
      $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });
    Products.then((data) => data)
      .then(
        (json) => {
          this.setState({ isLoaded: true, tableData: json });
        },
        (err) => {
          this.setState({ isLoaded: true, err });
        }
      )
      .then((json) => {
        var selected = [];
        var indices = [];
        var table = $("#productsTable").DataTable({
          paging: true,
          dom: "Bfrtip",
          responsive: true,
          buttons: [],
          processing: true,
          initComplete: function () {
            // Apply the search
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
        table.on("click", "tbody tr", function () {
          // var id = this.id;
          var rowdata = [];
          let prod = {};
          // var index = $.inArray(id, selected);
          var products = self.state.tableData;

          if (!$(this).hasClass("selected")) {
            $(this)
              .closest("tr")
              .find("td")
              .each(function () {
                var textval = $(this).text();
                rowdata.push(textval);
              });
            prod = arrayFindObjectByProp(products, "product_name", rowdata[1]);
            indices.push(prod._id);
          } else {
            indices.splice($(this), 1);
          }

          self.setState({ deleManyarr: indices });
          $(this).toggleClass("selected");
        });

        table.on("dblclick", "tr", function () {
          $(this).addClass("selected");
          var val = $(this).closest("tr").find("td:eq(1)").text();
          var new_url = "/productdetail?data=" + val;

          $("#productsTable").hide();
          $("#productsTable_wrapper").hide();
          window.location.href = new_url;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { tableData } = this.state;
    return (
      <div>
        <table id="productsTable" className=" table" style={{ width: 1220,height:4,overflowY:'scroll' }}>
          <thead>
            <tr>
            <th style={{width:4}} ></th>
              <th className="wd-10" >#</th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >Item Type
              </th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Item Name
              </th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Model Number
              </th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                HSN/SAC Code
              </th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                In Stock
              </th>
              <th
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Unit Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, key) => {
              return (
                <tr key={key}>
                  <td style={{width:4}}>
                {/* <input className="custom-checkbox"/> */}
                  </td>
                  <td>{data.product_num}</td>
                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.product_type}
                  </td>
                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.product_name}
                  </td>
                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.model_num}
                  </td>
                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.hsn_code}
                  </td>
                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.quantity}
                  </td>
                  <td
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.cost}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td style={{width:4}} ></td>
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
