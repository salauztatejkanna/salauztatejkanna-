var noklusejuma_lietotajs = {
  "Svars": 65,
  "Augums": 100,
  "Vecums": 66,
  "vidukļa_apkārtmērs":40,
  "gurnu_apkārtmērs":30,
  "Aktivitātes_biežums": "Aktīvs",
  "Smēķēšanas_status": "Smēķēju",
  "Dzimums": "Vīrietis",
  }




try{
  potencialais_noklusejuma_lietotajs = JSON.parse(window.localStorage.getItem("meta"));
  a = Object.keys(noklusejuma_lietotajs).sort()
  b = Object.keys(potencialais_noklusejuma_lietotajs).sort()
  console.log(a)
  console.log(b)
  if (JSON.stringify(a) === JSON.stringify(b)){
    noklusejuma_lietotajs = potencialais_noklusejuma_lietotajs
  }
  
}
catch (error) {
  console.log("Neatrada istatijumu !")
}


const min_un_max_vertibas = {
  "1":[30,140, "Minimalais svars ir 30kg.", "Maksimālias svars ir 140kg."],
  "2":[100, 250, "Minimālais augums ir 100cm", "Maksmimālais augums ir 250cm"],
  "3":[13, 110, "Pa jaunu!", "Tu beigts!"],
  "4":[20, 150, "Pa mazu", "Atvainojamies rādijumu nepieņemam"],
  "5":[20, 150, "Pa mazu", "Atvainojamies rādijumu nepieņemam"]
}

const pamatdatus_info_teksts = {
  "1":["Lūdzu ievadiet jūsu savaru.", "Svars - ", "kg"],
  "2":["Lūdzu ievadiet jūsu augumu.", "Augums - ", "cm"],
  "3":["Lūdzu ievadiet jūsu vecumu.", "Vecums - ", " gadi"],
  "4":["Lūdzu ievadiet jūsu vidukļa_apkārtmērs.", "Vidukļa apkārtmērs - ", " cm"],
  "5":["Lūdzu ievadiet jūsu gurnu_apkārtmēru.", "Gurnu apkārtmērs - ", " cm"],
  "6":["Lūdzu izvēlēties jūsu fiziskās aktivitātes biežumu un intensitāti.", "Aktivitātes biežums - ", ""],
  "7":["Lūzdu izvēlaties vai jūs smēķējat.", "Smēķēšanas status - ", ""],
  "8":["Lūdzu izvēlēties jūsu bioloģisko dzimumu.", "Dzimums - ", ""]
}
const pamatdatus_izvele = {
  "6":["Neaktīvs: nekad vai reti neiekļaujiet fiziskas aktivitātes savā dienā.", "Nedaudz aktīvs: iekļaujiet vieglu vai mērenu aktivitāti apmēram divas līdz trīs reizes nedēļā.", "Aktīvs: iekļaujiet vismaz 30 minūtes mērenas aktivitātes lielākajā daļā nedēļas dienu vai 20 minūtes enerģiskas aktivitātes vismaz trīs dienas nedēļā.", "Ļoti aktīvs: savā dienā iekļauju lielu daudzumu mērenu vai enerģisku aktivitāšu."],
  "7":["Smēķēju", "Nesmēķēju"],
  "8":["Vīrietis", "Sieviete"]
  
}


function update_lietotajs(ipasibas_numurs, vertiba){
  noklusejuma_lietotajs[Object.keys(noklusejuma_lietotajs)[ipasibas_numurs-1]] = vertiba
  window.localStorage.setItem("meta", JSON.stringify(noklusejuma_lietotajs));
}


