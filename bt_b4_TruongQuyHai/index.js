/**
 * ! Bài tập 1
 * ? Thông tin:
 * - 3 số nguyên
 * * Các bước xử lý:
 * - so sánh n1 và n2
 * *- nếu n1 > n2 thì max giữa 2 số là n1
 * - ta được 1 dãy hai số tăng dần bao gồm max và sec [max, sec]
 * *- nếu n3 > max thì dịch 2 phần từ đầu của mảng qua phải 1 bước
 * - mảng có dạng: [ , max, sec]
 * - thêm n3 vào sẽ ra kết quả: [n3, max, sec]
 * *- nếu n3 > sec thì dịch sec qua bên phải cùng
 * - mảng có dạng: [max, , sec]
 * - thêm n3 vào sẽ ra kết quả: [max, n3, sec]
 * * Xuất ra kết quả
 */

document.getElementById("bt1").addEventListener("click", (e) => {
  e.preventDefault();

  const n1 = +document.getElementById("ex1_number1").value;
  const n2 = +document.getElementById("ex1_number2").value;
  const n3 = +document.getElementById("ex1_number3").value;

  let max = n1,
    sec = n2,
    third = n3;

  if (max < n2) {
    max = n2;
    sec = n1;
  }
  if (max < n3) {
    third = sec;
    sec = max;
    max = n3;
  } else if (sec < n3) {
    third = sec;
    sec = n3;
  }

  const res = [third, sec, max];

  document.getElementById("answer1").innerHTML =
    "Các số theo thứ tự tăng dần là: " + res.join(", ");
});

/***
 * ! Bài tập 2
 * ? Thông tin:
 * - người sử dụng máy
 * - gia đình có: bố, mẹ, anh trai, em gái
 * * Các bước xử lý:
 * *- Nếu là bố thì chào bố 👨
 * *- Nếu là mẹ thì chào mẹ 👩
 * *- Nếu là anh trai thì chào anh trai 🧑
 * *- Nếu là em gái thì chào em gái 👧
 ***/
document.getElementById("bt2").addEventListener("click", () => {
  const user = document.getElementById("ai_day").value;
  let res = "Chào ";
  if (user === "b") {
    res += "bố";
  } else if (user === "m") {
    res += "mẹ";
  } else if (user === "a") {
    res += "anh trai";
  } else if (user === "e") {
    res += "em gái";
  }
  document.getElementById("answer2").innerHTML = res;
});

/**
 * ! Bài tập 3
 * ? Thông tin:
 * - 3 số nguyên
 * * Các bước xử lý:
 * - Nếu n là số lẻ: n % 2 === 1
 * - Nếu n là số chẵn: n % 2 === 0
 * * Xuất ra kết quả
 */

document.getElementById("bt3").addEventListener("click", (e) => {
  e.preventDefault();

  const n1 = +document.getElementById("ex3_number1").value;
  const n2 = +document.getElementById("ex3_number2").value;
  const n3 = +document.getElementById("ex3_number3").value;

  let count = 0;
  if (n1 % 2 === 1) {
    ++count;
  }
  if (n2 % 2 === 1) {
    ++count;
  }
  if (n3 % 2 === 1) {
    ++count;
  }

  const res = `Có ${count} số lẻ và ${3 - count} số chẵn`;
  document.getElementById("answer3").innerHTML = res;
});

/**
 * ! Bài tập 4
 * ? Thông tin:
 * - 3 cạnh
 * * Các bước xử lý:
 * - Áp dụng các công thức:
 * *- cạnh^2 + cạnh^2 = cạnh^2 && cạnh = cạnh (tam giác vuông cân)
 * *- cạnh^2 + cạnh^2 = cạnh^2 (tam giác vuông)
 * *- cạnh = cạnh = cạnh (tam giác đều)
 * *- cạnh = cạnh (tam giác cân)
 * *- cạnh + cạnh > cạnh (tam giác thường)
 * * Xuất ra kết quả
 */

document.getElementById("bt4").addEventListener("click", (e) => {
  e.preventDefault();
  
  const n1 = +document.getElementById("ex4_number1").value;
  const n2 = +document.getElementById("ex4_number2").value;
  const n3 = +document.getElementById("ex4_number3").value;

  const isValidTriangle = n1 + n2 > n3 && n1 + n3 > n2 && n3 + n2 > n1;
  if (n1 <= 0 || n2 <= 0 || n3 <= 0 || !isValidTriangle) {
    document.getElementById("answer4").innerHTML = "Không phải tam giác";
    return;
  }
  let res = "Tam giác ";
  if (n1 ** 2 + n2 ** 2 === n3 ** 2) {
    if (n1 == n2 || n1 == n3 || n3 == n2) res += "vuông cân";
    else res += "vuông";
  } else if (n1 == n2 && n1 == n3) {
    res += "đều";
  } else if (n1 == n2 || n1 == n3 || n3 == n2) {
    res += "cân";
  } else {
    res += "thường";
  } 
  document.getElementById("answer4").innerHTML = res;
});
