let gal = Gallery.getInstance();
gal.galleryName = "galeria1";
console.log("galeria creada");
console.log("Nombre de la galeria: ", gal.galleryName);
console.log(("Categoria añadida: "),gal.addCategorie("categoria1", " Es genial"));
console.log("getCategories: ",gal.getCategories);
console.log("addCategorie: ",gal.addCategorie("categoria2", " Es fantastico"));
console.log("addCategorie: ",gal.addCategorie("categoria3", " Es wow"));
console.log("getCategories: ",gal.getCategories);
console.log("removeCategorie: ",gal.removeCategorie("categoria1"));
console.log("getCategories: ",gal.getCategories);
console.log("addAuthor: ",gal.addAuthor("autor1", "autor@autir.com", "avatar"));
console.log("addAuthor: ",gal.addAuthor("autor2", "autor2@autir.com", "avatar2"));
console.log("getAuhor: ",gal.getAuthors);
let img1 = new Portrait("imagen1",
"imagenbonita",
"urlImagen",
new Coords(300,200));
console.log("addImage:",gal.addImage(img1,"categoria2","autor1"));
let img2 = new Portrait("imagen2",
"imagenPreciosa",
"urlImagen2",
new Coords(500,200));
console.log("addImage:",gal.addImage(img2,"categoria3","autor2"));
let img3 = new LandScape("imagen3",
"imagen de las mejores",
"urlImagen3",
new Coords(1234,200));
console.log("addImage:",gal.addImage(img3,"categoria2","autor1"));
let img4 = new LandScape("imagen4",
"imagen super chachi",
"urlImagen4",
new Coords(300,2000));
console.log("addImage:",gal.addImage(img4,"categoria3","autor2"));
console.log("getCategories: ",gal.getCategories);
console.log("getCategoryImages: ",gal.getCategoryImages("categoria2"));
console.log("getAuthorImages(author1): ",gal.getAuthorImages("autor1"));
console.log("getAuthorImages(author2): ",gal.getAuthorImages("autor2"));
console.log("removeImage: ",gal.removeImage("imagen1"));
console.log("getAuthorImages(author1): ",gal.getAuthorImages("autor1"));
console.log(gal.removeAuthor("autor1"));
console.log("getAuthorImages(author1): ",gal.getAuthorImages("autor1"));
console.log("Imagenes Portrair",gal.getPortraits());
console.log("Imagenes LandScape",gal.getLandScape());
