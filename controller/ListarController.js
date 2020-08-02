
if(localStorage.getItem("pessoas")!=null){
    var arrayPessoa = JSON.parse(localStorage.getItem("pessoas"));
    var arrayFoco = JSON.parse(localStorage.getItem("focos"));
    for(i = 0; i<arrayFoco.length; i++){
        adicionarLista(arrayFoco[i]);
    }
}
else 
{
    window.location = "../views/main.html";
    alert("Não há nenhum foco cadastrado!");
}




function adicionarLista(){

    var main_list = document.querySelector("ul");
    main_list.appendChild(criarLi(foco));

}


/*

    ao final a lista deve ter essa estrutura

<li class="list-group-item list-group-item-action">
    <div class="d-flex flex-column">
        <main>
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                    <strong>Floresta da tijuca</strong>
                    <small>33 notificações</small>
                </div>
                <div class="d-flex flex-column">
                    <span class="badge badge-warning">23</span>
                    <span><small>Hoje</small></span>

                </div>
            </div>
        </main>

    </div>
</li>

*/



function criarLi(objFoco){
    var li = document.createElement('li');
    li.classList.toggle("list-group-item");
    li.classList.toggle("list-group-item-action");
    li.appendChild(criarDivPrincipal(objFoco))
    return li;
}

function criarDivPrincipal(objFoco){
    var div = document.createElement('div'); //d-flex flex-column
    div.classList.toggle("d-flex");
    div.classList.toggle("flex-column");
    div.appendChild(criarMain(objFoco));
    return div;
}



function criarMain(objFoco){
    var main = document.createElement('main');
    main.criarSubDivDoMain(objFoco);
    return main;
}

function criarSubDivDoMain(objFoco){
    var subDiv = document.createElement('div'); // justify-content-between
    subDiv.classList.toggle("d-flex");
    subDiv.classList.toggle("justify-content-between");
    subDiv.appendChild(criarSubDivComONomeDoLocal(objFoco.cep,objFoco.descricao));
    subDiv.appendChild(criarItemcomBadge(contagem(objFoco.uf)));
    return subDiv;

}

function criarSubDivComONomeDoLocal(local,info){
    var div = document.createElement('div');
    div.classList.toggle("d-flex");
    div.classList.toggle("flex-column");

    var strong = document.createElement('strong');
    strong.appendChild(document.createTextNode(local));
    var small = document.createElement('small');
    small.appendChild(document.createTextNode(info));

    subItem1.appendChild(strong);
    subItem1.appendChild(small);

    return subItem1;

}

function criarItemcomBadge(q){
    var div = document.createElement('div');
    div.classList.toggle("d-flex");
    div.classList.toggle("flex-column");
    b = document.createElement('span');
    b.classList.toggle("badge");
    b.classList.toggle("badge-warning")
    b.appendChild(document.createTextNode(q));
    div.appendChild(b);
    return div;

}

function contagem(UF){
    var tmp = localStorage.getItem("pessoas");
    var pessoa = JSON.parse(tmp);
    var total = 0;
    for(i = 0; i<pessoa.length; i++){       
        if(UF===pessoa[i].cep.toLowerCase()){
         total++;
        }
    }
    return total;
}