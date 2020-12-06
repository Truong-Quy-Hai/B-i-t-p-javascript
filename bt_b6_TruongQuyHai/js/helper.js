export default function taoKetQua(oKetQua, message, background, textColor="text-white") {
  oKetQua.classList = textColor + " mt-3 answer align-items-center d-flex py-2 " + background;
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

export function getEleById(id) {
  return document.getElementById(id);
}

export function queryDataSet(ele=document, setName, value) {
  return ele.querySelector(`[data-${setName}="${value}"]`);
}

