const generateUniqueId = require('../utils/generateUniqueId');
const connetion = require('../database/connection');

module.exports = {

  async index (request,response) {

    const ongs = await connetion('ongs').select('*');
    return response.json(ongs);
  },

      async create (request,response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = generateUniqueId();
    
       await connetion('ongs').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf,
        });
    
    return response.json({ id });
    }
};

