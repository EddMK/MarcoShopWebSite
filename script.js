function changeLanguage(code) {
  console.log(code)
  document.getElementById("selectionFlag").style.display = "none";
  if (code === "fr"){
    document.getElementById('menuFlagText').innerHTML = "FR"
    changeTextToFrench();
  }
  if (code === "nl"){
    document.getElementById('menuFlagText').innerHTML = "NL"
    changeTextToDutch();
  }
  if (code === "en"){
    document.getElementById('menuFlagText').innerHTML = "EN"
    changeTextToEnglish();
  }
  closeDialogToChangeLanguage();
}

function openDialogToChangeLanguage(){
    document.getElementById("selectionFlag").style.display = "block";
}

function closeDialogToChangeLanguage(){
  document.getElementById("selectionFlag").style.display = "none";
}

function changeTextToDutch(){
  document.getElementById("textServices").innerHTML = "Dienst";
  document.getElementById("textPrix").innerHTML = "Prijs";
  document.getElementById("textContact").innerHTML = "Contacteer ons";
}

function changeTextToEnglish(){
  document.getElementById("textServices").innerHTML = "Services";
  document.getElementById("textPrix").innerHTML = "Price";
  document.getElementById("textContact").innerHTML = "Contact us";
}

function changeTextToFrench(){
  document.getElementById("textServices").innerHTML = "Services";
  document.getElementById("textPrix").innerHTML = "Prix";
  document.getElementById("textContact").innerHTML = "Contactez-nous";
}