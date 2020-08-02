class Pessoa{
    constructor(nome,cpf,nascimento,email){
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.email = email
    }
}

class Foco{
    constructor(pessoa,cep,descricao){
        this.pessoa = pessoa;
        this.pessoa.setEmail(email);
        this.cep = cep;
        this.descricao = descricao;
        this.status = true;
    } 
    setDownStatus(){
        this.status = false;
    }
}

