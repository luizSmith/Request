

$("form").submit(function(e){
	e.preventDefault();
	$.ajax({
		url: "https://" + $(".link").val(),
		dataType: 'json',
		method: $(".metodo").val(),
		success: function(result) {
			$(".json").html(JSON.stringify(result, undefined, 2));
  		}
  	});
});

$(".mais").click(function(){
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
	$("#formulario").append(div);

	$(".menos").click(function(){
		$(this).parent().closest(".parametros").remove();
	});
});

