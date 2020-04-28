
current = 1

$(document).ready(function(){
    console.log("laishf")
    var code = ""
    var subtitleCode = ""
        if (current == 1){
            code = "<div class = 'col-md-12 text-center'>"
            code += "<span class = 'large bold'> Philosophy - Entrance </span>"
            code += "</div>"
            $("#title").html(code)
            code = ""
            code = "<div class = 'col-md-6'>"
            code += "<span class = 'bold'> Entering the Tunnels </span> <br> <br> "
            code += "<span> 1. Head over to the Philosophy Building, right behind Kent library </span> <br> <br>"
            code += "<span> 2. Enter and take the staircase in front of you all the way down to the bottom floor, where the door to the tunnels lies. </span>"
            code += "</div>"
            code += "<div class = 'col-md-6'>"
            code +=  "<img class = '' src = 'static/images/phil_building.jpg'>" 
            code += "</div>"
            code += "<div class = 'row'>"
            code += "<div class = 'col-md-12 text-center right'>"
            code += "<span>Current Location: </span> <br>"
            code += "<img class = 'scale-image'  src = 'static/images/maps1.png'>" 
            code += "</div>"
            code += "</div>"
            $("#template").html(code)
            code = ""
            code += "<div class = 'col-md-12 text-center'>"
            code += "<button id = 'progress' class='btn btn-primary'>Continue</button>"
            code += "</div>"
            $("#continue").html(code)
        }
        $("#progress").click(function(){
            second()
            document.getElementById("progress_bar").src = "static/images/bar1.png"
        })

        $("#progress2").click(function(){
            console.log("lashdf")
        })
})

function progress1(){
    $("#progress1").click(function(){
        third()

        document.getElementById("progress_bar").src = "static/images/bar2.png"
    })
}
function progress2(){
    $("#progress2").click(function(){
        fourth()
        document.getElementById("progress_bar").src = "static/images/bar3.png"
    })
}
function progress3(){
    $("#progress3").click(function(){
        fifth()
        document.getElementById("progress_bar").src = "static/images/bar4.png"
    })
}
function buellRefresh(){
    $("#buell").click(function(){
        buell()
    })
}
function skipRefresh(){
    $("#skip").click(function(){
        sixth()
    })
}
function progress4(){
    $("#progress4").click(function(){
        seventh()
        document.getElementById("progress_bar").src = "static/images/bar5.png"
    })
}
function progress5(){
    $("#progress5").click(function(){
        eighth()
        document.getElementById("progress_bar").src = "static/images/bar6.png"
    })
}
function progress6(){
    $("#progress6").click(function(){
        ninth()
        document.getElementById("progress_bar").src = "static/images/bar7.png"
    })
}
function progress7(){
    $("#progress7").click(function(){
        tenth()
        document.getElementById("progress_bar").src = "static/images/bar8.png"
    })
}
function finishRefresh(){
    $("#finish").click(function(){
        finish()
        document.getElementById("progress_bar").src = "static/images/bar9.png"
    })
}
function restartRefresh(){
    $("#restart").click(function(){
        window.location.href = "/map"
    })
}

function quizRefresh(){
    $("#start_quiz").click(function(){
        quiz1()
    })
}


function second(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'> Philosophy Tunnel Door </span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-6'>"
    code += "<span class = 'bold'> Entering the Tunnel Door </span> <br> <br> "
    code += "<span> 1. The door to the tunnels will be in front of you. It is sometimes unlocked.</span> <br> <br>"
    code += "<span> 2. Watch out for the administrative office on the way to the door, as administrators may get upset if they see you attempting to enter </span> <br> <br>"
    code += "<span> 3. If the door is unlocked, feel free to enter the Philosophy tunnels</span> <br> <br>"
    code += "</div>"
    code += "<div class = 'col-md-6 '>"
    code +=  "<img class = 'scale-image' src = 'static/images/innermap1.png'>" 
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-12 text-center right'>"
    code += "<span>Current Location: </span> <br>"
    code += "<img class = 'scale-image' src = 'static/images/maps2.png'>" 
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'progress1' class='btn btn-primary'>Continue</button>"
    code += "</div>"
    $("#continue").html(code)
    progress1()
}

