$(document).ready(function(){
mushroom_results = []
count = 0
code = ""
id = mushrooms.length - 1
query = new RegExp(search_term, 'gi');
mushrooms.reverse() //more recent entries are displayed first
for (i = 0; i < mushrooms.length; i++){

    if (mushrooms[i]["Species"].toLowerCase().includes(search_term.toLowerCase())){
        mushroom_results.push(mushrooms[i]["Id"])
        if (count % 3 == 0){
            code += "<div class = 'row'>"
        }
        count += 1
        code += "<div class = 'col-md-4' id =" + id + ">" 
        code += "<div class = 'card h-60'>"
        code += "<div class = 'card-body'>"
        var importantPart = mushrooms[i]["Species"]
        importantPart = importantPart.replace(query, "<span class = 'highlight' >$&</span>")
        line = "<span class = 'card-title bold semi-large id = species'>" + importantPart + "</span>"
        //line = line.replace(query, "<span class = 'highlight' >$&</span>")
        code += line

        code += "<div class = 'semi-bold'>Common Names: </div>"
        for (j = 0; j < mushrooms[i]["CommonNames"].length; j++){
            var importantPart = mushrooms[i]["CommonNames"][j]
            importantPart = importantPart.replace(query, "<span class = 'highlight' >$&</span>")
            line = "<div class = 'card-text'> " +  importantPart + "</div>"
            //line = line.replace(query, "<span class = 'highlight' >$&</span>")
            code += line
        }

        code += "</div>"
        code += "<img class = 'card-img-top mushroom-image resize-image' src = '" + mushrooms[i]["Image"] + "' alt = 'test'>"
        code += "</div><br> <br>"
        code += "</div>"
        if (count % 3 == 0){
            code += "</div>"
        }
    }
    for (j = 0; j < mushrooms[i]["CommonNames"].length; j++)
    if (mushrooms[i]["CommonNames"][j].toLowerCase().includes(search_term.toLowerCase())){
        if (mushroom_results.includes(mushrooms[i]["Id"]) == false){
        if (count % 3 == 0){
            code += "<div class = 'row'>"
        }
        count += 1
        code += "<div class = 'col-md-4' id =" + id + ">" 
        code += "<div class = 'card h-60'>"
        code += "<div class = 'card-body'>"
        var importantPart = mushrooms[i]["Species"]
        importantPart = importantPart.replace(query, "<span class = 'highlight' >$&</span>")
        line = "<span class = 'card-title bold semi-large id = species'>" + importantPart + "</span>"
        code += line

        code += "<div class = 'semi-bold'>Common Names: </div>"
        for (j = 0; j < mushrooms[i]["CommonNames"].length; j++){
            var importantPart = mushrooms[i]["CommonNames"][j]
            importantPart = importantPart.replace(query, "<span class = 'highlight' >$&</span>")
            line = "<div class = 'card-text'> " +  importantPart + "</div>"
            //line = line.replace(query, "<span class = 'highlight' >$&</span>")
            code += line
        }
        code += "</div>"
        code += "<img class = 'card-img-top mushroom-image resize-image' src = '" + mushrooms[i]["Image"] + "' alt = 'test'>"
        code += "</div><br> <br>"
        code += "</div>"
        if (count % 3 == 0){
            code += "</div>"
        }
    }}
    
    id--
}

// if (count % 3 == 1){
//     console.log("aksjdfhsad")
//     code += "<div class = 'col-md-4'>"
//     code += "test"
//     code += "</div>"
//     code += "<div class = 'col-md-4'>"
//     code += "test"
//     code += "</div>"
// };



console.log(code)
$("#results").html(code)
results_code = "<span class = 'left-padding'> Displaying all " + "<span class = 'bold'>" + count + "</span>" + " results." + "</span> <br> <br>"
$("#number").html(results_code)

$(".mushroom-image").click(function(){
    url = "/view/" + $(this).parent().parent().attr("id")
    window.location.href = url
})
$(".mushroom-image").hover(function() {
    $(this).addClass("pointer")
}, function() {
    $(this).removeClass("pointer");
});
})