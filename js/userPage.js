loadMovies();

function loadMovies(){
    $.ajax({
            url: '../php/userPage.php?genero=1',
            type: 'get',
            async: true, 
            success: function (data) {
                console.log(data);
                var obj = jQuery.parseJSON(data);
                
                $.each( obj, function( key, value ) {
                  var aa = "<h1>#"+value.nome+"</h1><div id='"+value.id+"' class='scrollmenu'></div>";
                  $("#categorias").append(aa);
                    
                    $.ajax({
                        url: '../php/userPage.php?filmesGenero='+value.id,
                        type: 'get',
                        async: true, 
                        success: function (data) {
                            console.log(data);
                            var obj = jQuery.parseJSON(data);
                            if(obj){
                                $.each( obj, function( key, value ) {
                                  var filme = "<div class='miniaturaFilme' onclick='loadInformacoes("+value.id+")'><img src='"+value.img_url+"' width='250'><br>"+value.titulo+"</div>";
                                  $("#"+value.fk_genero).append(filme);
                                });
                            }
                            else{
                            }
                        },
                    }); 
                    
                    
                });
            },
        });
}

function loadInformacoes(id){
    console.log("Entrou detalheFilme");
    $("#detalheFilme").empty();
    $.ajax({
        url: '../php/userPage.php?filme='+id,
        type: 'get',
        async: true, 
        success: function (data) {
            console.log(data);
            var obj = jQuery.parseJSON(data);
            if(obj){
                $.each( obj, function( key, value ) {
                  var filme = "<center><img src='"+value.img_url+"' width='200'></center><br><h2>"+value.titulo+"</h2><label>"+value.autor+"</label>, <label>"+value.nome+"</label>, <label>"+value.ano+"</label><br><br><td><center><button class='btnVer' onclick='iniciarFilme("+value.id+")'>Assistir</button></center></td></tr>";
                  $("#detalheFilme").append(filme);
                });
            }
            else{
                
            }
        },
    });
}

function iniciarFilme(id){
    console.log("USARAIO QUER VER O FILME MEOOOOOO");
    window.location.href = 'play.html?id='+id;
}

function carregarBuscaAvancada(){
    $("#avancado").empty();
    var html = "<input id='ano' placeholder='Ano' type='number' class='buscas'><input id='genero' placeholder='Genero' class='buscas'><input id='autor'  placeholder='Autor' class='buscas'>";
    $("#avancado").append(html);
    $("#btnavancado").empty();
    var html2 = "<label class='buscaLabel' onclick='fecharBuscaAvancada()'>Fechar &nbsp</label>";
    $("#btnavancado").append(html2);
}

function fecharBuscaAvancada(){
     $("#avancado").empty();
     $("#btnavancado").empty();
    var html2 = "<label class='buscaLabel' onclick='carregarBuscaAvancada()'>Busca Avançada &nbsp</label>";
    $("#btnavancado").append(html2);
}

function buscar() {
    console.log('entrouBsucas');
    var titulo;
	var ano;
	var genero;
	var autor;
	
	if (document.getElementById('titulo')){
	    titulo = document.getElementById('titulo').value; 
	}
	if (document.getElementById('ano')){
	    ano = document.getElementById('ano').value;	
	}
	if (document.getElementById('genero')){
	    genero = document.getElementById('genero').value;
	}
	if (document.getElementById('autor')){
	    autor = document.getElementById('autor').value;
	}
	
	console.log(titulo);
    console.log(ano);
    console.log(genero);
    console.log(autor);
    
    var busca = {
        busca: 'buscas',
        titulo: titulo,
        ano: ano,
        genero: genero,
        autor: autor,
    }
    
    console.log(busca);
    $("#categorias").empty();
    $.ajax({
            url: '../php/userPage.php',
            type: 'post',
            async: true, 
            data: busca,
            success: function (data)  {
                console.log(data);
                console.log('sadas');
                var obj = jQuery.parseJSON(data);
                
                console.log('xx');
                var aa = "<h1>Resultado</h1><div id='gen' class='scrollmenu'></div>";
                  $("#categorias").append(aa);

                    if(obj){
                        $.each( obj, function( key, value ) {
                            var filme = "<div class='miniaturaFilme' onclick='loadInformacoes("+value.id+")'><img src='"+value.img_url+"' width='250'><br>"+value.titulo+"</div>";
                            $("#gen").append(filme);
                        });
                    }
            },
        });
    
}