const BASEURL = "https://pokeapi.co/api/v2/pokemon/"

function getPokemonList(){
  let listaPokemons = []
  fetch(BASEURL + '?limit=251').then( Response => {
      if (Response.status == 200){
          listaPokemons = Response.json().then( json => {json.results.map( pokemon => { console.log(pokemon.name)})
          return json})
          return listaPokemons
      }
  })
}
function showPokemon() {
  let listaPokemon = [];
  fetch(BASEURL + '?limit=251').then(response => {
    if (response.status == 200) {
      return response.json();
    }
  }).then(json => {
    listaPokemon = json.results.map(pokemon => {
      let liPokemon = document.createElement("li");
      let ID = document.createElement("h2");
      let liPokemonImg = document.createElement("img");
      let botao = document.createElement("button");
      let nome = document.createElement("h2");
      fetch(pokemon.url).then(response => {
        return response.json();
      }).then(pokemon => {
        liPokemonImg.src = pokemon.sprites.front_default;
        nome.textContent = `${pokemon.name}`
        ID.textContent= `ID - ${pokemon.id}`
      
      });
      
      nome.id ="nomeLista"
      ID.id = "idLista"
  
    liPokemon.appendChild(nome);

      liPokemon.appendChild(ID)
      liPokemon.appendChild(liPokemonImg);
      document.getElementById("lista").appendChild(liPokemon);

      botao.textContent = "Detalhes";
      botao.addEventListener("click", function () {
        detalhes(pokemon);
          desc.remove(liPokemonImg)
          desc.remove(ID)
          desc.remove(nome)
          desc.remove(altura)
          desc.remove(peso)
          desc.remove(capturar)
         
      });

      liPokemon.appendChild(botao);

      return botao;
    });

    return listaPokemon;
  });
}




function detalhes(pokemon) {
  fetch(pokemon.url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(pokemon => {
      let quantidade = 1; 
      do {
        if (quantidade > 1) {
          break;
        } else {
          quantidade = 1;
          let desc = document.createElement("div");
    let fechar = document.createElement("button");
    let liPokemonImg = document.createElement("img");
    let ID = document.createElement("h2");
    let nome = document.createElement("h2");
    let altura = document.createElement("p");
    let peso = document.createElement("p");
    let move = document.createElement("p");
    let capturar = document.createElement("img");
    
    desc.id = "desc"

   

    liPokemonImg.src = pokemon.sprites.front_shiny;
    desc.appendChild(liPokemonImg);

    liPokemonImg.id ="pokeImg"

   ID.textContent= `ID- ${pokemon.id}`
   desc.appendChild(ID)

  
    nome.textContent = `Name: ${pokemon.name}`;
    desc.appendChild(nome);

    altura.textContent = `Height: ${pokemon.height}`;
    desc.appendChild(altura);

    peso.textContent = `Weight: ${pokemon.weight}`;
    desc.appendChild(peso);

    move.textContent = `First Move: ${pokemon.abilities[0].ability.name}`;
    desc.appendChild(move);
    
    fechar.textContent = "fechar"
    desc.appendChild(fechar)
    fechar.id = "fechar"

    fechar.addEventListener("click", function(){
     desc.remove(liPokemonImg)
     desc.remove(ID)
     desc.remove(nome)
     desc.remove(altura)
     desc.remove(peso)
     desc.remove(capturar)
    });
    

    if(pokemon.name == "celebi"){
      

      capturar.src = "img/pokebola_gs.png"
  
      desc.appendChild(capturar)
  
      capturar.id = "capturar"
    
      capturar.addEventListener("click", function () {
        desc.remove(liPokemonImg);
        desc.remove(ID);
        desc.remove(nome);
        desc.remove(altura);
        desc.remove(peso);
        desc.remove(capturar);
        Time(pokemon);  
      });
     
    
    }else{

    capturar.src = "img/pokebola.png"


    desc.appendChild(capturar)

    capturar.id = "capturar"
    
    capturar.addEventListener("click", function () {
          
          desc.remove(liPokemonImg);
          desc.remove(ID);
          desc.remove(nome);
          desc.remove(altura);
          desc.remove(peso);
          desc.remove(capturar);
          Time(pokemon);
          window.location.href = '#equipe';  
    });
 
    }
    document.body.appendChild(desc);
  
  }
} while (false); 

});
}


showPokemon();






function Time(pokemon) {
  let quantidade = document.getElementById("equipe").getElementsByTagName("img").length;
  let pokemonJaNaEquipe = Array.from(document.getElementById("equipe").getElementsByTagName("h3"))
    .some(element => element.textContent === pokemon.name);

  if (quantidade < 6 && !pokemonJaNaEquipe) {
    let PokeAdd = document.createElement("img");
    let PokeName = document.createElement("h3");
    
    PokeAdd.src = pokemon.sprites.front_default;
    document.getElementById("equipe").appendChild(PokeAdd);

    PokeName.textContent = pokemon.name;
    document.getElementById("equipe").appendChild(PokeName);

    PokeAdd.addEventListener("click", function () {
      document.getElementById("equipe").removeChild(PokeAdd);
      document.getElementById("equipe").removeChild(PokeName);
    });
  } else if (quantidade >= 6) {
    alert("Equipe completa! Não é possível adicionar mais Pokémon.");
  } else {
    alert("Este Pokémon já está na sua equipe.");
  }
}


