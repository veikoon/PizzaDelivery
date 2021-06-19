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
        livraisons: []
    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/delivery/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(delivery => {
                for (let i = 0; i < delivery.length; i++) {
                    console.log(i);
                    this.livraisons.push({
                        id: delivery[i].id,
                        livreur: delivery[i].name,
                        client: delivery[i].client,
                        vehicule: delivery[i].vehicule,
                        date: delivery[i].date,
                        pizza: delivery[i].pizza,
                        size: delivery[i].size
                    })
                }
            });
        })
    }
})