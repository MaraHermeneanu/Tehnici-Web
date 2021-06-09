//DARK THEME ON CLICK
document.getElementsByTagName("img")[1].onclick = function(e){
  document.getElementById("body-map").style.background = "#1c1b1b";
  document.querySelector(".mapdiv h2").style.color = "#fff";
  var elements = document.querySelectorAll(".mapdiv path");
  //alert(getComputedStyle(document.getElementById("body-map")).getPropertyValue("background-color"));
  if(getComputedStyle(document.getElementById("body-map")).getPropertyValue("background-color") == "rgb(28, 27, 27)"){
    culori = ["#292828", "#383d3a","#4d4f4e"]
    index = culori[Math.floor(Math.random() * culori.length)]
    for (var i = 0; i < elements.length; i++) { 
      elements[i].style.fill = index;

    }
  }
  var body = document.querySelector("#body-map");
  var themeBtn = document.querySelector(".theme");
  body.removeChild(themeBtn);
  
  e.stopPropagation();
};

document.getElementsByTagName("button")[0].addEventListener("click", function(){
  document.getElementById("body-map").style.background = "#2e3329";
  document.querySelector(".mapdiv h2").style.color = "#fff";

  var elements = document.querySelectorAll(".mapdiv path");
  for (var i = 0; i < elements.length; i++) {
     elements[i].style.fill = "#292828";
  }

  var body = document.querySelector("#body-map");
  var themeBtn = document.querySelector(".theme");
  body.removeChild(themeBtn);
})

//SIDE MENU
function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';

}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';

}


