const {config} = require('../settings')
module.exports = (sequelize, DataTypes) => {
    const CommonModel = require('./../../../core/schemas/CommonSchema')(sequelize, DataTypes)
    const Post = sequelize.define(config.mainDb, {
            ...CommonModel,
            post_type: {
                type: DataTypes.STRING,
                defaultValue: config.postType
            },
            slug: {
                type: DataTypes.STRING,
                defaultValue: config.postTypeSlug
            }
        },
        {
            tableName: config.mainDb,
            timestamps: false
        })
    return Post
}