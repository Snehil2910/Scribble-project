var modal = document.getElementById("postmodal");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var btn = document.getElementById("no");
span1.onclick = function(){
modal.style.display = "block";
}
span2.onclick = function(){
    modal.style.display = "block";
    }
    span3.onclick = function(){
        modal.style.display = "block";
        }
        span4.onclick = function(){
            modal.style.display = "block";
            }
            span5.onclick = function(){
                modal.style.display = "block";
                }
window.onclick = function(event){
    if(event.target == modal){
      modal.style.display="none";
    }
  }
  btn.onclick=function(){
      modal.style.display = "none";
  }