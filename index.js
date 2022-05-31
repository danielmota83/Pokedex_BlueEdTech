const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);


let pokedex = {
    "pokemon": [{
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.71 m",
      "weight": "6.9 kg",
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      
    }, {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.99 m",
      "weight": "13.0 kg",
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      
    }, {
      "id": 3,
      "num": "003",
      "name": "Venusaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "2.01 m",
      "weight": "100.0 kg",
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      
    }, {
      "id": 4,
      "num": "004",
      "name": "Charmander",
      "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
      "type": [
        "Fire"
      ],
      "height": "0.61 m",
      "weight": "8.5 kg",
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
      
    }, {
      "id": 5,
      "num": "005",
      "name": "Charmeleon",
      "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
      "type": [
        "Fire"
      ],
      "height": "1.09 m",
      "weight": "19.0 kg",
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
      
    }, {
      "id": 6,
      "num": "006",
      "name": "Charizard",
      "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
      "type": [
        "Fire",
        "Flying"
      ],
      "height": "1.70 m",
      "weight": "90.5 kg",
      "weaknesses": [
        "Water",
        "Electric",
        "Rock"
      ],
      
    }, {
      "id": 7,
      "num": "007",
      "name": "Squirtle",
      "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
      "type": [
        "Water"
      ],
      "height": "0.51 m",
      "weight": "9.0 kg",
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      
    }, {
      "id": 8,
      "num": "008",
      "name": "Wartortle",
      "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
      "type": [
        "Water"
      ],
      "height": "0.99 m",
      "weight": "22.5 kg",
      "weaknesses": [
        "Electric",
        "Grass"
      ],
     
    }, {
      "id": 9,
      "num": "009",
      "name": "Blastoise",
      "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
      "type": [
        "Water"
      ],
      "height": "1.60 m",
      "weight": "85.5 kg",
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      
    }, {
      "id": 10,
      "num": "010",
      "name": "Caterpie",
      "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
      "type": [
        "Bug"
      ],
      "height": "0.30 m",
      "weight": "2.9 kg",
      "weaknesses": [
        "Fire",
        "Flying",
        "Rock"
      ],
      
    }, {
      "id": 11,
      "num": "011",
      "name": "Metapod",
      "img": "http://www.serebii.net/pokemongo/pokemon/011.png",
      "type": [
        "Bug"
      ],
      "height": "0.71 m",
      "weight": "9.9 kg",
      "weaknesses": [
        "Fire",
        "Flying",
        "Rock"
      ],
      
    }, {
      "id": 12,
      "num": "012",
      "name": "Butterfree",
      "img": "http://www.serebii.net/pokemongo/pokemon/012.png",
      "type": [
        "Bug",
        "Flying"
      ],
      "height": "1.09 m",
      "weight": "32.0 kg",
      "weaknesses": [
        "Fire",
        "Electric",
        "Ice",
        "Flying",
        "Rock"
      ],
      
    }, ]
  }

const pokedexArray = pokedex.pokemon;


app.get('/', (req, res) => {
    res.render('index.ejs', {
        pokedexArray
    })
})

app.get('/detalhes/:id', (req, res) => {
    const pokemonAtual = pokedexArray.filter((element)=> element.id == req.params.id)
    res.render('detalhes.ejs', {
        pokemonAtual
    })
})

app.get('/index', (req, res) =>{
  res.render('index.ejs',{
    pokedexArray
  })
})

app.get('/cadastro', (req, res) =>{
  res.render('cadastro.ejs')
})

app.post("/cadastro", (req, res) => {
  const pokemon = req.body;
  pokemon.id = (pokedexArray.length / 100 + +0.01).toFixed(2);
  pokedexArray.push(pokemon);
  message = `Pokemon Cadastrado!`;
  res.redirect("/");
});
