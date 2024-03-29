Vue.component('headercomp', {
    template: `
    <header>
        <div id="titre_principal">
        <div id="logo" onclick="window.location.href='index.html'">
        <img src="../resources/logo.png" alt="Logo" />
    </div>
        </div>
        <div id="nav-container">
            <ul id="main-menu">
                <li id="accueil"><a href="index.html">Accueil</a></li>
                <li id="produits"><a href="produits.html">Produits</a></li>
                <li id="livreurs"><a href="livreurs.html">Interne</a></li>
                <li id="commandes"><a href="livraisons.html">Commandes</a></li>
                <li id="Statistiques"><a href="statistiques.html">Statistiques</a></li>
            </ul>
    </div>
    </header>`
})

var footer = new Vue({
    el: '#header',
})