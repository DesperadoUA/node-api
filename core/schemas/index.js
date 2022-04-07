require('dotenv').config()
const dbConfig = require('./../../config/db')
const Sequilize = require("sequelize")
const {DataTypes} = Sequilize
const CasinoDb = require('./../../app/casino/schemas/initial')
const GameDb = require('./../../app/game/schemas/initial')

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

db.users = require('./../../app/users/schemas/')(sequelize, DataTypes)
db.pages = require('./../../app/pages/schemas')(sequelize, DataTypes)
db.settings = require('./../../app/settings/schemas')(sequelize, DataTypes)
db.options = require('./../../app/options/schemas')(sequelize, DataTypes)

Object.assign(db, CasinoDb(sequelize), GameDb(sequelize))

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