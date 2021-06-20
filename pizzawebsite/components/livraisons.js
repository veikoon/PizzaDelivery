Vue.component('livraison', {
    props: ['livraison'],
    template: `
    <div class="livraisonscomponent">
   
      <div><p><br>
      Livreur:
      {{livraison.livreur.name}} {{livraison.livreur.surname}}
      <br>
      Pizza:
      {{livraison.pizza.name}}
      <br>
     Vehicule : 
      {{livraison.vehicule.name}}
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
            const fetchpromise = fetch("http://localhost:8080/delivery/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(delivery => {
                for (let i = 0; i < delivery.length; i++) {
                    console.log(i);
                    this.livraisons.push({
                        id: delivery[i].id,
                        livreur: delivery[i].staff,
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