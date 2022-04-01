import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CAP_NHAT_SINH_VIEN,
  THEM_SINH_VIEN,
} from "./redux/constant/quanlysinhvienConstant";

class ModalSinhVien extends Component {
  state = {
    sinhVien: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
  };
  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    let { editSinhVien } = newProps;
    console.log(editSinhVien);
    this.setState({
      sinhVien: editSinhVien,
    });
  }
  handleChange = (e) => {
    let { value, name } = e.target;
    this.setState(
      {
        sinhVien: { ...this.state.sinhVien, [name]: value },
      },
      () => {
        console.log(this.state.sinhVien);
      }
    );
  };

  render() {
    return (
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary btn-lg "
          data-toggle="modal"
          data-target="#modelId"
          onClick={() => {
            this.setState({
              sinhVien: {
                id: "",
                name: "",
                email: "",
                phone: "",
              },
            });
          }}
        >
          Thêm sinh viên
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="id">id</label>
                  {this.props.disabled ? (
                    <input
                      disabled
                      value={this.state.sinhVien.id}
                      type="text"
                      className="form-control"
                      name="id"
                      id="id"
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                  ) : (
                    <input
                      value={this.state.sinhVien.id}
                      type="text"
                      className="form-control"
                      name="id"
                      id="id"
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input
                    value={this.state.sinhVien.name}
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    aria-describedby="helpId"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input
                    value={this.state.sinhVien.email}
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="helpId"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">phone</label>
                  <input
                    value={this.state.sinhVien.phone}
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    aria-describedby="helpId"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                {this.props.disabled ? (
                  <button
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      this.props.capNhatSinhVien(this.state.sinhVien);
                    }}
                    type="button"
                    className="btn btn-warning"
                  >
                    Cập Nhật
                  </button>
                ) : (
                  <button
                    disabled
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      this.props.capNhatSinhVien(this.state.sinhVien);
                    }}
                    type="button"
                    className="btn btn-warning"
                  >
                    Cập Nhật
                  </button>
                )}
                {this.props.disabled ? (
                  <button
                    disabled
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      this.props.themSinhVien(this.state.sinhVien);
                    }}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      this.props.themSinhVien(this.state.sinhVien);
                    }}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhvien) => {
      dispatch({
        type: THEM_SINH_VIEN,
        payload: sinhvien,
      });
    },
    capNhatSinhVien: (sinhvienCapNhat) => {
      dispatch({
        type: CAP_NHAT_SINH_VIEN,
        payload: sinhvienCapNhat,
      });
    },
  };
};
let mapStateToProps = (state) => {
  return {
    editSinhVien: state.quanlysinhvienReducer.editSinhVien,
    disabled: state.quanlysinhvienReducer.disabled,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalSinhVien);
