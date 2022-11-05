let nextPage = null;
let prevPage = null;

function getPokemons(pageUrl = "https://pokeapi.co/api/v2/pokemon/") {
    let request = new XMLHttpRequest();
    request.open("get", pageUrl, true);
    request.send();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            nextPage = response.next;
            prevPage = response.previous;
            console.log({ response });
            const results = response.results;
            let pokemonContainer = document.getElementById("pokemon-table");
            for (let i = 0; i < results.length; i++) {
                let pokemon = results[i];
                console.log(pokemon);
            
                // solo funcionaria hasta 100
                let imprimir = pokemon.url.substring(pokemon.url.length - 3);
                var strNewWebsiteName = imprimir.replace("/", "");  
                var strNewWebsiteName2 = strNewWebsiteName.replace("/", "");

                pokemonContainer.innerHTML += "<tr title='" + pokemon.name + "'><td>" + strNewWebsiteName2 + "</td> <td>" + pokemon.name + "</td><td>  <button class='btn btn-primary' onclick =" + 'showPokemon("'+pokemon.url+'") '+ ">mas</button> </td></tr><br />";
            }
        }
    };
}


function showPokemon(url) {
    let pokemonContainer = document.getElementById("body");
        pokemonContainer.innerHTML = "";
        let request = new XMLHttpRequest();
        request.open("get", url, true);
        request.send();

        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const response = JSON.parse(this.responseText);

                console.log( response);
                pokemonContainer.innerHTML +=" <div class='card' style='width: 18rem;'> <img src='"+ response.sprites.front_default +"' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"+response.name+"</h5><p class='card-text'>Experiencia: "+response.base_experience+"</p></div><button class='btn btn-primary' onclick =" + 'location.reload()'+ ">Atras</button></div>";
              
            }
        };
  }



function getNextPage() {
    console.log("Next: " + nextPage)
    let pokemonContainer = document.getElementById("pokemon-table");
    pokemonContainer.innerHTML = "";
    getPokemons(nextPage);
}


function getPrevPage() {
    if (prevPage != null) {
        let pokemonContainer = document.getElementById("pokemon-table");
        pokemonContainer.innerHTML = "";
        getPokemons(prevPage);
    } else {
        console.log("No hay página anterior");
    }
}
