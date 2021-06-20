let stats = {
    food_stats: {
        group_name: "Nourriture",
        best_pizza: "Marguerita",
        worst_pizza: "Hawaienne",
        favorite_ingredient: "Pepperoni"
    },
    staff_stats: {
        group_name: "Employes",
        best_staff: {},
        worst_staff: {}
    },
    client_stats: {
        group_name: "Top clients",
        top_clients: []
    },
    vehicle_stats: {
        group_name: "Unused vehicles",
        vehicles: []
    }

}
let min_delay = 999;
let max_delay = 0;
let best_staff_index = 0;
let worst_staff_index = 0;
fetchpromise = fetch("http://localhost:8080/staff/all");
fetchpromise.then(response => {
    return response.json();
}).then(staff => {

    for (let i = 0; i < staff.length; i++) {
        if (staff[i].nbDelay < min_delay) {
            min_delay = staff[i].nbDelay;
            best_staff_index = i;
        }
        if (staff[i].nbDelay > max_delay) {
            max_delay = staff[i].nbDelay;
            worst_staff_index = i;
        }
    }
    stats.staff_stats.best_staff = {
        staff_name: staff[best_staff_index].name,
        staff_surname: staff[best_staff_index].surname,
        staff_nb_delay: staff[best_staff_index].nbDelay
    }

    stats.staff_stats.worst_staff = {
        staff_name: staff[worst_staff_index].name,
        staff_surname: staff[worst_staff_index].surname,
        staff_nb_delay: staff[worst_staff_index].nbDelay
    }
    document.getElementById('food_stats_title').innerHTML = stats.food_stats.group_name;
    document.getElementById('staff_stats_title').innerHTML = stats.staff_stats.group_name;
    document.getElementById('best_staff').innerHTML += stats.staff_stats.best_staff.staff_name + " " + stats.staff_stats.best_staff.staff_surname + " - " + stats.staff_stats.best_staff.staff_nb_delay + " retards";
    document.getElementById('worst_staff').innerHTML += stats.staff_stats.worst_staff.staff_name + " " + stats.staff_stats.worst_staff.staff_surname + " - " + stats.staff_stats.worst_staff.staff_nb_delay + " retards";
});

var delivery = [];
let countpizzas = [];
let changed = 0;
fetchpromise = fetch("http://localhost:8080/delivery/all");
fetchpromise.then(response => { return response.json(); }).then(orders => {
    delivery.push(orders);
    var result = {};
    orders.forEach(function(elem) {
        if (elem.pizza.name in result) {
            result[elem.pizza.name] = ++result[elem.pizza.name];
        } else {
            result[elem.pizza.name] = 1;
        }
    });
    max = orders[0].pizza.name;
    min = orders[0].pizza.name;
    orders.forEach(function(elem) {
        if (result[max] < result[elem.pizza.name]) { max = elem.pizza.name; }
        if (result[min] > result[elem.pizza.name]) {
            min = elem.pizza.name;
        }
    });
    document.getElementById('best_pizza').innerHTML = "Meilleure pizza: " + max;
    document.getElementById('worst_pizza').innerHTML = "Pire pizza: " + min;
});


fetchpromise = fetch("http://localhost:8080/vehicule/all");
fetchpromise.then(response => { return response.json(); }).then(vehicule => {
    //  console.log(delivery);
    var result = {};
    var vehicules = [];
    vehicule.forEach(function(elem) {
        /// console.log(elem);
        for (let i = 0; i < delivery[0].length; i++) {
            if (elem.name === delivery[0][i].vehicule.name) {
                // console.log("ok");
                result[elem.name] = 1;
            }
        }
        // }
    });
    for (elem in vehicule) {
        if (!(vehicule[elem].name in (result))) {
            console.log(vehicule[elem].name)
            vehicules.push(vehicule[elem].name)
        }
    }
    document.getElementById('vehicules').innerHTML = "Vehicule jamais utilisé :" + vehicules;
    //  console.log(result);
    console.log(max);
});

let top_clients = [];
fetchpromise_client = fetch("http://localhost:8080/client/all");
fetchpromise_client.then(response => {
    return response.json();
}).then(client => {
    console.log(client.length);
    for (let i = 0; i < client.length; i++) {
        //console.log(i);
        //console.log(client)
        top_clients[i] = client[i];
    }
    for (let x = 0; x < client.length-1; x++) {
        for(let y = 0; y < client.length-x-1; y++){
            if(top_clients[y].totalFacturation > top_clients[y+1].totalFacturation){
                let tmp_client = top_clients[y]
                top_clients[y] = top_clients[y+1];
                top_clients[y+1] = tmp_client;
            }
        }
    }
    for(let j = 0; j <5 && j<top_clients.length; j++){
        stats.client_stats.top_clients[j] = top_clients[j];
    }
    document.getElementById('client_stats_title').innerHTML = stats.client_stats.group_name;
    for(let w = 0; w<stats.client_stats.top_clients.length; w++)
    {
        document.getElementById('top_clients').innerHTML += stats.client_stats.top_clients[w].name+" "+stats.client_stats.top_clients[w].surname+" "+stats.client_stats.top_clients[w].totalFacturation + "\n";
    }
    
    

});