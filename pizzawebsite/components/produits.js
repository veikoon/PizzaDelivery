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
    </div>`
})

var app = new Vue({
    el: '#produit',
    data: {
        produits: [
            { nomPizza: "La Pepperoni", prixNaine: 5, prixHumaine: 13, prixOgresque: 20, descPizza: "Pepperoni et mozzarella."},
            { nomPizza: "La Forestière", prixNaine: 5, prixHumaine: 13, prixOgresque: 20, descPizza: "Jambon, mozzarella, champignon, poivre."},
            { nomPizza: "La Végétarienne", prixNaine: 5, prixHumaine: 13, prixOgresque: 20, descPizza: "Tomates, mozzarella, olives, basilic, poivre."},
            { nomPizza: "La Hawaiienne", prixNaine: 5, prixHumaine: 13, prixOgresque: 20, descPizza: "Jambon, mozzarella, Ananas."}
        ]
    }
})