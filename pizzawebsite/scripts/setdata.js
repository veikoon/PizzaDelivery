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
        fetch("http://localhost:8080/client/total?name=" + data + "&total=" + result[data], {
            method: "POST",
            headers: myHeaders
        })
    };
});