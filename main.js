fetch ( "https://pokeapi.co/api/v2/pokemon/890" )
.then(response => response.json())
.then (data => {
    console.log(data)
    console.log(data.name)
    console.log(data.types)
    console.log(data.height/10)
    console.log (data.weight/10) 
    console.log (data.img)
}
)

.catch(err => console.log (err))