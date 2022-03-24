const request = require('supertest')
const app = require('../../../app')

describe('Auth', () => {
    it('DTO page login', async()=>{
        const response = await request(app).post('/api/admin/login').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('DTO page logout', async()=>{
        const response = await request(app).post('/api/admin/logout').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('DTO page check-user', async()=>{
        const response = await request(app).post('/api/admin/check-user').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})
