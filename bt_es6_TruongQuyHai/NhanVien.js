const size = 4;

export default class NhanVien {
  constructor({
    maNV = 0,
    tenNV = "",
    chucVu = 0,
    heSoLuong = 0,
    luongCoBan = 0,
  }) {
    // data members
    this.maNV = maNV;
    this.tenNV = tenNV;
    this.chucVu = chucVu;
    this.heSoLuong = heSoLuong;
    this.luongCoBan = luongCoBan;
  }
  tinhLuong = () => this.chucVu * this.heSoLuong * this.luongCoBan;
  hienThi = () =>
    `<h${size}>Mã nhân viên: ${this.maNV}</h${size}>
    <h${size}>Tên nhân viên: ${this.tenNV}</h${size}>
    <h${size}>Chức vụ: ${this.chucVu}</h${size}>
    <h${size}>Tổng lương: ${this.tinhLuong()}</h${size}>
    `;
}
