const tableName = require('../../../core/models/tableName')
module.exports = (sequelize, DataTypes) => {
    const Relatives = sequelize.define(tableName.GAME.relative.casino, {
            post_id: DataTypes.INTEGER,
            relative_id: DataTypes.INTEGER
        },
        {
            tableName: tableName.GAME.relative.casino,
            timestamps:false
        })
    return Relatives
}