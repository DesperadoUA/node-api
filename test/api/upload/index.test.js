const request = require('supertest')
const app = require('../../../app')

describe('Upload', () => {
    it('TDO uploads', async()=>{
        const response = await request(app).post('/api/admin/uploads').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO media', async()=>{
        const response = await request(app).post('/api/admin/media').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('TDO delete file', async()=>{
        const response = await request(app).post('/api/admin/delete-media').send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
})
