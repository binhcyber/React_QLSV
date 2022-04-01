import { Quanlysinhvien } from "./sinhVienService";
import React, { Component } from "react";
import DanhSachSinhVien from "./DanhSachSinhVien";
import { connect } from "react-redux";
import {
  THONG_TIN_SINH_VIEN,
  TIM_KIEM_SINH_VIEN,
} from "./redux/constant/quanlysinhvienConstant";
import ModalSinhVien from "./ModalSinhVien";

class Axios_quanlysinhvien extends Component {
  componentDidMount() {
    Quanlysinhvien.layThongTinSinhVien()
      .then((res) => this.props.thongTinSV(res.data))
      .catch((err) => console.log(err));
  }
  state = {
    svTimKiem: "",
  };
  handleChange = (e) => {
    this.setState(
      {
        svTimKiem: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">QUẢN LÝ SINH VIÊN</h1>
        <div>
          <div className="form-group row">
            <input
              value={this.state.svTimKiem}
              type="text"
              className="form-control col-10"
              name="search"
              id="search"
              aria-describedby="helpId"
              placeholder="Tìm kiếm tên sinh viên"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <button
              onClick={() => {
                this.props.timKiemSinhVien(this.state.svTimKiem);
              }}
              className="btn btn-success col-2"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
        <ModalSinhVien />
        <DanhSachSinhVien />
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    thongTinSV: (data) => {
      dispatch({
        type: THONG_TIN_SINH_VIEN,
        payload: data,
      });
    },
    timKiemSinhVien: (svCanTim) => {
      dispatch({
        type: TIM_KIEM_SINH_VIEN,
        payload: svCanTim,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Axios_quanlysinhvien);
