import React, { Component } from "react";
import PropTypes from "prop-types";
import { MdCancel as DeleteIcon } from "react-icons/md";
import styles from "./lineitem.css";
import { searchTable, searchColumn } from "../../helper/search";
import {
  getProducts,
  updateProduct,
} from "../../controllers/ProductController";
import { Modal } from "react-bootstrap";

let Products = getProducts();
class LineItem extends Component {
  state = {
    products: [],
    item: {},
    msg: "",
    show:false
  };
  componentDidMount() {
    const { products } = this.state;
    Products.then((data) => data)
      .then((json) => {
        this.setState({ products: json });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  showProductTable = () => {
    this.setState({show:true})
  };
  onHide=()=>{
    this.setState({show:false})
  }
  fillProduct = (data) => {
    const item = {
      name: data.product_name,
      cost: data.cost,
      quantity: data.quantity,
    };
    this.setState({ item: item, show:false })
  };
  searchTable = () => {
    searchTable();
  };
  render = () => {
    const {
      index,
      name,
      description,
      quantity,
      price,
      linediscount,
    } = this.props;
    const { products, item,show } = this.state;

    return (
      <>
        <div className="row row-sm my-1">
          <div className="ml-1 tx-10 my-1 ">{index + 1}</div>
          <div className="col-4 mx-0 px-1">
            <input
              className="col-sm-12 my-1 tx-10"
              name="name"
              type="text"
              readOnly
              value={item.name}
              placeholder="Item name"
              onClick={this.showProductTable}
              onChange={this.props.changeHandler(index)}
            />
            <input
              className="col-sm-12 tx-10"
              name="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={this.props.changeHandler(index)}
            />
          </div>
          <div className="col-1 mx-3 px-1">
            <input
              className="col-sm-12 tx-10"
              name="quantity"
              type="numeric"
              step="1"
              value={quantity}
              onChange={this.props.changeHandler(index)}
              onFocus={this.props.focusHandler}
            />
          </div>
          <div className="col-1 mx-3 px-1">
            <input
              className="col-sm-12 tx-10"
              name="price"
              type="numeric"
              step="0.01"
              min="0.00"
              max="9999999.99"
              value={item.cost}
              onChange={this.props.changeHandler(index)}
              onFocus={this.props.focusHandler}
            />
          </div>
          <div className="col-1 mx-3 px-1">
            <input
              className="col-sm-12 tx-10"
              name="linediscount"
              type="numeric"
              step="0.01"
              value={linediscount}
              onFocus={this.props.focusHandler}
              onChange={this.props.changeHandler(index)}
            />
          </div>
          <div className="col-1 mx-3 px-1 tx-10">
            {this.props.currencyFormatter(quantity * price - linediscount)}
          </div>

          <div className="ml-3">
            <button
              type="button"
              className="tx-14 tx-danger my-0"
              style={{ border: "none", padding: 0 }}
              onClick={this.props.deleteHandler(index)}
            >
              <DeleteIcon size="1.25em" />
            </button>
          </div>
        </div>
        <Modal className="modal" show={show} id="productTable" onHide={this.onHide} >
          <Modal.Body style={{height:400,overflowY:'scroll'}} >
            <table
              className="table table-dashboard"
              id="myTable"
              style={{ height: 5, overflowY: "scroll" }}
            >
              <thead>
                <tr>
                  <th>Item Type</th>
                  <th>Item Name</th>
                  <th>HSN/SAC code</th>
                  <th>Rate</th>
                  <th
                    style={{ cursor: "pointer" }}
                    onClick={this.onHide}
                  >
                    X
                  </th>
                </tr>
              </thead>
              <tr>
                <th>
                  <input
                    className="search-form"
                    id="myInput"
                    onKeyUp={this.searchTable}
                    placeholder="Search..."
                  />
                </th>
                <th>
                  <input
                    className="search-form"
                    id="myInput"
                    onKeyUp={this.searchTable}
                    placeholder="Search..."
                  />
                </th>
                <th>
                  <input
                    className="search-form"
                    id="myInput"
                    onKeyUp={this.searchTable}
                    placeholder="Search..."
                  />
                </th>
                <th>
                  <input
                    className="search-form"
                    id="myInput"
                    onKeyUp={this.searchTable}
                    placeholder="Search..."
                  />
                </th>
              </tr>
              <tbody>
                {products.map((data, key) => {
                  return (
                    <tr
                      key={key}
                      onClick={() => this.fillProduct(data)}
                      style={{ height: 5, padding: 0, margin: 0 }}
                    >
                      <td>{data.product_type}</td>
                      <td>{data.product_name}</td>
                      <td>{data.hsn_code}</td>
                      <td>{data.cost}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Modal.Body>
        </Modal>
      </>
    );
  };
}

export default LineItem;

LineItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  linediscount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
