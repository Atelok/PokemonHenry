const axios = require("axios")
const allTp = require("./extras/allTypes")

const getAllTypes = async ()=>{



    const todos = await axios.get("https://pokeapi.co/api/v2/type")
    const type = todos.data 
    
    const allTypes = type.results.map((typ)=>typ.name)
    
    allTp(allTypes)

    return allTypes
    // const createName = (all)=>{
    //     all.map((allT)=> {
    //         return {name: allT}
    //     })
    // }
    ///
    // Type.create(createName(allTypes))

}

module.exports = getAllTypes