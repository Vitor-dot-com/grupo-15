//import Pessoa from "../model/Pessoa";
//const { default: Pessoa } = require("../model/Pessoa");

//Foi adicionado aqui porque os imports não estavam funcionando.
var json = null;

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
        this.quantidade ++;
        this.cpf = cpf;
        this.cep = cep;
        this.uf  = "";
        this.descricao = descricao;
        this.status = true;
    } 
    setDownStatus(){
        if(this.quantidade===0)
            this.status = false;
        else
            this.quantidade--;
    }
    updateQTD(){
        this.quantidade ++;
    }

    setUF(uf){
        this.uf = uf;
    }
}


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
    
    //Informações sobre o foco;
    cep = document.querySelector("#cep").value;
    detalhe = document.querySelector("#detalhes").value;

    foco = new Foco(cpf,cep,detalhe);
    foco.setUF(json.uf);
    console.log("instanciar");
    console.log(pessoa);
    console.log(foco);
    adicionarFoco(pessoa,foco);

});

function setUF(e){
    x = document.querySelectorAll("option");
    for(i = 0; i<x.length; i++){
        if(e===x[i].value.toLowerCase()){
            x[i].selected = true;
        }
    }
}

function getListaDePessoas(){
    if(localStorage.getItem("pessoas")!=null)
    {
        var pessoas_salvas = localStorage.getItem("pessoas");
        var json_pessoas = JSON.parse(pessoas_salvas);
        return json_pessoas;
    }
    return null;
}

function getListaDeFocos(){
    if(localStorage.getItem("focos")!=null)
    {
        var focos_salvos = localStorage.getItem("focos");
        var json_focos = JSON.parse(focos_salvos);
        return json_focos;
    }
    return null;
}

function adicionarFoco(pessoa,foco){
    console.log("metodo adicionar");
    console.log(pessoa);
    console.log(foco);

    if(localStorage.getItem("focos")!=null){
        var arrayPessoa = getListaDePessoas();
        var arrayFoco = getListaDeFocos();
        arrayPessoa.push(pessoa);
        arrayFoco.push(foco);
        var tmp_pessoa = JSON.stringify(arrayPessoa);
        var tmp_foco = JSON.stringify(arrayFoco);
        localStorage.setItem("focos",tmp_foco);
        localStorage.setItem("pessoas",tmp_pessoa);
        
    }
    else
    {

        localStorage.setItem("pessoas",JSON.stringify(pessoa));
        localStorage.setItem("focos",JSON.stringify(foco));
    }
}