const {config} = require('./../settings')
function init(sequelize, DataTypes){
    const db = {}
    db[config.mainDb] = require('./index')(sequelize, DataTypes)
    db[config.metaDb] = require('./meta')(sequelize, DataTypes)
    db[config.categoryDb] = require('./category')(sequelize, DataTypes)
    db[config.relativeDB] = require('./category_relatives')(sequelize, DataTypes)

    db[config.mainDb].hasOne(db[config.metaDb], {onDelete: 'CASCADE', foreignKey: 'post_id'})
    db[config.metaDb].belongsTo(db[config.mainDb], {foreignKey: 'post_id'})

    db[config.mainDb].belongsToMany(db[config.categoryDb], {through: config.relativeDB, foreignKey: 'post_id', onDelete: 'CASCADE'})
    db[config.categoryDb].belongsToMany(db[config.mainDb], {through: config.relativeDB, foreignKey: 'relative_id', onDelete: 'CASCADE'})
    return db
}

module.exports = init