
loadGeneros();
carregarTabela();
function loadGeneros(){
    $("select").empty();
    $.ajax({
            url: '../php/admin.php?genero=1',
            type: 'get',
            success: function (data) {
                console.log(data);
                var obj = jQuery.parseJSON(data);
                
                $.each( obj, function( key, value ) {
                  var aa = "<option value="+value.id+">" + value.nome + "</option>";
                  $("select").append(aa);
                });
            },
        });
}

function adicionarNovaCategoria() {
    console.log("add novo genero");
    $("h6").append(" <hr><h3><label>Nova genero:</label></h3><input id='novaCategoria' name='novaCategoria'><button class='btnSaveCategoria' onclick='salvarNovaCategoria()'>Adicionar</button><button class='btnSaveCategoria' onclick='fecharJanela()'>Fechar</button><hr>");
}

function fecharJanela(){
    $("h6").empty();
    $("h6").append("<div onclick='adicionarNovaCategoria()'>Adicionar nova categoria</div>");
}

function salvarNovaCategoria(){
    var ncategoria = document.getElementById('novaCategoria').value;
    if(ncategoria){
        console.log(ncategoria);
        
        var categoria = {
            nome: ncategoria,
        }
        $.ajax({
            url: '../php/admin.php',
            type: 'post',
            dataType: 'json',
            data: categoria,
            success: function (data) {
                 if(data==1){
                     document.getElementById('novaCategoria').value = '';
                     alert("Genero Adicionado");
                     loadGeneros();
                 }
            },
            
        });
        
    }
    else{
        alert("Insira um nome para a categoria");
    }
}

function verificarCamposSalvar(){

    if( !document.getElementById('titulo').value ) {
		$(titulo).addClass("erro");
	}
	else{
		$(titulo).removeClass("erro");
	}
	if( !document.getElementById('ano').value ) {
		$(ano).addClass("erro");
	}
	else{
		$(ano).removeClass("erro");
	}
	if( !document.getElementById('autor').value ) {
		$(autor).addClass("erro");
	}
	else{
		$(autor).removeClass("erro");
	}
	if( !document.getElementById('urlFoto').value ) {
		$(urlFoto).addClass("erro");
	}
	else{
		$(urlFoto).removeClass("erro");
	}
	
	if(document.getElementById('titulo').value &&
	    document.getElementById('ano').value &&
	    document.getElementById('autor').value &&
	    document.getElementById('urlFoto').value){
	    
	    var filme = {
            titulo: document.getElementById('titulo').value,
            ano: document.getElementById('ano').value,
            autor: document.getElementById('autor').value,
            urlFoto: document.getElementById('urlFoto').value,
            genero: document.getElementById('genero').value,
            video_url: document.getElementById('urlVideo').value
        }
        console.log(filme);
         $.ajax({
            url: '../php/admin.php',
            type: 'post',
            dataType: 'json',
            data: filme,
            success: function (data) {
                 if(data!=0){
                    document.getElementById('titulo').value = '';
                    document.getElementById('ano').value = '';
                    document.getElementById('autor').value = '';
                    document.getElementById('urlFoto').value = '';
                    document.getElementById('urlVideo').value = '';
                    alert("add Filme");
                    carregarTabela();

                     
                 }
                 else{
                     alert("erro ao salvar filme");
                 }
            },
            
        });
	}
}

function carregarTabela(){
    $("#tabela").empty();
    $titulo = "<tr><th>ID</th><th>Titulo</th><th>Genero</th><th>Ano</th><th>Autor</th><th>Imagem</th><th></th></tr>";
    
    $.ajax({
            url: '../php/admin.php?carregarTabela=1',
            type: 'get',
            success: function (data) {
                console.log(data);
                var obj = jQuery.parseJSON(data);
                $("#tabela").append($titulo);
                $.each( obj, function( key, value ) {
                  var aa = "<tr><td><center>"+value.id+"</center></td>"+
                            "<td><center>"+value.titulo+"</center></td>"+
                            "<td><center>"+value.nome+"</center></td>"+
                            "<td><center>"+value.ano+"</center></td>"+
                            "<td><center>"+value.autor+"</center></td>"+
                            "<td><center><img src='"+value.img_url+"' height='35'></center></td>"+
                            "<td><center><button class='btnDelete' onclick='deletar("+value.id+")'>X</button></center></td></tr>";
                  $("#tabela").append(aa);
                });
            },
        });
}





function verificarCampoUrlFoto(){
    if( !document.getElementById('urlFoto').value ) {
		$(urlFoto).addClass("erro");
	}
	else{
		$(urlFoto).removeClass("erro");
	}
}

function verificarCampoAutor(){
    if( !document.getElementById('autor').value ) {
		$(autor).addClass("erro");
	}
	else{
		$(autor).removeClass("erro");
	}
}

function verificarCampoAno(){
	if( !document.getElementById('ano').value ) {
	    $(ano).addClass("erro");
	}
	else{
		$(ano).removeClass("erro");
	}
}

function verificarCampoTitulo(){
    if( !document.getElementById('titulo').value ) {
		$(titulo).addClass("erro");
	}
	else{
		$(titulo).removeClass("erro");
	}
}