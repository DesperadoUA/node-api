const request = require('supertest')
const app = require('../../../app')
const postSlug = 'casino'
const categorySlug = 'casinos'

describe('Casino', () => {
    it(`DTO ${postSlug} post index`, async()=>{
        const response = await request(app).get(`/api/${postSlug}`)
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
    it(`DTO ${postSlug} post seeds`, async()=>{
        const response = await request(app).get(`/api/${postSlug}/seeds`)
        expect(response.status).toBe(200)
        expect(response.body.confirm).toBe('ok')
    })
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
    })
})