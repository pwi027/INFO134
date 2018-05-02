// global variabel for URLen til dokart-JSON
var dokart = "https://hotell.difi.no/api/json/bergen/dokart";
var lekeplasser = "https://hotell.difi.no/api/json/bergen/lekeplasser";
var uibLocations = "https://tp.data.uib.no/KEYyze4evyqy/ws/room/2.0/buildings.php?id=O2"


// globalt array som får pushet data fra requestURL-funksjonen
var globalEntries = [];

// Funksjon som tar imot en URL og parser hvis dokumentet er i JSON-format. Returnerer null
// hvis readyState ikke er 4 og status ikke er 200. Ellers pusher den parset JSON inn i den
// globale variabelen globalEntries
function requestURL(url, callback) {
  var urlEntries = {};
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      urlEntries = JSON.parse(xhr.responseText).entries;
      console.log(urlEntries);
      globalEntries.push(urlEntries);
      if (typeof callback === 'function') {
        callback(urlEntries);
      }
    } else {
      return null;
    }
  }
  xhr.send();
}

// Funksjon som itererer ut en property og inn i liste-elementet i HTML
function parseJson(items, listToAppendTo, propertyToDisplay) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var listElement = document.createElement('li');
    listElement.innerHTML = item[propertyToDisplay];
    listToAppendTo.appendChild(listElement);
  }
}

// Funksjon som tar imot tekst i søkefeltet hurtigSok og sjekker mot verdiene i globalEntries
function searchToilet() {
  var resultater = [];
  var quickSearchForm = document.getElementById("hurtigSok");
  var quickSearchInput = quickSearchForm.value;
  for (var i = 0; i < globalEntries[0].length; i++) {
    for (key in globalEntries[0][i]) {
      if (globalEntries[0][i][key].indexOf(quickSearchInput) != -1) {
        resultater.push(globalEntries[0][i]);
      }
    }
  }
  console.log(resultater);
}

// Funksjon som sorterer listofItems enten alfabetisk eller i revers, avhengig av hvilket valg
// man tar i drop-down menyen arraySelect
function arraySort() {
  var selectedChoice = document.getElementById("arraySelect").value;
  if (selectedChoice == "Alfabetisk") {
    globalEntries.sort();
  } else if (selectedChoice == "Revers") {
    globalEntries.reverse();
  }
}
