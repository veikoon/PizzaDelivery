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
        clients: []
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
        staff_nb_delay: staff[best_staff_index].nb_delay
    }

    stats.staff_stats.worst_staff = {
        staff_name: staff[worst_staff_index].name,
        staff_surname: staff[worst_staff_index].surname,
        staff_nb_delay: staff[worst_staff_index].nb_delay
    }
    document.getElementById('food_stats_title').innerHTML = stats.food_stats.group_name;
    document.getElementById('staff_stats_title').innerHTML = stats.staff_stats.group_name;
    document.getElementById('best_staff').innerHTML = stats.staff_stats.best_staff.staff_name + " " + stats.staff_stats.best_staff.staff_surname;
    document.getElementById('worst_staff').innerHTML = stats.staff_stats.worst_staff.staff_name + " " + stats.staff_stats.worst_staff.staff_surname;
});

var delivery = [];
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
    document.getElementById('vehiculess').innerHTML = "Vehicule jamais utilisé :" + vehicules;
    //  console.log(result);
});