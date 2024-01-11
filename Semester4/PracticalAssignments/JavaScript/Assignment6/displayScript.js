var data = window.location.search;
var params =new URLSearchParams(data);
var dataBox = document.getElementById("container");

var formKey = []
for (const key of params.keys()) {
    if(formKey.indexOf(key) == -1){
        formKey.push(key)
    }
}
        
for (const key of formKey){
    document.getElementById(key).innerHTML = params.getAll(key)
}
