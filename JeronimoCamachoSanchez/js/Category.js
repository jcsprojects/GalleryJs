// Clase category
function Category(titleCat, desCat) {
  let _nameCat = titleCat;
  let _desCat = desCat;
// Getters y Setters
  Object.defineProperty(this, "titleCat", {
    get: function () {
      return _nameCat;
    },
    set: function (value) {
      _nameCat = value;
    },
  });
  Object.defineProperty(this, "desCat", {
    get: function () {
      return _desCat;
    },
    set: function (value="descripcion") {
      _desCat = value;
    },
  });
}

Category.prototype = {};
Category.prototype.constructor = Category;
