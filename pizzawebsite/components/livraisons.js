Vue.component('livraison', {
    props: ['livraison'],
    template: `
    <div class="livraisonscomponent">
   
      <div><p><br>
      <div id="livraison_id">
        Livraison n. {{livraison.id}}
      </div>
      <br>
      <strong>Livreur:</strong>
      {{livraison.livreur.name}} {{livraison.livreur.surname}}
      <br>
      <strong>Client:</strong>
      {{livraison.client.name}} {{livraison.client.surname}}
      <br>
      <strong>Pizza:</strong>
      {{livraison.pizza.name}} {{livraison.size.name}}
      <br>
      <strong>Prix:</strong>
      {{livraison.size.price}} $
      <br>
      <strong>Vehicule : </strong>
      {{livraison.vehicule.name}}
      <br>
      <strong>Date: </strong>{{livraison.date}}
      <br>
      <strong>Retard : </strong>{{livraison.retard}}
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