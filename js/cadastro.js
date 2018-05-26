carregarBandeiras();

function  carregarBandeiras(){
    $("select").empty();
    $.ajax({
            url: '../php/cadastro.php?bandeira=1',
            type: 'get',
            success: function (data) {
                console.log(data);
                var obj = jQuery.parseJSON(data);
                
                $.each( obj, function( key, value ) {
                  var aa = "<option value="+value.id+">" + value.bandeira + "</option>";
                  $("select").append(aa);
                });
            },
        });
}


function verificarCampoEmail(){
	$(loginBtn).addClass("btnDeafeault");
	if( !document.getElementById('email').value ) {
		$(email).addClass("erro");
	}
	else{
		$(email).removeClass("erro");
	}
}

function verificarCampoSenha(){
	$(loginBtn).addClass("btnDeafeault");
	if( !document.getElementById('senha').value ) {
		$(senha).addClass("erro");
	}
	else{
		$(senha).removeClass("erro");
	}
}

function verificarCampoConfirmaSenha(){
	$(loginBtn).addClass("btnDeafeault");
	if( !document.getElementById('confirmaSenha').value ) {
		$(confirmaSenha).addClass("erro");
	}
	else{
		$(confirmaSenha).removeClass("erro");
	}
}

function verificarCampoNome(){
	$(loginBtn).addClass("btnDeafeault");
	if( !document.getElementById('nome').value ) {
		$(nome).addClass("erro");
	}
	else{
		$(nome).removeClass("erro");
	}
}

function verificarCampoCartao(){
	$(loginBtn).addClass("btnDeafeault");
	if( !document.getElementById('cCredito').value ) {
		$(cCredito).addClass("erro");
	}
	else{
		$(cCredito).removeClass("erro");
	}
}


function cadastrar(){
	$(loginBtn).addClass("btnDeafeault");
	
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	var cSenha = document.getElementById('confirmaSenha').value;
	var nome = document.getElementById('nome').value;
	var cCredito = document.getElementById('cCredito').value;



	
	if( !senha) {
		$(senha).addClass("erro");
	}else{
		$(senha).removeClass("erro");
	}
	

	
	if( !cSenha ) {
		$(confirmaSenha).addClass("erro");
	}else{
		$(confirmaSenha).removeClass("erro");
	}
	
	if( !document.getElementById('nome').value ) {
		$(nome).addClass("erro");
	}else{
		$(nome).removeClass("erro");
	}
	
	if( !document.getElementById('cCredito').value ) {
		$(cCredito).addClass("erro");
	}else{
		$(cCredito).removeClass("erro");
	}
	
	if(document.getElementById('confirmaSenha').value != document.getElementById('senha').value){
	    $("p").append("Senhas não conferem");
	}
	
	if(email  && senha && confirmaSenha && nome && cCredito ){
		console.log("campos preenchidos");
		var cadastro = {
		    email: document.getElementById('email').value,
		    senha: document.getElementById('senha').value,
		    nome: document.getElementById('nome').value,
		    cCredito: document.getElementById('cCredito').value,
		    bandeira: document.getElementById('bandeira').value,
		    
		}
		console.log(cadastro);
		 $.ajax({
            url: '../php/cadastro.php',
            type: 'post',
            dataType: 'json',
            data: cadastro,
            success: function (data) {
                 if(data!=0){
                    alert("Cadastro realizado com sucesso");
                    window.location.href = 'login.html';
                 }
                 else{
                     alert("erro ao salvar filme");
                 }
            },
            
        });
		
	}
}

