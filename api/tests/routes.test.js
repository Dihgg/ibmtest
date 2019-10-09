const request   = require('supertest');
const app   = require('../app');

describe('get Endpoint', () => {
    it('should get items', async () => {
        const res = await request(app)
        .get('/api/list/get')
        expect(res.statusCode).toEqual(201);
    });
});