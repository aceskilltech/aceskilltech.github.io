
function showOverlay1() {
    document.getElementById("cardOverlay1").style.display ="block";
    document.getElementById("cardText1").style.display ="block";
    document.getElementById("dCard1").style.transform ="scale(1.05)";
} 

function closeOverlay1() {
    document.getElementById("cardOverlay1").style.display ="none";
    document.getElementById("cardText1").style.display ="none";
    document.getElementById("dCard1").style.transform ="scale(1)";
} 


function showOverlay2() {
    document.getElementById("cardOverlay2").style.display ="block";
    document.getElementById("cardText2").style.display ="block";
    document.getElementById("dCard2").style.transform ="scale(1.05)";
} 

function closeOverlay2() {
    document.getElementById("cardOverlay2").style.display ="none";
    document.getElementById("cardText2").style.display ="none";
    document.getElementById("dCard2").style.transform ="scale(1)";
} 


function showOverlay3() {
    document.getElementById("cardOverlay3").style.display ="block";
    document.getElementById("cardText3").style.display ="block";
    document.getElementById("dCard3").style.transform ="scale(1.05)";
} 

function closeOverlay3() {
    document.getElementById("cardOverlay3").style.display ="none";
    document.getElementById("cardText3").style.display ="none";
    document.getElementById("dCard3").style.transform ="scale(1)";
} 


function showOverlay4() {
    document.getElementById("cardOverlay4").style.display ="block";
    document.getElementById("cardText4").style.display ="block";
    document.getElementById("dCard4").style.transform ="scale(1.05)";
} 

function closeOverlay4() {
    document.getElementById("cardOverlay4").style.display ="none";
    document.getElementById("cardText4").style.display ="none";
    document.getElementById("dCard4").style.transform ="scale(1)";
} 


function showOverlay5() {
    document.getElementById("cardOverlay5").style.display ="block";
    document.getElementById("cardText5").style.display ="block";
    document.getElementById("dCard5").style.transform ="scale(1.05)";
} 

function closeOverlay5() {
    document.getElementById("cardOverlay5").style.display ="none";
    document.getElementById("cardText5").style.display ="none";
    document.getElementById("dCard5").style.transform ="scale(1)";
} 


function showOverlay6() {
    document.getElementById("cardOverlay6").style.display ="block";
    document.getElementById("cardText6").style.display ="block";
    document.getElementById("dCard6").style.transform ="scale(1.05)";
} 

function closeOverlay6() {
    document.getElementById("cardOverlay6").style.display ="none";
    document.getElementById("cardText6").style.display ="none";
    document.getElementById("dCard6").style.transform ="scale(1)";
} 

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }

<<<<<<< HEAD


/*navbar editor
*/

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
  
=======
>>>>>>> 73e856a7605e6d6615eb812597b3dbf6bff9b583
