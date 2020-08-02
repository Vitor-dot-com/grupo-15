var x = document.querySelector("body");
      x.addEventListener("click",function(e){
        var local = e.target.parentElement.attributes[0].textContent;

        console.log(e.target);
        console.log(local);
        local = local.replace('#','');
        sessionStorage.setItem("state",local);
        window.location = "./listagem.html";
      });