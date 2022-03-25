require('dotenv').config()
const dbConfig = require('./../../config/db')
const Sequilize = require("sequelize")
const {DataTypes} = Sequilize

const sequelize = new Sequilize(dbConfig[process.env.NODE_ENV].DB, dbConfig[process.env.NODE_ENV].USER, dbConfig[process.env.NODE_ENV].PASSWORD, {
    dialect: dbConfig[process.env.NODE_ENV].dialect,
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
/*
db.settings = require('./settings')(sequelize, DataTypes)
db.options = require('./options')(sequelize, DataTypes)

//---  Casino ---//
db.casinos = require('./casino')(sequelize, DataTypes)
db.casinoMeta = require('./casino/meta')(sequelize, DataTypes)
db.casinoCategory = require('./casino/category')(sequelize, DataTypes)
db.casinoCategoryRelatives = require('./casino/category_relatives')(sequelize, DataTypes)

db.casinos.hasOne(db.casinoMeta, {onDelete: 'CASCADE', foreignKey: 'post_id'})
db.casinoMeta.belongsTo(db.casinos, {foreignKey: 'post_id'})

db.casinos.belongsToMany(db.casinoCategory, {through: 'casino_category_relatives', foreignKey: 'post_id', onDelete: 'CASCADE'})
db.casinoCategory.belongsToMany(db.casinos, {through: 'casino_category_relatives', foreignKey: 'relative_id', onDelete: 'CASCADE'})

//---  Casino End ---//
//---  Games ---//
db.games = require('./game')(sequelize, DataTypes)
db.gameMeta = require('./game/meta')(sequelize, DataTypes)
db.gameCategory = require('./game/category')(sequelize, DataTypes)
db.gameCategoryRelatives = require('./game/category_relatives')(sequelize, DataTypes)
db.gameCasinoRelatives = require('./game/casino_relatives')(sequelize, DataTypes)

db.games.hasOne(db.gameMeta, {onDelete: 'CASCADE', foreignKey: 'post_id'})
db.gameMeta.belongsTo(db.games, {foreignKey: 'post_id'})

db.games.belongsToMany(db.gameCategory, {through: 'game_category_relatives', foreignKey: 'post_id', onDelete: 'CASCADE'})
db.gameCategory.belongsToMany(db.games, {through: 'game_category_relatives', foreignKey: 'relative_id', onDelete: 'CASCADE'})

db.games.belongsToMany(db.casinos, {through: 'game_casino_relatives', foreignKey: 'post_id', onDelete: 'CASCADE'})
db.casinos.belongsToMany(db.games, {through: 'game_casino_relatives', foreignKey: 'relative_id', onDelete: 'CASCADE'}) 
//--- Games End ----//
*/
db.sequelize.sync({force:dbConfig[process.env.NODE_ENV].SYNC})
    .then(()=>{
        if(process.env.NODE_ENV !== 'test') console.log('Re-sync')
    }).catch((err) => {
        if(process.env.NODE_ENV !== 'test') console.log('Error Re-sync')
})

module.exports = db