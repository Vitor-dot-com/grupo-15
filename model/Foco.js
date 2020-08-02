import {Pessoa} from "./Pessoa.js";

export default class Foco{

    constructor(pessoa,cep,descricao){
        this.pessoa = pessoa;
        this.pessoa.setEmail(email);
        this.cep = cep;
        this.descricao = descricao;
        this.status = true;
    }

    getPessoa(){
        return this.pessoa.getCpf();
    }

    getCep(){
        return this.cep;
    }

    getDescricao(){
        return this.descricao;
    }

    setCep(cep){
        this.cep = cep;
    }

    setDescricao(desc){
        this.descricao = desc;
    }

    setDowStatus(){
        this.status = false;
    }

    
    novaPessoa(nome,cpf,data,email){
        let pessoa = new Pessoa(nome,cpf,data);
        pessoa.setEmail(email);
        return pessoa;
    }
    
    novoFoco(nome,cpf,data,email,cep,descricao){
        let foco = new Foco(ovaPessoa(nome,cpf,data,email),cep,descricao);
        return foco;
    }
}
