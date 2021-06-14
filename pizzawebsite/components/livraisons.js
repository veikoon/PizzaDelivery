Vue.component('livraison', {
    props: ['livraison'],
    template: `
    <div class="livraisonscomponent">
   
      <div class = "name">{{livraison.id}} </div>
      <div><p><br>
      Livreur:
      {{livraison.livreur}}
      <br>
      Pizza:
      {{livraison.pizza}}
      <br>
     Vehicule : 
      {{livraison.vehicule}}
      <br>
      Date: {{livraison.date}}
      <br>
      Retards :{{livraison.retard}}
      </p> </div>
      <div class="remove">
      <button>Supprimer la livraison</button>
      </div>
      </div>`
})

var app = new Vue({
    el: '#livraison',
    data: {
        livraisons: [
            { id: 1, livreur: "Luc", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 2, livreur: "Alex", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 3, livreur: "Lucy", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 4, livreur: "Vincent", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 5, livreur: "Sami", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 6, livreur: "Hamady", pizza: "4 fromages", vehicule: 22, date: "05/04/21", retards: 0 }
        ]
    }
})