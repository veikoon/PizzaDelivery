function loadingredients() {
    const fetchpromise = fetch("http://localhost:8080/ingredient/all");
    fetchpromise.then(response => {
        return response.json();
    }).then(ingredient => {
        for (let i = 0; i < ingredient.length; i++) {
            console.log(ingredient[i].name);
            this.ingredients.push({
                name: ingredient[i].name,
                id: ingredient[i].id
            })
        }
    });
}