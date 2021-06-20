function getsizes() {
    let data = [],
        fetchpromise = fetch("http://localhost:8080/size/all")
    fetchpromise.then(response => {
        return response.json();
    }).then(size => {
        for (let i = 0; i < size.length; i++) {
            console.log(ingredient[i].name);
            this.data.push({
                name: ingredient[i].name,
                id: ingredient[i].id,
                price: size[i].price
            })
        }
    });
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(data[0])
    window.document.getElementById("sizes").innerText = "value div";
    s.value = data;
}