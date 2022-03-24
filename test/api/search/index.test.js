const request = require('supertest')
const app = require('../../../app')

describe('Search', () => {
    it('DTO front', async()=>{
        const response = await request(app).post('/api/search').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('DTO admin', async()=>{
        const response = await request(app).post('/api/admin/search').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})
