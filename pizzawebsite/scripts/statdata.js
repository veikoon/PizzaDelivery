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
        console.log(i);
        if (staff[i].nb_delay < min_delay) {
            min_delay = staff[i].nb_delay;
            best_staff_index = i;
        }
        if (staff[i].nb_delay > max_delay) {
            max_delay = staff[i].nb_delay;
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
    console.log(stats.staff_stats.best_staff.staff_name);
    console.log(stats.staff_stats.worst_staff);
    document.getElementById('food_stats_title').innerHTML = stats.food_stats.group_name;
    document.getElementById('staff_stats_title').innerHTML = stats.staff_stats.group_name;
    document.getElementById('best_staff').innerHTML = stats.staff_stats.best_staff.staff_name + " " + stats.staff_stats.best_staff.staff_surname;
    document.getElementById('worst_staff').innerHTML = stats.staff_stats.worst_staff.staff_name + " " + stats.staff_stats.worst_staff.staff_surname;
});

//document.getElementById('top_clients_title').innerHTML = data["client_stats"]["group_name"];
//document.getElementById('vehicle_stats_title').innerHTML = data["vehicle_stats"]["group_name"];