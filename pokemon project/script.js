async function pokemon() {
    let pok=await fetch("https://pokeapi.co/api/v2/pokemon/34");
    let result=await pok.json();
    console.log(result);
    
    
}
pokemon();