function third(){
    $("#continue").html("")
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'bold large'>Mini Game: Avoid Administration </span> <br>"
    code += "<span>Note: just a placeholder for now </span>"
    code += "</div>"
    $("#title").html(code)
    code = "code"
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'progress2' class='btn btn-primary'>Beat Mini-Game</button>"
    code += "</div>"
    $("#template").html(code)
    progress2()
}

function fourth(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'> Philosophy Tunnel Entrance </span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-6'>"
    code += "<span class = 'bold'> The tunnels </span> <br> <br> "
    code += "<span> 1. At this intersection you've officially entered the tunnels. </span> <br> <br>"
    code += "<span> 2. Be careful because the ceilings are low and these tunnels are infrequently used by others. <br> <br>"
    code += "<span> 3. Take a right to head over to check out Buell. </span> <br> <br>"
    code += "</div>"
    code += "<div class = 'col-md-6 '>"
    code +=  "<img class = 'scale-image' src = 'static/images/innermap2.png'>" 
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<span>Current Location: </span> <br>"
    code += "<img class = 'scale-image' src = 'static/images/maps2.png'>" 
    code += "</div>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<img class = 'scale-image' src = 'static/images/tunnel1.jpg'>"
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'progress3' class='btn btn-primary'>Take A Right</button>"
    code += "</div>"
    $("#continue").html(code)
    progress3()
}

function fifth(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'> Philosophy Tunnel Depths </span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-6'>"
    code += "<span class = 'bold'>Buell Connection</span> <br> <br> "
    code += "<span> 1. Here, if you're bold enough, there's a door that's rarely unlocked. This door leads to a stairwell that leads to Buell.</span> <br> <br>"
    code += "<span> 2. Buell houses the oldest tunnels on campus, left over from the days when it was a mental asylum. </span> <br> <br>"
    code += "<span> 3. Thesetunnels are almost never traversed and are extremely dangerous. </span> <br> <br>"
    code += "</div>"
    code += "<div class = 'col-md-6 '>"
    code +=  "<img class = 'scale-image' src = 'static/images/innermap3.png'>" 
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-12 text-center right'>"
    code += "<span>Current Location: </span> <br>"
    code += "<img class = 'scale-image' src = 'static/images/maps3.png'>" 
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-6 text-center'>"
    code += "<button id = 'buell' class='btn btn-primary'>Check out Buell</button>"
    code += "</div>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<button id = 'skip' class = 'btn btn-primary'>I'm too scared </button>"
    $("#continue").html(code)
    buellRefresh()
    skipRefresh()
}

function buell(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'> Buell Entrance </span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-6'>"
    code += "<span class = 'bold'> Buell Stairway </span> <br> <br> "
    code += "<span> 1. This is the stairway leading to the Buell tunnels. </span> <br> <br>"
    code += "<span> 2. These tunnels are sweltering, cramped, and very dangerous. We do not recommend going here unless you are extremely prepared and have at least one other friend. <br> <br>"
    code += "<span> 3. We will leave the details of these tunnels as a secret, for those who want to explore the unknown. </span> <br> <br>"
    code += "</div>"
    code += "<div class = 'col-md-6 '>"
    code +=  "<img class = 'scale-image' src = 'static/images/innermap4.png'>" 
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<span>Current Location: </span> <br>"
    code += "<img class = 'scale-image' src = 'static/images/maps2.png'>" 
    code += "</div>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<img class = 'scale-image' src = 'static/images/tunnel2.jpg'>"
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'skip' class='btn btn-primary'>Continue to the Fayerweather connection</button>"
    code += "</div>"
    $("#continue").html(code)
    skipRefresh()
}

function sixth(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'> Philosophy Connection </span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-6'>"
    code += "<span class = 'bold'> Fayerweather Connection </span> <br> <br> "
    code += "<span> 1. Ahead lies the connection to Fayerweather. </span> <br> <br>"
    code += "<span> 2. This area of the tunnels is often flooded with water and there is a wooden board you can walk across to proceed to the other side. <br> <br>"
    code += "</div>"
    code += "<div class = 'col-md-6 '>"
    code +=  "<img class = 'scale-image' src = 'static/images/innermap5.png'>" 
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<span>Current Location: </span> <br>"
    code += "<img class = 'scale-image' src = 'static/images/maps4.png'>" 
    code += "</div>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<img class = 'scale-image' src = 'static/images/tunnel3.jpg'>"
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'progress4' class='btn btn-primary'>Continue to Fayerweather</button>"
    code += "</div>"
    $("#continue").html(code)
    progress4()
}

