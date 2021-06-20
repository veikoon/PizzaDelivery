Vue.component('livreurs', {
    props: ['livreur'],
    template: `
    <div class="livreurcomponent">
        <div class = "name">
            <p id="staffname">{{livreur.name}}</p> {{livreur.surname}}
        </div>
            Age:
            {{livreur.age}}
            <br>
            Retards : 
            {{livreur.retard}}
            <br>
            Phone : 
            {{livreur.phone}}
            <br>
            Adresse : 
            {{livreur.address}}
            <div class="remove">
                <button onclick="deletelivreur(document.getElementById('staffname').value)">Supprimer le livreur</button>
            </div>
        </div>
    </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        livreurs: []
    },
    mounted: function() {
        this.$nextTick(function() {
            pizzaname = "";
            pizzastatus = "";
            const fetchpromise = fetch("http://localhost:8080/staff/all");
            fetchpromise.then(response => {
                return response.json();
            }).then(staff => {
                for (let i = 0; i < staff.length; i++) {
                    console.log(staff[i].name);
                    this.livreurs.push({
                        id: staff[i].id,
                        name: staff[i].name,
                        surname: staff[i].surname,
                        retard: staff[i].nbDelay,
                        age: staff[i].age,
                        address: staff[i].address,
                        phone: staff[i].phone,


                    })
                }
            });
        })
    }
})