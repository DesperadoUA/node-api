require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const PageController = require('./app/pages/controller')
const AuthController = require('./app/auth/controller')
const UploadController = require('./app/upload/controller')
const SearchController = require('./app/search/controller')
const SettingsController = require('./app/settings/controller')
const OptionsController = require('./app/options/controller')
const SitemapController = require('./app/sitemap/controller')
const CasinoController = require('./app/casino/controller')
const GameController = require('./app/game/controller')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json({limit: '25mb'}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/img', express.static(path.join(__dirname, 'img')))
app.use(cors())
global.cash = {}

app.use('/api', PageController)
app.use('/api', AuthController)
app.use('/api', UploadController)
app.use('/api', SearchController)
app.use('/api', SettingsController)
/*
app.use('/api', OptionsController)
app.use('/api', SitemapController)
*/
app.use('/api', CasinoController)
//app.use('/api', GameController)


function startApp(){
    try{
       app.listen(PORT, () => {
         console.log(`SERVER START ON PORT ${PORT} ENV ${process.env.NODE_ENV}`)
        } 
       )
    }
    catch(e){
      console.log(e)
    }
}

if(process.env.NODE_ENV !== 'test') startApp()
module.exports = app