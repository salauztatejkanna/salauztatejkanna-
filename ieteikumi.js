function start(){
  var pogas  = document.getElementsByClassName('button_holder');
  for (let i = 0; i < pogas.length; i++) {
    var butt = document.createElement("div");
    if  (localStorage.getItem("poga" + i) == "true"){
       butt.innerHTML = 'Status - <span style = "font-size:19px;background-color:green" class="badge badge-secondary">Pieteikts</span><br><center><button onclick = "ateteikt(' + i + ')" style = "margin-top:5px; background-color:red;color:white" class="btn btn-primary">Ateteikt</button></center>'
      if (i == 0){
        makarons = document.getElementById("makaroni")
        makarons.innerHTML = "Vietu skaits: 4/5"
      }
    }
    else{
      butt.innerHTML = '<button onclick = "pieteikt(' + i + ')" style = "color:white" class="btn btn-primary">Pieteikties</button>'
    }
    pogas[i].appendChild(butt);
  }
}
function pieteikt(a){
  localStorage.setItem("poga" + a, true);
  location.reload();
}

function ateteikt(a){
  localStorage.setItem("poga" + a, false);
  location.reload();
}