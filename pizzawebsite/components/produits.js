Vue.component('produit', {
    props: ['produit'],
    template: `
    <div class="produit">
        <div class="texte">
            <div class="nom_pizza">
                <h1>
                    <font color="black" id="nompizza">{{produit.nomPizza}}</font>
                </h1>
            </div>
            <div class="basic_info">
                <div class="ingredients" v-for="ingredient in produit.ingredients" v-bind:value="ingredient.id">
                {{ingredient.name}},
                </div> <br>
                <div class="prix">
                    <ul id="taille">
                        <li id="naine">Naine....................{{produit.prixNaine}}€</li>
                        <li id="humaine">Humaine.............{{produit.prixHumaine}}€</li>
                        <li id="ogresque">Ogresque............{{produit.prixOgresque}}€</li>

                    </ul>
                </div>
                <div class="description">
                {{produit.descPizza}}
                </div>
            </div>
        </div>
        <div class="remove">
            <button onclick="deletepizza()">Supprimer la pizza</button>
        </div>
    </div>`
})

var app = new Vue({
    el: '#produit',
    data: {
        produits: []
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
                    console.log(i);
                    this.produits.push({
                        nomPizza: pizza[i].name,
                        id: pizza[i].id,
                        ingredients: pizza[i].ingredients
                    })
                }
            });
        })
    }
})