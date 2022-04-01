import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SUA_SINH_VIEN,
  XOA_SINH_VIEN,
} from "./redux/constant/quanlysinhvienConstant";

class ItemSinhVien extends Component {
  renderTable() {
    return this.props.dssv.map((sv) => {
      return (
        <tr key={sv.id}>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.phone}</td>
          <td>
            <button
              data-toggle="modal"
              data-target="#modelId"
              className="btn btn-warning mr-1"
              onClick={() => {
                this.props.suaSinhVien(sv);
              }}
            >
              Sửa
            </button>
            <button
              onClick={() => {
                this.props.xoaSinhVien(sv.id);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    xoaSinhVien: (id) => {
      dispatch({
        type: XOA_SINH_VIEN,
        payload: id,
      });
    },
    suaSinhVien: (sv) => {
      dispatch({
        type: SUA_SINH_VIEN,
        payload: sv,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemSinhVien);
