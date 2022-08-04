'use strinct';
const logSchema = require('../models/logs.models');
const aplicationSchema = require('../models/applications.models');
const schemasDB = require('../config/middleware/schemasLogs');  

class MainController {

	async all(req, res, next) {
		await logSchema.find()
			.then( data => res.json(data) )
			.catch( error => res.json({ message: error }) )
	}

	async create(req, res, next) {
		
		const body = req.body;

		const err = schemasDB.logsCreate.validate(body).error
		if (err) res.json({ message: err });

		await aplicationSchema.findOne({ _id: body.application_id })
			.catch( error => res.json({ message: 'application_id no existe.' }) );

        await logSchema.create(body)
			.then( data => res.json({ message: 'Log creado.', data: data }) )
			.catch( error => res.json({ message: error }) );
	}

	async info(req, res, next) {
		const { id } = req.params;

		await logSchema.findById(id)
			.then( data => data ? res.json({ message: 'Log encontrado.', data }) : res.json({ message: 'Log no encontrado.' }) )
			.catch( error => req.json({ message: error }) );
	}

	async update(req, res, next) {
		const { id } = req.params;
		const body = req.body;

		const err = schemasDB.logsUpdate.validate(body).error;
		if (err) res.json({ message: err });

		await aplicationSchema.findOne({ _id: body.application_id }).catch(error => res.json({ message: 'application_id no existe.' }));

		await logSchema.findByIdAndUpdate(id, body)
			.then( data => data ? res.json({ message: 'Log actualizado.', data: data }) : res.json({ message: 'Log no encontrado.' }) )
			.catch( error => res.json({ message: error }) );
	}

	async delete(req, res, next) {
		const { id } = req.params;
		await logSchema.findByIdAndDelete(id)
			.then( data => data ? res.json({ message: 'Log eliminado.' }) : res.json({ message: 'Log no encontrado.' }) )
			.catch( error => res.json({ message: error }) );
	}
}

module.exports = new MainController();
