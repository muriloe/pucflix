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
                  var filme = "<center><img src='"+value.img_url+"' width='200'></center><br><h2>"+value.titulo+"</h2><label>"+value.autor+"</label>, <label>"+value.nome+"</label>, <label>"+value.ano+"</label><br><br><td><center><button class='btnVer'>Assistir</button></center></td></tr>";
                  $("#detalheFilme").append(filme);
                });
            }
            else{
                
            }
        },
    });
}