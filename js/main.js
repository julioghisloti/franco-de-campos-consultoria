$(document).ready(function() {

	  // Medidas ===================================================================================
	  $(window).load(medidas);
	  $(window).resize(medidas);

	  function medidas() {

	    var altura = document.documentElement.clientHeight; //Pega o Haight
	    var largura = document.documentElement.clientWidth //Paga o Width

	    if (altura < 650) {

	      var altura = 650;
	      $("#top-all").show().css({
	        'height': altura + "px"
	      }); //Top -->
	    } else {

	      $("#top-all").show().css({
	        'height': altura + "px"
	      }); //Top -->
	    }


	    if (largura < 1300) {

	      var altura = 850

	    } else {

	      //Nada		
	    }


	    $(".box-content-all").show().css({
	      'height': altura + "px"
	    }); //Empresa -->
	  }
});