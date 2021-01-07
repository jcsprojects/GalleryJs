function Portrait (titleImag, descIma, url, coords){
    Image.call(this,titleImag, descIma, url, coords);
}
Portrait.prototype = Object.create(Image.prototype);
Portrait.prototype.constructor = Portrait;