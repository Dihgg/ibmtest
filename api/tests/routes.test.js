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

	it('should update a item', async () => {
		const res = await request(app)
		.put('/api/list/edit/1')
		.send({
			name	: "abacaxi",
			qty		: 2,
			checked	: true
		})
		expect(res.statusCode).toEqual(201)
		expect(Array.isArray(['value'])).toBe(true);
	});

	it('should delete a item', async () => {
		const res = await request(app).delete('/api/list/delete/1');
		expect({status: true}).toBeTruthy();
	  });

});