//ejercicio 1

var li = "<li>";
var divRow = "<div class = 'row'>";
var divCol = '<div class="col-md-4">';
var img1 = '<img src="';
var img2 = '" height="250" alt="" />' 
var moviePoster = "img/foto.jpg";
var divCierre = '</div>';
var title1 = '<h2>';
var title2 = '</h2>';
var movieTitle = "pelicula";
var liCierre = '</li>';


document.body.innerHTML = `${li} ${divRow} ${divCol} ${img1} ${moviePoster} ${img2} ${divCierre} ${divCol} ${title1} ${movieTitle} ${title2} ${divCierre} ${divCierre} ${liCierre}`;