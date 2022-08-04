'use strinct';

const aplicationSchema = require('../models/applications.models');
const schemasDB = require('../config/middleware/schemasApplications');  

class ApplicationsController {

	async all(req, res, next) {
		await aplicationSchema.find()
			.then(data => res.json(data))
			.catch(error => res.json({ message: error}))
	}

	async create(req, res, next) {
		
		const body = req.body;
		
		const err = schemasDB.aplicationCreate.validate(body).error
		if (err) res.json({ message: err });

    	await aplicationSchema.create(body)
			.then( data => res.json({ message: 'Aplicación creada.', data }) )
			.catch( error => req.json({ message: error }) );
	}

}

module.exports = new ApplicationsController();
