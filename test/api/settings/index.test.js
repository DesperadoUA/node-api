const request = require('supertest')
const app = require('../../../app')

describe('Settings', () => {
    it('DTO index', async()=>{
        const response = await request(app).get('/api/settings')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('DTO seeds', async()=>{
        const response = await request(app).get('/api/settings/seeds')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('DTO admin index', async()=>{
        const response = await request(app).post('/api/admin/settings').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('DTO admin update', async()=>{
        const response = await request(app).post('/api/admin/settings/update').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('DTO settings id=1', async()=>{
        const response = await request(app).post('/api/admin/settings/1').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})

