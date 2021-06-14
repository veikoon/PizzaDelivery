Vue.component('commande', {
    props: ['commande'],
    template: `
    <div class="commandecomponent">
   
      <div class = "name">{{commande.id}} </div>
      <div><p><br>
      Livreur:
      {{commande.livreur}}
      <br>
        Pizza:
        {{commande.pizza}}
        <br>
     Vehicule : 
      {{commande.vehicule}}
      <br>
      Date: {{commande.date}}
      <br>
      Retards :{{commande.retard}}
      </p> </div>
      <div class="remove">
      <button>Supprimer la livraison</button>
      </div>
      </div>`
})

var app = new Vue({
    el: '#commande',
    data: {
        commandes: [
            { id: 1, livreur: "Luc", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 2, livreur: "Alex", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 3, livreur: "Lucy", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 4, livreur: "Vincent", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 5, livreur: "Sami", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 6, livreur: "Hamady", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 }
        ]
    }
})