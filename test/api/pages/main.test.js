const request = require('supertest')
const app = require('../../../app')

describe('Static pages', () => {
    it('TDO page main', (done)=>{
        request(app).get('/api/pages/main')
        .send().then((response) => {
            expect(response.status).toBe(200)
            expect(response.body.confirm).toBe('ok')
            done()
        })
    })

    it('TDO page contacts', (done)=>{
        request(app).get('/api/pages/contacts')
        .send().then((response) => {
            expect(response.status).toBe(200)
            expect(response.body.confirm).toBe('ok')
            done()
        })
    })

    it('TDO page seeds', (done)=>{
        request(app).get('/api/pages/seeds')
        .send().then((response) => {
            expect(response.status).toBe(200)
            expect(response.body.confirm).toBe('ok')
            done()
        })
    })

    it('TDO pages index', (done)=>{
        request(app).get('/api/pages')
        .send().then((response) => {
            expect(response.status).toBe(200)
            expect(response.body.confirm).toBe('ok')
            done()
        })
    })

    it('TDO admin pages index', (done)=>{
        request(app).post('/api/admin/pages')
        .send().then((response) => {
            expect(response.status).toBe(200)
            expect(response.body.confirm).toBe('ok')
            done()
        })
    })

    it('TDO admin pages index', (done)=>{
        request(app).post('/api/admin/pages/update')
        .send().then((response) => {
            expect(response.status).toBe(200)
            expect(response.body.confirm).toBe('ok')
            done()
        })
    })

    it('TDO admin pages id=1', (done)=>{
        request(app).post('/api/admin/pages/1')
        .send().then((response) => {
            expect(response.status).toBe(200)
            expect(response.body.confirm).toBe('ok')
            done()
        })
    })
})