function generators(){
   vecaks = document.getElementById("pamatdatu_rinda")
  //let ipasibas_numurs = 1
  for (var ipasibas_numurs of Object.keys(pamatdatus_info_teksts)) {
    var lielais_div = document.createElement("div");
    lielais_div.setAttribute("class", "col-md-5")
    lielais_div.innerHTML = `
    <h2 id = "pamatdati_informacija_${ipasibas_numurs}">${pamatdatus_info_teksts[ipasibas_numurs][1] + noklusejuma_lietotajs[Object.keys(noklusejuma_lietotajs)[ipasibas_numurs-1]] + pamatdatus_info_teksts[ipasibas_numurs][2]}</h2>
    <p id = "pamatdati_teksta_turetajs_${ipasibas_numurs}" ></p>
    <p id = "pamatdati_ievades_turetajs_${ipasibas_numurs}">
    <p id = "pamatdati_pogas_turetajs_${ipasibas_numurs}">
    <a id = "pamatdati_poga_mainit_${ipasibas_numurs}" onclick = "mainit_pamatdatus('${ipasibas_numurs}')"   class="btn btn-secondary" role="button">Mainīt &raquo;</a></p>
    `
    vecaks.appendChild(lielais_div)
    
  }
  
    
  
}





function iestatit(){
  generators()
}



function mainit_pamatdatus(lodzina_numurs){
  // atrod izmantojamos elementus
  informacija =  document.getElementById("pamatdati_informacija_" + lodzina_numurs)
  teksts =  document.getElementById("pamatdati_teksta_turetajs_" + lodzina_numurs)
  ievades_turetajs = document.getElementById("pamatdati_ievades_turetajs_" + lodzina_numurs)
  pogas_turetajs =  document.getElementById("pamatdati_pogas_turetajs_" + lodzina_numurs)
  poga = document.getElementById("pamatdati_poga_mainit_" + lodzina_numurs)
  // Izdzeš pogu
  poga.remove()

  // ievad lauks vai izvad lauks
  // vai atslēga eksistē ? 
  if (pamatdatus_izvele[lodzina_numurs] !== undefined){
    var izveles_elements = document.createElement("select");
    izveles_elements.id = "pamatdati_izvele"+lodzina_numurs;
    for (var i = 0; i < pamatdatus_izvele[lodzina_numurs].length; i++) {
        var izvele = document.createElement("option");
        izvele.value = i;
        izvele.text = pamatdatus_izvele[lodzina_numurs][i];
        izveles_elements.appendChild(izvele);
    }
    ievades_turetajs.appendChild(izveles_elements);
    tas_pats_elements = document.getElementById("pamatdati_izvele"+lodzina_numurs)
    tas_pats_elements.setAttribute('style', 'white-space: pre-wrap;')
    tas_pats_elements.style.width = "500px"
    //tas_pats_elements.style.height = "100px"
    //tas_pats_elements.setAttribute("white-space", "pre-wrap")
    tas_pats_elements.setAttribute("white-space", "pre-line")
  
    
  }
  else{
  // Ievieto ievad lauku 
  var ievads = document.createElement("input");
  ievads.setAttribute('id', 'pamatdati_jaunais_ievads_' + lodzina_numurs);
  ievades_turetajs.appendChild(ievads);
  }
  // Ievieto iestatīt pogu 
  var poga_iestatit = document.createElement("a");
  poga_iestatit.setAttribute('role', 'button');
  poga_iestatit.setAttribute('id', 'pamatdatu_iestatisanas_poga_' + lodzina_numurs);
  poga_iestatit.setAttribute('onclick', 'pamatdatu_parbaude(' + lodzina_numurs +')');
  poga_iestatit.innerHTML = "Iestatīt";
  poga_iestatit.setAttribute('class', 'btn btn-secondary');
  pogas_turetajs.appendChild(poga_iestatit);
  //Informēt 
  teksts.innerHTML = pamatdatus_info_teksts[lodzina_numurs][0]
}

