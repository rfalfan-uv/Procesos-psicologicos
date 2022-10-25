function cambiarNavbarDependiendoDeScroll() {
  var navbar = $(".js-pleca");
  // var texto_tema = $('.pleca__ee');
  if ($(window).scrollTop() > 200) {
    navbar.addClass("fixed-top");
    navbar.addClass("nav-show");
    navbar.addClass("d-block");
    navbar.removeClass("d-none");
    $("#BtnUp").addClass("d-block");
    $("#BtnUp").removeClass("d-none");
    // texto_tema.addClass('aparecer-desaparecer');
  } else {
    navbar.removeClass("fixed-top");
    navbar.removeClass("d-block");
    navbar.removeClass("nav-show");
    navbar.addClass("d-none");
    $("#BtnUp").removeClass("nav-show");
    $("#BtnUp").addClass("d-none");
    // texto_tema.removeClass('aparecer-desaparecer');
  }
}

$(window).scroll(function (event) {
  cambiarNavbarDependiendoDeScroll();
});




$(document).ready(function(){

  $("#BtnUp").click(function () {
    window.scrollTo(0, 0);
  });
  $(".btn-color").click(function () {
var d=$(this).data("c");
$(":root").css({"--primario": colores[d].primario});
$(":root").css({"--primario-hover": colores[d]["primario-over"]});
$(":root").css({"--secundario": colores[d].secundario});
$(":root").css({"--fondo-secundario": colores[d]["fondo-secundario"]});
$(":root").css({"--subtitulos": colores[d].subtitulos});
$(":root").css({"--degrado-inicio": colores[d]["degrado-inicio"]});
$(":root").css({"--degrado-fin": colores[d]["degrado-fin"]});

  });
});

let colores = [
  {
    "primario": "#6A1B9A",
    "primario-over": "#EA80FC",
    "secundario": "#9575CD",
    "fondo-secundario": "#E1BEE7",
    "subtitulos": "#9575CD",
    "degrado-inicio": "106, 27, 154",
    "degrado-fin":"149, 117, 205",
  },
  {
    "primario": "#6A1B9A",
    "primario-over": "#EA80FC",
    "secundario": "#AD1457",
    "fondo-secundario": "#E1BEE7",
    "subtitulos": "#AD1457",
    "degrado-inicio": "106, 27, 154",
    "degrado-fin":"106, 27, 154",
  },
  {
    "primario": "#6A1B9A",
    "primario-over": "#EA80FC",
    "secundario": "#F57C00",
    "fondo-secundario": "#E1BEE7",
    "subtitulos": "#F57C00",
    "degrado-inicio": "106, 27, 154",
    "degrado-fin":"245, 124, 0",
  },
  {
    "primario": "#6A1B9A",
    "primario-over": "#EA80FC",
    "secundario": "#00796B",
    "fondo-secundario": "#E1BEE7",
    "subtitulos": "#00796B",
    "degrado-inicio": "106, 27, 154",
    "degrado-fin":"0, 121, 107",
  },
  {
    "primario": "#6A1B9A",
    "primario-over": "#EA80FC",
    "secundario": "#2962FF",
    "fondo-secundario": "#E1BEE7",
    "subtitulos": "#2962FF",
    "degrado-inicio": "106, 27, 154",
    "degrado-fin":"41, 98, 255",
  },
  {
    "primario": "#6A1B9A",
    "primario-over": "#EA80FC",
    "secundario": "#9575CD",
    "fondo-secundario": "#E1BEE7",
    "subtitulos": "#9575CD",
    "degrado-inicio": "106, 27, 154",
    "degrado-fin":"149, 117, 205",
  },
];
