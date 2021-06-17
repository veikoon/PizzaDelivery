var app = new Vue({
    el: '#ingredientsdropdown',
    selected: 1,
    data: {
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
    },
    methods: {
        passData: function() {
            this.$emit('passData')
        }
    }
})