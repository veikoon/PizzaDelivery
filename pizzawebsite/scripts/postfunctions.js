function addpizza(value, ingredient) {
    console.log("pizza name");
    console.log(value);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/pizza/new", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "name": value,
                "ingredients": [ingredient]
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