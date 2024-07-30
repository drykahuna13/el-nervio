const obtainPokemon = async() => {
    try{
        const res= await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data= await res.json()
        const arrayNames = data.results.filter (poke => poke.name !== 'bulbasaur')
        console.log(arrayNames)
    } catch (error){
        console.log (error)
    }
}
obtainPokemon ()
