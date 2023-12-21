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
 
  function nextSlide(n){ 
    showSlide(slideIndexes += 1); 
  } 
 
  function showSlide(n){ 
    var i; 
    var slided = document.getElementsByClassName("slaid"); 
    if(n > slided.length){ 
      slideIndexes = 1; 
    } 
    if(n < 1){ 
      slideIndexes = slided.length; 
    } 
    for(i = 0; i < slided.length; i++){ 
      slided[i].style.display = "none"; 
    } 
      slided[slideIndexes - 1].style.display = "block"; 
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
 
  function nextSlides(n){ 
    showSlidess(slideIndexs += 1); 
  } 
 
  function showSlidess(n){ 
    var j; 
    var slides = document.getElementsByClassName("slaids"); 
    if(n > slides.length){ 
      slideIndexs = 1; 
    } 
    if(n < 1){ 
      slideIndexs = slides.length; 
    } 
    for(j = 0; j < slides.length; j++){ 
      slides[j].style.display = "none"; 
    } 
      slides[slideIndexs - 1].style.display = "block"; 
 }