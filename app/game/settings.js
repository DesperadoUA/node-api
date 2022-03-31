const tableName = require('../../core/models/tableName')
const config = {
    postSlug: 'game',
    categorySlug: 'games',
    postType: 'game',
    postTypeSlug: 'game',
    postTypeCategory: 'game/category',
    postTypeCategorySlug: 'games',
    table: 'GAME', /* For config tableName */
    orderKey: ['created_at', 'updated_at'], /* Key for sort */
    mainDb: 'games',           // Naming for Shemas (core shemas)
    metaDb: 'gameMeta',
    categoryDb: 'gameCategory',
    nameMainTable: tableName.GAME.main, // Naming for Shemas current schemas
    nameMetaTable: tableName.GAME.meta,
    nameCategoryTable: tableName.GAME.category,
    nameCategoryPostRelativeTable: tableName.GAME.relative.category,
    relatives: {
        casino: {
            relativePostType: 'CASINO',
            key: 'casino', // /core/models/tableName.js GAME.relative.casino
            responseKey: 'game_casino'
        }
    }
}
const fields = {
    iframe: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'TEXT'
        }
    }
}
module.exports = {
    config,
    fields
}