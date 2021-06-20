Vue.component('clients', {
    props: ['client'],
    template: `
    <div class="clientscomponent">
        <div class = "name">
            {{client.name}} {{client.surname}}
        </div>
        <br>
        Adresse:
        {{client.address}}
        <br>
        Commandes:
        {{client.order}}
        <br>
        Solde:
        {{client.balance}}
        <br>
        Facturation:
        {{client.facturation}}
        <br>
        Droit a une pizza gratuite : {{client.pizza_gratuite}}
    </div>`
})

var app = new Vue({
    el: '#clients',
    data: {
        clients: []
    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/client/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(client => {
                for (let i = 0; i < client.length; i++) {
                    let freepizza = false;
                    if(client[i].nbOrder > 10){
                        freepizza=true;
                    }
                    console.log(client[i].name);
                    this.clients.push({
                        id: client[i].id,
                        name: client[i].name,
                        surname: client[i].surname,
                        age: client[i].age,
                        address: client[i].address,
                        phone: client[i].phone,
                        balance: client[i].balance,
                        facturation: client[i].totalFacturation,
                        order: client[i].nbOrder,
                        pizza_gratuite : freepizza
                    })
                }
            });
        })
    }
})