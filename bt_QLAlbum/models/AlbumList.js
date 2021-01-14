class AlbumList {
  constructor() {
    let list = JSON.parse(localStorage.getItem("list"));
    if (!list) list = [];
    this.list = list;
  }
  saveLocal = () => {
    localStorage.setItem("list", JSON.stringify(this.list));
  };
  //////////////////////
  getLocal = () => {
    let list = JSON.parse(localStorage.getItem("list"));
    if (!list) list = [];
    this.list = list;
  };
  //////////////////////
  push = (album) => {
    this.list.push(album);
    this.saveLocal();
  };
  update = (newAlbum) => {
    this.list.find((album, index) => {
      if (album.name === newAlbum.name) {
        this.list.splice(index, 1, newAlbum);
        return true;
      }
    });
    this.saveLocal();
  }
  del = (albumName) => {
    this.list.find((album, index) => {
      if (album.name === albumName) {
        this.list.splice(index, 1);
        return true;
      }
    });
    this.saveLocal();
  };
}

export default AlbumList;

