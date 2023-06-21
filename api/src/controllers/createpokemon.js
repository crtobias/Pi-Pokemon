const { Pokemon } = require("../db");

module.exports = async (req, res) => {
  try {

    const { name, health, speed, defense, attack, height, weight, types, img } = req.body;
    const newPokemon = await Pokemon.create({
      name,
      health,
      speed,
      defense,
      attack,
      height,
      weight,
      img, 
    });
    
    await newPokemon.setTypes(types);

    res.status(201).json({
      message: 'Pokemon successfully created',
      new_pokemon: newPokemon,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
