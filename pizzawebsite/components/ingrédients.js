Vue.component('ingredient', {
    props: ['ingredient'],
    template: `
    <div class="ingredientcomponent">
        <div class = "name">
            {{ingredient.name}}
        </div>
    </div>`
})

var app = new Vue({
    el: '#ingredients',
    selected: 1,
    data: function() {
        return {
            ingredients: []
        }
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