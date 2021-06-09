//CHANGE PICTURE ON HOVER

document.querySelector(".img1").addEventListener("mouseover", function(){
  document.querySelector(".img1").style.backgroundImage = "url('restaurante/Prato2.jpg')" ;
});

document.querySelector(".img2").addEventListener("mouseover", function(){
  document.querySelector(".img2").style.backgroundImage = "url('restaurante/SubTampa2.jpg')" ;
});

document.querySelector(".img3").addEventListener("mouseover", function(){
  document.querySelector(".img3").style.backgroundImage = "url('restaurante/DeiFrati2.jpg')" ;
});

document.querySelector(".img4").addEventListener("mouseover", function(){
  document.querySelector(".img4").style.backgroundImage = "url('restaurante/LaCeaun2.jpg')" ;
});


document.querySelector(".img5").addEventListener("mouseover", function(){
  document.querySelector(".img5").style.backgroundImage = "url('restaurante/Hirscher2.jpg')" ;
});

document.querySelector(".img6").addEventListener("mouseover", function(){
  document.querySelector(".img6").style.backgroundImage = "url('restaurante/Trattorian2.jpg')" ;
});

//Last visited

var ancore = document.getElementsByClassName("rest");
for (let i=0;i<ancore.length;i++){
  ancore[i].addEventListener("click", function(){


  var d = new Date();

  var dobj = {
    ziua: String(d.getDate()).padStart(2, '0'),
    luna: String(d.getMonth() + 1).padStart(2, '0'),
    an: d.getFullYear(),
    ora: d.getHours(),
    minute: d.getMinutes(),
    fun: function(){
      if (this.ora.toString().length<2)
        var h = "0".concat(this.ora);
      else var h = this.ora; 
      
      if (this.minute.toString().length<2)
        var m = "0".concat(this.minute);
      else var m = this.minute; 
      
      return h + ":" + m; 

    }

  }

    idtxt = i.toString();
    dobj.visited = dobj.luna + '/' + dobj.ziua + '/' + dobj.an + " " + dobj.fun();
    localStorage.setItem(idtxt,dobj.visited);

  })
}

var para = document.getElementsByClassName("text");
for(let i=0;i<para.length;i++){
  var sase = document.createElement("h6");
  sase.style.color = "#a83c32";
  sase.style.fontStyle = "italic";
  para[i].appendChild(sase);
}

 var intv = setInterval(vizitat, 1000, "Last visited on: ");


function vizitat(mess){
  var para = document.getElementsByClassName("text");
  for(let i=0;i<para.length;i++){
      var lv = mess + localStorage.getItem(i.toString());
      var vl = document.getElementsByTagName("h6")[i];
      vl.innerHTML = lv;         
  }
  
}

//Stop tracking activity 
var bvbtn = document.getElementById("bvbtn")
bvbtn.addEventListener("click", function(e){
  alert("By clicking this " + e.target.name + " we will stop showing your activity")
  for(let i=0;i<para.length;i++){
    para[i].removeChild(para[i].childNodes[1]);
  }  

  clearInterval(intv);
})


