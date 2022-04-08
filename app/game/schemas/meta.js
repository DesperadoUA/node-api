const {fields, config} = require('../settings')
const Helper = require('../../../helpers')

module.exports = (sequelize, DataTypes) => {
    const data = Helper.createSchemas(fields, DataTypes)
    const PostMeta = sequelize.define(config.metaDb, data,
        {
            tableName: config.metaDb,
            timestamps: false
        })
    PostMeta.removeAttribute('id');
    return PostMeta 
}