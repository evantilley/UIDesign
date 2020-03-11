
function addMushroom(newMushroom){
    //console.log(JSON.stringify(mushroomData))
    $.ajax({
        type: "POST",
        url: "add_mushroom",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(newMushroom),
        success: function(result){
            url = "/view/" + newMushroom["Id"]
            var code = "<a href = '" + url + "' class = 'btn btn-secondary'>" + "View your new shroom" + "</a> <br> <br>"
            console.log("url is" + code)
            $(".new-shroom").html(code)
            //location.replace(url);
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
            var warningCode = "There was an error submmitting this mushroom."
            $(".warning").html(warningCode)
        }
    });
}
var count = 1;
$(document).ready(function(){

    $("#add-button").click(function(){
        count += 1
        var code = ""
        $(".new-buttons").html(code)
        for (i = 0; i < count-1; i++){
            code += "<input type = 'text' id = '" + (i+1) + "' placeholder = 'Common Name:' </input> <br>"
    }})
    $("#submit").click(function(){
        var id = mushrooms.length;
        var species = $("#species").val();
        var image = $("#image").val();
        var edible = $("#edible").val();
        var commonNames = []
        var commonNameList = $("#common-names").val().split(',')
        commonNames = commonNameList
        // for (i = 1; i < count; i++){
        //     var string = "#"+i
        //     commonNames.push($(string).val())
        //     print()
        // }
        var capSize = $("#cap-size").val();
        var comment = $("#comment").val();
        var info = $("#info").val();
        newMushroom = {
            "Id": id,
            "Species": species,
            "Image": image,
            "Info": info,
            "Edible": edible,
            "CommonNames": commonNames,
            "ApproximateCapSize": capSize,
            "Comments": [comment]
        }
        //here - check if newMushroom species already in database, if so return error, else it's fine
        for (i = 0; i < mushrooms.length; i++){
            if (mushrooms[i]["Species"] == newMushroom["Species"]){
                var warningCode = "This mushroom already exists in the database."
                $(".warning").html(warningCode)
                return
            }
        }
        if(($.trim(id) == '')||$.trim(species) == '' || $.trim(image) == ''|| $.trim(info) == '' || $.trim(edible) == '' || $.trim(commonNames) == '' || $.trim(capSize) == '' || $.trim(comment) == ''){
            $(".warning").html("No fields may be empty.")
        }
        else if (isNaN(newMushroom["Species"]) == false){
            var warningCode = "Cap Size must be a number."
            $(".warning").html(warningCode)
            console.log("askdjfhasdfda")
        } 

        else{
            $(".warning").html(warningCode)
            $("#species").val("");
            $("#image").val("");
            $("#edible").val("");
            $("#common-names").val("");
            $("#cap-size").val("");
            $("#comment").val("");
            $("#info").val("");
            $(".warning").html("")
            addMushroom(newMushroom)
        }
    })
})