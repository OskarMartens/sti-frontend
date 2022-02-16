var aDiv = document.getElementById('app');

var buttonBox = document.createElement("div");
    buttonBox.setAttribute("id", "Buttons");
    buttonBox.style.width = "500px";
    buttonBox.style.height ="800px";
    Buttons.style.flex = "flex-direction; row";

var addButton = document.createElement('button');
    addButton.innerHTML = "Lägg till";
    addButton.onclick = addElement;
    addButton.style.margin = "8px";

var removeButton = document.createElement('button');
    removeButton.innerHTML = "Ta bort";
    removeButton.onclick = removeElement;
    removeButton.style.margin = "8px";

var aTable = document.createElement("table");
    aTable.setAttribute("id", "unTavolo")
    aTable.style.width = '200px';
    aTable.style.height = '500px';
    /* aTable.setAttribute('border', '100'); */

aDiv.appendChild(aTable);
/* aDiv.appendChild(buttonBox);
buttonBox.appendChild(addButton);
buttonBox.appendChild(removeButton); */

function addElement(){
    var aRow = document.createElement('tr');
        var aText = document.createTextNode("New row");
            aRow.appendChild(aText);
        aTable.appendChild(aRow);
}

function removeElement(){
    document.getElementsById("tavolo").deleteRow(0);
}


function age(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/js/data.json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}