var clients = [
    "Shake Shack",
    "Toast",
    "Computer Science Department",
    "Teacher's College",
    "Starbucks",
    "Subsconsious",
    "Flat Top",
    "Joe's Coffee",
    "Max Caffe",
    "Nussbaum & Wu",
    "Taco Bell",
];

var sales = [
	{
		"salesperson": "James D. Halpert",
		"client": "Shake Shack",
		"reams": 100
	},
	{
		"salesperson": "Stanley Hudson",
		"client": "Toast",
		"reams": 400
	},
	{
		"salesperson": "Michael G. Scott",
		"client": "Computer Science Department",
		"reams": 1000
	},
]

function addEntry(salesperson, client, reams){

}

let salesperson = "Evan Tilley"

function updateUI(){
    var count = 0;
    code = ""
    for (var i = 0; i < sales.length; i++){
        code += '<div class = "row">'
        code += '<div class = "col-md-3">'
        code += '<span>' + sales[i]["salesperson"] + '</span>' + '</div>'
        code += '<div class = "col-md-6 max-width">'
        code += '<span>' + sales[i]["client"] + '</span>' + '</div>'
        code += '<div class = "col-md-2">'
        code += '<span>' + sales[i]["reams"] + '</span>' + '</div>'
        code += '<div class = "col-md-1">'
        code += '<button type="button" class="remove btn btn-primary" id ="' + count + '">X</button>'
        count += 1
        code += '</div>'
        code += "</div>"
    }
    $("#entries").html(code)
}

function newEntry(){
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
    if (clients.includes(client) == false){
        clients.push(client);
    }
    test0 = false
    test1 = false

    var dict = {"salesperson": salesperson,
                "client": client,
                "reams": reams}
    sales.unshift(dict)
    updateUI();
    $("#client").val('').focus()
    $("#reams").val('')
}
}

$(document).ready(function(){
    $("#client").val('').focus();
    $("#reams").val('')
    updateUI();
    $("#client").autocomplete({
        source: clients
    });

    $("#submit").click(function(){
        newEntry()
    })

    $("#reams").keypress(function(e){
        if (e.which == 13){
            newEntry()
        }
    })

})


$(document).on('click','.remove',function(){
    sales.splice(this.id, 1)
    updateUI()
 });

