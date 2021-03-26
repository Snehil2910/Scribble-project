
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var postmodal = document.getElementById("postmodal"); 

// Get the button that opens the modal
var btn = document.getElementById("btn3");
var btn2 = document.getElementById("btn4");
var btn3 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
btn3.onclick = function(){
  postmodal.style.display="block";
}
span3.onclick = function(){
  postmodal.style.display = "none";
}
window.onclick = function(event){
  if(event.target == postmodal){
    postmodal.style.display="none";
  }
}
function MyFunction(){
  modal2.style.display= "none";
  modal.style.display="block";
}



