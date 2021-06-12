Vue.component('livreurs', {
    props: ['livreur'],
    template: `
    <div class="livreurcomponent">
        <div class = "name">
            {{livreur.name}}
        </div>
            age:
            {{livreur.age}}
            <br>
                retards : 
                {{livreur.retards}}
                <button>-</button>
                <button>+</button>
            <div class="remove">
                <button>Supprimer le livreur</button>
            </div>
        </div>
    </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        livreursid: [
            { id: 1, name: "Luc", age: 22, retards: 0 },
            { id: 2, name: "Alex", age: 22, retards: 4 },
            { id: 3, name: "Lucy", age: 22, retards: 7 },
            { id: 4, name: "Vincent", age: 22, retards: 7 },
            { id: 5, name: "Sami", age: 22, retards: 7 },
            { id: 6, name: "Hamady", age: 22, retards: 7 }
        ]
    }
})