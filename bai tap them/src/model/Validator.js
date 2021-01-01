class InputGroup {
  constructor(formId, inputID) {
    this.input = document.getElementById(inputID);
    this.input.value = this.input.value.trim();
    this.invalidFeedback = document.querySelector(
      `#${formId} .invalid-feedback[target='${inputID}']`
    );
  }
  invalid() {
    this.invalidFeedback.style.display = "block";
  }
  valid() {
    this.invalidFeedback.style.display = "none";
  }
}

export default class Validator {
  constructor(ele, obj) {
    this.form = ele;
    this.formInfo = null;
    this.idObj = obj;
    this.inputs = {};
  }
  validate() {
    return (
      this.validateId() &
      this.validateName() &
      this.validatePos() &
      this.validateBIncome() &
      this.validateWHour()
    );
  }

  setFormError(err) {
    const form = this.form;
    if (!this.formInfo) {
      this.formInfo = document.createElement("div");
      this.formInfo.className = "invalid-form invalid-feedback";
      this.formInfo.style.fontSize = "1.5rem";
      this.formInfo.textContent = err;
      form.appendChild(this.formInfo);
    }
    this.formInfo.style.display = "block";
  }

  freeErr() {
    console.log(this.formInfo);
    this.formInfo.style.display = "none";
  }

  check(invalidFeedback, style = "block", ...c) {
    // c[0]: check if it is correct element
    let retVal = true;
    let htmltext = "";

    // c[1]: check if correct input
    for (let j = 0; j < c.length; j++) {
      // if c[j].cond is true then it is invalid
      if (c[j].cond) {
        // this.invalidFeedback[i].innerHTML = c[i].error;
        htmltext += c[j].error + "<br/>";
        retVal = false;
      }
    }

    if (!retVal) {
      invalidFeedback.style.display = style;
      invalidFeedback.innerHTML = htmltext;
    } else {
      invalidFeedback.style.display = "none";
    }
    return retVal;
  }

  validateId() {
    let htmltext = "";

    if (!this.inputs.id)
      this.inputs.id = new InputGroup(this.form.id, this.idObj.maNhanVien);
    const ii = this.inputs.id;
    const inputVal = ii.input.value;

    const conditions = [
      {
        cond: !inputVal.length,
        error: "*Id không được để trống*<br/>*Id phải là số*",
      },
      {
        cond: !(+inputVal > 1000 && +inputVal < 999999),
        error: "*Id phải từ 4 đến 6*",
      },
      {
        cond: typeof +inputVal !== "number",
        error: "*Id phải là số*",
      },
    ];

    if (this.check(ii.invalidFeedback, "block", ...conditions)) return true;
    return false;
  }
  validateName() {
    const regex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\s]/;

    if (!this.inputs.name)
      this.inputs.name = new InputGroup(this.form.id, this.idObj.tenNhanVien);
    const ii = this.inputs.name;
    const inputVal = ii.input.value;

    const conditions = [
      {
        cond: !inputVal.length,
        error: "*Tên không được để trống*",
      },
      {
        cond: inputVal.match(regex),
        error: "*Tên phải là ký tự*",
      },
      {
        cond: inputVal.length < 3,
        error: "*Tên phải từ 3 ký tự trở lên*",
      },
    ];

    if (this.check(ii.invalidFeedback, "block", ...conditions)) return true;
    return false;
  }
  validatePos() {
    if (!this.inputs.pos)
      this.inputs.pos = new InputGroup(this.form.id, this.idObj.chucVu);
    const ii = this.inputs.pos;
    const value = +ii.input.value;

    const conditions = [
      {
        cond: typeof value !== "number" || value < 1 || value > 3,
        error: "*Sai value. Cảm phiền người dùng đừng sửa đổi value*",
      },
    ];

    if (this.check(ii.invalidFeedback, "block", ...conditions)) return true;
  }

  validateBIncome() {
    if (!this.inputs.basicIncome)
      this.inputs.basicIncome = new InputGroup(
        this.form.id,
        this.idObj.luongCoBan
      );
    const ii = this.inputs.basicIncome;
    const value = +ii.input.value;

    const conditions = [
      {
        cond: !ii.input.value.length,
        error: "*Lương cơ bản không được để trống*<br/>Lương cơ bản phải là số",
      },
      {
        cond: typeof value !== "number",
        error: "*Lương cơ bản phải là số*",
      },
      {
        cond: value < 1000000 || value > 20000000,
        error: "*Lương cơ bản phải từ 1000000 đến 20000000*",
      },
    ];

    if (this.check(ii.invalidFeedback, "block", ...conditions)) return true;
  }

  validateWHour() {
    if (!this.inputs.workHour)
      this.inputs.workHour = new InputGroup(
        this.form.id,
        this.idObj.soGioLamTrongThang
      );
    const ii = this.inputs.workHour;
    const value = +ii.input.value;

    const conditions = [
      {
        cond: !ii.input.value.length,
        error:
          "*Giờ làm trong tháng không được để trống*<br/>Giờ làm trong tháng phải là số",
      },
      {
        cond: typeof value !== "number",
        error: "*Giờ làm trong tháng phải là số*",
      },
      {
        cond: value < 50 || value > 150,
        error: "*Giờ làm trong tháng phải từ 50 đến 150*",
      },
    ];

    if (this.check(ii.invalidFeedback, "block", ...conditions)) return true;
  }
}
