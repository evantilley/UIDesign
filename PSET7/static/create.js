//need to make sure source gets updated
function addMushroom(newMushroom){
    //console.log(JSON.stringify(mushroomData))
    $.ajax({
        type: "POST",
        url: "add_mushroom",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(newMushroom),
        success: function(result){
            successCode = "<span class = 'green semi-large'>New Mushroom Added Sucessfully! View it </span>"
            url = "/view/" + newMushroom["Id"]
            successCode += "<a href = '" + url + "'>" + "<span class = 'green bold semi-large'> Here" + "</a> <br> <br>"
            $(".new-link").addClass("pointer")
            $(".success").html(successCode)
            $("#species").focus()
            $("#query").autocomplete({
                source: result["source"],
            });
            console.log(result["mushrooms"])
            mushrooms.push(result["mushrooms"][(result["mushrooms"].length) - 1])
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
        goodSubmission = true
        $(".warning").html("")
        $(".comment-warning").html("")
        $(".info-warning").html("")
        $(".common-warning").html("")
        $(".size-warning").html("")
        $(".edible-warning").html("")
        $(".image-warning").html("")
        $(".species-warning").html("")


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
            "Comments": [[comment, {"mark_as_deleted": "false"},{"undo": "false"}]]
        }
        //here - check if newMushroom species already in database, if so return error, else it's fine
        for (i = 0; i < mushrooms.length; i++){
            if (mushrooms[i]["Species"] == newMushroom["Species"]){
                var warningCode = "This mushroom already exists in the database."
                goodSubmission = false
                $(".species-warning").html(warningCode)
                $("#species").focus()
            }
        }
        //this is in backwards order so the cursor goes to the FIRST empty input
        if ($.trim(comment) == ''){
            goodSubmission = false
            $(".comment-warning").html("Must add comment.")
            $("#comment").focus()

        }
        if ($.trim(info) == ''){
            goodSubmission = false
            $(".info-warning").html("Must add mushroom info.")
            $("#info").focus()
        }
        if ($.trim(commonNames) == ''){
            goodSubmission = false
            $(".common-warning").html("Must add at least one common name.")
            $("#common-names").focus()
        }
        if ($.trim(capSize) == ''){
            goodSubmission = false
            $(".size-warning").html("Must add cap Size.")
            $("#cap-size").focus()
        } //need check for number too
        if (isNaN((capSize)) == true){
            goodSubmission = false
            $("#cap-size").focus()
            var warningCode = "Cap Size must be a number."
            $(".size-warning").html(warningCode)
        } 

        //maybe have to check to see if this is yes or no
        if ($.trim(edible) == ''){
            goodSubmission = false
            $(".edible-warning").html("Must add edibility.")
            $("#edible").focus()
        }
        if ($.trim(image) == ''){
            goodSubmission = false
            $(".image-warning").html("Must add image URL.")
            $("#image").focus()
        }
        if ($.trim(species) == ''){
            goodSubmission = false
            $(".species-warning").html("Must add species name.")
            $("#species").focus()
        }


        if (goodSubmission == true){
            console.log("askjdfhhaskdjfdsa")
            $(".warning").html("")
            $("#species").val("");
            $("#image").val("");
            $("#edible").val("");
            $("#common-names").val("");
            $("#cap-size").val("");
            $("#comment").val("");
            $("#info").val("");
            $(".warning").html("")
            addMushroom(newMushroom)
        } else{
            $(".success").html("")
        }
    })
})