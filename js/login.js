	function login(){
		$(loginBtn).addClass("btnDeafeault");


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
			validarLogin(document.getElementById('email').value, document.getElementById('senha').value)
			
		}
	}
	
	function validarLogin(email, senha){
	    var login = {
            email: email,
            senha: senha,
        }
        console.log(login);
        $.ajax({
            url: '../php/login.php',
            type: 'post',
            dataType: 'json',
            data: login,
            success: function (data) {
                console.log(data + '---');
                if(data === 0){
                	window.location.href = 'userPage.html';
                }
            },
            
        });
	}
	
	function verificarCampoEmail(){
		console.log(document.getElementById('email').value);
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