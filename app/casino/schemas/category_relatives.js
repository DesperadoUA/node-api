const {config} = require('../settings')
module.exports = (sequelize, DataTypes) => {
    const CategoryRelatives = sequelize.define(config.nameCategoryPostRelativeTable, {
            post_id: DataTypes.INTEGER,
            relative_id: DataTypes.INTEGER
        },
        {
            tableName: config.nameCategoryPostRelativeTable,
            timestamps:false
        })
    return CategoryRelatives
}