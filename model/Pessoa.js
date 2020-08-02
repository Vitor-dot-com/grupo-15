export default class Pessoa{

    constructor(nome,cpf,nascimento){
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.email = "";
    }

    getNome(){
        return this.nome;
    }

    getCpf(){
        return this.cpf;
    }

    getNascimento(){
        return this.nascimento;
    }

    getEmail(){
        return this.email;
    }

    setNome(nome){
        this.nome = nome;
    }

    setCpf(cpf){
        this.cpf = cpf;
    }

    setNascimento(data){
        this.nascimento = data;
    }

    setEmail(email){
        this.email = email;
    }
}