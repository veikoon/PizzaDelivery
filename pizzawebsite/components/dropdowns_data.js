var app = new Vue({
    el: '#ingredientsdropdown',

    data: {
        selected: 1,
        ingredients: []
    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/ingredient/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(ingredient => {
                for (let i = 0; i < ingredient.length; i++) {
                    console.log(ingredient[i].name);
                    this.ingredients.push({
                        name: ingredient[i].name,
                        id: ingredient[i].id
                    })
                }
            });
        })
    }
})

var app2 = new Vue({
    el: '#livreursdropdown',

    data: {
        selected: 1,
        livreurs: []
    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/staff/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(staff => {
                for (let i = 0; i < staff.length; i++) {
                    console.log(staff[i].name);
                    this.livreurs.push({
                        id: staff[i].id,
                        name: staff[i].name,
                        surname: staff[i].surname,
                        retard: staff[i].nbDelay,
                        age: staff[i].age,
                        address: staff[i].address,
                        phone: staff[i].phone,
                    })
                }
            });
        })
    }
})

var app3 = new Vue({
    el: '#vehiculesdropdown',
    data: {
        selected: 1,
        vehicules: []
    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/vehicule/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(vehicule => {
                for (let i = 0; i < vehicule.length; i++) {
                    console.log(vehicule[i].name);
                    this.vehicules.push({
                        id: vehicule[i].id,
                        name: vehicule[i].name,
                    })
                }
            });
        })
    }
})