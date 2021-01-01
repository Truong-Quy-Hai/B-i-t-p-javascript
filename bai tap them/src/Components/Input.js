import NhanVien from "../model/NhanVien.js";

// get values from id of input tags and return an object
export const getValuesFromInput = (objs) => {
  const result = [];
  objs.forEach((obj) => {
    const ele = document.getElementById(obj.id);
    const val = ele.value;
    if (obj.getInnerSelectedText) {
      result.push(ele.options[ele.selectedIndex].text);
    }
    if (obj.type === "text") {
      result.push(val);
    } else if (obj.type === "number") {
      result.push(+val);
    }
  });
  return new NhanVien(...result);
};

// function create inputs box for DOM
const createSelect = ({ id, name, options }) => {
  const select = document.createElement("select");
  select.className = "form-control";
  select.id = id;
  select.name = name;
  options.forEach((option, index) => {
    const op = document.createElement("option");
    op.innerHTML = option;
    op.value = options.length - index;
    select.appendChild(op);
  });

  return select;
};

const createInputGroup = ({ content, id, name, type, options }) => {
  const label = document.createElement("label");
  label.className = "text-capitalize form-label pt-3 pb-2";
  label.htmlFor = id;
  label.textContent = content;

  const invalidFeedback = document.createElement("div");
  invalidFeedback.className = "invalid-feedback";
  invalidFeedback.setAttribute("target", id);

  const formGroup = document.createElement("div");
  formGroup.className = "form-group";
  formGroup.appendChild(label);

  if (type === "select") {
    const select = createSelect({ id, name, options });
    formGroup.appendChild(select);
    formGroup.appendChild(invalidFeedback);
    return formGroup;
  }

  const input = document.createElement("input");
  input.id = id;
  input.type = "text";
  input.className = "form-control";
  input.name = name;

  formGroup.appendChild(input);
  formGroup.appendChild(invalidFeedback);

  return formGroup;
};
export default createInputGroup;
