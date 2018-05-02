

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
    }
    else {
      return null;
    }
  }
    xhr.send();
}

// Funksjon som går igjennom globalEntries-arrayet og iterer ut liste-elementer for hver med
// plasseringen til hver enkelte node
function parseJson() {
  for (var i = 0; i < globalEntries[0].length; i++) {
    var createList = document.createElement("li");
    var listItem = document.createTextNode(globalEntries[0][i].plassering);
    createList.appendChild(listItem);
    document.getElementById("toaListe").appendChild(createList);
  }
  console.log(globalEntries[0][i].plassering);
}

// Funksjon som tar imot tekst i søkefeltet hurtigSok og sjekker mot verdiene i globalEntries
function searchToilet() {
  var resultater = [];
  var quickSearchForm = document.getElementById("hurtigSok");
  var quickSearchInput = quickSearchForm.value;
  for (var i = 0; i < globalEntries[0].length; i++) {
    for(key in globalEntries[0][i]) {
      if(globalEntries[0][i][key].indexOf(quickSearchInput)!=-1) {
        resultater.push(globalEntries[0][i]);
      }
    }
  }
  console.log(resultater);
}
