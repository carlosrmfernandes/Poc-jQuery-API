$(document).ready(function(){
  
  $("#btn-cep").click(function(){

   let cep = $('#cep').val();

    var settings = {
        "url": `https://viacep.com.br/ws/${cep}/json/`,
        "method": "GET",            
      };
      
      $.ajax(settings).done(function (response) {  
        $('.uf').val(response.uf);
        $('#logradouro').val(response.logradouro);
        $('#bairro').val(response.bairro);
        
      });
  });

});