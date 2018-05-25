loadVideo();

function loadVideo(){
    var query = window.location.search.substring(1);
    var qs = parse_query_string(query);
    $.ajax({
        url: '../php/play.php?id='+qs.id,
        type: 'get',
        async: true, 
        success: function (data) {
            console.log(data);
            var obj = jQuery.parseJSON(data);
            if(obj){
                $.each( obj, function( key, value ) {
                  var res = value.video_url.replace("watch?v=", "embed/");
                  var filme = "<iframe width='800' height='600' src='"+res+"'></iframe>";
                  $("#video").append(filme);
                });
            }
            else{
            }
        },
    }); 
}


function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}