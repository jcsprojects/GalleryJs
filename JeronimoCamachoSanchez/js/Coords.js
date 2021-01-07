// Clase coords
function Coords(latitude=0, longitude=0){
    let _latitude = latitude;
    let _longitude= longitude;
// Getters y Setters
    Object.defineProperty(this, "latitude", {
        get: function () {
          return _latitude;
        },
        set: function (value) {
          _latitude = value;
        },
      });
      Object.defineProperty(this, "longitude", {
        get: function () {
          return _longitude;
        },
        set: function (value) {
          _longitude = value;
        },
      });
}
Coords.prototype = {};
Coords.prototype.constructor = Coords;