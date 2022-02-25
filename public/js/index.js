var jwt = localStorage.getItem("jwt");
if (jwt != null) {
    window.location.href = './index.html'
}

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/sti-frontend/public/users.json" /* Länk till backend */)
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "username": username,
        "password": password
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            if (objects['status'] == 'ok') {
                localStorage.setItem("jwt", objects['accessToken']);
                Swal.fire({                             /*Swal används för att göra pop-up vid login  */
                    text: objects['message'],
                    icon: 'success',
                    confirmButtonText: 'Okej!'
                }).then((result) => {
                    if(result.isConfirmed) {
                        window.location.href ='./index.js';
                    }
                }); 
            } else {
                Swal.fire({
                    text: objects['message'],
                    icon: 'error',
                    confirmButtonText: 'Okej!'
                });
            }
        }
    };
    return false;
}








/* var aDiv = document.getElementById('app');

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
    /* aTable.setAttribute('border', '100');

aDiv.appendChild(aTable);
aDiv.appendChild(buttonBox);
buttonBox.appendChild(addButton);
buttonBox.appendChild(removeButton);

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
} */