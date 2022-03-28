const request = require('supertest')
const app = require('../../../app')
const postSlug = 'casino'
const categorySlug = 'casinos'
const store = require('../../../core/store')

describe('Casino', () => {
    let session = ''
    let currentUserId = 0

    beforeAll( async()=> {
        const {user} = store
        const response = await request(app).post('/api/admin/login').send({
            password: user.password,
            login: user.name
        })
        session = response.body.body.session
        currentUserId = response.body.body.id
    })
    it(`DTO ${postSlug} post seeds`, async()=>{
        const response = await request(app).get(`/api/${postSlug}/seeds`)
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} post index`, async()=>{
        const response = await request(app).get(`/api/${postSlug}`)
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
        expect(response.body).toHaveProperty('body')
        expect(Array.isArray(response.body.body)).toBe(true)
        expect(response.body.body[0]).toHaveProperty('id')
        expect(response.body.body[0]).toHaveProperty('permalink', `/${postSlug}/post-0`)
        expect(response.body.body[0]).toHaveProperty('title')
        expect(response.body.body[0]).toHaveProperty('status')
        expect(response.body.body[0]).toHaveProperty('thumbnail')
        expect(response.body.body[0]).toHaveProperty('short_desc')
        expect(response.body.body[0]).toHaveProperty('h1')
        expect(response.body.body[0]).toHaveProperty('content')
        expect(response.body.body[0]).toHaveProperty('meta_title')
        expect(response.body.body[0]).toHaveProperty('description')
        expect(response.body.body[0]).toHaveProperty('keywords')
        expect(response.body.body[0]).toHaveProperty('lang')
        expect(response.body.body[0]).toHaveProperty('updated_at')
        expect(response.body.body[0]).toHaveProperty('created_at')
        expect(response.body.body[0]).toHaveProperty('faq')
        expect(response.body.body[0]).toHaveProperty('reviews')
        expect(response.body.body[0]).toHaveProperty('close')
        expect(response.body.body[0]).toHaveProperty('rating')
        expect(response.body.body[0]).toHaveProperty('ref')
        expect(response.body.body[0]).toHaveProperty('phone')
        expect(response.body.body[0]).toHaveProperty('min_deposit')
        expect(response.body.body[0]).toHaveProperty('min_payments')
        expect(response.body.body[0]).toHaveProperty('email')
        expect(response.body.body[0]).toHaveProperty('chat')
        expect(response.body.body[0]).toHaveProperty('year')
        expect(response.body.body[0]).toHaveProperty('site')
        expect(response.body.body[0]).toHaveProperty('withdrawal')
        expect(response.body.body[0]).toHaveProperty('number_games')
    })
/*
    it(`DTO ${postSlug} post url post-0`, async()=>{
        const response = await request(app).get(`/api/${postSlug}/post-0`)
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} category index`, async()=>{
        const response = await request(app).get(`/api/${categorySlug}`)
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} category seeds`, async()=>{
        const response = await request(app).get(`/api/${categorySlug}/seeds`)
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} category url category-0`, async()=>{
        const response = await request(app).get(`/api/${categorySlug}/category-0`)
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })

    it(`DTO ${postSlug} admin posts index`, async()=>{
        const response = await request(app).post(`/api/admin/${categorySlug}`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} post update`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/update`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} post delete`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/delete`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} post store`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/store`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} post id=1`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/1`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    
    it(`DTO ${postSlug} admin category index`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/category`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} admin category update`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/category/update`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} admin category delete`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/category/delete`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} admin category store`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/category/store`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} admin category id=1`, async()=>{
        const response = await request(app).post(`/api/admin/${postSlug}/category/1`).send()
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })*/
})