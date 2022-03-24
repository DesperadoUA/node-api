const {Router} = require('express')
const router = Router()
//const auth = require('./../middleware/auth')
//const Service = require('../services/UploadService')

router.post('/admin/uploads', async (req, res) => {
   // const {file} = req.body
   // const response = await Service.upload(file.name, file.base64)
   const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post('/admin/media', (req, res) => {
    //const response = Service.media()
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
router.post('/admin/delete-media', (req, res) => {
   // const {file} = req.body
   // const response = Service.delete(file)
    const response = {confirm: 'ok', body: []}
    res.status(200).json(response)
})
module.exports = router