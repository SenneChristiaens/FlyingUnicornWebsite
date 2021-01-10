// open mobile menu
$("#hamburger").on("click", function (e) {
  if ($("#nav").hasClass("display")) {
    $("#nav").removeClass("display");
    $("#nav").addClass("no-display");
    $("#hamburgerIcon").attr("src", "images/hamburger.svg");
  } else {
    $("#nav").removeClass("no-display");
    $("#nav").addClass("display");
    $("#hamburgerIcon").attr("src", "images/delete.svg");
  }

  e.preventDefault();
});

// close mobile menu
$("nav a").on("click", function (e) {
  if ($(window).width() < 880) {
    $("#nav").addClass("no-display");
    $("#hamburgerIcon").attr("src", "images/hamburger.svg");
  } else {
    $("#nav").addClass("display");
  }
});

// form
$("#voornaam").on("keyup", function (e) {
  if ($(this).val() !== "") {
    $(this).css("borderBottom", "2px solid #c2c2c2");
  } else {
    $(this).css("borderBottom", "2px solid red");
  }
});

$("#email").on("keyup", function (e) {
  if (
    $(this).val().includes(".com", "@") ||
    $(this).val().includes(".be", "@")
  ) {
    $(this).css("borderBottom", "2px solid #c2c2c2");
  } else if ($(this).val().includes("@")) {
    $(this).css("borderBottom", "2px solid orange");
  } else {
    $(this).css("borderBottom", "2px solid red");
  }
});

$("#bericht").on("keyup", function (e) {
  if ($(this).val() !== "") {
    $(this).css("borderBottom", "2px solid #c2c2c2");
  } else {
    $(this).css("borderBottom", "2px solid red");
  }
});

var voornaam = $("#voornaam");
var email = $("#email");
var vraag = $("#bericht");

$("#verzend").on("click", function (e) {
  if (voornaam.val() == "" || email.val() == "" || vraag.val() == "") {
    voornaam.css("borderBottom", "2px solid red");
    email.css("borderBottom", "2px solid red");
    vraag.css("borderBottom", "2px solid red");
    e.preventDefault();
  }
});

// characters left
bericht.addEventListener("keyup", updateCharacters);

function updateCharacters(event) {
  // length text
  let tekst = bericht.value;
  let AantalKarakters = tekst.length;
  let Aantalover = 250 - AantalKarakters;

  // show new length
  document.querySelector("#bericht-help span").innerHTML = Aantalover;
}

// smooth scroll when clicking on anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});