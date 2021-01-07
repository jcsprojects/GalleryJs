// Creacion de clase Image
function Image(titleImag, descIma, url, coords) {
  let _titleImag = titleImag;
  let _desImg = descIma;
  let _url = url;
  let _coords = coords;

  // Getters y Setters
  Object.defineProperty(this, "titleImag", {
    get: function () {
      return _titleImag;
    },
    set: function (value) {
      _titleImag = value;
    },
  });
  Object.defineProperty(this, "descIma", {
    get: function () {
      return _desImg;
    },
    set: function (value) {
      _desImg = value;
    },
  });
  Object.defineProperty(this, "url", {
    get: function () {
      return _url;
    },
    set: function (value) {
      _url = value;
    },
  });
  Object.defineProperty(this, "coords", {
    get: function () {
      return _coords;
    },
    set: function (value) {
      _coords = value;
    },
  });
}
Image.prototype = {};
Image.prototype.constructor = Image;
