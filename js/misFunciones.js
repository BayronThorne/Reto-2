function clientetraerInformacion(){
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"json",
        success:function(respuesta){
            console.log(respuesta);
            clientepintarRespuesta(respuesta.items);
        }
    });
}

function showtab(navCase){
    if(navCase == 1){
        document.getElementById("disfrazContainer").style.display = "block"
        document.getElementById("clienteContainer").style.display = "none"
        document.getElementById("mensajeContainer").style.display = "none"
    }
    else if(navCase == 2){
        document.getElementById("disfrazContainer").style.display = "none"
        document.getElementById("clienteContainer").style.display = "block"
        document.getElementById("mensajeContainer").style.display = "none"
    }
    else if(navCase == 3){
        document.getElementById("disfrazContainer").style.display = "none"
        document.getElementById("clienteContainer").style.display = "none"
        document.getElementById("mensajeContainer").style.display = "block"
    }
}
function clientepintarRespuesta(items){
    let myTable="<table id='mitabla'>";
    for(i=0;i<items.length;i++){
        myTable+=`<tr>
        <td>${items[i].id}</td>
        <td>${items[i].name}</td>
        <td>${items[i].email}</td>
        <td>${items[i].age}</td>
        <td> <button onclick='clienteborrarElemento(${items[i].id})'>Borrar</button>
        <a href="http://127.0.0.1:8887/detalles.html?id=${items[i].id}">Detalles</a>
        </tr>`
    }
    myTable+="</table>";
    $("#mitabla").detach();
    $("#resultado").append(myTable);
}

function clienteguardarInformacion(){
    let myData={
        id:Number($("#idclient").val()),
        name:$("#nameclient").val(),
        email:$("#email").val(),
        age:Number($("#age").val()),

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"json",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            clientetraerInformacion();
            alert("se ha guardado el dato")
        }
    });

}

function clienteeditarInformacion(){
    let myData={
        id:Number($("#idclient").val()),
        name:$("#nameclient").val(),
        email:$("#email").val(),
        age:Number($("#age").val()),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"json",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            clientetraerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function clienteborrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"json",
        success:function(respuesta){
            $("#resultado").empty();
            clientetraerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}




























function mensajetraerInformacion(){
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"json",
        success:function(respuesta2){
            console.log(respuesta2);
            mensajepintarrespuesta(respuesta2.items);
        }
    });
}

function mensajepintarrespuesta(items){

    let myTable="<table id='mitabla'>";
    for(i=0;i<items.length;i++){
        myTable+=`<tr>
        <td>${items[i].id}</td>
        <td>${items[i].messagetext}</td>
        <td> <a href="http://127.0.0.1:8887/detalles2.html?id=${items[i].id}">Detalles</a> </td>
        <td> <button class="eliminar" onclick='mensajeborrarElemento(${items[i].id})'>Borrar</button> </td>
        </tr>`
    }
    myTable+="</table>";
    $("#mitabla").detach();
    $("#resultado2").append(myTable);
}

function mensajeguardarInformacion(){
    let myData={
        id:Number($("#idmessage").val()),
        messagetext:$("#messagetext").val(),

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"json",
        success:function(respuesta2){
            $("#resultado2").empty();
            $("#id").val("");
            $("#messagetext").val("");
            mensajetraerInformacion();
            alert("se ha guardado el dato")
        }
    });

}

function mensajeeditarInformacion(){
    let myData={
        id:Number($("#idmessage").val()),
        messagetext:$("#messagetext").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"json",
        success:function(respuesta2){
            $("#resultado2").empty();
            $("#id").val("");
            $("#messagetext").val("");
            mensajetraerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function mensajeborrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"json",
        success:function(respuesta2){
            $("#resultado2").empty();
            mensajetraerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}




























function disfraztraerInformacion(){
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"GET",
        datatype:"json",
        success:function(respuesta3){
            console.log(respuesta3);
            disfrazpintarrespuesta(respuesta3.items);
        }
    });
}

function disfrazpintarrespuesta(items){

    let myTable="<table id='mitabla'>";
    for(i=0;i<items.length;i++){
        myTable+=`<tr>
        <td>${items[i].id}</td>
        <td>${items[i].brand}</td>
        <td>${items[i].model}</td>
        <td>${items[i].category_id}</td>
        <td>${items[i].name}</td>
        <td> <button onclick='disfrazborrarElemento(${items[i].id})'>Borrar</button>
        <a href="http://127.0.0.1:8887/detalles3.html?id=${items[i].id}">Detalles</a>
        </tr>`
    }
    myTable+="</table>";
    $("#mitabla").detach();
    $("#resultado3").append(myTable);
}

function disfrazguardarInformacion(){
    let myData={
        id:Number($("#iddisfraz").val()),
        brand:$("#brand").val(),
        model:Number($("#model").val()),
        category_id:Number($("#category_id").val()),
        name:$("#namedisfraz").val()

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"POST",
        data:myData,
        datatype:"json",
        success:function(respuesta3){
            $("#resultado3").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            disfraztraerInformacion();
            alert("se ha guardado el dato")
        }
    });

}

function disfrazeditarInformacion(){
    let myData={
        id:Number($("#iddisfraz").val()),
        brand:$("#brand").val(),
        model:Number($("#model").val()),
        category_id:Number($("#category_id").val()),
        name:$("#namedisfraz").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"json",
        success:function(respuesta3){
            $("#resultado3").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            disfraztraerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function disfrazborrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g98419ecafb8e98-db202110061042.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"json",
        success:function(respuesta3){
            $("#resultado3").empty();
            disfraztraerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}