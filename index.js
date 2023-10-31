$(document).ready(function(){
    $("#cep").click(function(){
        var settings = {
            "url": "https://viacep.com.br/ws/01001000/json/",
            "method": "GET",            
          };
          
          $.ajax(settings).done(function (response) {
            alert(JSON.stringify(response));
          });
    });
  });

  $(document).ready(function(){
    $("#pagando-boleto").click(function(){
        var settings = {
            "url": "https://api-go-wash-efc9c9582687.herokuapp.com/api/pay-boleto",
            "method": "POST",            
            "headers": {
              "Authorization": "Vf9WSyYqnwxXODjiExToZCT9ByWb3FVsjr",
              "Content-Type": "application/json",              
            },
            "data": JSON.stringify({
              "boleto": "12345678",
              "user_id": 2
            }),
          };
          
          $.ajax(settings).done(function (response) {
            alert(JSON.stringify(response));
          });    
    });
  });