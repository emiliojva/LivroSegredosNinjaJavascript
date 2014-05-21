function iniciaAjax() {
    var objetoAjax = false;
    if (window.XMLHttpRequest) {
        objetoAjax = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            objetoAjax = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (ex) {
                objetoAjax = false;
            }
        }
    }
    
    console.dir(objetoAjax)
    return objetoAjax;
}

function requisitar(arquivo) {
    console.log('arquivo utilizado pelo AJAX : '+arquivo)
    var requisicaoAjax = iniciaAjax();

    // Localizou objeto XMLHTTP no browser
    if (requisicaoAjax) {
        // Atribuindo função anonima para a mudança de estado do ajax(requisição)
        requisicaoAjax.onreadystatechange = function() {
            console.log("Mudança de Estado "+requisicaoAjax.readyState+"\n");
            mostraResposta(requisicaoAjax);
        };
        
        requisicaoAjax.open("GET", arquivo, true);
        requisicaoAjax.send(null);
    }
}

function mostraResposta(requisicaoAjax) {
    // Operação Completa
    if (requisicaoAjax.readyState == 4) {
        // Operação Com Sucesso
        if (requisicaoAjax.status == 200 || requisicaoAjax.status == 304) {
            // Retorno Modo Texto
            alert(requisicaoAjax.responseText);
        } else {
            alert("Problema na comunica��o com o servidor");
        }
    }
    
    if (requisicaoAjax.readyState == 3) {
        var div = document.createElement('div');
                div.innerHTML = "Carregando";
                div.style.backgroundColor = 'black';
                div.style.color = 'blue';
                console.dir(div);
                document.body.appendChild(div);
        
    }
}
