$(document).ready(function(){
    mushrooms.reverse()
    code = ""
    count = 0
    id = mushrooms.length - 1

    for (i = 0; i < 12; i++){
        if (count %3 == 0){
            code += "<div class = 'row'>"
        }
        count += 1
        code += "<div class = 'col-md-4' id =" + id + ">" 
        code += "<div class = 'card h-60'>"
        code += "<div class = 'card-body'>"
        code += "<div class = 'card-title bold mildly-large'>" + mushrooms[i]["Species"] + "</div>"
        code += "</div>"
        code += "<img class = 'card-img-top mushroom-image resize-image' src = '" + mushrooms[i]["Image"] + "' alt = '" + mushrooms[i]["Species"] + "'>"
        code += "</div><br> <br>"
        code += "</div class = 'col-md-4'>"
        if (count %3 == 0){
            code += "</div></div>"
        }
        id--
    }
    $(".latest-entries").html(code)
    $(".mushroom-image").click(function(){
        console.log($(this).attr("id"))
        url = "/view/" + $(this).parent().parent().attr("id")
        window.location.href = url
    })
    $(".mushroom-image").hover(function() {
        $(this).addClass("pointer")
    }, function() {
        $(this).removeClass("pointer");
    });
})