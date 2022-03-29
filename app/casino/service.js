const PostModel = require('./models')
const CardBuilder =  require('./CardBuilder')
const BaseService =  require('../../core/BaseService')
const store = require('../../core/store')
const config = require('../../config')
const POST_TYPE = 'CASINO'
const Helper = require('../../helpers')
const MetaFields = require('./fields')
const fields = require('./fields')
class Service extends BaseService {
    static async getPublicPostByUrl(url) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const err = []
        const MainModel = new PostModel(POST_TYPE)
        const {confirm, data} = await MainModel.showPublic(url)
        if(data.length !== 0 && confirm === 'ok') {
            err.push(confirm)
            response.confirm = 'ok'
            response.body = CardBuilder.show(data[0])

            response.confirm = err.includes('error') ? 'error' : 'ok'
        }
        return response
    } 
    static async index(settings) {
        const response = {
            confirm: 'ok',
            body: []
        }
        const MainModel = new PostModel(POST_TYPE)
        const {confirm, data} = await MainModel.allPublic(settings)
        response.confirm = confirm
        response.body = CardBuilder.fetch(data)
        return response
    } 
    static async seeds(numberPosts = 10) {
        const response = {
            confirm: 'ok',
            template: 'Posts seeds'
        }
        const err = []
        const posts = []
        const postsMeta = []
        const img = store.img
        for(let i=0; i<numberPosts; i++) {
            posts.push(
                {
                    permalink: `post-${i}`,
                    title: `Title post-${i}`, 
                    thumbnail: img,
                    short_desc: `Short desc post-${i}`,
                    h1: `H1 post-${i}`,
                    meta_title: `Meta title post-${i}`, 
                    description: `Description post-${i}`,
                    keywords: `Keywords post-${i}`,
                    content: `Content post-${i}`
                }
            )
            postsMeta.push(Object.assign(Helper.metaSave({}, fields), {post_id: i+1}))
        }
        const createData = await PostModel.bulkCreate(posts)
        err.push(createData.confirm)
        const createDataMeta = await PostModel.bulkCreateMeta(postsMeta)
        err.push(createDataMeta.confirm)

        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    } 
    static async indexAdmin(settings) {
        const response = {
            confirm: 'error',
            body: [],
            total: 0,
            lang: config.LANG[settings.lang]
        }
        const err = []
        const MainModel = new PostModel(POST_TYPE)

        const {confirm, data} = await MainModel.all(settings)
        response.body = data
        err.push(confirm)

        const countData = await MainModel.count(settings.lang)
        response.total = countData.data
        err.push(countData.confirm)

        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    } 
    static async getById(id) {
        const response = {
            confirm: 'error',
            body: {}
        }
        const err = []
        const MainModel = new PostModel(POST_TYPE)
        const {confirm, data} = await MainModel.getById(id)
        if(data.length !== 0 && confirm === 'ok') {
            err.push(confirm)
            response.body = CardBuilder.showAdmin(data[0])

            const relative = await this.getRelativeAdmin(data[0])
            err.push(relative.confirm)
            response.body.category = relative.data.category

            response.confirm = err.includes('error') ? 'error' : 'ok'
        }
        return response
    } 
    static async store(data, table) {
        const response = {
            body: [],
            confirm: 'ok'
        }
        const err = []
        const dataSave = await this.dataValidateInsert(data, table)
        err.push(dataSave.confirm)
        const dataMeta = this.dataValidateMetaSave(data)

        const insertData = await PostModel.create(dataSave.data)
        err.push(insertData.confirm)
        response.insert_id = insertData.data.dataValues.id
        
        const insertDataMeta = await PostModel.createMeta(Object.assign(dataMeta, {post_id: insertData.data.dataValues.id}))
        err.push(insertDataMeta.confirm)

        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    } 
    static async update(data, table) {
        const response = {
            body: [],
            confirm: 'ok'
        }
        const err = []
        const dataSave = await this.dataValidateSave(data, table)
        err.push(dataSave.confirm)
        const dataMeta = this.dataValidateMetaSave(data)
        const dataUpdate = await PostModel.update(dataSave.data, data.id)
        err.push(dataUpdate.confirm)
        const dataMetaUpdate = await PostModel.updateMeta(dataMeta, data.id)
        err.push(dataMetaUpdate.confirm)
        const dataUpdateRelative = await this.updateRelative(data)
        err.push(dataUpdateRelative.confirm)
        
        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    } 
    static async delete(id) {
        const response = {
            confirm: 'ok',
            body: {}
        }
        const dataDelete = await PostModel.delete(id)
        response.confirm = dataDelete.confirm
        return response
    } 
    static dataValidateMetaSave(data) {
        return Helper.metaSave(data, MetaFields)
    } 
    static async getRelativeAdmin(data) {
        const response = {
            confirm: 'error',
            data: {}
        }
        const err = []
        
        const categoryRelative = await this.getCategoryAdmin(data, POST_TYPE)
        err.push(categoryRelative.confirm)
        response.data.category = categoryRelative.data

        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    }
    static async updateRelative(data) {
        const response = {
            confirm: 'error',
            data: {}
        }
        const err = []
        //----------------- Category --------------------------------------------------//
        const updateCategory = await this.updateCategory(data, POST_TYPE)
        err.push(updateCategory.confirm)
        //----------------------------------------------------------------------------//

        response.confirm = err.includes('error') ? 'error' : 'ok'
        return response
    }
}
module.exports = Service