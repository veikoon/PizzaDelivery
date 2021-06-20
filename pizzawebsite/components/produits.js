Vue.component('produit', {
    props: ['produit', 'sizes'],
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
                </div>
                <div class="prix" v-for="size in sizes" v-bind:value="size.id"> taille:
                    <ul id="taille">{{size.taille}} ............... {{size.price}}
                    </ul>
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
    data: function() {
        return {
            produits: [],
            sizes: [],
        }
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

        const fetchpromise2 = fetch("http://localhost:8080/size/all");
        fetchpromise2.then(response => {
            return response.json();
        }).then(size => {
            for (let i = 0; i < size.length; i++) {
                console.log(size[i].name);
                this.sizes.push({
                    taille: size[i].name,
                    id: size[i].id,
                    price: size[i].price
                })
            }
        });
    }
})