const Sequilize = require('sequelize')
const {DataTypes} = Sequilize

function init(sequelize){
    const db = {}
    db.games = require('./../../../app/game/schemas')(sequelize, DataTypes)
    db.gameMeta = require('./../../../app/game/schemas/meta')(sequelize, DataTypes)
    db.gameCategory = require('./../../../app/game/schemas/category')(sequelize, DataTypes)
    db.gameCategoryRelatives = require('./../../../app/game/schemas/category_relatives')(sequelize, DataTypes)
    db.gameCasinoRelatives = require('./../../../app/game/schemas/casino_relatives')(sequelize, DataTypes)

    db.games.hasOne(db.gameMeta, {onDelete: 'CASCADE', foreignKey: 'post_id'})
    db.gameMeta.belongsTo(db.games, {foreignKey: 'post_id'})

    db.games.belongsToMany(db.gameCategory, {through: 'game_category_relatives', foreignKey: 'post_id', onDelete: 'CASCADE'})
    db.gameCategory.belongsToMany(db.games, {through: 'game_category_relatives', foreignKey: 'relative_id', onDelete: 'CASCADE'})
    return db
}

module.exports = init