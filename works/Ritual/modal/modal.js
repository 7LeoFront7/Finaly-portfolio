//document.addEventListener("DOMContentLoaded", function(){

    function ShowModal(item = ""){
        var body = document.querySelector("body");
        
        var background = document.createElement("div");
        var container = document.createElement("div");
        var content = document.createElement("div");
        var btn_container = document.createElement("div");
        var btn = document.createElement("div");

        
        background.classList.add("stt-background");
        container.classList.add("stt-container");
        content.classList.add("stt-content");
        btn_container.classList.add("stt-btn_container");
        btn.classList.add("stt-btn");
        var dupNode = item.cloneNode(true);
        content.append(dupNode);
        container.append(content);

        btn.innerText = "Закрыть";
        btn_container.append(btn);
        container.append(btn_container);

      
        //modal.style = "position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-color: #00000024; z-index: 999; display: flex; justify-content: center; align-items: center";
        //background.style = "width: 100%; height: 100%";
        //content.style = "width: 400px; height: 300px; position: absolute; background-color: #fff";


        if (document.querySelector(".stt-modal")){

            var modal = document.querySelector(".stt-modal");
            modal.innerHTML = "";
            modal.append(background, container);
            modal.style = "display:flex";
            btn.addEventListener("click", function(){
               modal.style = "display: none"; 
            });
            background.addEventListener("click", function(){
                modal.style = "display: none"; 
            });

        } else {
            var modal = document.createElement("div");
            modal.classList.add("stt-modal");
            modal.append(background, container);
            modal.style = "display:flex";
            btn.addEventListener("click", function(){
                modal.style = "display: none"; 
            });
            background.addEventListener("click", function(){
                modal.style = "display: none"; 
            });
            body.append(modal);
        }
        //
    }
//});