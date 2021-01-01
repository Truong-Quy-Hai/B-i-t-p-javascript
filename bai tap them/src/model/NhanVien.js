var NhanVien = function(maNhanVien= '', tenNhanVien= '', chucVu= '', heSoChucVu= '', luongCoBan= '', soGioLamTrongThang= ''){
  this.maNhanVien = maNhanVien;
  this.tenNhanVien=tenNhanVien;
  this.luongCoBan =luongCoBan;
  this.chucVu = chucVu;
  this.soGioLamTrongThang =soGioLamTrongThang;
  this.heSoChucVu = heSoChucVu;
  this.tinhTongLuong = function(){
      return this.luongCoBan * this.heSoChucVu;
  },
  this.xepLoaiNhanVien = function(){
      if (this.soGioLamTrongThang >= 120) {
          return 'Nhân Viên Xuất Sắc';
      } else if (this.soGioLamTrongThang >= 100){
          return 'Nhân Viên Giỏi';
      } else if (this.soGioLamTrongThang >= 80) {
          return 'Nhân Viên Khá';
      } else if (this.soGioLamTrongThang >= 50) {
          return 'Nhân Viên Trung Bình';
      } else {
          return 'Không xác định';
      }
  }
}

export default NhanVien;