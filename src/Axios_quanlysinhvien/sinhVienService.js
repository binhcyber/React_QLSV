import axios from "axios";
const BASE_URL = "https://623c6da67efb5abea680b636.mockapi.io/Quanlysinhvien";
export const Quanlysinhvien = {
  layThongTinSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
};
