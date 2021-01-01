import CreateInputGroup, { getValuesFromInput } from "./Input.js";
import Validator from "../model/Validator.js";
import { getOne, postData, update } from "../server.js";
import DisplayTable, { createBtn } from "./DisplayTable.js";

// inputs
const inputs = [
  {
    content: "Mã nhân viên",
    id: "w_id",
    name: "maNhanVien",
    dataType: "number",
  },
  {
    content: "Tên nhân viên",
    id: "w_name",
    name: "tenNhanVien",
    dataType: "text",
  },
  {
    content: "Chức vụ",
    id: "w_pos",
    name: "chucVu",
    type: "select",
    options: ["Giám Đốc", "Quản Lý", "Nhân Viên"],
    dataType: "number",
  },
  {
    content: "Lương cơ bản",
    id: "w_b_income",
    name: "luongCoBan",
    dataType: "number",
  },
  {
    content: "Giờ làm trong tháng",
    id: "w_o_hour",
    name: "soGioLamTrongThang",
    dataType: "number",
  },
];

// create buttons' events
const postBtn = async (validator) => {
  if (validator.validate()) {
    const nv = getValuesFromInput(
      inputs.map((input) => {
        const getInnerSelectedText = input.type === "select";
        return {
          id: input.id,
          name: input.name,
          type: input.dataType,
          getInnerSelectedText,
        };
      })
    );
    const res = await postData(nv);
    if (res.ok) {
      validator.freeErr();
      DisplayTable();
    } else {
      validator.setFormError("Error! Can not send form!");
    }
  }
};

const putBtn = async (validator) => {
  if (validator.validate()) {
    const nv = getValuesFromInput(
      inputs.map((input) => {
        const getInnerSelectedText = input.type === "select";
        return {
          id: input.id,
          name: input.name,
          type: input.dataType,
          getInnerSelectedText,
        };
      })
    );

    const has = await getOne(nv.maNhanVien);

    if (has.ok) {
      validator.freeErr();
      update(nv).then(() => DisplayTable());
    } else validator.setFormError("Chưa có nhân viên với id này");
  }
};

const Form = (ele) => {
  let inputEles = {};

  inputs.forEach((input, index) => {
    // create input group then append to form
    let inputEle = CreateInputGroup(input);
    ele.appendChild(inputEle);

    // get all the ids of input tags
    inputEles[input.name] = input.id;
  });

  // create validator for all the inputs tags
  const validator = new Validator(ele, inputEles);

  // create button
  ele.appendChild(
    createBtn("btn btn-outline-danger m-4 ml-0", postBtn, validator, "Submit")
  );
  ele.appendChild(
    createBtn("btn btn-outline-danger m-4", putBtn, validator, "Update")
  );
};
export default Form;