function seventh(){
    $("#continue").html("")
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'bold large'>Mini Game: Cross the Board </span> <br>"
    code += "<span>Note: just a placeholder for now </span>"
    code += "</div>"
    $("#title").html(code)
    code = "code"
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'progress5' class='btn btn-primary'>Beat Mini-Game</button>"
    code += "</div>"
    $("#template").html(code)
    progress5()
}

function eighth(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'> Building Connection </span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-6'>"
    code += "<span class = 'bold'> Fayerweather Connection Room </span> <br> <br> "
    code += "<span> 1. Congratulations on making it across the board! You can now continue to proceed to Fayerweather </span> <br> <br>"
    code += "<span> 2. To coninue your journey you must use the crawlspace that leads around the rubble here. <br> <br>"
    code += "</div>"
    code += "<div class = 'col-md-6 '>"
    code +=  "<img class = 'scale-image' src = 'static/images/innermap5.png'>" 
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<span>Current Location: </span> <br>"
    code += "<img class = 'scale-image' src = 'static/images/maps4.png'>" 
    code += "</div>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<img class = 'scale-image' src = 'static/images/tunnel4.jpg'>"
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'progress6' class='btn btn-primary'>Continue</button>"
    code += "</div>"
    $("#continue").html(code)
    progress6()
}

function ninth(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'> Building Connection </span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-6'>"
    code += "<span class = 'bold'> Crawlspace </span> <br> <br> "
    code += "<span> 1. To continue to Fayerweather, take the crawlspace to your left. It is a bit tight, but it is safe. </span> <br> <br>"
    code += "<span> 2. This will take you to the entrance of Fayerweather. <br> <br>"
    code += "</div>"
    code += "<div class = 'col-md-6 '>"
    code +=  "<img class = 'scale-image' src = 'static/images/innermap6.jpg'>" 
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<span>Current Location: </span> <br>"
    code += "<img class = 'scale-image' src = 'static/images/maps5.png'>" 
    code += "</div>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<img class = 'scale-image' src = 'static/images/tunnel5.jpg'>"
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'progress7' class='btn btn-primary'>Duck N' Crawl</button>"
    code += "</div>"
    $("#continue").html(code)
    progress7()
}
function tenth(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'> Philosophy Tunnels</span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-6'>"
    code += "<span class = 'bold'> Fayerweather </span> <br> <br> "
    code += "<span> 1. The crawlspace will take you to a door that opens up to Fayerweather..</span> <br> <br>"
    code += "<span> 2. Take the stairs up and you're now in Fayerweather </span> <br> <br>"
    code += "</div>"
    code += "<div class = 'col-md-6 '>"
    code +=  "<img class = 'scale-image' src = 'static/images/innermap7.png'>" 
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-12 text-center right'>"
    code += "<span>Current Location: </span> <br>"
    code += "<img class = 'scale-image' src = 'static/images/maps6.png'>" 
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'finish' class='btn btn-primary'>Finish The Tour</button>"
    code += "</div>"
    $("#continue").html(code)
    finishRefresh()
}

function finish(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'>Congratulations!</span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'bold'> You have successfully navigated your way through the tunnels from Philosphy to Fayerweather. <br> This is only one of the many tunnel systems underneath Columbia and we encourage you to (SAFELY) explore more! </span> <br> <br> "
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-12 text-center right'>"
    code += "<img class = 'scale-image1' src = 'static/images/logo_columbia.png'>" 
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-6 text-center'>"
    code += "<button id = 'start_quiz' class='btn btn-primary'>Take the quiz</button>"
    code += "</div>"
    code += "<div class = 'col-md-6 text-center'>"
    code += "<button id = 'restart' class='btn btn-primary'>Restart the Tour</button>"
    $("#continue").html(code)
    quizRefresh()
    restartRefresh()
}

