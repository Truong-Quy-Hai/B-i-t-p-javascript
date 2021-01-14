import Album from "../models/Album.js";
import AlbumList from "../models/AlbumList.js";

const albumList = new AlbumList();
const albumDOM = document.querySelector(".album .container .row");
const cateTexts = ["Album gái xinh", "Album trai đẹp", "Album Idol"];
const updateBtn = document.getElementById("btnCapNhatAlbum");
const addBtn = document.getElementById("btnThemAlbum");
display();

function display() {
  albumList.getLocal();

  let htmltext = "";
  albumList.list.forEach((album) => {
    const name = album.name;
    htmltext += `
      <div class="col-md-4">
        <div class="card mb-4 box-shadow" name="${name}">
          <div class="src reponsive-img" style="background-image: url(${
            album.src
          });"></div>
          <div class="card-body">
            <h3 class="name">${name}</h3>
            <p class="des card-text">${album.des}</p>
            <p class="cate card-text" cate="${album.cate}">Thể loại: ${
      cateTexts[album.cate - 1]
    }</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2" onclick="update('${name}')">Chỉnh sửa</button>
                <button type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary" onclick="del('${name}')">Xóa</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });
  albumDOM.innerHTML = htmltext;
}

function getInput() {
  return [
    document.getElementById("linkAnh"),
    document.getElementById("moTa"),
    document.querySelector(".form-group select"),
    document.getElementById("tenAlbum"),
  ];
}

function clearInput(inputs) {
  inputs.forEach((input) => (input.value = ""));
}

addBtn.onclick = () => {
  const [src, des, cate, name] = getInput();
  const invalid = name.nextElementSibling;
  let htmltext = "";
  if (!name.value) {
    invalid.style.display = "block";
    htmltext += "Tên album không được để trống";
  }
  if (albumList.list.findIndex((album) => album.name === name.value) !== -1) {
    invalid.style.display = "block";
    htmltext += "Tên album không được trùng";
  }
  if (htmltext) {
    invalid.innerHTML = htmltext;
    return;
  } else {
    invalid.style.display = "none";
  }
  const newAlbum = new Album(src.value, des.value, cate.value, name.value);
  albumList.push(newAlbum);

  clearInput([src, des, name]);

  display();
};

updateBtn.onclick = () => {
  const [src, des, cate, name] = getInput();

  const newAlbum = new Album(src.value, des.value, cate.value, name.value);
  albumList.update(newAlbum);

  clearInput([src, des, name]);

  display();

  updateBtn.disabled = true;
  name.disabled = false;
  addBtn.disabled = false;
};

window.update = function update(albumName) {
  const album = document.querySelector(`[name='${albumName}']`);

  const [srcDOM, desDOM, cateDOM, nameDOM] = getInput();

  // disable rename! name is "key"
  updateBtn.disabled = false;
  nameDOM.disabled = true;
  addBtn.disabled = true;

  const src = album.querySelector(".src").style.backgroundImage.slice(5, -2);
  const name = album.querySelector(".name").textContent;
  const des = album.querySelector(".des").textContent;
  const cate = album.querySelector(".cate").getAttribute("cate");

  srcDOM.value = src;
  nameDOM.value = name;
  desDOM.value = des;
  cateDOM.options[+cate - 1].selected = "selected";
};

window.del = function del(name) {
  albumList.del(name);
  display();
};
