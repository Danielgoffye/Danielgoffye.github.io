var numQues = 6;
var numChoi = 3;
function getScore(form) {
    var currElt;
    var currSelection;
    for (i = 0; i < numQues; i++) {
        currElt = i * numChoi;
        answered = false;
        for (j = 0; j < numChoi; j++) {
            currSelection = form.elements[currElt + j];
            if (currSelection.checked) {
                answered = true;
            }
        }
        if (answered === false) { alert("Answer all the questions, Please"); return false; }
    }
    var second = document.getElementById("image");
    var gif = document.getElementById("gif");
    second.style.display = "block";
    gif.src = "fireworks.gif";
    
    var aux = document.getElementById("close");
    aux.onclick = function(){
        second.style.display = "none";
    }

}

