//FIXED HEADER ON SCROLL
window.onscroll = function() {myFunction()};


var header = document.getElementById("headerid");
var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.className = "sticky";
  } else {
    header.classList.remove("sticky");
  }
}


//SIDE MENU
function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';

}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';

}


//xml query
var rec = document.getElementById("ancorarec");

rec.addEventListener("click", function(){
  var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:8080/object',true);
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200) 
    alert("Request made");     
}
xhr.send();


})


