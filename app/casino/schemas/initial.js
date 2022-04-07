const Sequilize = require('sequelize')
const {DataTypes} = Sequilize
const {config} = require('./../settings')

function init(sequelize){
    const db = {}
    db[config.mainDb] = require('./index')(sequelize, DataTypes)
    db[config.metaDb] = require('./meta')(sequelize, DataTypes)
    db[config.categoryDb] = require('./category')(sequelize, DataTypes)
    db.casinoCategoryRelatives = require('./category_relatives')(sequelize, DataTypes)

    db[config.mainDb].hasOne(db[config.metaDb], {onDelete: 'CASCADE', foreignKey: 'post_id'})
    db[config.metaDb].belongsTo(db[config.mainDb], {foreignKey: 'post_id'})

    db[config.mainDb].belongsToMany(db[config.categoryDb], {through: config.nameCategoryPostRelativeTable, foreignKey: 'post_id', onDelete: 'CASCADE'})
    db[config.categoryDb].belongsToMany(db[config.mainDb], {through: config.nameCategoryPostRelativeTable, foreignKey: 'relative_id', onDelete: 'CASCADE'})
    return db
}

module.exports = init