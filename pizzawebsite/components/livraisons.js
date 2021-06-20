Vue.component('livraison', {
    props: ['livraison'],
    template: `
    <div class="livraisonscomponent">
   
      <div><p><br>
      Livraison : {{livraison.id}}
      <br>
      Livreur:
      {{livraison.livreur.name}} {{livraison.livreur.surname}}
      <br>
      Client:
      {{livraison.client.name}} {{livraison.client.surname}}
      <br>
      Pizza:
      {{livraison.pizza.name}} {{livraison.size.name}}
      <br>
      Prix:
      {{livraison.size.price}} $
      <br>
     Vehicule : 
      {{livraison.vehicule.name}}
      <br>
      Date: {{livraison.date}}
      <br>
      Retard : {{livraison.retard}}
      </p> </div>
      </div>
      `
})

var app = new Vue({
    el: '#livraison',
    data: {
        livraisons: []
    },
    methods: {
        signaldelay: function() {
            console.log("delaya");
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            const fetchpromise = fetch("http://localhost:8080/delivery/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(delivery => {
                for (let i = 0; i < delivery.length; i++) {
                    console.log(i);
                    console.log("late : " + delivery[i].late)
                    this.livraisons.push({
                        id: delivery[i].id,
                        livreur: delivery[i].staff,
                        client: delivery[i].client,
                        vehicule: delivery[i].vehicule,
                        date: delivery[i].date,
                        pizza: delivery[i].pizza,
                        size: delivery[i].size,
                        retard: delivery[i].late
                    })
                }
            });
        })
    }
})