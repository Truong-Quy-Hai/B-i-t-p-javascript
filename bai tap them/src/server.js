export async function getAll() {
  const result = await fetch(
    "http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien"
  ).then((res) => res.json());
  return result;
}

export async function getOne(id) {
  const result = await fetch(
    `http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${id}`
  );
  return result;
}

export async function update(nv) {
  const requestInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nv),
  };
  const result = await fetch(
    `http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${nv.maNhanVien}`,
    requestInit
  );
  return result;
}

export async function postData(nv) {
  const requestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nv),
  };
  const result = await fetch(
    "http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien",
    requestInit
  );
  return result;
}

export async function deleteData(maNhanVien) {
  const result = await fetch(
    `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`,
    { method: "DELETE" }
  );
  return result;
}
