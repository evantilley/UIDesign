//note on design: I thought this looked a little neater without a border so I didn't add one,
//since the rubric said we don't need to copy the given design

var display_lists = function(non_ppc, ppc){
    //takes in two arrays and displays them on UI
    $("#non-ppc").empty()
    $("#ppc").empty()
    nonPpcCount = 0
    code = ""
    $.each(non_ppc, function(i, datum){
        code += "<div class = 'text-wrap draggable-nonPpc' id =" + nonPpcCount + ">" + (i+1) + ": " + non_ppc[i] + "</div>";
        nonPpcCount++
    })
    $("#non-ppc").html(code)
    ppcCount = 0
    code = ""
    //code += "<div class = 'row'>"
    code += "<div class = margin-left>"
    $.each(ppc, function(i, datum){
        code += "<div class = 'draggable-ppc' id =" +  ppcCount + '>' + (i+1) + ": " + ppc[ppcCount] + "</div>";
        ppcCount ++;
    })
    $("#ppc").html(code)
    console.log("current ppc", ppc)
    console.log("current non-ppc 111", non_ppc)
    reset(ppc, non_ppc)


}

var move_to_ppc = function(name){
    //moves name to ppc, updating server and UI
    var data_to_save = {"name": name}
    $.ajax({
        type: "POST",
        url: "move_to_ppc",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            //returns both updated arrays
            var ppc = result["ppc"]
            var non_ppc = result["non_ppc"]
            //updates UI
            display_lists(non_ppc, ppc)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

var move_to_non_ppc = function(name){
    var data_to_save = {"name": name}
    $.ajax({
        type: "POST",
        url: "move_to_non_ppc",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            //updated arrays returned
            var ppc = result["ppc"]
            var non_ppc = result["non_ppc"]
            //UI updates accordingly
            display_lists(non_ppc, ppc)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });

}

function reset(ppc, non_ppc){

    
    $('#ppc-label').droppable({

        accept: ".draggable-nonPpc",
        classes: {
            'ui-droppable-hover': 'even-darker-blue'
          },
        drop: function( event, ui ) {
            $("#ppc-label").removeClass("darker-blue")
            // clone item to retain in original "list"
            if (ui.draggable.hasClass("draggable-ppc") == false){
                console.log("id of element being moved is", ui.draggable.attr('id'))
                console.log("current non-ppc", non_ppc)
                move_to_ppc(non_ppc[ui.draggable.attr('id')])
            //ppc.push(non_ppc[ui.draggable.attr('id')])
            //nonPpc.splice(ui.draggable.attr('id'),1);
            }    
            //updateUI()
        }
    });


    
    $(".draggable-ppc").draggable({
        //thanks to this comment on stackoverflow for this info: https://stackoverflow.com/a/5848800
        revert: function(event,ui){
            $(this).originalPosition = {
                top : 0,
                left : 0,
            };
            // return boolean
            return !event;
        },
        end: function(){

        },
        
        stack: ".draggable-ppc",
        start: function(){
            $(this).addClass("yellow")
            $("#non-ppc-label").addClass("darker-blue")
        },
        cursor: 'move',
        containment: "document"
        }
    );
    $(".draggable-ppc").hover(function(){
        if ($(this).hasClass('yellow')){
            $(this).removeClass("yellow")
        } else{
            $(this).addClass("yellow")
        }
    })


    $( ".draggable-nonPpc" ).mouseup(function() {
        $('.container').addClass("default")
        $("#ppc-label").removeClass("darker-blue")
      });

      $( ".draggable-ppc" ).mouseup(function() {
          $('.container').addClass("default")
        $("#non-ppc-label").removeClass("darker-blue")
      });



    $(".draggable-nonPpc").draggable({
        //thanks to this comment on stackoverflow for this info: https://stackoverflow.com/a/5848800
        revert: function(event,ui){
            $(this).originalPosition = {
                top : 0,
                left : 0,
            };
            // return boolean
            return !event;
        },

        stop: function(){
            $("#ppc-label").removeClass("darker-blue")
        },


        stack: ".draggable-nonPpc",
        start: function(){
            $(this).addClass("yellow")
            $("#ppc-label").addClass("darker-blue")
        },
        cursor: 'move',
        containment: "document"
        }
    );
    $(".draggable-nonPpc").hover(function(){
        if ($(this).hasClass('yellow')){
            $(this).removeClass("yellow")
        } else{
            $(this).addClass("yellow")
        }
    })




    
    $('#non-ppc-label').droppable({
        accept: ".draggable-ppc",
        classes: {
            'ui-droppable-hover': 'even-darker-blue'
          },

        drop: function( event, ui ) {
            $("#non-ppc-label").removeClass("darker-blue")
           
            // clone item to retain in original "list"
            if (ui.draggable.hasClass("draggable-nonPpc") == false){
                move_to_non_ppc(ppc[ui.draggable.attr('id')])
                //note: rubric didn't specify if we should add names to front or back
                //of non-ppc, but it did specify to add names to the back of the ppc
                //so I followed the same logic here and used .push() rather than .unshift()
                //nonPpc.push(ppc[ui.draggable.attr('id')])
                //ppc.splice(ui.draggable.attr('id'),1);  
            }
  
            //updateUI()
        }
    });

}

$(document).ready(function(){
    display_lists(non_ppc, ppc)
    //nonPpc = employees;
    //reset()
    //updateUI()
})
