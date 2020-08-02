//const { default: Pessoa } = require("../model/Pessoa");
var s;

//p = new Pessoa("Jonas","asdf","asdf");

//Foi adicionado aqui porque os imports não estavam funcionando.

var arrayPessoa = [];
var arrayFoco = [];

class Pessoa{
    constructor(nome,cpf,nascimento,email){
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.email = email
    }
}

class Foco{
    constructor(cpf,cep,descricao){
        this.cpf = cpf;
        this.cep = cep;
        this.descricao = descricao;
        this.status = true;
    } 
    setDownStatus(){
        this.status = false;
    }
}

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
                setUF(json.uf.toLowerCase());
                console.log(connect.responseText);
            }, 2000);

        }
        
        else
            alert("CEP inválido! Só são permitidos números.");

    }
    
    
    
});


alertar = document.querySelector("#alertar");
alertar.addEventListener("click",function(e){
    
    //Informações de quem criou o alerta
    nome = document.querySelector("#nome").value;
    cpf = document.querySelector("#cpf").value;
    data = document.querySelector("#nasc").valueAsDate;
    email = document.querySelector("#email").value;
    
    
    pessoa = new Pessoa(nome,cpf,data,email)
    arrayPessoa.push(pessoa);
    
    //Informações sobre o foco;
    cep = document.querySelector("#cep").value;
    detalhe = document.querySelector("#detalhes").value;

    foco = new Foco(cpf,cep,detalhe);
    arrayFoco.push(foco);
    
    if(localStorage.getItem("pessoas")==null){
        localStorage.setItem("pessoas",JSON.stringify(arrayPessoa));
        localStorage.setItem("focos",JSON.stringify(arrayFoco));
    }
    
    else
    {
        arrayPessoa = JSON.parse(localStorage.getItem("pessoas"))
        arrayFoco = JSON.parse(localStorage.getItem("focos"));
        arrayPessoa.push(JSON.parse(JSON.stringify(pessoa)));
        arrayFoco.push(JSON.parse(JSON.stringify(foco)));
    }

});

function setUF(e){
    x = document.querySelectorAll("option");
    for(i = 0; i<x.length; i++){
        if(e===x[i].value.toLowerCase()){
            x[i].selected = true;
        }
    }
}
