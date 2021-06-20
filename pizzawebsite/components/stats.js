Vue.component('statscomp', {
    template : `
    <div class = "groupe">
        <p id= food_title> {{food_stats['groupename']}}  </p>
    </div>`
    

})

/*var app = new Vue({
    el: '#statistiques',
    data: {
        stats: [{
                groupe: "Nourriture",
                elements: [{
                        nom: "Meilleure pizza",
                        data: "Marguerita"
                    },
                    {
                        nom: "Pire pizza",
                        data: "Hawaienne"
                    },
                    {
                        nom: "Ingrédient favori",
                        data: "Pepperoni"
                    }

                ]
            },
            {
                groupe: "Employés",
                elements: [{
                        nom: "Meilleur employé",
                        data: "Loïc"
                    },
                    {
                        nom: "Pire employé",
                        data: "Alex"
                    }

                ]

            },
            {
                groupe: "TOP 5 CLIENTS",
                elements: [{
                        nom: "Jean pierre",
                        data: "20"
                    },
                    {
                        nom: "Alice",
                        data: "15"
                    },
                    {
                        nom: "Alex",
                        data: "12"
                    }

                ]
            },
            {
                groupe: "Véhicules n'ayant jamais servis",
                elements: [{
                    nom: "Clio",
                    data: "01"
                }]
            }
        ]
    }
})
*/

var app = new Vue({
    el: '#statistiques',
    data: {
        food_stats :
            {
                group_name : "Nourriture",
                best_pizza : "Marguerita",
                worst_pizza : "Hawaienne",
                favorite_ingredient : "Pepperoni"
            },
        staff_stats :
            {
                group_name : "Employes",
                Pire_employe : {
                    staff_name : "Cathy",
                    staff_surname : "Truong",
                    staff_nb_delay : 69
                }
            }/*,
        top_clients_stats : {
            group_name : "Top 5 clients",
        },
        unused_vehicles_stats : {
            group_name : "Vehicules n'ayant jamais servis",
        }*/
    },

    // Looking for best employee
    mounted: function() {
        this.$nextTick(function() {
            const fetchpromise = fetch("http://localhost:8080/staff/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(staff => {
                min_delay = 0;
                staff_index;
                for (let i = 0; i < staff.length; i++) {
                    console.log(i);
                    if(staff[i].nb_delay <= min_delay) {
                        min_delay = staff[i].nb_delay;
                        staff_index = i;
                    }
                }
                this.stats["staff"]["best_staff"] = {
                    staff_name: staff[staff_index].name,
                    staff_surname: staff[staff_index].surname
                }
            });
        })
    }
})