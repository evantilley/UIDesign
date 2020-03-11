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
    var imageCode = "<img src = '" + mushroom["Image"] + "'>"
    $(".image").html(imageCode)
    var edibleCode = "<span class = 'bold'> Edible: " + "</span>"
    edibleCode += "<span>" + mushroom["Edible"] + "</span>"
    $(".edible").html(edibleCode)
    var capSizeCode = "<span class = 'bold'> Approx. Capsize: " + "</span>"
    capSizeCode+= "<span>" + mushroom["ApproximateCapSize"] + " in. " + "</span>"
    $(".capsize").html(capSizeCode)
    var commonNamesCode = "<span class = 'bold'> Common Names: " + "</span> <br>"
    for (i = 0; i < mushroom["CommonNames"].length; i++){
        commonNamesCode += "<span>" + mushroom["CommonNames"][i] + "</span> <br>"
    }
    $(".common-names").html(commonNamesCode)
    var infoCode = "<span class = 'bold'> Info: " + "</span>"
    infoCode += "<span>" + mushroom["Info"] + "</span>"
    $(".info").html(infoCode)
    var commentCode = "<span class = 'bold'> Comments: " +"</span> <br>"
    for (i = 0; i < mushroom["Comments"].length; i++){
        commentCode += "<span class = 'bold'>" + (i+1) + ". " + "</span>"
        commentCode += "<span>" + mushroom["Comments"][i] + "</span> <br>"
    }
    $(".comments").html(commentCode)

    $(".add-comment").click(function(){
        var url = "/edit/" + mushroom["Id"]
        window.location.href = url
    })
})