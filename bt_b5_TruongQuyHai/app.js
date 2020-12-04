document.getElementById("QuanLyTuyenSinh").onsubmit = function (e) {
  e.preventDefault();
  const diemChuan = +document.getElementById("DiemChuan").value;
  const diemThi1 = +document.getElementById("MonThi_1").value;
  const diemThi2 = +document.getElementById("MonThi_2").value;
  const diemThi3 = +document.getElementById("MonThi_3").value;
  const khuVuc = document.getElementsByName("KhuVuc");
  const doiTuong = document.getElementsByName("DoiTuong");
  const ketQua = document
    .getElementById("QuanLyTuyenSinh")
    .querySelector("[data-name='ketQua']");

  if (!checkInputDiemThi(diemChuan, diemThi1, diemThi2, diemThi3)) {
    console.log(diemChuan, diemThi1, diemThi2, diemThi3);
    taoKetQua(ketQua, "Điểm nhập vào không hợp lệ !!!", "bg-danger");
    return;
  }

  if (diemThi1 * diemThi2 * diemThi3 === 0) {
    taoKetQua(ketQua, "Rớt rồi 🤣", "bg-danger");
    return;
  }

  let tongDiem =
    diemThi1 +
    diemThi2 +
    diemThi3 +
    congKhuVuc(khuVuc) +
    congDoiTuong(doiTuong);

  if (tongDiem >= diemChuan) {
    taoKetQua(ketQua, "Đậu rồi nha 🎉🎊🎉🎊", "bg-success");
    return;
  } else {
    taoKetQua(ketQua, "Rớt rồi 🤣", "bg-danger");
    return;
  }

  function checkInputDiemThi() {
    const diem = Array.from(arguments);
    if (diem[0] == 0 || diem[0] > 34.5) {
      return false;
    }
    let i,
      l = diem.length;
    for (i = 1; i < l; ++i) {
      if (diem[i] < 0 || diem[i] > 10) {
        return false;
      }
    }
    return true;
  }

  function congKhuVuc(khuVuc) {
    let khuVucValue = "";
    for (let i of khuVuc) {
      if (i.checked) {
        khuVucValue = i.value;
      }
    }

    if (khuVucValue == "A") return 2;
    else if (khuVucValue == "B") return 1;
    else if (khuVucValue == "C") return 0.5;
    return 0;
  }

  function congDoiTuong(doiTuong) {
    let doiTuongValue = "";
    for (let i of doiTuong) {
      if (i.checked) {
        doiTuongValue = i.value;
        break;
      }
    }

    if (doiTuongValue == "1") return 2.5;
    else if (doiTuongValue == "2") return 1.5;
    else if (doiTuongValue == "3") return 1;
    return 0;
  }
};

document.getElementById("TinhTienDien").onsubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("KH").value;
  const kw = +document.getElementById("KW").value;
  const ketQua = document
    .getElementById("TinhTienDien")
    .querySelector("[data-name='ketQua']");

  if (kw < 0) {
    taoKetQua(ketQua, "Nhập sai, xin nhập lại.", "bg-danger");
    return;
  }

  const prices = {
    be50: 500,
    be100: 650,
    be200: 850,
    be350: 1100,
    remain: 1300,
  };

  let total = 0;
  if (kw <= 50) {
    total = kw * prices.be50;
  } else if (kw <= 100) {
    total = 50 * prices.be50 + (kw - 50) * prices.be100;
  } else if (kw <= 200) {
    total = 50 * prices.be50 + 50 * prices.be100 + (kw - 100) * prices.be200;
  } else if (kw <= 350) {
    total =
      50 * prices.be50 +
      50 * prices.be100 +
      100 * prices.be200 +
      (kw - 200) * prices.be350;
  } else {
    total =
      50 * prices.be50 +
      50 * prices.be100 +
      100 * prices.be200 +
      150 * prices.be350 +
      (kw - 350) * prices.remain;
  }

  taoKetQua(
    ketQua,
    `Chi phí sử dụng điện của khách hàng ${name} là: ${total}`,
    "bg-success"
  );
};

function taoKetQua(oKetQua, message, background) {
  oKetQua.classList.remove("d-none");
  oKetQua.classList.remove("bg-success");
  oKetQua.classList.remove("bg-danger");
  oKetQua.classList.add("d-flex");
  oKetQua.classList.add(background);
  oKetQua.innerHTML = message;
  oKetQua.appendChild(taoBtn(oKetQua));
}

function taoBtn(doiTuongCanDong) {
  const btn = document.createElement("button");
  btn.classList = "btn-close ml-auto";

  btn.addEventListener("click", () => {
    addCloseEvent();
  });

  function addCloseEvent() {
    doiTuongCanDong.innerHTML = "";
    doiTuongCanDong.classList.remove("d-flex");
    doiTuongCanDong.classList.add("d-none");
  }

  return btn;
}
