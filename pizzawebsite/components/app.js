Vue.component('livreurs', {
    props: ['livreur'],
    template: `<div>
    name:
      {{livreur.name}}
      age:
      {{livreur.age}}
      retards :
      {{livreur.retards}}
      </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        livreursid: [
            { id: 1, name: "luc", age: 22, retards: 0 },
            { id: 2, name: "alex", age: 22, retards: 4 },
            { id: 3, name: "lucy", age: 22, retards: 7 }
        ]
    }
})