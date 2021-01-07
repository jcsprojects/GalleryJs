// clase author

function Author(nickname, email, avatar) {
  let _nickname = nickname;
  let _email = email;
  let _avatar = avatar;
// Getter y setters
  Object.defineProperty(this, "nickname", {
    get: function () {
      return _nickname;
    },
    set: function (value) {
      _nickname = value;
    },
  });
  Object.defineProperty(this, "email", {
    get: function () {
      return _email;
    },
    set: function (value) {
      _email = value;
    },
  });
  Object.defineProperty(this, "avatar", {
    get: function () {
      return _avatar;
    },
    set: function (value) {
      _avatar = value;
    },
  });
}
Author.prototype = {};
Author.prototype.constructor = Author;
