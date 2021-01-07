//Excepción base para el uso de todas las excepciones
function BaseException() {}
//Heredamos del objeto Error y creamos el constructor
BaseException.prototype = Object.create(Error.prototype);
BaseException.prototype.constructor = BaseException;
//Sobrescribimos el método toString
BaseException.prototype.toString = function () {
  return this.name + ": " + this.message;
};

//Excepciones de validación
function ParameterValidationException() {
  this.name = "ParameterValidationException";
  this.message = "Error: Parameter Validation Exception.";
}
//Realizamos la herncia de BaseException
ParameterValidationException.prototype = Object.create(BaseException.prototype);
ParameterValidationException.prototype.constructor = ParameterValidationException;
// Excepcion elemento vacio
//Excepcion para valores vacios
function EmptyValueException(param) {
  this.name = "EmptyValueException";
  this.message = "Error: The parameter " + param + " can't be empty.";
}
//Realizamos la herncia de ParameterValidationException
EmptyValueException.prototype = Object.create(
  ParameterValidationException.prototype
);
EmptyValueException.prototype.constructor = EmptyValueException;

//Excepción de valor inválido
function InvalidValueException(value) {
  this.name = "InvalidValueException";
  this.message = "Error: The paramenter " + value + " has an invalid value. ";
}
//Realizamos la herncia de ParameterValidationException
InvalidValueException.prototype = Object.create(
  ParameterValidationException.prototype
);
InvalidValueException.prototype.constructor = InvalidValueException;

//Excepción acceso inválido a constructor
function InvalidAccessConstructorException() {
  this.name = "InvalidAccessConstructorException";
  this.message = "Constructor can’t be called as a function.";
}

InvalidAccessConstructorException.prototype = Object.create(
  BaseException.prototype
);
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;
// Excepcion de indice fuera de rango
function IndexOutOfBounds() {
  this.name = "IndexOutOfBounds";
  this.message = "Error: Index is out of bounds.";
}
IndexOutOfBounds.prototype = Object.create(BaseException.prototype);
IndexOutOfBounds.prototype.constructor = IndexOutOfBounds;
// Excepción que dice si el elemento existe
function ElementExists(elem){
  this.name = "ElementExists";
  this.message = "Error: element " +elem +" exist. ";
}

ElementExists.prototype = Object.create(BaseException.prototype);
ElementExists.prototype.constructor = ElementExists;

// Excepción que dice si el elemento NO existe
function ElementNotExists(elem){
  this.name = "ElementNotExists";
  this.message = "Error: element " +elem +" is not exist. ";
}

ElementNotExists.prototype = Object.create(BaseException.prototype);
ElementNotExists.prototype.constructor = ElementNotExists;
// Excepción que dice que la categoria no esta registrada
function CategoryNotRegister (){
  this.name = "CategoryNotRegister";
  this.message = "Error: Category is not registered "
}
CategoryNotRegister.prototype = Object.create(BaseException.prototype);
CategoryNotRegister.prototype.constructor = CategoryNotRegister;
// Exceción de valor nulo
function IsNull (){
  this.name = "IsNull";
  this.message = "Error: value is null";
}

IsNull.prototype = Object.create(BaseException.prototype);
IsNull.prototype.constructor = IsNull;