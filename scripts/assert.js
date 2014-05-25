function assert(value, desc) {
    var resultsList = document.getElementById("results");
    if (!resultsList) {
        resultsList = document.createElement('ul');
        document.getElementsByTagName('body')[0].appendChild(resultsList);
        resultsList.setAttribute('id', 'results');
    }

    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    resultsList.appendChild(li);
}


/* Função de iteração - Espera um collection(array de objects) */
function forEach(list, callback) {
    for (var n = 0; n < list.length; n++) {
        callback.call(list[n], n);
    }
}


function isFunction(fn){
    return Object.prototype.toString.call(fn) === '[object Function]';
}

/*
             * 
             * @param {type Object} object - Contexto(this) para o método
             * @param {type String} name - nome do método
             * @param {type Function} fn - funcionalidade do método
             * @returns {addMethod}
             */
            function addMethod(object, name, fn) {
                // Privada
                var old = object[name];

                // Escopo Global(window)
                object[name] = function() {
                    console.dir(fn)
                    if (fn.length == arguments.length) {
                        return  fn.apply(this, arguments);
                    }
                    else if (typeof old == 'function') {
                        return old.apply(this, arguments);
                    }
                };
            }
