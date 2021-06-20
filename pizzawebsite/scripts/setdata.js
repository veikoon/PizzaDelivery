var delivery = [];
let countpizzas = [];
let changed = 0;
fetchpromise = fetch("http://localhost:8080/delivery/all");
fetchpromise.then(response => { return response.json(); }).then(orders => {
    console.log(orders);
    var result = {};
    orders.forEach(function(elem) {
        if (elem.client.name in result) {
            result[elem.client.name] = result[elem.client.name] + elem.size.price;

        } else {
            result[elem.client.name] = elem.size.price;
        }
    });
    console.log(result);
    for (let data in result) {
        console.log(result[data]);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("'Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
        myHeaders.append("'Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization,X-Request-With")
        fetch("http://localhost:8080/client/total", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({
                    "name": data,
                    "totalFacturation": result[data]
                })
            })
            .then(response => console.log(response.json()))
            .catch(error => console.log("Erreur: " + error));

    };
});