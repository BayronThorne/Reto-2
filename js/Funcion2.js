function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function llenarcampos(item){
    $("#messagetext").val(item[0].messagetext);
}
function llenar(){
    let id = getParameterByName("id");
    let dataid = {
        id:id
    }
    $.ajax({
        url:`https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/${id}`,
        type:"GET",
        data:dataid,
        datatype:"json",
        success:function(respuesta2){
            console.log(respuesta2);
            llenarcampos(respuesta2.items);
        }
    })
}
window.onload = function() {
    llenar();
    
}