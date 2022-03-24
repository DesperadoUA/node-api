const request = require('supertest')
const app = require('../../../app')

describe('Static pages', () => {
    it('DTO page main', async()=>{
        const response = await request(app).get('/api/pages/main')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('DTO page contacts', async()=>{
        const response = await request(app).get('/api/pages/contacts')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('DTO page seeds', async()=>{
        const response = await request(app).get('/api/pages/seeds')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('DTO pages index', async()=>{
        const response = await request(app).get('/api/pages')
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('DTO admin pages index', async()=>{
        const response = await request(app).post('/api/admin/pages').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('DTO admin pages update', async()=>{
        const response = await request(app).post('/api/admin/pages/update').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it('DTO admin pages id=1', async()=>{
        const response = await request(app).post('/api/admin/pages/1').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})
