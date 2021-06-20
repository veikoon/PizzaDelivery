var app = new Vue({
    el: '#ingredientsdropdown',

    data: {
        selected: [],
        ingredients: []
    },
    methods: {},
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
            this.selected.push(ingredient[0].name);
        })
    }
})

var app2 = new Vue({
    el: '#livreursdropdown',

    data: {
        selected: "",
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
        selected: "",
        vehicules: []
    },
    methods: {

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


var app4 = new Vue({
    el: '#pizzasdropdown',
    data: {
        selected: 1,
        pizzas: []
    },
    methods: {

    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/pizza/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(pizza => {
                for (let i = 0; i < pizza.length; i++) {
                    console.log(pizza[i].name);
                    this.pizzas.push({
                        id: pizza[i].id,
                        name: pizza[i].name,
                    })
                }
            });
        })
    }
})

var app5 = new Vue({
    el: '#clientsdropdown',
    data: {
        selected: 1,
        clients: []
    },
    methods: {

    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/client/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(client => {
                for (let i = 0; i < client.length; i++) {
                    this.clients.push({
                        id: client[i].id,
                        name: client[i].name,
                    })
                }
            });
        })
    }
})

var app6 = new Vue({
    el: '#sizesdropdown',
    data: {
        selected: 1,
        sizes: []
    },
    methods: {

    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/size/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(size => {
                for (let i = 0; i < size.length; i++) {
                    this.sizes.push({
                        id: size[i].id,
                        name: size[i].name,
                    })
                }
            });
        })
    }
})