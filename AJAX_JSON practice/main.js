var pageCounter = 1;
var dataInfo = document.getElementById("data-info");
var btn = document.getElementById("btn");
    

btn.addEventListener("click",function(){
    var OurRequest = new XMLHttpRequest();
    OurRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    OurRequest.onload = function(){
        var Data = JSON.parse(OurRequest.responseText);
        renderHTML(Data);
    };
    OurRequest.send()
    pageCounter++;
    if (pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

function renderHTML(ndata){
    var htmlString = "";

    for (i = 0; i < ndata.length; i++){
        htmlString += "<p>" + ndata[i].name + " is a " + ndata[i].species + " that likes to eat ";
        for(ii = 0; ii< ndata[i].foods.likes.length; ii++) {
            if (ii == 0) {
            htmlString += ndata[i].foods.likes[ii];
        }else {
            htmlString += " and " + ndata[i].foods.likes[ii];
        }
    }

    htmlString +=" and dislikes ";

        for(ii = 0; ii< ndata[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
            htmlString += ndata[i].foods.dislikes[ii];
            } else {
            htmlString += " and " + ndata[i].foods.dislikes[ii];
            }
        }

    htmlString += ".</p>";

    }

    dataInfo.insertAdjacentHTML('beforeend', htmlString)

    
}
