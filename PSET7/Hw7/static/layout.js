$(document).ready(function(){
    $("#query").autocomplete({
        source: source,
    });


       
    function search(){
        search_term = $("#query").val()
        search_to_send = {"search": search_term}
        console.log("which is" + JSON.stringify(search_to_send))
        console.log("I am sending" + search_to_send)
        $.ajax({
            type: "POST",
            url: "/add_search",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(search_to_send),
            cache: false,
            success: function(result){
                //mushroom = result["mushroom"]
               // updateComments()
                var url = "/search/" + search_term
                window.location.href = url
                console.log("sucessss")
            },
            error: function(request, status, error){
                console.log("there was a susling error")
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        });
    }
    $("#search").click(function(){
       search()
    })
    $('#query').keypress(function (e) {
        if(e.which == 13)  // the enter key code
         {
            search()
         }
       });
})

