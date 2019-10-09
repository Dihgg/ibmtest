const request   = require('supertest');
const app   = require('../app');

describe('Endpoints', () => {
	it('should get items', async () => {
		const res = await request(app)
		.get('/api/list/get')
		expect(res.statusCode).toEqual(201);
	});
	
	it('should create a new item', async () => {
		const res = await request(app)
		.post('/api/list/add')
		.send({
			name		: "vinho",
			qty		: 1,
			checked	: false
		})
		expect(res.statusCode).toEqual(201)
		expect(res.body).toHaveProperty('id');
	});

});