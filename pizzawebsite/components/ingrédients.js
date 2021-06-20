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
    data: {
        ingredients: [{ name: "test 1", id: 1 }]

    },
    mounted: function() {
        this.$nextTick(function() {
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
                console.log(this.ingredients[0])
            });
        })
    }
})