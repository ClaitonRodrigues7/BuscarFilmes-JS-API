function main (){
    const apikey = 'a3c94e14';
    const form = document.querySelector("form");
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        const pesquisa = e.target.pesquisa.value;

        if(pesquisa === ""){
            alert("Informe o nome do filme!");
            return;
        }

        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${pesquisa}`)
        .then(result => result.json())
        .then(json => carregaLista(json));
    })

    const carregaLista = (json) => {
        const lista = document.querySelector('.films-list');
        lista.innerHTML = "";

        if (json.Reponse === 'False') {
            alert('Nenhum filme encontrado!');
            return;
        }

        json.Search.forEach(element => {
            let item = document.createElement("div");
            item.classList.add("item");

            item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2>`;
            lista.appendChild(item);
        });
    }

}
main();