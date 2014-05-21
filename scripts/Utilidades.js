/* 
 *  Contém funções para auxilixar no desenvolvimento
 */

function Utilidades() {
    
    var results;

    this.log = function() {
        try {
            console.log.apply(console, arguments);
        } catch (e) {
            try {
                opera.postError.apply(opera.arguments);
            } catch (e) {
                alert(array.prototype.join.call(arguments, ""));
            }
        }
    };
    
    
    
    this.setResults = function(valor){
        results = valor;
    };
    
    this.assert = function(value,desc){
        
        var li = document.createElement("li");
        li.className = value ? 'pass' : 'fail';
        li.appendChild( document.createTextNode(desc));
        results.appendChild(li);
        
       if(!value){
           li.parentNode.parentNode.className = 'fail';
       }
       return li;
    };
}
