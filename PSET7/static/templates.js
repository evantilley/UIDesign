$(document).ready(function(){
    $(".hover-text").hover(function() {
        $(this).css('cursor','pointer');
    }, function() {
        $(this).css('cursor','auto');
    });
    $(".back").hover(function() {
        $(this).css('cursor','pointer');
    }, function() {
        $(this).css('cursor','auto');
    });

    $(".species").html(mushroom["Species"])
    var imageCode = "<img class = 'scale' src = '" + mushroom["Image"] + "'"  + "alt = '" + mushroom["Species"]  + "'>"
    $(".image").html(imageCode)
    var edibleCode = "<span class = 'bold mildly-large'> Edible: " + "</span>"
    edibleCode += "<span>" + mushroom["Edible"] + "</span>"
    $(".edible").html(edibleCode)
    var capSizeCode = "<span class = 'bold mildly-large'> Approx. Capsize: " + "</span>"
    capSizeCode+= "<span>" + mushroom["ApproximateCapSize"] + " in. " + "</span>"
    $(".capsize").html(capSizeCode)
    var commonNamesCode = "<span class = 'bold mildly-large'> Common Names: " + "</span> <br>"
    for (i = 0; i < mushroom["CommonNames"].length; i++){
        commonNamesCode += "<span>" + mushroom["CommonNames"][i] + "</span> <br>"
    }
    $(".common-names").html(commonNamesCode)
    //var infoCode = "<span class = 'bold'> Info: " + "</span>"
    var infoCode = "<span id = 'info-text'>" + mushroom["Info"] + "</span>"
    $(".info").html(infoCode)
    //var commentCode = "<span class = 'bold'> Comments: " +"</span> <br>"
    var commentCode = updateCommentUI()
    mushrooms = restore()

    updateEdit()
    $(".comments").html(commentCode)
   // $(".remove-comment-button").html(removeCommentButton)



    $(".add-comment").click(function(){
        var code = "<input type='text' id = 'new-comment' placeholder = 'Comment:''>"
        code1 = "<button type='button' class='small btn btn-primary' id = 'new-comment'>Add</button>"
        code2 = "<button type='button' class='small btn red' id = 'delete-comment'>Delete</button>"
        $("#textbox").html(code)
        $("#new-comment-button").html(code1)
        $("#delete-comment-button").html(code2)
        $(".add-comment").html("")
    })

    $("#delete-comment-button").click(function(){
        $("#empty-comment-warning").html("")
        $("#textbox").html("")
        $("#new-comment-button").html("")
        $("#delete-comment-button").html("")
        $(".add-comment").html("Add Comment")
    })



    $(".submit-changes").click(function(){
        var test123 = document.getElementById("info-text");
        if (test123 == null){
            updatedText = ""
        } else{
            updatedText = $("#info-text")[0]["innerText"]

        }
        
        updated_info = {
            "Id": mushroom["Id"],
            "info": updatedText
        }
        $.ajax({
            type: "POST",
            url: "/update_info",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(updated_info),
            cache: false,
            success: function(result){
                mushroom = result["mushroom"]
                //var infoCode = "<span class = 'bold'> Info: " + "</span>"
                var infoCode = "<span id = 'info-text'>" + mushroom["Info"] + "</span>"
                $(".info").html(infoCode)
                $(".submit-changes").html("")
                $(".discard-changes").html("")
                editCode = "<button class = 'btn btn-primary' id = 'edit-info'>&#9999; Edit</button>"
                $(".edit-button").html(editCode)
                $('.info').attr('contenteditable','false');
                updateEdit()
                
            },
            error: function(request, status, error){
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        });
    })


    updateDiscard()
    $("#new-comment-button").click(function(){
        if ($.trim($("#new-comment").val()) == ''){
            $("#empty-comment-warning").html("Comment can't be empty.")
        } else {
            $("#empty-comment-warning").html("")
        new_comment = {
            "Id": mushroom["Id"],
            "comment": $("#new-comment").val()
        }
        $.ajax({
            type: "POST",
            url: "/add_comment",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(new_comment),
            cache: false,
            success: function(result){
                //reload comments UI
                mushroom = result["mushroom"]
                mushrooms = result["mushrooms"]
                console.log(mushrooms)
                commentCode = updateCommentUI()
                $(".comments").html(commentCode)
                $("#textbox").html("")
                $("#new-comment-button").html("")
                $("#delete-comment-button").html("")
                $(".add-comment").html("Add Comment")
                //mushrooms = restore()
                update()
            },
            error: function(request, status, error){
                console.log("there was a susling error")
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        }); }
    })
    update()
})
function update(){
     $(".remove-comment-button").click(function(){

         data = {
            "Id": mushroom["Id"],
            "comment-id": $(this)[0]["id"]
        }
         $.ajax({
            type: "POST",
            url: "/delete_comment",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(data),
            cache: false,
            success: function(result){
                //reload comments UI
                mushroom = result["mushroom"]
                // for i in range(len(mushroom_array)):
                // for j in range(len(mushroom_array[i]["Comments"])):
                //     mushrooms[i]["Comments"][j][2] = {"undo": "false"}
                commentCode = updateCommentUIv2()
                $(".comments").html(commentCode)
                $("#textbox").html("")
                $("#new-comment-button").html("")
                $("#delete-comment-button").html("")
                $(".add-comment").html("Add Comment")
                update()
                updateUndo()
            },
            error: function(request, status, error){
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        });
     })
    }

    function updateCommentUIv2(){
        count = 1
        var commentCode = ""
        for (i = 0; i < mushroom["Comments"].length; i++){
            console.log(mushroom["Comments"][i])
            if (mushroom["Comments"][i][1]["mark_as_deleted"] == "false"){
            commentCode += "<div class = 'row'>"
            commentCode += "<div class = 'col-md-10'>"
            commentCode += "<span class = 'bold'>" + (count) + ". " + "</span>"
            commentCode += "<span>" + mushroom["Comments"][i][0] + "</span> <br>"
            commentCode += "</div>"
            commentCode += "<div class = 'col-md-2'>"
            commentCode += "<button class = 'btn red remove-comment-button' id = '" + i + "'>X</button>"
            commentCode += "</div>"
            commentCode += "</div> <br>"
            count += 1
            }
            else if (mushroom["Comments"][i][1]["mark_as_deleted"] == "true" && mushroom["Comments"][i][2]["undo"] == "true")
            {
                commentCode += "<div class = 'row'>"
                commentCode += "<div class = 'col-md-10'>"
                commentCode += "<span class = 'bold'>" + (count) + ". " + "</span>"
                commentCode += "<span> This comment has been deleted. </span> <br>"
                commentCode += "</div>"
                commentCode += "<div class = 'col-md-2'>"
                commentCode += "<button class = 'btn red undo-button' id = '" + i + "'>Undo</button>"
                commentCode += "</div>"
                commentCode += "</div> <br>"
                count += 1
            }
        }
        updateUndo()
        return commentCode
    }

    function restore(){
        sending = {"mushrooms": mushrooms}
        $.ajax({
            type: "POST",
            url: "/restore",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(sending),
            cache: false,
            success: function(result){
                //reload comments UI
                mushrooms = result
                return mushrooms
            },
            error: function(request, status, error){
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        });
    }

    function updateCommentUI(){
        count = 1
        var commentCode = ""
        for (i = 0; i < mushroom["Comments"].length; i++){
            //restore
            if (mushroom["Comments"][i][1]["mark_as_deleted"] == "false"){
            commentCode += "<div class = 'row'>"
            commentCode += "<div class = 'col-md-10'>"
            commentCode += "<span class = 'bold'>" + (count) + ". " + "</span>"
            commentCode += "<span>" + mushroom["Comments"][i][0] + "</span> <br>"
            commentCode += "</div>"
            commentCode += "<div class = 'col-md-2'>"
            commentCode += "<button class = 'btn red remove-comment-button' id = '" + i + "'>X</button>"
            commentCode += "</div>"
            commentCode += "</div> <br>"
            count += 1
            }
        }
        return commentCode
    }

     function updateUndo(){
        $(".undo-button").click(function(){
            data = {
                "Id": mushroom["Id"],
                "comment-id": $(this)[0]["id"]
            }
            $.ajax({
                type: "POST",
                url: "/undo_comment",                
                dataType : "json",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(data),
                cache: false,
                success: function(result){
                    //reload comments UI
                    mushroom = result["mushroom"]
                    commentCode = updateCommentUIv2()
                    $(".comments").html(commentCode)
                    update()
                    updateUndo()
                },
                error: function(request, status, error){
                    console.log("Error");
                    console.log(request)
                    console.log(status)
                    console.log(error)
                }
            });
    })}

    var savedInfo = ""

    function updateEdit(){
        $("#edit-info").click(function(){
            savedInfo = $("#info-text")[0]["innerText"]
           // console.log(savedInfo)
           //IMPORTANT
           if($("#info-text")[0]["innerText"] != ""){
            $('.info').attr('contenteditable','true');
            $(".info").focus()
        } else{
            $("#info-text").attr('contenteditable','true')
            $("#info-text").focus()
        }
            $(".edit-button").html("")
            var code = "<button class = 'btn btn-primary'>Submit</button> <br> <br>"
            $(".submit-changes").html(code)
            code = "<button class = 'btn btn-primary red'>Discard</button>"
            $(".discard-changes").html(code) 
        })
    }

    function updateDiscard(){
        $(".discard-changes").click(function(){
            var test = document.getElementById("info-text");
            if (test!= null){
            $("#info-text")[0]["innerText"] = savedInfo
            } else{
                var infoCode = "<span id = 'info-text'>" + savedInfo + "</span>"
                $(".info").html(infoCode)
            }
            $(".submit-changes").html("")
            $(".discard-changes").html("")
            editCode = "<button class = 'btn btn-primary' id = 'edit-info'>&#9999; Edit</button>"
            $(".edit-button").html(editCode)
            $('.info').attr('contenteditable','false');
            updateEdit()
        })
    }

