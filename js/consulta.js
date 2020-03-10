// function retorna(){
// 	var url = document.getElementById('url').value;
// 	//url = "api-pacientes.herokuapp.com/pacientes";
// 	//url = "desenvolvimentoparaweb.com/javascript/json-javascript-object-notation/";
// 	var metodo = document.querySelector('#metodo');
// 	url = 'https://api-pacientes.herokuapp.com/pacientes';
// 	url = 'http://www.backsite.com.br/dispositivo/service/backsite/apponepage/select.geral.bandeiras.php';
// 	console.log(url);
// 	console.log(metodo.value);

// 	var xhr = new XMLHttpRequest();
// 	//xhr.open(metodo.value, 'https://' + url.value);
	
// 	xhr.open(metodo.value,url);

// 	xhr.addEventListener('load', function() {
// 		if (this.status == 200) {
// 			var resposta = xhr.responseText;
// 			var paciente = JSON.stringify(resposta);
// 			document.querySelector('#resposta').innerHTML = resposta;		
			
// 		} else {
// 			console.log(this.status);
//             console.log(this.responseText);
//             var erroAjax = document.querySelector("#erro-ajax");
//             erroAjax.classList.remove('invisivel');
// 		}
// 	});

// 	xhr.send();
// }

$("form").submit(function(e){
	e.preventDefault();

	//if ($(".link").val() != "") {
		// $.post({
  //       	//url : $(".link").val(),
  //       	url: "https://www.backsite.com.br/publico/service/onepage/select.geral.bandeiras.php",
  //       	type : $(".metodo").val()
  //   	})
    	// .done(function(msg){
    	//      console.log('foi');
    	// })
	//}






 $.ajax({
  method: "POST",
  url: "https://www.backsite.com.br/publico/service/onepage/select.geral.bandeiras.php",
  //data: { nome: "Pedro", email: "pedro@email.com" }
 })
	
})