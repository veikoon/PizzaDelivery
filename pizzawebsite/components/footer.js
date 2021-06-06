Vue.component('footercomp', {
    template: `
    <div class="mecenes">
        <a href="https://www.esiee.fr/">
            <p>qqchose a mettre dans le footer. </p>
        </a>
    </div>`
})

var footer = new Vue({
    el: '#footer',
})