Vue.component('ingredient', {
    props: ['ingredient'],
    template: `
    <div class="ingredientcomponent">
        <div class = "name">
            {{ingredient.nom}}
        </div>
    </div>`
})

var app = new Vue({
    el: '#ingredients',
    data: {
        ingredients: [
            { nom: "Pepperoni" },
            { nom: "Pepperoni" },
            { nom: "Pepperoni" },
            { nom: "Pepperoni" },
            { nom: "Pepperoni" },
            { nom: "Pepperoni" }
        ]
    }
})