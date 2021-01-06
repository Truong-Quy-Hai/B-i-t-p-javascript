import Validator from "./Validator.js";
import NhanVien from "./NhanVien.js";

const form = document.getElementById("form");
const validator = new Validator();

form.onsubmit = (e) => {
  e.preventDefault();
  let nhanVien = {};
  let feedbacks = {};
  // document.querySelectorAll("#form input, #form select").forEach((ele => ) {
  Array.from(form.elements).forEach((ele) => {
    const { id, value: val } = ele;
    if (id) {
      nhanVien = { ...nhanVien, [id]: val };
      feedbacks = {
        ...feedbacks,
        [id]: document.querySelector(`#${id} + .invalid-feedback`),
      };
      feedbacks[id].style.display = "block";
      feedbacks[id].style.margin = 0;
    }
  });
  nhanVien = new NhanVien(nhanVien);

  let valid = true, temp;
  [temp, feedbacks.maNV.innerHTML] = validator.validateID(nhanVien.maNV);
  valid &= temp;

  [temp, feedbacks.tenNV.innerHTML] = validator.validateTen(nhanVien.tenNV);
  valid &= temp;
  
  [temp, feedbacks.chucVu.innerHTML] = validator.validateChucVu(nhanVien.chucVu);
  valid &= temp;

  [temp, feedbacks.heSoLuong.innerHTML] = validator.validateHSL(nhanVien.heSoLuong);
  valid &= temp;

  [temp, feedbacks.luongCoBan.innerHTML] = validator.validateLCB(nhanVien.luongCoBan);
  valid &= temp;

  if (!valid) return;
  let htmltext = "<h2>Thông tin nhân viên</h2>" + nhanVien.hienThi();

  const hienThi = document.getElementById("hienThi");
  hienThi.innerHTML = htmltext;
};
