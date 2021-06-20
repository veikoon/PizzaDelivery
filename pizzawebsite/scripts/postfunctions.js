function addpizza(value) {
    console.log("pizza name");
    let selectElement = document.getElementById('ingredientList')
    let selectedValues = Array.from(selectElement.selectedOptions)
        .map(option => option.value)
    console.log(selectedValues); // make sure you know what '.map' does
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/pizza/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "name": value,
                "ingredients": selectedValues
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

function deletepizza(value) {
    /*  console.log(value);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      fetch("http://localhost:8080/pizza/delete?name=" + value, {
              method: "DELETE",
              headers: myHeaders
          })
          .then(response => console.log("DELETE PIZZA OK"))
          .catch(error => error("Erreur: " + error));*/
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
                "phone": document.getElementById("telephoneClient").value,
                "balance": document.getElementById("soldeClient").value
            })
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log("Erreur: " + error));
}



function addsize() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/size/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "name": document.getElementById("sizename").value,
                "price": document.getElementById("pricesize").value
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

function setLate(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("localhost:8080/delivery/islate?id=" + id + "&late=true", {
        method: "POST",
        headers: myHeaders
    })
}

function adddelivery() {
    var client = document.getElementById("clientsdropdown").value;

    var price = 0;
    var newbalance = 0;
    //GET PRICE
    fetchpromise = fetch("http://localhost:8080/size?name=" + document.getElementById("sizesdropdown").value)
    fetchpromise.then(response => {
        return response.json();
    }).then(size => {
        console.log(size);
        price = size.price;
        fetchpromise = fetch("http://localhost:8080/client?name=" + client)
        fetchpromise.then(response => {
            return response.json();
        }).then(client => {
            console.log(client);
            if (client.balance > price) {
                newbalance = client.balance - price;
                console.log(client.balance);
                console.log(price);
                console.log(newbalance);
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
                    .then(response => {
                        console.log("soustraction balance");
                        console.log(newbalance);
                        console.log(response.json())
                        var myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        fetch("http://localhost:8080/client/balance?name=" + client.name + "&balance=" + newbalance, {
                            method: "POST",
                            headers: myHeaders
                        })
                    }).then(response => {
                        console.log(response);
                    })
                    .catch(error => console.log("Erreur: " + error));

            } else {
                alert("balance insuffisante");
            }
        });
    });


    /*

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
            .catch(error => console.log("Erreur: " + error));*/
}