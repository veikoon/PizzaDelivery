Vue.component('stat', {
    props: ['stats'],
    template: `
    <div class="statcomponent">
        <div class = "groupe">
            {{stats.groupe}}
        </div>
        <hr>
        <table>
        <tbody>
            
        <div v-for="elem in stats.elements" v-bind:key="elem.nom" v-bind:elem='stats.elements' class="data">
        <tr>
            <td>{{elem.nom}} </td>
            <td>{{elem.data}} </td>
        </tr>
        </div>
        
        </tbody>
        </table>
        <br>
    </div>`
})

var app = new Vue({
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