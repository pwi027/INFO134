

// global variabel for URLen til dokart-JSON
var dokart = "https://hotell.difi.no/api/json/bergen/dokart";
var lekeplasser = "https://hotell.difi.no/api/json/bergen/lekeplasser";

var urlEntries = {};

// Funksjon som tar imot en URL og parser hvis dokumentet er i JSON-format (Oppgave 2)
// usikker på hvordan man skal håndtere "entries"
function requestURL(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Type", xhr.getResponseHeader("Content-Type"));
      urlEntries = JSON.parse(xhr.responseText).entries;
      console.log(urlEntries);
    }
    else {
      return null;
    }
  }
    xhr.send();
    return urlEntries;
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
