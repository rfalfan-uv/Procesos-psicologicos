 function cambiarNavbarDependiendoDeScroll() {
        var navbar = $(".js-pleca");
        // var texto_tema = $('.pleca__ee');
        if ($(window).scrollTop() > 200) {
          navbar.addClass("fixed-top");
          navbar.addClass("nav-show");
          navbar.addClass("d-block");
          navbar.removeClass("d-none");
          // texto_tema.addClass('aparecer-desaparecer');
        } else {
          navbar.removeClass("fixed-top");
          navbar.removeClass("d-block");
          navbar.removeClass("nav-show");
          navbar.addClass("d-none");
          // texto_tema.removeClass('aparecer-desaparecer');
        }
      }

      $(window).scroll(function (event) {
        cambiarNavbarDependiendoDeScroll();
      });