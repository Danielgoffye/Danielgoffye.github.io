var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
 }
  slides[slideIndex-1].style.display = "block";
}

function transformare(image,nr_close){

  image.style.transform = "scale(2.0)";

  var aux = document.getElementsByClassName("close")[nr_close];
  aux.style.display = "block";

  aux.onclick = function(){
    aux.style.display = "none";
    image.style.transform = "scale(1.0)";

  }
}
