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
    "primario": "#D81B60",
    "primario-over": "#F48FB1",
    "secundario": "#5E35B1",
    "fondo-secundario": "#D1C4E9",
    "subtitulos": "#7E57C2",
    "degrado-inicio": "61, 90, 254",
    "degrado-fin":"126, 87, 194",
  },
  {
    "primario": "#3949AB",/* indigo */
    "primario-over": "#9FA8DA",
    "secundario": "#039BE5",
    "fondo-secundario": "#B3E5FC",
    "subtitulos": "#29B6F6",
    "degrado-inicio": "1, 87, 155",
    "degrado-fin":"41, 182, 246",
  },
  {
    "primario": "#00ACC1",/* cyan50 */
    "primario-over": "#80DEEA",
    "secundario": "#43A047",
    "fondo-secundario": "#C8E6C9",
    "subtitulos": "#66BB6A",
    "degrado-inicio": "0, 96, 100",
    "degrado-fin":"41, 182, 246",
  },
  {
    "primario": "#7CB342",/* light green 50 */
    "primario-over": "#C5E1A5",
    "secundario": "#FB8C00",
    "fondo-secundario": "#FFE0B2",
    "subtitulos": "#FB8C00",
    "degrado-inicio": "245, 127, 23",
    "degrado-fin":"255, 238, 88",
  },
  {
    "primario": "#FF8F00",/* amber */
    "primario-over": "#FFE082",
    "secundario": "#F4511E",
    "fondo-secundario": "#FFCCBC",
    "subtitulos": "#FF7043",
    "degrado-inicio": "191, 54, 12",
    "degrado-fin":"255, 112, 57",
  },
  {
    "primario": "#263238",/*brpown */
    "primario-over": "#CFD8DC",
    "secundario": "#546E7A",
    "fondo-secundario": "#CFD8DC",
    "subtitulos": "#78909C",
    "degrado-inicio": "38, 50, 56",
    "degrado-fin":"120, 144, 156",
  },
];
