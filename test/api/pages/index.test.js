const request = require('supertest')
const app = require('../../../app')

describe('Static pages', () => {
    it('TDO page main', async()=>{
        const response = await request(app).get('/api/pages/main').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('TDO page contacts', async()=>{
        const response = await request(app).get('/api/pages/contacts').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('TDO page seeds', async()=>{
        const response = await request(app).get('/api/pages/seeds').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('TDO pages index', async()=>{
        const response = await request(app).get('/api/pages').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('TDO admin pages index', async()=>{
        const response = await request(app).post('/api/admin/pages').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('TDO admin pages index', async()=>{
        const response = await request(app).post('/api/admin/pages/update').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('TDO admin pages id=1', async()=>{
        const response = await request(app).post('/api/admin/pages/1').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})
