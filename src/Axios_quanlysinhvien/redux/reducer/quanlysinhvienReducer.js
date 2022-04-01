import {
  CAP_NHAT_SINH_VIEN,
  SUA_SINH_VIEN,
  THEM_SINH_VIEN,
  THONG_TIN_SINH_VIEN,
  TIM_KIEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../constant/quanlysinhvienConstant";

const initialState = {
  dssv: [],
  editSinhVien: null,
  disabled: false,
};

export const quanlysinhvienReducer = (state = initialState, action) => {
  switch (action.type) {
    case THONG_TIN_SINH_VIEN: {
      state.dssv = action.payload;
      return { ...state };
    }
    case THEM_SINH_VIEN: {
      let cloneSV = [...state.dssv];
      cloneSV.push(action.payload);
      state.dssv = cloneSV;
      return { ...state };
    }
    case XOA_SINH_VIEN: {
      let cloneSV = [...state.dssv];
      console.log(cloneSV);
      let index = cloneSV.findIndex((sv) => {
        return sv.id === action.payload;
      });
      console.log(index);
      console.log(cloneSV[index]);
      index !== -1 && cloneSV.splice(index, 1);
      state.dssv = cloneSV;
      return { ...state };
    }
    case SUA_SINH_VIEN: {
      state.editSinhVien = action.payload;
      state.disabled = true;
      console.log(state.editSinhVien);
      return { ...state };
    }
    case CAP_NHAT_SINH_VIEN: {
      let svUpadated = action.payload;
      console.log(svUpadated);
      state.editSinhVien = svUpadated;
      console.log(svUpadated);
      let clonedssv = [...state.dssv];
      console.log(clonedssv);
      let index = clonedssv.findIndex((sv) => {
        return sv.id === svUpadated.id;
      });
      if (index !== -1) {
        clonedssv[index] = svUpadated;
      }
      state.disabled = false;
      state.dssv = clonedssv;
      return { ...state };
    }
    case TIM_KIEM_SINH_VIEN: {
      let svtimKiem = action.payload;
      let clonedssv = [...state.dssv];
      let sinhVienCanTim = clonedssv.filter((sv) => {
        return sv.name.trim().toUpperCase() === svtimKiem.trim().toUpperCase();
      });
      console.log(sinhVienCanTim);
      state.dssv = sinhVienCanTim;
      return { ...state };
    }
    default:
      return state;
  }
};
