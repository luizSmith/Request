$("form").submit(function(e){

	e.preventDefault(); //cancela o evento no caso o submit
	
	var param = {};
	var valor = $(".valor");

	$(".key").each(function(i,element) {
		if ($(element).val() != '') {
			param[$(element).val()] = $(valor[i]).val(); // param[key] = valor
		}		
	});

	if (/^https:\/\/|^http:\/\//.test($(".link").val()) != true) { //se começar com https:// ou http://
		$(".link").val("https://" + $(".link").val());
	}

	$(".json").html('');

	$.ajax({
		url: $(".link").val(),
		data: param,
		method: $(".metodo").val()
  	}).done(function(response, textStatus, result) {

    	$("#code").addClass("sucess");
    	$("#code").html(`${result.status} ${result.statusText}`);
    	$(".json").html(response);
  	
  	}).fail(function(result, textStatus, error) {
  		
    	$("#code").addClass("error");
    	$("#code").html(`${result.status} ${result.statusText}`);

    	var resp = {
    		status: result.status,
    		statusText: result.statusText,
    		responseText: result.responseText
    	};

    	$(".json").html(JSON.stringify(resp, undefined, 2)); // converte valores em javascript em uma string JSON
  	
  	})
});

$(".mais").click(function(e){
	e.preventDefault();
	var div = `
		<div class="form-row parametros">					
    		<div class="col-md-4 mb-3">
    			<input type="text" class="form-control key" placeholder="Key">
    		</div>
    		<div class="col-md-4 mb-3">
    			<input type="text" class="form-control valor" placeholder="Valor">
    		</div>
    		<div class="col-md-0 mb-3">
    			<button class="btn btn-danger menos">X</button>
    		</div>	
  		</div>
	`;

	$("#formulario").append(div); // adiciona a ultima posição dentro do elemento

	$(".menos").click(function(){
		$(this).parent().closest(".parametros").remove();
	});
});