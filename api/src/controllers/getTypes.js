const { Type } = require('../db');

const dbsource = async (req, res) => {
  try {

    const allTypes = await Type.findAll();
   
    res.status(200).json(allTypes);
  } catch (error) {
    
    res.status(404).json({ error: error.message });
  }
};

module.exports = dbsource
