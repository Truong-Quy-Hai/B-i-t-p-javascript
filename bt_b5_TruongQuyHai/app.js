/**
 * * Bài tập Quản lý tuyển sinh
 * ? Thông tin (Tất cả đều bắt buộc)
 * - Điểm chuẩn của hội đồng
 * - Điểm thi của 3 môn
 * - Điểm ưu tiên:
 *   + Điểm ưu tiên theo khu vực
 *   + Điểm ưu tiên theo đối tượng
 * # Step
 * - Kiểm tra input hợp lệ:
 *   + Điểm thi: [0, 10]
 *   + Điểm chuẩn: [0, 34.5]
 *   + Do điểm ưu tiên là cho chọn radio button nên không sợ sai
 * - Cộng điểm thi và xét tuyển
 * # Output
 * - Trả output ra thẻ <p> có data-name="ketQua"
 */
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
    if (diem[0] <= 0 || diem[0] > 34.5) {
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

/**
 * * Bài tập Tính tiền điện
 * ? Thông tin (Tất cả đều bắt buộc)
 * - Tên khách hàng
 * - Số kw điện đã tiêu thụ
 * # Step
 * - Kiểm tra input hợp lệ:
 *   + kw > 0
 * - Áp dụng các công thức sau và tính tiền điện:
 *   + kw <= 50: total = kw * giá tiền điện 50kw đầu;
 *   + kw <= 100: total = 50 * giá 50kw đầu + (kw - 50) * giá từ (51kw - 100kw);
 *   + kw <= 200: total = 50 * giá 50kw đầu + 50 * giá từ (51kw - 100kw) 
 * + (kw - 100) * giá từ (101kw - 200kw);
 *   + kw <= 350: total = 50 * giá 50kw đầu + 50 * giá từ (51kw - 100kw) 
 * + 100 * giá từ (101kw - 200kw) + (kw - 200) * giá từ (201kw - 350kw);
 *   + kw > 350: total = 50 * giá 50kw đầu + 50 * giá từ (51kw - 100kw) 
 * + 100 * giá từ (101kw - 200kw) + 150 * giá từ (201kw - 350kw)
 *   + (kw - 350) * giá từ 350kw trở lên;
 * # Step có công thức bớt nhìn nhức mắt hơn, mà dài hơn!
 *  CODE:
    if (kw > 350) {
      total = (kw - 350) * 1300;
      kw -= (kw - 350);
    }
    if (kw > 200) {
      total = (kw - 200) * 1100;
      kw -= (kw - 200);
    }
    if (kw > 100) {
      total = (kw - 100) * 850;
      kw -= (kw - 100);
    }
    if (kw > 50) {
      total = (kw - 50) * 1100;
      kw -= (kw - 50);
    }
    total = (kw - 50) * 500;
 *  
 */

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
  
  let total = tinhGia1(kw);
  console.log(tinhGia2(kw));

  taoKetQua(
    ketQua,
    `Chi phí sử dụng điện của khách hàng ${name} là: ${total}`,
    "bg-success"
  );

  

  function tinhGia1(kw) {
    if (kw <= 50) {
      return kw * prices.be50;
    } else if (kw <= 100) {
      return 50 * prices.be50 + (kw - 50) * prices.be100;
    } else if (kw <= 200) {
      return 50 * prices.be50 + 50 * prices.be100 + (kw - 100) * prices.be200;
    } else if (kw <= 350) {
      return (
        50 * prices.be50 +
        50 * prices.be100 +
        100 * prices.be200 +
        (kw - 200) * prices.be350
      );
    } else {
      return (
        50 * prices.be50 +
        50 * prices.be100 +
        100 * prices.be200 +
        150 * prices.be350 +
        (kw - 350) * prices.remain
      );
    }
  }

  function tinhGia2(kw) {
    let total = 0;
    if (kw > 350) {
      total += (kw - 350) * prices.remain;
      kw -= kw - 350;
    }
    if (kw > 200) {
      total += (kw - 200) * prices.be350;
      kw -= kw - 200;
    }
    if (kw > 100) {
      total += (kw - 100) * prices.be200;
      kw -= kw - 100;
    }
    if (kw > 50) {
      total += (kw - 50) * prices.be100;
      kw -= kw - 50;
    }
    return total + kw * prices.be50;
  }
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
