const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = 
{
    /** Método que lista todas a ongs dentro da tabela */
    async index(request, response)
    {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    /** Método que cria para salvar uma ong dentro da tabela */
    async create (request, response) 
    {
        const {name, email, whatsapp, city, uf }  = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert(
        {
            id,
            name,
            whatsapp,
            email,
            city,
            uf,
        });

        return response.json(
        {
            id
        });
    }
};