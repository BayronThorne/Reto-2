function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function llenarcampos(item){
    $("#nameclient").val(item[0].name);
    $("#email").val(item[0].email);
    $("#age").val(item[0].age);
}
function llenar(){
    let id = getParameterByName("id");
    let dataid = {
        id:id
    }
    $.ajax({
        url:`https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/${id}`,
        type:"GET",
        data:dataid,
        datatype:"json",
        success:function(respuesta){
            console.log(respuesta);
            llenarcampos(respuesta.items);
        }
    })
}
window.onload = function() {
    llenar();
    
}