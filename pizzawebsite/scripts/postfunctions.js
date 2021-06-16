function addpizza() {
    fetch("http://localhost:8080/pizza/new")
        .then(response => console.log(response.json()))
        .catch(error => alert("Erreur: " + error));
}