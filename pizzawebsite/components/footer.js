Vue.component('footercomp', {
    template: `
    <div class="mecenes">   
    <div class = "logoesiee">   
    <img src="../resources/logo_esiee.png" href="https://www.esiee.fr/" width = "100%">
        </div>
    <a href="https://www.esiee.fr/">
        <p>Projet base de donnees - E3FI </p>
        <br>
        <p> MONNOT Vincent - VO Alex - TRUONG Cathy </p>
    </a>
    </div>`
})

var footer = new Vue({
    el: '#footer',
})