function pamatdatu_parbaude(lodzina_numurs){
  // atrod izmantojamos elementus
  informacija =  document.getElementById("pamatdati_informacija_" + lodzina_numurs)
  teksts =  document.getElementById("pamatdati_teksta_turetajs_" + lodzina_numurs)
  ievades_lauks = document.getElementById('pamatdati_jaunais_ievads_' + lodzina_numurs)
  poga_iestatit = document.getElementById('pamatdatu_iestatisanas_poga_' + lodzina_numurs)
  pogas_turetajs =  document.getElementById("pamatdati_pogas_turetajs_" + lodzina_numurs)
  izveles_elements = document.getElementById("pamatdati_izvele"+lodzina_numurs)
  // iegūst lietotāja ievad informāciju
  if (pamatdatus_izvele[lodzina_numurs] !== undefined){
    izveles_elements = document.getElementById("pamatdati_izvele"+lodzina_numurs)
    lietotaja_izvele = izveles_elements.value
    // informācija ir izmantojama
    teksts.innerHTML = ""
    try{
      informacija.innerHTML = pamatdatus_info_teksts[lodzina_numurs][1] + pamatdatus_izvele[lodzina_numurs][lietotaja_izvele].split(":")[0]
      /// maina informāciju 
     update_lietotajs(lodzina_numurs, pamatdatus_izvele[lodzina_numurs][lietotaja_izvele].split(":")[0])
    }
    catch(err) {
      informacija.innerHTML = pamatdatus_info_teksts[lodzina_numurs][1] + pamatdatus_izvele[lodzina_numurs][lietotaja_izvele]
      update_lietotajs(lodzina_numurs, pamatdatus_izvele[lodzina_numurs][lietotaja_izvele])
    }
    izveles_elements.remove()
    // izdēš iestatīšanas pogu 
    poga_iestatit.remove()
    // pievino mainīt pogu
    var poga_mainit = document.createElement("a");
    poga_mainit.setAttribute('role', 'button');
    poga_mainit.setAttribute('id', 'pamatdati_poga_mainit_' + lodzina_numurs);
    poga_mainit.setAttribute('onclick', 'mainit_pamatdatus(' + lodzina_numurs +')');
    poga_mainit.innerHTML = "Mainīt &raquo;";
    poga_mainit.setAttribute('class', 'btn btn-secondary');
    pogas_turetajs.appendChild(poga_mainit);
    
   
    
  }

  else{
  ievades_lauka_informacija = ievades_lauks.value
  // pārbauda vai ievad informācija ir derīga
  if (isNaN(ievades_lauka_informacija) == 0){
      if (min_un_max_vertibas[lodzina_numurs][0] > ievades_lauka_informacija){
        teksts.innerHTML = min_un_max_vertibas[lodzina_numurs][2]
      }
      else if (min_un_max_vertibas[lodzina_numurs][1] < ievades_lauka_informacija){
        teksts.innerHTML = min_un_max_vertibas[lodzina_numurs][3]
      }
      else{
        // informācija ir izmantojama
        teksts.innerHTML = ""
        // izdēš iestatīšanas pogu 
        poga_iestatit.remove()
        // izdēš ivades loaku
        ievades_lauks.remove()
        // maina informāciju
        informacija.innerHTML = pamatdatus_info_teksts[lodzina_numurs][1] + Math.round(ievades_lauka_informacija) + pamatdatus_info_teksts[lodzina_numurs][2]
        // pievino mainīt pogu
        var poga_mainit = document.createElement("a");
        poga_mainit.setAttribute('role', 'button');
        poga_mainit.setAttribute('id', 'pamatdati_poga_mainit_' + lodzina_numurs);
        poga_mainit.setAttribute('onclick', 'mainit_pamatdatus(' + lodzina_numurs +')');
        poga_mainit.innerHTML = "Mainīt &raquo;";
        poga_mainit.setAttribute('class', 'btn btn-secondary');
        pogas_turetajs.appendChild(poga_mainit);
        /// maina informāciju 
        update_lietotajs(lodzina_numurs, ievades_lauka_informacija)
        console.log(noklusejuma_lietotajs)
        
      }
  }
  else{
    teksts.innerHTML = "Ievadiet tikai skaitli!"
  }
  }
}



////////////////////////////////////////////// Statistika

/// informacijas apreiķini
/// 1. ikdienas kalorijas daudzums
