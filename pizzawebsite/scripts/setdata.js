var delivery = [];
let changed = 0;
fetchpromise = fetch("http://localhost:8080/delivery/all");
fetchpromise.then(response => { return response.json(); }).then(orders => {
    console.log(orders);
    var result = {};
    var deliveries = {}
    orders.forEach(function(elem) {
        if (elem.client.name in result) {
            result[elem.client.name] = result[elem.client.name] + elem.size.price;

        } else {
            result[elem.client.name] = elem.size.price;
        }

        if (elem.client.name in deliveries) {
            deliveries[elem.client.name] = ++deliveries[elem.client.name];
        } else {
            deliveries[elem.client.name] = 1;
        }
        console.log(deliveries);
    });
    console.log(result);
    for (let data in result) {
        console.log(result[data]);
        var myHeaders = new Headers();
        fetch("http://localhost:8080/client/total?name=" + data + "&total=" + result[data], {
            method: "POST",
            headers: myHeaders
        })
    }
    for (let data in deliveries) {

        console.log(data);
        console.log(deliveries[data]);
        var myHeaders = new Headers();
        fetch("http://localhost:8080/client/order?name=" + data + "&order=" + deliveries[data], {
            method: "POST",
            headers: myHeaders
        })
    };
});