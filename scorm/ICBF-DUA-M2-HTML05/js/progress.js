
var activitiesToComplete=3;

var eachActivity=Array(activitiesToComplete);

$(document).ready(function() {
    for(var i=0;i<eachActivity.length;i++){
        eachActivity[i]=false;
    }
})

function checkComplete(){
    for(var i=0;i<eachActivity.length;i++){
        if(!eachActivity[i]){
            console.log(i+" aaa "+eachActivity[i])
            return;
        }
    }
    showNextButton();
}

function setComplete(id){
    eachActivity[id]=true;
}