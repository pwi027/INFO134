

// global variabel for URLen til dokart-JSON
var dokart = "https://hotell.difi.no/api/json/bergen/dokart";
var lekeplasser = "https://hotell.difi.no/api/json/bergen/lekeplasser";

var globalEntries = [];

// Funksjon som tar imot en URL og parser hvis dokumentet er i JSON-format (Oppgave 2)
// usikker på hvordan man skal håndtere "entries"
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

//usikker på hvordan man skal håndtere entries
function parseJson() {
  for (var i = 0; i < globalEntries[0].length; i++) {
    var createList = document.createElement("li");
    var listItem = document.createTextNode(globalEntries[0][i]["plassering"]);
    createList.appendChild(listItem);
    document.getElementById("toaListe").appendChild(createList);
  }
  console.log(globalEntries);
}

function searchToilet() {
  var resultater = [];
  var quickSearchForm = document.getElementById("hurtigSok");
  var quickSearchInput = quickSearchForm.value;
  for (var i = 0; i < globalEntries.length; i++) {
    for(key in globalEntries[i]) {
      if(globalEntries[i][key].indexOf(quickSearchInput)!=-1) {
        resultater.push(globalEntries[i]);
      }
    }
  }
}

function checkObjectValue() {
  for(var i = 0; i < entries.length; i++) {
    console.log(entries.values[i]);
  }
}
