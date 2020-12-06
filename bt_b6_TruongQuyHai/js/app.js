import taoKetQua, { getEleById, queryDataSet } from "./helper.js";

/**
 * * 1. Tìm số nguyên dương nhỏ nhất sao cho:  1 + 2 + … + n > 10000
 * ? Thông tin (không cần)
 * # Step
 * - Tạo biến chứa tổng: sum = 0
 * - Tạo biến đếm: i = 1
 * - Cộng i vào sum: sum += i // bước 3
 * - Tăng i lên 1: ++i; // bước 4
 * - Lặp lại bước 3 đến bước 5 nếu thỏa sum <= 10000 // bước 5
 * # Output
 * - Trả vào trong thẻ div có id="bai1"
 */

(function b1() {
  let i = 1,
    sum = 0;
  do {
    sum += i;
    ++i;
  } while (sum <= 10000);
  getEleById(
    "bai1"
  ).innerHTML += `<p class="alert alert-success">Số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 10000 là ${sum}</p>`;
})();

/**
 * * 2. Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n
 * ? Thông tin (bắt buộc đối với x, n)
 * # Step
 * - Tạo biến sum = 0
 * - Tạo vòng lặp for (let i = 1; i <= n; ++i)
 * - cập nhật sum += x ** i trong for
 * # Output
 * - Output vào thẻ h4 mà mình tạo = js vào append vào form có id="bai2"
 */
getEleById("bai2").onsubmit = function (e) {
  e.preventDefault();
  let x = +queryDataSet(getEleById("bai2"), "in", "x").value;
  let n = +queryDataSet(getEleById("bai2"), "in", "n").value;
  let i = null,
    sum = 0;
  for (i = 1; i <= n; ++i) sum += x ** i;

  const h4 = getEleById("bai2").querySelector(".answer");
  taoKetQua(h4, "Kết quả là: " + sum, "bg-success");
};

/**
 * * 3.Nhập vào n. Tính giai thừa 1*2*...n
 * ? Thông tin (số nguyên n)
 * # Step
 * - tạo biến kết quả: res = 1;
 * - Lặp từ i = 1 đến i = n:
 *   - Nhân res cho i
 * # Output
 */

getEleById("bai3").onsubmit = function (e) {
  e.preventDefault();
  let n = +queryDataSet(getEleById("bai3"), "in", "n").value;
  let i,
    res = 1;
  for (i = 2; i <= n; ++i) res *= i;

  const h4 = getEleById("bai3").querySelector(".answer");
  taoKetQua(h4, "Kết quả là: " + res, "bg-success");
};

getEleById("bai4").querySelector("button").onclick = function () {
  let i;
  let div = getEleById("bai4");
  if (div.childElementCount <= 11) {
    for (i = 0; i < 10; ++i) {
      let innerDiv = document.createElement("div");
      if (i % 2 == 1) taoKetQua(innerDiv, "", "bg-danger");
      else taoKetQua(innerDiv, "", "bg-success");
      div.querySelector(".answer").appendChild(innerDiv);
    }
  }
};
