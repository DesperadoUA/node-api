const {Router} = require('express')
//const auth = require('./../middleware/auth') 
//const {cashData, cashDestroy} = require('./../middleware/cash')
//const Service = require('../services/casino/PostService')
//const CategoryService = require('../services/casino/CategoryService')
const TABLE = 'CASINO'
const router = Router()
const ORDER_KEY = ['rating', 'created_at', 'updated_at']
const postSlug = 'casino'
const categorySlug = 'casinos'
//const cash = require('./../helpers/cash')

router.get(`/${postSlug}`, async (req, res) => {
   /* const settings = {}
    if(req.query.limit) {
        const param = Number(req.query.limit)
        if(Number.isInteger(param)) settings.limit = param
    } 
    if(req.query.offset) {
        const param = Number(req.query.offset)
        if(Number.isInteger(param)) settings.offset = param
    } 
    if(req.query.lang) {
        const param = Number(req.query.lang)
        if(Number.isInteger(param)) settings.lang = param
    } 
    if(req.query.orderBy) {
        if(req.query.orderBy === 'DESC' || req.query.orderBy === 'ASC') {
            req.query.orderBy === 'DESC'
        }
    } 
    if(req.query.orderKey) {
        if(ORDER_KEY.includes(req.query.orderKey)) settings.orderKey = req.query.orderKey
    } 
    const response = await Service.index(settings)*/
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.get(`/${postSlug}/seeds`, async (req, res) => {
   // const response = await Service.seeds(10)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.get(`/${postSlug}/:url`, async (req, res) => {
    //const response = await Service.getPublicPostByUrl(req.params.url)
    //cash.setData(req.url, response)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.get(`/${categorySlug}`, async (req, res) => {
    /*const settings = {}
    if(req.query.limit) {
        const param = Number(req.query.limit)
        if(Number.isInteger(param)) settings.limit = param
    } 
    if(req.query.offset) {
        const param = Number(req.query.offset)
        if(Number.isInteger(param)) settings.offset = param
    } 
    if(req.query.lang) {
        const param = Number(req.query.lang)
        if(Number.isInteger(param)) settings.lang = param
    } 
    const response = await CategoryService.index(settings)*/
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.get(`/${categorySlug}/seeds`, async (req, res) => {
    //const response = await CategoryService.seeds(10)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.get(`/${categorySlug}/:url`, async (req, res) => {
   // const response = await CategoryService.getPublicPostByUrl(req.params.url)
   // cash.setData(req.url, response)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})


router.post(`/admin/${categorySlug}`, async (req, res)=>{
   // const {lang, limit, offset} = req.body
   // const settings = {lang, limit, offset}
   // const response = await Service.indexAdmin(settings)
   const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post(`/admin/${postSlug}/update`, async (req, res)=>{
    //const {data} = req.body
    //const response = await Service.update(data, TABLE)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post(`/admin/${postSlug}/delete`, async (req, res)=>{
    //const {data} = req.body
    //const response = await Service.delete(data)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post(`/admin/${postSlug}/store`, async (req, res) => {
  //  const {data} = req.body
  //  const response = await Service.store(data, TABLE)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})

router.post(`/admin/${postSlug}/category`, async (req, res)=>{
    //const {lang, limit, offset} = req.body
    //const settings = {lang, limit, offset}
    //const response = await CategoryService.indexAdmin(settings)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post(`/admin/${postSlug}/category/update`, async (req, res)=>{
    //const {data} = req.body
    //const response = await CategoryService.update(data, TABLE)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post(`/admin/${postSlug}/category/delete`, async (req, res)=>{
    //const {data} = req.body
    //const response = await CategoryService.delete(data)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post(`/admin/${postSlug}/category/store`, async (req, res)=>{
    //const {data} = req.body
    //const response = await CategoryService.store(data, TABLE)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})

router.post(`/admin/${postSlug}/category/:id`, async (req, res)=>{
    //const response = await CategoryService.getById(req.params.id)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post(`/admin/${postSlug}/:id`, async (req, res)=>{
   // const response = await Service.getById(req.params.id)
   const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})

module.exports = router