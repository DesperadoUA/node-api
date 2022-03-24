const request = require('supertest')
const app = require('../../../app')

describe('Sitemap', () => {
    it('TDO index', async()=>{
        const response = await request(app).get('/api/sitemap')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})

