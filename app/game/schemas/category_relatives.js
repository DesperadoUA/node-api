const {config} = require('../settings')
module.exports = (sequelize, DataTypes) => {
    const CategoryRelatives = sequelize.define(config.relativeDB, {
            post_id: DataTypes.INTEGER,
            relative_id: DataTypes.INTEGER
        },
        {
            tableName: config.relativeDB,
            timestamps:false
        })
    return CategoryRelatives
}