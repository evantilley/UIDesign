function updateComments(){
    code = ""
    $(".comments").html(code)
    for (i = 0; i < mushroom["Comments"].length; i++){
        code += "<div>" + (i+1) + ". " + mushroom["Comments"][i] + "</div>"
    }
    $(".comments").html(code)
    $("#add-comment").click(function(){
        new_comment = {
            "Id": mushroom["Id"],
            "comment": $("#new-comment").val()
        }})
    $("#new-comment").val("")
}

$(document).ready(function()
{
    updateComments()
    $("#discard-comment").click(function(){
        var url = "/view/" + mushroom["Id"]
        window.location.href = url
    })
    $("#add-comment").click(function(){
        new_comment = {
            "Id": mushroom["Id"],
            "comment": $("#new-comment").val()
        }
        if($.trim( $('#new-comment').val() ) == ''){
            $(".warning").html("Comment can't be empty!")
        } else{
        $.ajax({
            type: "POST",
            url: "/add_comment",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(new_comment),
            success: function(result){
                $("#new-comment").val("")
                //mushroom = result["mushroom"]
               // updateComments()
                var url = "/view/" + mushroom["Id"]
                window.location.href = url

            },
            error: function(request, status, error){
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        });
    }
    })
})