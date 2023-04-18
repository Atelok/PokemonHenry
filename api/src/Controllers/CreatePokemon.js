const { Pokemon } = require("../db");

const createPokemon = async (id, name, image, life, attack, defense, velocity, height, weight, Types) => {
    if (name && image && life && attack && defense) {

        const newPokemon = await Pokemon.create({ id, name, image, life, attack, defense, velocity, height, weight, create: true })
        await newPokemon.addTypes(Types)
        return newPokemon;
    } else {

        throw new Error("Necesitas colocar toda la información")
    }
}

module.exports = createPokemon;




/*
const createPokemon = async (id, name, image, life, attack, defense, velocity, height, weight, Types) => {
  if (name && image && life &&  attack && defense) {
    // Buscar los ids de los tipos a partir de sus nombres
    const typeIds = await Promise.all(Types.map(async (typeName) => {
      const type = await Type.findOne({ where: { name: typeName } });
      if (!type) throw new Error(`Tipo '${typeName}' no encontrado`);
      return type.id;
    }));
    // Crear el nuevo Pokemon y agregarle los tipos
    const newPokemon = await Pokemon.create({
      id, name, image, life, attack, defense, velocity, height, weight, create: true
    });
    await newPokemon.addTypes(typeIds);
    return newPokemon;
  } else {
    throw new Error("Necesitas colocar toda la información");
  }
};
 */

/*
const createPokemon = async(id, name, image, life, attack, defense, velocity, height, weight, typeNames) => {
  if (name && image && life && attack && defense) {
    // Obtener los IDs de los tipos de Pokemon a partir de los nombres de tipo proporcionados
    const types = await Type.findAll({ where: { name: typeNames }});
    const typeIds = types.map(type => type.id);

    // Crear un nuevo Pokemon y agregar los tipos a él
    const newPokemon = await Pokemon.create({id, name, image, life, attack, defense, velocity, height, weight, create:true});
    await newPokemon.addTypes(typeIds);
    
    return newPokemon;
  } else {
    throw new Error("Necesitas colocar toda la información");
  }
};
 */