function quiz1(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'>Tunneler Quiz</span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-12'>"
    code += "<span class = 'bold'> Question 1 </span> <br> <br> "
    code += "<span> Which of the following places has some of the oldest and scariest tunnels in all of Columbia?</span> <br> <br>"
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    //can have id = wrong, then provide appropriate feedback
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'bold'>A. </span> "
    code += "<button id = 'phil' class='btn btn-primary'>Philosophy </button> <br>"
    code += "<span class = 'bold'>B. </span> "
    code += "<button id = 'lowe' class='btn btn-primary'>Lowe Library </button> <br>"
    code += "<span class = 'bold'>C. </span> "
    code += "<button id = 'buell' class='btn btn-primary'>Buell </button> <br>"
    code += "<span class = 'bold'>D. </span> "
    code += "<button id = 'butler' class='btn btn-primary'>Butler </button> <br>"
    code += "</div>"
    $("#continue").html(code)
    $("#phil").click(function(){
        quiz2()
    })
}

function quiz2(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'>Tunneler Quiz</span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-12'>"
    code += "<span class = 'bold'> Question 2 </span> <br> <br> "
    code += "<span> You're located at the red star and want to get to Fayerweather. How can you do this?</span> <br> <br>"
    code += "</div>"
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-12 text-center'>"
    code += "<img class = 'scale-image1' src = 'static/images/innermap7.png'>" 
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    //can have id = wrong, then provide appropriate feedback
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'bold'>A. </span> "
    code += "<button id = 'crawl' class='btn btn-primary'>A crawlspace</button> <br>"
    code += "<span class = 'bold'>B. </span> "
    code += "<button id = 'lowe' class='btn btn-primary'>An elevator </button> <br>"
    code += "<span class = 'bold'>C. </span> "
    code += "<button id = 'buell' class='btn btn-primary'>You can't</button> <br>"
    code += "<span class = 'bold'>D. </span> "
    code += "<button id = 'butler' class='btn btn-primary'>A ladder </button> <br>"
    code += "</div>"
    $("#continue").html(code)
    $("#crawl").click(function(){
        quiz3()
    })
}

function quiz3(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'>Tunneler Quiz</span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-12'>"
    code += "<span class = 'bold'> Question 3 </span> <br> <br> "
    code += "<span> Which of the following buildings can you NOT directly get to from the Philosophy tunnels</span> <br> <br>"
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    //can have id = wrong, then provide appropriate feedback
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'bold'>A. </span> "
    code += "<button id = 'phil' class='btn btn-primary'>Hamilton </button> <br>"
    code += "<span class = 'bold'>B. </span> "
    code += "<button id = 'lowe' class='btn btn-primary'> Fayerweather </button> <br>"
    code += "<span class = 'bold'>C. </span> "
    code += "<button id = 'buell' class='btn btn-primary'>Buell </button> <br>"
    code += "<span class = 'bold'>D. </span> "
    code += "<button id = 'butler' class='btn btn-primary'>Butler </button> <br>"
    code += "</div>"
    $("#continue").html(code)
    $("#butler").click(function(){
        end()
    })
}

function end(){
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'large bold'>Congrats! You're now ready to explore!</span>"
    code += "</div>"
    $("#title").html(code)
    code = ""
    code = "<div class = 'col-md-12 text-center'>"
    code += "<span class = 'bold'> Congrats on making it through the Columbia Tunneler! </span> <br> <br> "
    code += "<span> You're now ready to gather up a few friends and apply your knowledge. Please remember SAFETY IS THE #1 PRIORITY. Don't venture out alone and try to avoid going into restricted areas!</span> <br>"
    code += "<span> To learn more history about the tunnels check out the WikiCU. Pleaes note that much of the info on the WikiCU, however, is outdated and this website is the most up-to-date info available online."
    code += "</div>"
    code += "<div class = 'row'>"
    code += "<div class = 'col-md-12 text-center right'>"
    code += "<img class = 'scale-image1' src = 'static/images/scarytun.jpg'>" 
    code += "</div>"
    code += "</div>"
    $("#template").html(code)
    code = ""
    code += "<div class = 'col-md-12 text-center'>"
    code += "<button id = 'restart' class='btn btn-primary'>Restart</button>"
    code += "</div>"
    $("#continue").html(code)
    quizRefresh()
    restartRefresh()
}


