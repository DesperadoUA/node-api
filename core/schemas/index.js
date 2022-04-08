require('dotenv').config()
const dbConfig = require('./../../config/db')
const Sequilize = require("sequelize")
const {DataTypes} = Sequilize
const fs = require('fs')
const path = require('path')

const sequelize = new Sequilize(dbConfig[process.env.NODE_ENV].DB, dbConfig[process.env.NODE_ENV].USER, dbConfig[process.env.NODE_ENV].PASSWORD, {
    dialect: dbConfig[process.env.NODE_ENV].DIALECT,
    host: dbConfig[process.env.NODE_ENV].HOST, 
    logging: false
})


sequelize.authenticate().then(() => {
    if(process.env.NODE_ENV !== 'test') console.log('Connection successfull')
}).catch((err) => {
    console.log('Error connecting to database!')
})

const db = {}
db.Sequilize = Sequilize
db.sequelize = sequelize

function initDb(){
    const arrDir = fs.readdirSync(process.env.APP_DIR, { withFileTypes: true })
                     .filter(d => d.isDirectory())
                     .map(d => d.name)
    arrDir.forEach(dir => {
      const filePath =  path.resolve(__dirname, `./../.${process.env.APP_DIR}/${dir}/schemas/initial.js`)
      if (fs.existsSync(filePath)) {
        const Schemas = require(filePath)
        Object.assign(db, Schemas(sequelize, DataTypes))
      } 
    })
  }
initDb()
//--- Game start ---//
db.gameCasinoRelatives = require('./../../app/game/schemas/casino_relatives')(sequelize, DataTypes)
db.games.belongsToMany(db.casinos, {through: 'game_casino_relatives', foreignKey: 'post_id', onDelete: 'CASCADE'})
db.casinos.belongsToMany(db.games, {through: 'game_casino_relatives', foreignKey: 'relative_id', onDelete: 'CASCADE'}) 
//--- Games End ----//

db.sequelize.sync({force:dbConfig[process.env.NODE_ENV].SYNC})
    .then(()=>{
        if(process.env.NODE_ENV !== 'test') console.log('Re-sync')
    }).catch((err) => {
        if(process.env.NODE_ENV !== 'test') console.log('Error Re-sync')
})

module.exports = db