function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function llenarcampos(item){
    $('#brand').val(item[0].brand);
    $('#model').val(item[0].model);
    $('#category_id').val(item[0].category_id);
    $('#namedisfraz').val(item[0].name);
}
function llenar(){
    let id = getParameterByName("id");
    let dataid = {
        id:id
    }
    $.ajax({
        url:`https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume/${id}`,
        type:"GET",
        data:dataid,
        datatype:"json",
        success:function(respuesta3){
            console.log(respuesta3);
            llenarcampos(respuesta3.items);
        }
    })
}
window.onload = function() {
    llenar();
    
}