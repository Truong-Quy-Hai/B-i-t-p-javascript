
// fetch("http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

import Form from './Components/Form.js'
import DisplayTable from './Components/DisplayTable.js'

// Tạo form trong #addNV
Form(document.getElementById("addNV"));

// display table bên dưới
DisplayTable();


// create form validator
// const validator = new Validator(
//   form,
//   inputs.map((ele) => ele.id)
// );

// form.onsubmit = function (e) {
//   e.preventDefault();
  
//   document.getElementById(inputs[0].id); // w_id
//   document.getElementById(inputs[1].id); // w_name
//   document.getElementById(inputs[2].id); // w_pos
//   document.getElementById(inputs[3].id); // w_income
//   document.getElementById(inputs[4].id); // w_hour

//   validator.validate([]);
// };
