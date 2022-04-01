const {config} = require('../settings')
module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../../../core/schemas/CommonSchema')(sequelize, DataTypes)
    const Category = sequelize.define(config.nameCategoryTable, {
            ...CommonModel,
            parent_id: {
                type: DataTypes.INTEGER, 
                defaultValue: 0
            },
            post_type: {
                type: DataTypes.STRING,
                defaultValue: config.postTypeCategory
            },
            slug: {
                type: DataTypes.STRING,
                defaultValue: config.postTypeCategorySlug
            },
            faq: {
                type: DataTypes.TEXT
            }
        },
        {
            tableName: config.nameCategoryTable,
            timestamps:false
        })
    return Category
}