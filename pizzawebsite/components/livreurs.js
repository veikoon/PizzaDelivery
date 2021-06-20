Vue.component('livreurs', {
    props: ['livreur'],
    template: `
    <div class="livreurcomponent">
        <div class = "name">
            <p id="staffname">{{livreur.name}}</p> {{livreur.surname}}
        </div>
            <strong>Age:</strong>
            {{livreur.age}}
            <br>
            <strong>Retards : </strong>
            {{livreur.retard}}
            <br>
            <strong>Phone : </strong>
            {{livreur.phone}}
            <br>
            <strong>Adresse : </strong>
            {{livreur.address}}
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