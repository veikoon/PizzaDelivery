Vue.component('clients', {
    props: ['client'],
    template: `
    <div class="clientscomponent">
        <div class = "name">
            {{client.prenom}} {{client.nom}}
        </div>
        Id:
        {{client.id}}
        <br>
        Adresse:
        {{client.adresse}}
        <br>
        Solde:
        {{client.solde}}
        <br>
        Facturation:
        {{client.facturation}}
            <div class="remove">
                <button>Supprimer le compte client</button>
            </div>
        </div>
    </div>`
})

var app = new Vue({
    el: '#clients',
    data: {
        clients: [
            { id: 1, prenom: "jean-bolo", nom: "okok", adresse: "146 avenue charles de gaulle, 24 résidence de la canarie, 60260 LAMORLAY", telephone: "0651603940", solde: "100", facturation: "130" },
            { id: 2, prenom: "jean-bolo", nom: "okok", adresse: "146 avenue charles de gaulle, 24 résidence de la canarie, 60260 LAMORLAY", telephone: "0651603940", solde: "100", facturation: "130" },
            { id: 3, prenom: "jean-bolo", nom: "okok", adresse: "146 avenue charles de gaulle, 24 résidence de la canarie, 60260 LAMORLAY", telephone: "0651603940", solde: "100", facturation: "130" },
            { id: 4, prenom: "jean-bolo", nom: "okok", adresse: "146 avenue charles de gaulle, 24 résidence de la canarie, 60260 LAMORLAY", telephone: "0651603940", solde: "100", facturation: "130" },
            { id: 5, prenom: "jean-bolo", nom: "okok", adresse: "146 avenue charles de gaulle, 24 résidence de la canarie, 60260 LE MARLAY", telephone: "0651603940", solde: "100", facturation: "130" },
            { id: 6, prenom: "jean-bolo", nom: "okok", adresse: "146 avenue charles de gaulle, 24 résidence de la canarie, 60260 LE MARLAY", telephone: "0651603940", solde: "100", facturation: "130" }
        ]
    }
})