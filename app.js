// declaro las variables les asigno el id se su etiqueta de html
let nombre = document.getElementById("nombre");
let idPokemon = document.getElementById("idPokemon");
let imagen = document.getElementById("imagen");
let ataque = document.getElementById("ataque");
let ataque2 = document.getElementById("ataque2");
//entrada de datos
let tipoPoke = document.getElementById("tipoDePokemon");
let colorDeOrilla = document.querySelector(".container-card2");

document.addEventListener("DOMContentLoaded", () => {
  const numeroPokemon = Math.floor(Math.random() * (10 - 1)) + 1;
  PeticionApi(numeroPokemon);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const numeroPokemon = Math.floor(Math.random() * (10 - 1)) + 1;
    PeticionApi(numeroPokemon);
  });
});

const PeticionApi = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(id, "estos son los datos del poke", data);
    console.log(data.skill);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      numeroPokemon: data.id,
      nombre: data.name,
      movimientos: data.moves[0].move.name,
      movimientos1: data.moves[1].move.name,
      tipoPokemon: data.types[0].type.name,
    };
    idPokemon.innerText = pokemon.numeroPokemon;
    nombre.innerText = pokemon.nombre;
    imagen.src = pokemon.img;
    (ataque.innerText = pokemon.movimientos),
      (ataque2.innerText = pokemon.movimientos1),
      (tipoPoke.innerHTML = pokemon.tipoPokemon);

    switch (pokemon.tipoPokemon) {
      case "fire":
        imagen.style.background = 'url("img/fire.jpg")'; // Cambia 'img/agua.webp' por la nueva ruta de la imagen de fondo
        colorDeOrilla.style.backgroundColor = "red"; // Cambia 'red' al color que desees
        break;
      case "water":
        imagen.style.background = 'url("img/agua.webp")';
        colorDeOrilla.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen.style.background = 'url("img/planta.webp")';
        colorDeOrilla.style.backgroundColor = "green";
        break;
      case "electric":
        imagen.style.background = 'url("img/electrico.webp")';
        colorDeOrilla.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen.style.background = 'url("img/hielo.webp")';
        colorDeOrilla.style.backgroundColor = "#02779e";
        break;
      case "fighting":
        imagen.style.background = 'url("img/Lucha.webp")';
        colorDeOrilla.style.backgroundColor = "#FE8383";
        break;
      case "poison":
        imagen.style.background = 'url("img/veneno.webp")';
        colorDeOrilla.style.backgroundColor = "#1CC052";
        break;
      case "Flying":
        imagen.style.background = 'url("img/cielo.webp")';
        colorDeOrilla.style.backgroundColor = "#1CC052";
        break;
      case "dragon":
        imagen.style.background = 'url("img/Dragón.jpg")';
        colorDeOrilla.style.backgroundColor = "purple";
        break;
      case "dark":
        imagen.style.background = 'url("img/dark.jpg")';
        colorDeOrilla.style.backgroundColor = "#29768E";
        break;
      case "fairy":
        imagen.style.background = 'url("img/magia.jpg")';
        colorDeOrilla.style.backgroundColor = "#9061c2";
        break;
      case "steel":
        imagen.style.background = 'url("img/acero.jpg")';
        colorDeOrilla.style.backgroundColor = "#8d9c9d";
        break;
      case "psychic":
        imagen.style.background = 'url("img/Psychic - Psíquico.jpg")';
        colorDeOrilla.style.backgroundColor = "#849112";
        break;
      case "bug":
        imagen.style.background = 'url("img/bug.webp")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "ghost":
        imagen.style.background = 'url("img/Ghost - Fantasma.jpg")';
        colorDeOrilla.style.backgroundColor = "#306CBD";
        break;
      case "rock":
        imagen.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "ground":
        imagen.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla.style.backgroundColor = "#c3b68c";
        break;
      case "normal":
        imagen.style.background = 'url("img/normal.jpg")';
        colorDeOrilla.style.backgroundColor = "#9A4E00";
        break;
      default:
        imagen.style.background = 'url("img/humo.gif")';
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

// declaro para la card 2

let nombre2 = document.getElementById("nombre2");
let idPokemon2 = document.getElementById("idPokemon2");
let imagen2 = document.getElementById("imagen2");
let ataqueNumero2 = document.getElementById("ataqueNumero2");
let ataqueNumero22 = document.getElementById("ataqueNumero22");
//entrada de datos
let tipoPoke2 = document.getElementById("tipoDePokemon2");
let colorDeOrilla2 = document.querySelector(".container-card22");

document.addEventListener("DOMContentLoaded", () => {
  const numeroPokemon = Math.floor(Math.random() * (20 - 10)) + 10;
  PeticionApiDos(numeroPokemon);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn2");

  btn.addEventListener("click", () => {
    const numeroPokemon = Math.floor(Math.random() * (20 - 10)) + 10;
    PeticionApiDos(numeroPokemon);
  });
});

const PeticionApiDos = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(id, "estos son los datos del poke", data);
    console.log(data.skill);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      numeroPokemon: data.id,
      nombre: data.name,
      movimientos: data.moves[0].move.name,
      movimientos1: data.moves[1].move.name,
      tipoPoke2: data.types[0].type.name,
    };
    idPokemon2.innerText = pokemon.numeroPokemon;
    nombre2.innerText = pokemon.nombre;
    imagen2.src = pokemon.img;
    (ataqueNumero2.innerText = pokemon.movimientos),
      (ataqueNumero22.innerText = pokemon.movimientos1),
      (tipoPoke2.innerHTML = pokemon.tipoPoke2);

    switch (pokemon.tipoPoke2) {
      case "fire":
        imagen2.style.background = 'url("img/fire.jpg")';
        colorDeOrilla2.style.backgroundColor = "red";
        break;
      case "water":
        imagen2.style.background = 'url("img/agua.webp")';
        colorDeOrilla2.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen2.style.background = 'url("img/planta.webp")';
        colorDeOrilla2.style.backgroundColor = "green";
        break;
      case "electric":
        imagen2.style.background = 'url("img/electrico.webp")';
        colorDeOrilla2.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen2.style.background = 'url("img/hielo.webp")';
        colorDeOrilla2.style.backgroundColor = "#02779e";
        break;
      case "fighting":
        imagen2.style.background = 'url("img/Lucha.webp")';
        colorDeOrilla2.style.backgroundColor = "#FE8383";
        break;
      case "poison":
        imagen2.style.background = 'url("img/veneno.webp")';
        colorDeOrilla2.style.backgroundColor = "#1CC052";
        break;
      case "Flying":
        imagen2.style.background = 'url("img/cielo.webp")';
        colorDeOrilla2.style.backgroundColor = "#1CC052";
        break;
      case "dragon":
        imagen2.style.background = 'url("img/Dragón.jpg")';
        colorDeOrilla2.style.backgroundColor = "purple";
        break;
      case "dark":
        imagen2.style.background = 'url("img/dark.jpg")';
        colorDeOrilla2.style.backgroundColor = "#29768E";
        break;
      case "fairy":
        imagen2.style.background = 'url("img/magia.jpg")';
        colorDeOrilla2.style.backgroundColor = "#9061c2";
        break;
      case "steel":
        imagen2.style.background = 'url("img/acero.jpg")';
        colorDeOrilla2.style.backgroundColor = "#8d9c9d";
        break;
      case "psychic":
        imagen2.style.background = 'url("img/Psychic - Psíquico.jpg")';
        colorDeOrilla2.style.backgroundColor = "#849112";
        break;
      case "bug":
        imagen2.style.background = 'url("img/bug.webp")';
        colorDeOrilla2.style.backgroundColor = "black";
        break;
      case "ghost":
        imagen2.style.background = 'url("img/Ghost - Fantasma.jpg")';
        colorDeOrilla2.style.backgroundColor = "#306CBD";
        break;
      case "rock":
        imagen2.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla2.style.backgroundColor = "black";
        break;
      case "ground":
        imagen2.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla2.style.backgroundColor = "#c3b68c";
        break;
      case "normal":
        imagen2.style.background = 'url("img/normal.jpg")';
        colorDeOrilla2.style.backgroundColor = "#9A4E00";
        break;
      default:
        imagen2.style.background = 'url("img/humo.gif")';
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

// declaro para la card 3

let nombre3 = document.getElementById("nombre3");
let idPokemon3 = document.getElementById("idPokemon3");
let imagen3 = document.getElementById("imagen3");
let ataqueNumero3 = document.getElementById("ataqueNumero3");
let ataqueNumero23 = document.getElementById("ataqueNumero23");
//entrada de datos
let tipoDePokemon3 = document.getElementById("tipoDePokemon3");
let colorDeOrilla3 = document.querySelector(".container-card23");

document.addEventListener("DOMContentLoaded", () => {
  const numeroPokemon = Math.floor(Math.random() * (30 - 20)) + 20;
  PeticionApiTres(numeroPokemon);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn3");

  btn.addEventListener("click", () => {
    const numeroPokemon = Math.floor(Math.random() * (30 - 20)) + 20;
    PeticionApiTres(numeroPokemon);
  });
});

const PeticionApiTres = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(id, "estos son los datos del poke", data);
    console.log(data.skill);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      numeroPokemon: data.id,
      nombre: data.name,
      movimientos: data.moves[0].move.name,
      movimientos1: data.moves[1].move.name,
      tipoDePokemon3: data.types[0].type.name,
    };
    idPokemon3.innerText = pokemon.numeroPokemon;
    nombre3.innerText = pokemon.nombre;
    imagen3.src = pokemon.img;
    (ataqueNumero3.innerText = pokemon.movimientos),
      (ataqueNumero23.innerText = pokemon.movimientos1),
      (tipoDePokemon3.innerHTML = pokemon.tipoDePokemon3);

    switch (pokemon.tipoDePokemon3) {
      case "fire":
        imagen3.style.background = 'url("img/fire.jpg")';
        colorDeOrilla3.style.backgroundColor = "red";
        break;
      case "water":
        imagen3.style.background = 'url("img/agua.webp")';
        colorDeOrilla3.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen3.style.background = 'url("img/planta.webp")';
        colorDeOrilla3.style.backgroundColor = "green";
        break;
      case "electric":
        imagen3.style.background = 'url("img/electrico.webp")';
        colorDeOrilla3.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen3.style.background = 'url("img/hielo.webp")';
        colorDeOrilla3.style.backgroundColor = "#02779e";
        break;
      case "fighting":
        imagen3.style.background = 'url("img/Lucha.webp")';
        colorDeOrilla3.style.backgroundColor = "#FE8383";
        break;
      case "poison":
        imagen3.style.background = 'url("img/veneno.webp")';
        colorDeOrilla3.style.backgroundColor = "#1CC052";
        break;
      case "Flying":
        imagen3.style.background = 'url("img/cielo.webp")';
        colorDeOrilla3.style.backgroundColor = "#1CC052";
        break;
      case "dragon":
        imagen3.style.background = 'url("img/Dragón.jpg")';
        colorDeOrilla3.style.backgroundColor = "purple";
        break;
      case "dark":
        imagen3.style.background = 'url("img/dark.jpg")';
        colorDeOrilla3.style.backgroundColor = "#29768E";
        break;
      case "fairy":
        imagen3.style.background = 'url("img/magia.jpg")';
        colorDeOrilla3.style.backgroundColor = "#9061c2";
        break;
      case "steel":
        imagen3.style.background = 'url("img/acero.jpg")';
        colorDeOrilla3.style.backgroundColor = "#8d9c9d";
        break;
      case "psychic":
        imagen3.style.background = 'url("img/Psychic - Psíquico.jpg")';
        colorDeOrilla3.style.backgroundColor = "#849112";
        break;
      case "bug":
        imagen3.style.background = 'url("img/bug.webp")';
        colorDeOrilla3.style.backgroundColor = "black";
        break;
      case "ghost":
        imagen3.style.background = 'url("img/Ghost - Fantasma.jpg")';
        colorDeOrilla3.style.backgroundColor = "#306CBD";
        break;
      case "rock":
        imagen3.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla3.style.backgroundColor = "black";
        break;
      case "ground":
        imagen3.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla3.style.backgroundColor = "#c3b68c";
        break;
      case "normal":
        imagen3.style.background = 'url("img/normal.jpg")';
        colorDeOrilla3.style.backgroundColor = "#9A4E00";
        break;
      default:
        imagen3.style.background = 'url("img/humo.gif")';
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

// declaro para la card 4

let nombre4 = document.getElementById("nombre4");
let idPokemon4 = document.getElementById("idPokemon4");
let imagen4 = document.getElementById("imagen4");
let ataqueNumero4 = document.getElementById("ataqueNumero4");
let ataqueNumero24 = document.getElementById("ataqueNumero24");
//entrada de datos
let tipoDePokemon4 = document.getElementById("tipoDePokemon4");
let colorDeOrilla4 = document.querySelector(".container-card24");

document.addEventListener("DOMContentLoaded", () => {
  const numeroPokemon = Math.floor(Math.random() * (40 - 30)) + 30;
  PeticionApiCuatro(numeroPokemon);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn4");

  btn.addEventListener("click", () => {
    const numeroPokemon = Math.floor(Math.random() * (40 - 30)) + 30;
    PeticionApiCuatro(numeroPokemon);
  });
});

const PeticionApiCuatro = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(id, "estos son los datos del poke", data);
    console.log(data.skill);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      numeroPokemon: data.id,
      nombre: data.name,
      movimientos: data.moves[0].move.name,
      movimientos1: data.moves[1].move.name,
      tipoDePokemon4: data.types[0].type.name,
    };
    idPokemon4.innerText = pokemon.numeroPokemon;
    nombre4.innerText = pokemon.nombre;
    imagen4.src = pokemon.img;
    (ataqueNumero4.innerText = pokemon.movimientos),
      (ataqueNumero24.innerText = pokemon.movimientos1),
      (tipoDePokemon4.innerHTML = pokemon.tipoDePokemon4);

    switch (pokemon.tipoDePokemon4) {
      case "fire":
        imagen4.style.background = 'url("img/fire.jpg")';
        colorDeOrilla4.style.backgroundColor = "red";
        break;
      case "water":
        imagen4.style.background = 'url("img/agua.webp")';
        colorDeOrilla4.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen4.style.background = 'url("img/planta.webp")';
        colorDeOrilla4.style.backgroundColor = "green";
        break;
      case "electric":
        imagen4.style.background = 'url("img/electrico.webp")';
        colorDeOrilla4.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen4.style.background = 'url("img/hielo.webp")';
        colorDeOrilla4.style.backgroundColor = "#02779e";
        break;
      case "fighting":
        imagen4.style.background = 'url("img/Lucha.webp")';
        colorDeOrilla4.style.backgroundColor = "#FE8383";
        break;
      case "poison":
        imagen4.style.background = 'url("img/veneno.webp")';
        colorDeOrilla4.style.backgroundColor = "#1CC052";
        break;
      case "Flying":
        imagen4.style.background = 'url("img/cielo.webp")';
        colorDeOrilla4.style.backgroundColor = "#1CC052";
        break;
      case "dragon":
        imagen4.style.background = 'url("img/Dragón.jpg")';
        colorDeOrilla4.style.backgroundColor = "purple";
        break;
      case "dark":
        imagen4.style.background = 'url("img/dark.jpg")';
        colorDeOrilla4.style.backgroundColor = "#29768E";
        break;
      case "fairy":
        imagen4.style.background = 'url("img/magia.jpg")';
        colorDeOrilla4.style.backgroundColor = "#9061c2";
        break;
      case "steel":
        imagen4.style.background = 'url("img/acero.jpg")';
        colorDeOrilla4.style.backgroundColor = "#8d9c9d";
        break;
      case "psychic":
        imagen4.style.background = 'url("img/Psychic - Psíquico.jpg")';
        colorDeOrilla4.style.backgroundColor = "#849112";
        break;
      case "bug":
        imagen4.style.background = 'url("img/bug.webp")';
        colorDeOrilla4.style.backgroundColor = "black";
        break;
      case "ghost":
        imagen4.style.background = 'url("img/Ghost - Fantasma.jpg")';
        colorDeOrilla4.style.backgroundColor = "#306CBD";
        break;
      case "rock":
        imagen4.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla4.style.backgroundColor = "black";
        break;
      case "ground":
        imagen4.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla4.style.backgroundColor = "#c3b68c";
        break;
      case "normal":
        imagen4.style.background = 'url("img/normal.jpg")';
        colorDeOrilla4.style.backgroundColor = "#9A4E00";
        break;
      default:
        imagen4.style.background = 'url("img/humo.gif")';
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

// declaro para la card 5

let nombre5 = document.getElementById("nombre5");
let idPokemon5 = document.getElementById("idPokemon5");
let imagen5 = document.getElementById("imagen5");
let ataqueNumero5 = document.getElementById("ataqueNumero5");
let ataqueNumero25 = document.getElementById("ataqueNumero25");
//entrada de datos
let tipoDePokemon5 = document.getElementById("tipoDePokemon5");
let colorDeOrilla5 = document.querySelector(".container-card25");

document.addEventListener("DOMContentLoaded", () => {
  const numeroPokemon = Math.floor(Math.random() * (50 - 40)) + 40;
  PeticionApiCinco(numeroPokemon);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn5");

  btn.addEventListener("click", () => {
    const numeroPokemon = Math.floor(Math.random() * (50 - 40)) + 40;
    PeticionApiCinco(numeroPokemon);
  });
});

const PeticionApiCinco = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(id, "estos son los datos del poke", data);
    console.log(data.skill);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      numeroPokemon: data.id,
      nombre: data.name,
      movimientos: data.moves[0].move.name,
      movimientos1: data.moves[1].move.name,
      tipoDePokemon5: data.types[0].type.name,
    };
    idPokemon5.innerText = pokemon.numeroPokemon;
    nombre5.innerText = pokemon.nombre;
    imagen5.src = pokemon.img;
    (ataqueNumero5.innerText = pokemon.movimientos),
      (ataqueNumero25.innerText = pokemon.movimientos1),
      (tipoDePokemon5.innerHTML = pokemon.tipoDePokemon5);

    switch (pokemon.tipoDePokemon5) {
      case "fire":
        imagen5.style.background = 'url("img/fire.jpg")';
        colorDeOrilla5.style.backgroundColor = "red";
        break;
      case "water":
        imagen5.style.background = 'url("img/agua.webp")';
        colorDeOrilla5.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen5.style.background = 'url("img/planta.webp")';
        colorDeOrilla5.style.backgroundColor = "green";
        break;
      case "electric":
        imagen5.style.background = 'url("img/electrico.webp")';
        colorDeOrilla5.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen5.style.background = 'url("img/hielo.webp")';
        colorDeOrilla5.style.backgroundColor = "#02779e";
        break;
      case "fighting":
        imagen5.style.background = 'url("img/Lucha.webp")';
        colorDeOrilla5.style.backgroundColor = "#FE8383";
        break;
      case "poison":
        imagen5.style.background = 'url("img/veneno.webp")';
        colorDeOrilla5.style.backgroundColor = "#1CC052";
        break;
      case "Flying":
        imagen5.style.background = 'url("img/cielo.webp")';
        colorDeOrilla5.style.backgroundColor = "#1CC052";
        break;
      case "dragon":
        imagen5.style.background = 'url("img/Dragón.jpg")';
        colorDeOrilla5.style.backgroundColor = "purple";
        break;
      case "dark":
        imagen5.style.background = 'url("img/dark.jpg")';
        colorDeOrilla5.style.backgroundColor = "#29768E";
        break;
      case "fairy":
        imagen5.style.background = 'url("img/magia.jpg")';
        colorDeOrilla5.style.backgroundColor = "#9061c2";
        break;
      case "steel":
        imagen5.style.background = 'url("img/acero.jpg")';
        colorDeOrilla5.style.backgroundColor = "#8d9c9d";
        break;
      case "psychic":
        imagen5.style.background = 'url("img/Psychic - Psíquico.jpg")';
        colorDeOrilla5.style.backgroundColor = "#849112";
        break;
      case "bug":
        imagen5.style.background = 'url("img/bug.webp")';
        colorDeOrilla5.style.backgroundColor = "black";
        break;
      case "ghost":
        imagen5.style.background = 'url("img/Ghost - Fantasma.jpg")';
        colorDeOrilla5.style.backgroundColor = "#306CBD";
        break;
      case "rock":
        imagen5.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla5.style.backgroundColor = "black";
        break;
      case "ground":
        imagen5.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla5.style.backgroundColor = "#c3b68c";
        break;
      case "normal":
        imagen5.style.background = 'url("img/normal.jpg")';
        colorDeOrilla5.style.backgroundColor = "#9A4E00";
        break;
      default:
        imagen5.style.background = 'url("img/humo.gif")';
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

// declaro para la card 6

let nombre6 = document.getElementById("nombre6");
let idPokemon6 = document.getElementById("idPokemon6");
let imagen6 = document.getElementById("imagen6");
let ataqueNumero6 = document.getElementById("ataqueNumero6");
let ataqueNumero26 = document.getElementById("ataqueNumero26");
//entrada de datos
let tipoDePokemon6 = document.getElementById("tipoDePokemon6");
let colorDeOrilla6 = document.querySelector(".container-card26");

document.addEventListener("DOMContentLoaded", () => {
  const numeroPokemon = Math.floor(Math.random() * (60 - 50)) + 50;
  PeticionApiSeis(numeroPokemon);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn6");

  btn.addEventListener("click", () => {
    const numeroPokemon = Math.floor(Math.random() * (60 - 50)) + 50;
    PeticionApiSeis(numeroPokemon);
  });
});

const PeticionApiSeis = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(id, "estos son los datos del poke", data);
    console.log(data.skill);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      numeroPokemon: data.id,
      nombre: data.name,
      movimientos: data.moves[0].move.name,
      movimientos1: data.moves[1].move.name,
      tipoDePokemon6: data.types[0].type.name,
    };
    idPokemon6.innerText = pokemon.numeroPokemon;
    nombre6.innerText = pokemon.nombre;
    imagen6.src = pokemon.img;
    (ataqueNumero6.innerText = pokemon.movimientos),
      (ataqueNumero26.innerText = pokemon.movimientos1),
      (tipoDePokemon6.innerHTML = pokemon.tipoDePokemon6);

    switch (pokemon.tipoDePokemon6) {
      case "fire":
        imagen6.style.background = 'url("img/fire.jpg")';
        colorDeOrilla6.style.backgroundColor = "red";
        break;
      case "water":
        imagen6.style.background = 'url("img/agua.webp")';
        colorDeOrilla6.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen6.style.background = 'url("img/planta.webp")';
        colorDeOrilla6.style.backgroundColor = "green";
        break;
      case "electric":
        imagen6.style.background = 'url("img/electrico.webp")';
        colorDeOrilla6.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen6.style.background = 'url("img/hielo.webp")';
        colorDeOrilla6.style.backgroundColor = "#02779e";
        break;
      case "fighting":
        imagen6.style.background = 'url("img/Lucha.webp")';
        colorDeOrilla6.style.backgroundColor = "#FE8383";
        break;
      case "poison":
        imagen6.style.background = 'url("img/veneno.webp")';
        colorDeOrilla6.style.backgroundColor = "#1CC052";
        break;
      case "Flying":
        imagen6.style.background = 'url("img/cielo.webp")';
        colorDeOrilla6.style.backgroundColor = "#1CC052";
        break;
      case "dragon":
        imagen6.style.background = 'url("img/Dragón.jpg")';
        colorDeOrilla6.style.backgroundColor = "purple";
        break;
      case "dark":
        imagen6.style.background = 'url("img/dark.jpg")';
        colorDeOrilla6.style.backgroundColor = "#29768E";
        break;
      case "fairy":
        imagen6.style.background = 'url("img/magia.jpg")';
        colorDeOrilla6.style.backgroundColor = "#9061c2";
        break;
      case "steel":
        imagen6.style.background = 'url("img/acero.jpg")';
        colorDeOrilla6.style.backgroundColor = "#8d9c9d";
        break;
      case "psychic":
        imagen6.style.background = 'url("img/Psychic - Psíquico.jpg")';
        colorDeOrilla6.style.backgroundColor = "#849112";
        break;
      case "bug":
        imagen6.style.background = 'url("img/bug.webp")';
        colorDeOrilla6.style.backgroundColor = "black";
        break;
      case "ghost":
        imagen6.style.background = 'url("img/Ghost - Fantasma.jpg")';
        colorDeOrilla6.style.backgroundColor = "#306CBD";
        break;
      case "rock":
        imagen6.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla6.style.backgroundColor = "black";
        break;
      case "ground":
        imagen6.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla6.style.backgroundColor = "#c3b68c";
        break;
      case "normal":
        imagen6.style.background = 'url("img/normal.jpg")';
        colorDeOrilla6.style.backgroundColor = "#9A4E00";
        break;
      default:
        imagen6.style.background = 'url("img/humo.gif")';
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
