const {Router} = require('express')
//const auth = require('./../middleware/auth') 
//const Service = require('../services/OptionsService.js')
const router = Router()

router.get('/options', async (req, res) => {
    //const response = await Service.index()
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.get('/options/seeds', async (req, res) => {
    //const response = await Service.seeds()
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post('/admin/options', async (req, res) => {
    //const response = await Service.indexAdmin()
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post('/admin/options/update', async (req, res) => {
    //const {data} = req.body
    //const response = await Service.update(data)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post('/admin/options/:id', async (req, res) => {
    //const response = await Service.show(req.params.id)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})

module.exports = router