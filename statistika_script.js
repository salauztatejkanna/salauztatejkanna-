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


function statistikas_ielade(){
  console.log(noklusejuma_lietotajs["Dzimums"])
  /// BMR 
  var BMR = 0
  switch (noklusejuma_lietotajs["Dzimums"]){
    case "Vīrietis":
      BMR = 10*noklusejuma_lietotajs["Svars"] + 6.25*noklusejuma_lietotajs["Augums"] - 5*noklusejuma_lietotajs["Vecums"] + 5
      break
    case "Sieviete":
       BMR = 10*noklusejuma_lietotajs["Svars"] + 6.25*noklusejuma_lietotajs["Augums"] - 5*noklusejuma_lietotajs["Vecums"] - 161
      break
  }
  switch (noklusejuma_lietotajs["Aktivitātes_biežums"]){
    case "Aktīvs":
       IKP = BMR * 1.725
  }
  


  /////////////
  var statistika_par_mani = {
    "Ikdienas kaloriju patēriņš - ": Math.round(IKP) + " kalorijas", 
    "BMR (Pamata vielmaiņas ātrums)": BMR,
    "BMI (ķermeņa masas indeks)- ": ((noklusejuma_lietotajs["Svars"], 2)/noklusejuma_lietotajs["Augums"]).toFixed(2) + " kg²/cm",
    "Vidukļa un gurnu attiecība:":  (noklusejuma_lietotajs["vidukļa_apkārtmērs"]/noklusejuma_lietotajs["gurnu_apkārtmērs"]).toFixed(2),
  }
  
  statistikas_rinda = document.getElementById("statistikas_rinda")
  for (var informacija in statistika_par_mani) {
    statistikas_rinda.innerHTML += informacija + " " +  statistika_par_mani[informacija] + "<br>"
  }
 


}