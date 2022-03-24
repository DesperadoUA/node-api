const {Router} = require('express')
//const auth = require('./../middleware/auth') 
//const Service = require('../services/SettingsService.js')
const router = Router()

router.get('/settings', async (req, res) => {
   /* let lang = 1
    if(req.query.lang) {
        const param = Number(req.query.lang)
        if(Number.isInteger(param)) lang = param
    } 
    const response = await Service.index(lang)
    */
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.get('/settings/seeds', async (req, res) => {
    //const response = await Service.seeds()
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post('/admin/settings', async (req, res) => {
    //const {lang} = req.body
    //const response = await Service.indexAdmin(lang)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post('/admin/settings/update', async (req, res) => {
    //const {data} = req.body
    //const response = await Service.update(data)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post('/admin/settings/:id', async (req, res) => {
    //const response = await Service.show(req.params.id)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})

module.exports = router