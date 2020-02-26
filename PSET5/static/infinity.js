

let salesperson = "Evan Tilley"

var display_sales_list = function(sales){
    //empty old data
    $("#entries").empty()
    console.log(sales)
    code = ""
    $.each(sales, function(i, datum){
        code += '<div class = "row">'
        code += '<div class = "col-md-3">'
        code += '<span>' + sales[i]["salesperson"] + '</span>' + '</div>'
        code += '<div class = "col-md-6 max-width">'
        code += '<span>' + sales[i]["client"] + '</span>' + '</div>'
        code += '<div class = "col-md-2">'
        code += '<span>' + sales[i]["reams"] + '</span>' + '</div>'
        code += '<div class = "col-md-1">'
        code += '<button type="button" class="remove btn btn-primary" id ="' + i + '">X</button>'
        code += '</div>'
        code += "</div>"
    })
    $("#entries").html(code)
}


var save_sale = function(new_sale){
    var test0 = false
    var test1 = false
    $("#client-warning").html('')
    $("#reams-warning").html('')
    var client = $("#client").val()
    var reams = $("#reams").val()

    if($.trim( $('#reams').val() ) == ''){
        test1 = true
        $("#reams").focus()
        $("#reams-warning").html('<span class = "red bold">Reams Field is Empty</div>')
    }
    if (reams == ''){
            $("#reams").focus()
            $("#reams-warning").html('<span class = "red bold">Reams Field is Empty</div>')
        }

    if($.trim( $('#client').val() ) == ''){
            $("#client").focus()
            $("#client-warning").html('<span class = "red bold">Client Field is Empty</div>')
            test0 = true;
        }
    if (client == ''){
            $("#client-warning").html('<span class = "red bold">Client Field is Empty</div>')
            $("#client").focus()
        }
    if (isNaN(reams) == true && reams != ""){
        $("#reams-warning").html('<span class = "red bold">Reams Field Must be a number</div>')
        $("#reams-warning").focus() //make sure order of focusing is correct
    } 

    else if (reams != "" && client != "" && isNaN(reams) == false && test0 == false && test1 == false){
        console.log(isNaN(reams))
    //if client isn't already in client auto-complete list, add it
    if (clients_global.includes(client) == false){
        clients.push(client);
    }
    test0 = false
    test1 = false

    var data_to_save = {"salesperson": salesperson,
                "client": client,
                "reams": reams}
    $.ajax({
        type: "POST",
        url: "save_sale",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            var all_data = result["data"]
            data = all_data
            //update UI - also adds client to autocomplete
            display_sales_list(data)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
    $("#client").val('').focus()
    $("#reams").val('')
}

}

var delete_sale = function(id){
    $.ajax({
        type: "POST",
        url: "delete_sale",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify({"id":id}),
        success: function(result){
            var all_data = result["data"]
            data = all_data
            //update UI
            display_sales_list(data)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}


$(document).ready(function(){
    $("#client").val('').focus();
    $("#reams").val('')
    display_sales_list(data)
    clients = clients_global
    $.each(data, function(i, datum){
        if (clients.includes(datum["client"] == false)){
            clients.push(datum["client"])
        }
    })

    $("#client").autocomplete({
        source: clients,
    });

    $("#submit").click(function(){
        var client = $("#client").val()
        var reams = $("#reams").val()
        new_sale = {
            "salesperson": salesperson,
            "client": client,
            "reams": reams
        }
        save_sale(new_sale)
    })

    $("#reams").keypress(function(e){
        if(e.which == 13){
        var client = $("#client").val()
        var reams = $("#reams").val()
        new_sale = {
            "salesperson": salesperson,
            "client": client,
            "reams": reams
        }
        save_sale(new_sale)
    }
    })

})


$(document).on('click','.remove',function(){
    delete_sale(this.id)
 });

