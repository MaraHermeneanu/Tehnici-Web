//GENERATE CONTACT FORM

var form = document.createElement("FORM");
form.setAttribute("id", "formular");
form.setAttribute("action", "http://localhost:8080/formular")
form.setAttribute("method","POST")
// form.setAttribute("target","numeIf")

function genText(name,placeholder){
  var input = document.createElement("INPUT");
  input.setAttribute("type","text");
  input.setAttribute("name",name);
  input.setAttribute("placeholder",placeholder);

  document.getElementById("formular").appendChild(input);
}

function genRadio(name, value){
  var input = document.createElement("INPUT");
  input.setAttribute("type","radio");
  input.setAttribute("name", name);
  input.setAttribute("value", value);

  document.getElementById("formular").appendChild(input);

}

function genLabel(forvar,innerText){
  var label = document.createElement("LABEL");
  label.setAttribute("for", forvar);
  label.innerHTML = innerText;

  document.getElementById("formular").appendChild(label);
}

function genCheck(name){

  var input = document.createElement("INPUT");
  input.setAttribute("type","checkbox");
  input.setAttribute("name",name);

  document.getElementById("formular").appendChild(input);
}

function genSubmit(value){
  var input = document.createElement("INPUT");
  input.setAttribute("type", "submit");
  input.setAttribute("value", value);

  document.getElementById("formular").appendChild(input);

}

var pg = document.createElement("P");
pg.innerHTML = "Please select you gender:"

var br = document.createElement("BR");
var br1 = document.createElement("BR");
var br2 = document.createElement("BR");
var br3 = document.createElement("BR");



var body = document.getElementById("body-contact")
var foot = document.querySelector("footer")
body.insertBefore(form, foot);


genText("firstname", "First Name");
document.getElementById("formular").appendChild(br);
genText("lastname", "Last Name");
document.getElementById("formular").appendChild(pg); // Plase select
genRadio("gender", "male");
genLabel("male", "Male");
genRadio("gender", "female");
genLabel("male", "Female");
genRadio("gender", "other");
genLabel("male", "Other");
document.getElementById("formular").appendChild(br1);
genText("message", "Your Message");
document.getElementById("formular").appendChild(br2);
genCheck("over18");
genLabel("over18", "I am over 18");
document.getElementById("formular").appendChild(br3);
genSubmit("Submit");

//FORM VALIDATION
 var fn = document.querySelector("input[name='firstname']");
 var ln = document.querySelector("input[name='lastname']");
 var msg = document.querySelector("input[name= 'message']");
 var gen = document.querySelectorAll("input[type = 'radio']");
 var age = document.querySelector("input[type= 'checkbox']");
 var sub = document.querySelectorAll("input[type = 'submit']");




//Prevent form from submitting when hitting enter 
fn.parentElement.addEventListener("keydown", function(e){
  var t = e.key;
  if(t.toLowerCase() === "enter"){
    e.preventDefault();
  }
})

//Focus on last name when pressing enter
fn.addEventListener("keydown", function(e){
  var t = e.key;
  if(t.toLowerCase() === "enter"){
    form.children[2].focus();
  }
})

form.addEventListener("submit", (e)=>{
  var alerts = [];

  if(fn.value === '' || fn.value == null){
    alerts.push("First name is required.\n");

  }

  if(ln.value === '' || ln.value == null){
    alerts.push("Last name is required.\n");

  }

  if(msg.value === '' || msg.value == null){
    alerts.push("Message is required.\n");

  }

  let ok = 0;
  for (let i = 0; i < gen.length; i++){
    if(gen[i].checked == true)
       ok = 1;
  }

  if(ok==0){
    alerts.push("Gender is required.\n");
  }

  if(age.checked == false){
    alerts.push("You have to be over 18 to submit this form.\n");
  }

  if(alerts.length > 0){
    concat = "";
    for(let j=0;j<alerts.length;j++){
      concat = concat + alerts[j];
    }
    alert(concat);
    e.preventDefault();
  }

})

