Vue.component('vehicules', {
    props: ['vehicule'],
    template: `
    <div class="vehiculecomponent">
        <div class = "name">
            <p id="vehiculename">{{vehicule.name}}</p> 
        </div>
            id:
            {{vehicule.id}}
            <div class="remove">
                <button onclick="deletevehicule(document.getElementById('vehiculename').value)">Supprimer le Vehicule</button>
            </div>
        </div>
    </div>`
})

var app = new Vue({
    el: '#vehicule',
    data: {
        vehicules: []
    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/vehicule/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(vehicule => {
                for (let i = 0; i < vehicule.length; i++) {
                    console.log(vehicule[i].name);
                    this.vehicules.push({
                        id: vehicule[i].id,
                        name: vehicule[i].name,
                    })
                }
            });
        })
    }
})