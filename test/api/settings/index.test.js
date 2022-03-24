const request = require('supertest')
const app = require('../../../app')

describe('Settings', () => {
    it('TDO index', async()=>{
        const response = await request(app).get('/api/settings')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO seeds', async()=>{
        const response = await request(app).get('/api/settings/seeds')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO admin index', async()=>{
        const response = await request(app).post('/api/admin/settings').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO admin update', async()=>{
        const response = await request(app).post('/api/admin/settings/update').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO settings id=1', async()=>{
        const response = await request(app).post('/api/admin/settings/1').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})

