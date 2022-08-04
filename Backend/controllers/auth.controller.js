'use strinct';
const authSchema = require('../models/authorizations.models');
const aplicationSchema = require('../models/applications.models');
const schemasDB = require('../config/middleware/schemasAuth');  
const jwT = require('../helpers/jwt');

class AuthController {

	async create(req, res, next) {
		
		const { id }= req.params;

		const err = schemasDB.authTokenCreate.validate({ application_id: id}).error
		if (err) res.json({ message: err });
		
		await aplicationSchema.findById({ _id: id }).then( async (data) => {
			await authSchema.create({
				application_id: data._id,
				token: jwT.jwtGenerate(data),
			}).then( data => res.json({ message: 'Token creado.', token: data }) )
				.catch( error => req.json({ message: error }) );
		})
		.catch(error => res.json({ message: 'application_id no existe.' }));

	}
}

module.exports = new AuthController();
