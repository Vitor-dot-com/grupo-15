if(localStorage.getItem("pessoas")!=null){
    var arrayPessoa = JSON.stringify(localStorage.getItem("pessoas"));
    var arrayFoco = JSON.stringify(localStorage.getItem("focos"));
}

else 
{
    window.location = "../views/main.html";
}




function adicionarLista(){

    var main_list = document.querySelector("ul");
    var li = document.createElement('li'); //list-group-item list-group-item-action
    li.classList.toggle("list-group-item");
    li.classList.toggle("list-group-item-action");
    //main_list.appendChild(li);

    var div = document.createElement('div'); //d-flex flex-column
    div.classList.toggle("d-flex");
    div.classList.toggle("flex-column");

    var subDiv = document.createElement('div'); // justify-content-between
    subDiv.classList.toggle("d-flex");
    subDiv.classList.toggle("justify-content-between");

    
    var subItem2 = document.createElement('div');
    subItem2.classList.toggle("d-flex");
    subItem2.classList.toggle("flex-column");

    var badge = document.createElement('span');
    badge.classList.toggle("badge");
    badge.classList.toggle("badge-warning");

    // li> div> main> div> {div1>strong  div2>badge} 
    subItem2.appendChild(badge);
    subItem1.appendChild(strong);


    var main = document.createElement('main');




    var firstContent = document.createTextNode(task.value);
    var closeArea = document.createElement('span');
    closeArea.appendChild(document.createTextNode('x'));
    closeArea.classList.toggle("close");
    li.appendChild(firstContent);
    li.appendChild(closeArea);
    ul.appendChild(li);


}


/*
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


function adicionarSubItemComONomeDoLocal(){
    var subItem1 = document.createElement('div');
    subItem1.classList.toggle("d-flex");
    subItem1.classList.toggle("flex-column");

    var strong = document.createElement('strong');
    var small = document.createElement('small');

}
