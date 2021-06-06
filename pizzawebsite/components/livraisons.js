Vue.component('livraison', {
    props: ['livraison'],
    template: `
    <div class="livraisonscomponent">
   
      <div class = "name">{{livraison.id}} </div>
      <div><p><br>
      Livreur:
      {{livraison.livreur}}
      <br>
     Vehicule : 
      {{livraison.vehicule}}
      <br>
      Date: {{livraison.date}}
      <br>
      Retards :{{livraison.retard}}
      </p> </div>
      </div>`
})

var app = new Vue({
    el: '#livraison',
    data: {
        livraisons: [
            { id: 1, livreur: "Luc", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 2, name: "Alex", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 3, name: "Lucy", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 4, name: "Vincent", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 5, name: "Sami", vehicule: 22, date: "05/04/21", retards: 0 },
            { id: 6, name: "Hamady", vehicule: 22, date: "05/04/21", retards: 0 }
        ]
    }
})