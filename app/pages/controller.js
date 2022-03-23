const {Router} = require('express')
/*
const auth = require('./../middleware/auth') 
const {cashData, cashDestroy} = require('./../middleware/cash')
const Service = require('../services/PageService')
*/
const router = Router()

router.get('/pages', async (req, res) => {
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
}) // [x]
router.get('/pages/seeds', async (req, res) => {
   // const response = await Service.seeds()
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
}) // [x]
router.get('/pages/:url', async (req, res) => {
    // const response = await Service.getPublicPostByUrl(req.params.url)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
}) // [x]
router.post('/admin/pages', async (req, res)=>{
  /*  const {lang, limit, offset} = req.body
    const settings = {lang, limit, offset}
    const response = await Service.indexAdmin(settings)
    */
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
}) // [x]
router.post('/admin/pages/update', async (req, res)=>{
   // const {data} = req.body
   // const response = await Service.update(data)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
}) // [x]
router.post('/admin/pages/:id', async (req, res)=>{
   // const response = await Service.getById(req.params.id)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
}) // [x]

module.exports = router