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
                {{produit.description}}
                </div>
            </div>
        </div>
    </div>`
})

var app = new Vue({
    el: '#produit',
    data: {
        produits: [
            { nomPizza: "La Pepperoni", prixNaine: 5, prixHumaine: 13, prixOgresque: 20, description: "Pepperoni et mozzarella.", pizzaPicture: "../resources/pizzas/pizza1.png"},
            { nomPizza: "La Forestière", prixNaine: 5, prixHumaine: 13, prixOgresque: 20, description: "Jambon, mozzarella, champignon, poivre.", pizzaPicture: "../resources/pizzas/pizza2.png"},
            { nomPizza: "La Végétarienne", prixNaine: 5, prixHumaine: 13, prixOgresque: 20, description: "Tomates, mozzarella, olives, basilic, poivre.", pizzaPicture: "../resources/pizzas/pizza3.png"},
            { nomPizza: "La Hawaiienne", prixNaine: 5, prixHumaine: 13, prixOgresque: 20, description: "Jambon, mozzarella, Ananas.", pizzaPicture: "../resources/pizzas/pizza4.png"}
        ]
    }
})