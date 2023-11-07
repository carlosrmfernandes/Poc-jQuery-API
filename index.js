$(document).ready(function(){
  $("#buscar").click(function(){        
    var settings = {
        "url": '',
        "method": "GET",            
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        
      });
});

});

