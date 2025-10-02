function changeLanguage(code) {
  console.log(code)
  document.getElementById("selectionFlag").style.display = "none";
  if (code === "fr"){
    document.getElementById("imageFlagSelected").src = "annexe/flagFrance.png";
    changeTextToFrench();
  }
  if (code === "nl"){
    document.getElementById("imageFlagSelected").src = "annexe/flagNetherland.png";
    changeTextToDutch();
  }
  if (code === "uk"){
    document.getElementById("imageFlagSelected").src = "annexe/flagUk.png";
    changeTextToEnglish();
  }
  document.getElementById("arrowDown").style.transform = "rotate(0deg)";
}

function openCloseDialogToChangeLanguage(){
    var dialog = document.getElementById("selectionFlag").style.display
    if (dialog === "block"){
      document.getElementById("selectionFlag").style.display = "none";
      document.getElementById("arrowDown").style.transform = "rotate(0deg)";
    }else{ 
      document.getElementById("selectionFlag").style.display = "block";
      document.getElementById("arrowDown").style.transform = "rotate(180deg)";
    }
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