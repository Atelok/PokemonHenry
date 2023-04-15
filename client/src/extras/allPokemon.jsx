import axios from "axios";

const allPokemon =async ()=>{

    const all = await axios.get("http://localhost:3001/pokemons/");
    
    const verif = await all.data.map((ally)=>{
        const {id, name, image} = ally

        return {
                id,
                name,
                image
        }
    } )
    
    return verif

}

export default allPokemon

