export default class Validator {
  validateID = (id) => {
    let err = "";
    if (id.length === 0)
      err += "ID không được để trống<br/> ID phải là số<br/>";
    if (typeof +id !== "number") err += "ID phải là số<br/>";
    if (+id < 1) err += "ID phải lớn hơn 0<br/>";
    return [err ? false : true, err];
  };
  validateTen = (ten) => {
    const regex = /[^a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\s]/;
    let err = "";
    if (ten.length === 0) err += "tên không được để trống<br/>";
    if (ten.match(regex)) err += "tên phải là ký tự<br/>";
    if (ten.length < 3) err += "tên phải dài hơn 3 ký tự<br/>";
    return [err ? false : true, err];
  };
  validateChucVu = (chucVu) => {
    if (typeof +chucVu !== "number" || (+chucVu < 1 && +chucVu > 3))
      return [false, "Xin đừng chỉnh sửa value của chức vụ</br>"];
    return [true, ""];
  };
  validateHSL = (hsl) => {
    let err = "";
    if (hsl.length === 0)
      err += "Hệ số lương không được để trống<br/> Hệ số lương phải là số<br/>";
    if (typeof +hsl !== "number") err += "Hệ số lương phải là số<br/>";
    return [err ? false : true, err];
  };
  validateLCB = (lcb) => {
    let err = "";
    if (lcb.length === 0)
      err +=
        "Lương cơ bản không được để trống<br/> Lương cơ bản phải là số<br/>";
    if (typeof +lcb !== "number") err += "Lương cơ bản phải là số<br/>";
    return [err ? false : true, err];
  };
}
