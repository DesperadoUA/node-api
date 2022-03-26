const request = require('supertest')
const app = require('../../../app')
const store = require('../../../core/store')

describe('Upload', () => {
    let session = ''
    let currentUserId = 0
    let newSrc = ''

    it('login', async()=>{
        const {user} = store
        const response = await request(app).post('/api/admin/login').send({
            password: user.password,
            login: user.name
        })
        session = response.body.body.session
        currentUserId = response.body.body.id
    }) 
    it('DTO uploads', async()=>{
        const response = await request(app).post('/api/admin/uploads').send({
            id: currentUserId,
            session: session,
            file: {
                name: "default.png",
                base64: store.base64
            }
        })
        newSrc = response.body.src
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
        expect(response.body).toHaveProperty('src')
    })
    it('DTO uploads fail auth', async()=>{
        const response = await request(app).post('/api/admin/uploads').send({
            id: currentUserId,
            session: session+'error',
            file: {
                name: "default.png",
                base64: store.base64
            }
        })
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('error')
    })
    it('DTO media', async()=>{
        const response = await request(app).post('/api/admin/media').send({
            id: currentUserId,
            session: session
        })
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
        expect(response.body.body.includes(newSrc)).toBe(true)
    })
    it('DTO media fail auth', async()=>{
        const response = await request(app).post('/api/admin/media').send({
            id: currentUserId,
            session: session+'error'
        })
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('error')
    })
    it('DTO delete file', async()=>{
        const response = await request(app).post('/api/admin/delete-media').send({
            file: newSrc,
            id: currentUserId,
            session: session
        })
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it('DTO delete file fail auth', async()=>{
        const response = await request(app).post('/api/admin/delete-media').send({
            file: newSrc,
            id: currentUserId,
            session: session+'error'
        })
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('error')
    })
})
