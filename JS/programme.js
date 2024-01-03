$(document).ready(function() {
  $("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });

  $('.menu-toggle').click(function() {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
  });

  
});

//TAHAP 2 
var slideIndexes = 1;
showSlide(slideIndexes);

function openImage(){
 document.getElementById('myImage').style.display = 'block';
}

function closeImage(){
  document.getElementById('myImage').style.display = 'none';
}

//TAHAP 3
var slideIndexs = 1;
showSlidess(slideIndexs);

function openImages(){
 document.getElementById('myImages').style.display = 'block';
}

function closeImages(){
  document.getElementById('myImages').style.display = 'none';
}
