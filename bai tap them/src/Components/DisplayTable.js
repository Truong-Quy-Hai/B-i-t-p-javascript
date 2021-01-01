import { deleteData, getAll } from "../server.js";
import NhanVien from "../model/NhanVien.js";

// const createTableRow = (eles) => {
//   const row = document.createElement('tr');
//   eles.forEach(ele => row.appendChild(ele))
//   return row;
// }
// const createTableCell = (type, content = '', ele = null) => {
//   const cell = document.createElement(type);
//   if (content && ele) throw new Error("A table cell can't consist both content and inner element");
//   if (content) cell.textContent = content;
//   else if (ele) cell.appendChild(ele)
//   return cell;
// }

export const createBtn = (className, eventOnclick, validator, content) => {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.className = className;
  button.onclick = () => eventOnclick(validator);
  button.textContent = content;
  return button;
};

async function DisplayTable() {
  const result = await getAll().then((res) => res);
  let htmltext =
    "<thead><tr><th>Mã nhân viên</th><th>Tên nhân viên</th><th>Chức vụ</th><th>Lương cơ bản</th><th>Tổng lương</th><th>Giờ làm/tháng</th><th>Xếp loại nhân viên</th><th>Xóa nhân viên</th></tr></thead><tbody>";
  result.forEach((ele) => {
    const nv = new NhanVien(
      ele.maNhanVien,
      ele.tenNhanVien,
      ele.chucVu,
      ele.heSoChucVu,
      ele.luongCoBan,
      ele.soGioLamTrongThang
    );

    htmltext += `<tr>
      <td>${nv.maNhanVien}</td>
      <td>${nv.tenNhanVien}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.luongCoBan}</td>
      <td>${nv.tinhTongLuong()}</td>
      <td>${nv.soGioLamTrongThang}</td>
      <td>${nv.xepLoaiNhanVien()}</td>
      <td><button class="btn btn-danger close" target="${
        nv.maNhanVien
      }">Xóa</button></td>
    </tr>`;
  });
  
  document.getElementById("dsnv").innerHTML = htmltext + "</tbody>";

  document.querySelectorAll(".close").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteData(+e.target.getAttribute("target")).then(() => DisplayTable());
    });
  });
}

export default DisplayTable;
