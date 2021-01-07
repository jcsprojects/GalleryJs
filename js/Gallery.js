let Gallery = (function () {
  let instantiated;

  function init() {
    // Patron Singleton
    function Gallery() {
      if (!(this instanceof Gallery))
        throw new InvalidAccessConstructorException();

      let _authors = [];
      let _categories = [];
      let _galleryName = "myGallery";

      let _portrait = [];
      let _landscape = [];

      // Getter y Setter del nombre de la galeria
      Object.defineProperty(this, "galleryName", {
        get: function () {
          return _galleryName;
        },
        set: function (value) {
          if (value == "") {
            throw new EmptyValueException("value");
          }
          _galleryName = value;
        },
      });

      // Función para obtener la posicion de una categoria dada
      this.getCategoryPosition = function (category) {
        let pos = -1;
        for (let i = 0; i < _categories.length; i++) {
          if (_categories[i].category.titleCat == category) {
            pos = i;
          }
        }
        return pos;
      };

      // Funcion para añadir una categoria
      this.addCategorie = function (title, description) {
        let category = new Category(title, description);
        let even = (element) => element.category.titleCat == title;

        if (title === undefined) {
          throw new IsNull();
        } else if (_categories.some(even)) {
          // Recorre el array _categories y si encuentra una coincidencia salta la excepcion
          throw new ElementExists(title);
        } else {
          _categories.push({ category: category, images: [] });
        }
        return _categories.length;
      };
      // Acceso a atributos privados
      Object.defineProperty(this, "getCategories", {
        get: function () {
          return _categories;
        },
      });

      Object.defineProperty(this, "getAuthors", {
        get: function () {
          return _authors;
        },
      });
      // Funcion que Elimina una categoria
      this.removeCategorie = function (categoria) {
        let even = (element) => element.category.titleCat == categoria;
        if (!_categories.some(even)) {
          throw new CategoryNotRegister(); // Comprueba si la categoria existe, de no ser asi salta una excepción
        } else {
          let position = this.getCategoryPosition(categoria);
          if (position !== -1) {
            _categories.splice(position, 1);
          }
        }
        return _categories.length;
      };
      // Funcion para eliminar una imagen
      this.removeImage = function (imagen) {
        let cerrojo = false;
        let result = -1;
        for (let i = 0; i < _categories.length && !cerrojo; i++) {
          for (let j = 0; j < _categories[i].images.length && !cerrojo; j++) {
            if (_categories[i].images[j].images.titleImag == imagen) {
              _categories[i].images.splice(j, 1);
              cerrojo = true;
              result =
                "La categoria " +
                _categories[i].category.titleCat +
                " tiene: " +
                _categories[i].images.length +
                " imagenes";
            }
          }
        }
        if (result == -1) {
          throw new ElementNotExists(imagen); // Comprueba si existe la imagen de no ser asi salta una excepcion
        } else {
          return result;
        }
      };
      // Funcion para añadir una imagen con un author a una categoria
      this.addImage = function (Imagen, category, author) {
        // let img = new Image(titleImag, descIma, url, coords);
        if (Imagen.titleImag === null) {
          throw new IsNull();
        } else {
          let posCat = this.getCategoryPosition(category);
          let posAuth = this.getAuthorPosition(author);
          let miAuthor = _authors[posAuth];
          if (_categories[posCat] == undefined) {
            throw new ElementNotExists(category);
          }else{
            _categories[posCat].images.push({
              author: miAuthor,
              images: Imagen,
            });
            if (Imagen instanceof Portrait) {
              _portrait.push(Imagen);
            } else if (Imagen instanceof LandScape) {
              _landscape.push(Imagen);
            }
          }
        }
        return _categories.length;
      };
      // Iterador portrait
      Object.defineProperty(this, "portrait", {
        get: function () {
          let nextIndex = 0;
          return {
            next: function () {
              return nextIndex < _portrait.length
                ? { value: _portrait[nextIndex++], done: false }
                : { done: true };
            },
          };
        },
      });

      // Muestra las imagenes de tipo portrait
      this.getPortraits = function () {
        let iterador = this.portrait;
        let obj = iterador.next();
        let misPort = [];

        while (!obj.done) {
          let element = obj.value;
          // misPort.push(element.titleImag);
          misPort.push(element);
          obj = iterador.next();
        }
        return misPort;
      };
      Object.defineProperty(this, "landScape", {
        get: function () {
          let nextIndex = 0;
          return {
            next: function () {
              return nextIndex < _landscape.length
                ? { value: _landscape[nextIndex++], done: false }
                : { done: true };
            },
          };
        },
      });

      // Muestra las imagenes de tipo Landscape
      this.getLandScape = function () {
        let iterador = this.landScape;
        let obj = iterador.next();
        let misLand = [];

        while (!obj.done) {
          let element = obj.value;
          // misPort.push(element.titleImag);
          misLand.push(element);
          obj = iterador.next();
        }
        return misLand;
      };

      // Muestra las imagenes que pertenecen a una categoria
      this.getCategoryImages = function (categoria) {
        if (categoria == null || categoria == "") {
          return new IsNull();
        } else {
          let posCat = this.getCategoryPosition(categoria);
          return _categories[posCat].images;
        }
      };
      // Funcion que Añade un nuevo author
      this.addAuthor = function (nickname, email, avatar) {
        if (nickname === null) {
          throw new IsNull(nickname);
        } else {
          let author = new Author(nickname, email, avatar);
          _authors.push(author);

          return _authors.length;
        }
      };
      // Funcion que devuelve la posicion dado un author
      this.getAuthorPosition = function (author) {
        let pos = -1;

        for (let i = 0; i < _authors.length; i++) {
          if (_authors[i].nickname == author) {
            pos = i;
          }
        }
        return pos;
      };
      // Funcion que muestra las imagenes de un author
      this.getAuthorImages = function (author) {
        let authorImg = [];
        if (author === null) {
          throw new IsNull(nickname);
        } else {
          for (let i = 0; i < _categories.length; i++) {
            for (let j = 0; j < _categories[i].images.length; j++) {
              if (_categories[i].images[j].author.nickname == author) {
                authorImg.push(_categories[i].images[j].images.titleImag);
              }
            }
          }
        }
        return authorImg;
      };
      // Funcion para eliminar un author mientras exista uno, si no salta una excepcion
      this.removeAuthor = function (author) {
        let even = (element) => element.nickname == author;
        if (!_authors.some(even)) {
          throw new ElementNotExists(author);
        } else {
          let position = this.getAuthorPosition(author);
          if (position !== -1) {
            _authors.splice(position, 1);
          }

          return _authors.length;
        }
      };
    }

    Gallery.prototype = {};
    Gallery.prototype.constructor = Gallery;

    let gal = new Gallery();
    Object.freeze(gal);
    return gal;
  }
  return {
    getInstance: function () {
      if (!instantiated) {
        //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
        instantiated = init(); //instantiated contiene el objeto único
      }
      return instantiated; //Si ya está asignado devuelve la asignación.
    },
  };
})();
