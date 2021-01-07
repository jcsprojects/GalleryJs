function LandScape (titleImag, descIma, url, coords){
    Image.call(this,titleImag, descIma, url, coords);
}
LandScape.prototype = Object.create(Image.prototype);
LandScape.prototype.constructor = LandScape;