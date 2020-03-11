
function reloadPage(query){
    var code = ""
    var deleteButtonCode = ""
    $("#delete-buttons").html("")
    $("#results").html("")
    var color = "back-green-light"
    for (i = 0; i < source.length; i++){
        if (source[i].toLowerCase().includes(query.toLowerCase())){
                code += "<div class = 'row' id = " + i + ">"
                code += "<div class = 'col-md-10 mushroom-row " + color + " text-center'>"
                code += source[i]
                if (color == "back-green-light"){
                    color = "back-purple"
                } else{
                    color = "back-green-light"
                }
                code += "</div>"
                code += "<div class = 'col-md-2 test'>"
                code += "<div class = 'btn btn-primary delete-button red-back'" + ">" + "X</div> <br>"
                code += "</div>"
                code += "</div>"
        }
    $("#delete-buttons").html(deleteButtonCode)
    $("#results").html(code)
    $(".delete-button").click(function(){
        $.ajax({
            type: "POST",
            url: "delete_mushroom",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(mushrooms[$(this).parent().parent().attr('id')]),
            success: function(result){
                mushrooms = result["mushrooms"]
                source = result["source"]
                reloadPage(query)
            },
            error: function(request, status, error){
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        });
    })
    $("#query").autocomplete({
        source: source,
    });
    activate()
}
if (code == ""){
    code = "No results found."
    $("#results").html(code)
}

}
$(document).ready(function reset(){
    $(".mushroom-row").hover(function() {
        $(this).css('cursor','pointer');
    }, function() {
        $(this).css('cursor','auto');
    });
    $("#query").autocomplete({
        source: source,
    });
    $("#submit").click(function(){
        var query = $("#query").val()
        reloadPage(query, source)
        activate()
        $("#query").val("")
    })

})


function activate(){
$(".mushroom-row").click(function(){
    var url = "view/" + $(this).parent().attr('id')
    //console.log(url)
    location.replace(url);
})
$(".mushroom-row").hover(function() {
    $(this).css('cursor','pointer');
}, function() {
    $(this).css('cursor','auto');
});
}
