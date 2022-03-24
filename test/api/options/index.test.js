const request = require('supertest')
const app = require('../../../app')

describe('Options', () => {
    it('TDO index', async()=>{
        const response = await request(app).get('/api/options')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO seeds', async()=>{
        const response = await request(app).get('/api/options/seeds')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO admin index', async()=>{
        const response = await request(app).post('/api/admin/options').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO admin update', async()=>{
        const response = await request(app).post('/api/admin/options/update').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO settings id=1', async()=>{
        const response = await request(app).post('/api/admin/options/1').send({})
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})

