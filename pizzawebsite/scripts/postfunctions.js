function addpizza(value) {
    console.log("pizza name");
    console.log(document.getElementById('ingredients').value);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/pizza/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "name": value,
                "ingredients": document.getElementById('ingredients').value
            })
        })
        .then(response => console.log("ADD PIZZA OK"))
        .catch(error => error("Erreur: " + error));
}

function addingredient(value) {
    console.log("ingredient name");
    console.log(value);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/ingredient/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "name": value
            })
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log("Erreur: " + error));
}

function addlivreur() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/staff/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "name": document.getElementById("prenomLivreur").value,
                "surname": document.getElementById("nomLivreur").value,
                "address": document.getElementById("adresseLivreur").value,
                "phone": document.getElementById("telephoneLivreur").value,
                "age": document.getElementById("ageLivreur").value,
            })
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log("Erreur: " + error));
}

function deletelivreur(name) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/staff/delete?name=" + name, {
            method: "DELETE",
            headers: myHeaders
        })
        .then(response => console.log("DELETE PIZZA OK"))
        .catch(error => error("Erreur: " + error));
}

function deletepizza() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/pizza/delete?name=" + document.getElementById("nompizza").value, {
            method: "DELETE",
            headers: myHeaders
        })
        .then(response => console.log("DELETE PIZZA OK"))
        .catch(error => error("Erreur: " + error));
}

function addclient() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/client/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "name": document.getElementById("prenomClient").value,
                "surname": document.getElementById("nomClient").value,
                "address": document.getElementById("adresseClient").value,
                "phone": document.getElementById("telephoneClient").value
            })
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log("Erreur: " + error));
}

function addvehicules(name) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/vehicule/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "name": document.getElementById("nomVehicule").value,
            })
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log("Erreur: " + error));
}

function adddelivery() {
    console.log(document.getElementById("livreursdropdown").value);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/delivery/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "staff": document.getElementById("livreursdropdown").value,
                "client": document.getElementById("clientsdropdown").value,
                "vehicule": document.getElementById("vehiculesdropdown").value,
                "pizza": document.getElementById("pizzasdropdown").value,
                "size": document.getElementById("sizesdropdown").value,
            })
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log("Erreur: " + error));
}