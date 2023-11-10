// // fetch ( "https://pokeapi.co/api/v2/pokemon/890" )
// //  .then(response => response.json())
// //  .then (data => {
// //      console.log(data)
// //      console.log(data.name)
// //     console.log(data.types[0].type.name)
// //      console.log(data.height/10)
// //      console.log ( "${data.name} pesa es  ${data.weight/10} kilos ") 
// //      console.log (data.sprites.front_default)
// //  }
// // )

// // .catch(err => console.log (err))

// const URL= "https://pokeapi.co/api/v2/pokemon/"

// const searchInput= document.getElementById(`search`)

// const container = document.getElementById("container")




// const getpokemon = async () => {

//     const searchpokemon= searchInput();

//     try {
//         const response = await fetch(URL + searchpokemon )

//      // console.log(response)

// const data = await response.json();
// // console.log(`${data.name} es tipo ${data.types[0].type.name} pesa ${data.height/10} kilos`)
// const templatepokemon = (pokemon) => {
//     const {name, sprites, weight, height, types} = pokemon
//     container.innerHTML = `
//     <div class= "card">
//     <img src='${sprites.front_default}' class="card-img">
// <h2 class= "card-title">${name.toUpperCase()}</h2>
// <div class=flexing>
// <p class="card-button" > Tipo: ${types[0].type.name} y ${types[1].type.name}<p/>
// <p class="card-button" > Peso: ${weight/10} Kilos <p/>
// <p class="card-button" > Altura: ${height/10} metros <p/>
// <div/>
// </div>

//     `
// }

        
//     } catch (error) {
//         throw new error("El error es ${error}")
        
//     }
    
// }
// document.getElementById("apibutton").addEventListener("click", getpokemon)

// // getpokemon()

// // traemos contenedor



// // template html


// // Renderizar pokemon 

// // // const renderPokemon= async () => {
// // //     const pokemon = await getpokemon ()
// // //     templatepokemon(pokemon)

// // //     renderPokemon()

// // }




//     // container.innerHTML = `
//     // <h2 class="card-title">${pokemon.name}</h2>
//     // <img src =${pokemon.sprites.front_default} > 
    


    
const URL = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = document.getElementById('search');
const Container = document.getElementById('container');

// Función para mostrar un mensaje de error
function showError(message) {
    Container.innerHTML = `<p class="error">${message}</p>`;
}

// Función para buscar un Pokémon
async function searchPokemon() {
    // Obtener el valor del campo de búsqueda 
    const searchedPokemon = searchInput.value;

    try {
        // Realizar una petición a la API de PokeAPI con el nombre del Pokémon
        const response = await fetch(URL + searchedPokemon);
        if (!response.ok) {
            // Si la respuesta no es exitosa, mostrar un mensaje de error
            showError(`No se encontró ningún Pokémon con ese numero "${searchedPokemon}"`);
            return;
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Mostrar los datos del Pokémon en el contenedor de resultados
        Container.innerHTML = 
        `
        <div class="card">
        <h2 class="card-title" >${data.name.toUpperCase()}</h2>
        <img class"card-img" src="${data.sprites.front_default}" alt="${data.name}">
        <p class= "card-button" >Número: ${data.id}</p>
        <p class= "card-button">Altura: ${data.height / 10}m</p>
        <p class= "card-button">Peso: ${data.weight / 10}km</p>
        <p class="card-button" > Tipo: ${data.types[0].type.name} y ${data.types[1].type.name}<p/>
        
        <div/>
            
        `;
    } catch (error) {
        // Si ocurre algún error durante la petición, mostrar un mensaje de error
        showError('Ha ocurrido un error al buscar el Pokémon');
        console.error(error);
    }
}

// Agregar un controlador de eventos al botón de búsqueda
document.querySelector('button').addEventListener('click', searchPokemon);