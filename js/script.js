

// global variabel for URLen til dokart-JSON
var dokart = "https://hotell.difi.no/api/json/bergen/dokart";
var lekeplasser = "https://hotell.difi.no/api/json/bergen/lekeplasser";

var entries = [];

// Funksjon som tar imot en URL og parser hvis dokumentet er i JSON-format (Oppgave 2)
// usikker på hvordan man skal håndtere "entries"
function requestURL(url) {
  var xhr = new XMLHttpRequest();
  var entries = [];
  xhr.open("GET", url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Type", xhr.getResponseHeader("Content-Type"));
      entries = JSON.parse(xhr.responseText).entries;
      console.log(entries);
      oppdater(entries);
    }
    else {
      return null;
    }
  }
    xhr.send();
    return entries;
}

function oppdater() {

}

//usikker på hvordan man skal håndtere entries
function parseJson() {
  for (var i = 0; i < entries.length; i++) {
    var createList = document.createElement("li");
    var listItem = document.createTextNode(entries[i]["plassering"]);
    createList.appendChild(listItem);
    document.getElementById("toaListe").appendChild(createList);
  }
  console.log(entries);
}

function searchToilet() {
  var resultater = [];
  var quickSearchForm = document.getElementById("hurtigSok");
  var quickSearchInput = quickSearchForm.value;
  for (var i = 0; i < entries.length; i++) {
    for(key in entries[i]) {
      if(entries[i][key].indexOf(quickSearchInput)!=-1) {
        resultater.push(entries[i]);
      }
    }
  }
}

function checkObjectValue() {
  for(var i = 0; i < entries.length; i++) {
    console.log(entries.values[i]);
  }
}

// utregning av distanse mellom to koordinater
// må kanskje lages fra bunnen av istedenfor å bruke Google sin algoritme?

var distanse = google.maps.geometry.spherical.computeDistanceBetween(
  new google.maps.LatLng(poolat, poolng),
  new google.maps.LatLng(destlat, destlng)
);
