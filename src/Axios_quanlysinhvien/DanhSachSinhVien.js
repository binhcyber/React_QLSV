import React, { Component } from "react";
import { connect } from "react-redux";
import ItemSinhVien from "./ItemSinhVien";

class DanhSachSinhVien extends Component {
  render() {
    let { dssv } = this.props;
    return (
      <div>
        <ItemSinhVien dssv={dssv} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    dssv: state.quanlysinhvienReducer.dssv,
  };
};
export default connect(mapStateToProps, null)(DanhSachSinhVien);
