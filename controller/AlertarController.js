//import Pessoa from "../model/Pessoa";
//import Foco from "../model/Foco";

var json = null;
buscarCep = document.querySelector("#cep");
buscarCep.addEventListener("input",function(e){
    cep = e.target.value;
    if(cep.length>=8){
        console.log(cep)
        var connect = new XMLHttpRequest();

        if(!isNaN(cep))
        {
            var URL_CEP = "https://viacep.com.br/ws/"+cep+"/json/";
            connect.open('GET',URL_CEP);
            connect.send();
            setTimeout(() => {  
                json = JSON.parse(connect.responseText);  
            }, 2000);

        }
        else
            alert("CEP inválido! Só são permitidos números.")
    }
});

alertar = document.querySelector("#alertar");
alertar.addEventListener("click",function (e){
    nome = document.querySelector("#nome").value;
    cpf = document.querySelector("#cpf").value;
    data = document.querySelector("#nasc").valueAsDate;
    console.log(data);
    console.log(nome);
});

$(() => {
    $('form').on('submit', e => {
        const form = e.target;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        $(form).addClass('was-validated');
    });
})