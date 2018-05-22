
	function login(){
		$(loginBtn).addClass("btnDeafeault");
		var email = document.getElementById('email').value;
		var senha = document.getElementById('senha').value;
		console.log(email + senha);
		if( !document.getElementById('email').value ) {
			$(email).addClass("erro");
		}
		else{
			$(email).removeClass("erro");
		}
		if( !document.getElementById('senha').value ) {
			$(senha).addClass("erro");
		}else{
			$(senha).removeClass("erro");
		}
		if(email  && senha){
			console.log("campos preenchidos");
			location.href='userPage.html';
		}
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

