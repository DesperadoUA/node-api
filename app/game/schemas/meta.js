const {fields, config} = require('../settings')
const Helper = require('../../../helpers')

module.exports = (sequelize, DataTypes) => {
    const data = Helper.createSchemas(fields, DataTypes)
    const PostMeta = sequelize.define(config.nameMetaTable, data,
        {
            tableName: config.nameMetaTable,
            timestamps: false
        })
    PostMeta.removeAttribute('id');
    return PostMeta 
}