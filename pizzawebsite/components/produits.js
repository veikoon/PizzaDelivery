Vue.component('produit', {
    props: ['produit'],
    template: `
    <div class="produit">
        <div class="texte">
            <div class="nom_pizza">
                <h1>
                    <font color="black">{{produit.nomPizza}}</font>
                </h1>
            </div>
            <div class="basic_info">
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
            <button>Supprimer la pizza</button>
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
                console.log(pizza);
                console.log(pizza.length);
                for (let i = 0; pizza.length; i++) {
                    this.produits.push({
                        nomPizza: pizza[i].name,
                        id: pizza[i].id
                    })
                }
            });
        })
    }
})