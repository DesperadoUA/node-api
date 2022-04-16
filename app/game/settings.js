const tableName = require('../../core/models/tableName')
const table = 'GAME'
const config = {
    postType: 'game',
    postTypeSlug: 'game',
    postTypeCategory: 'game/category',
    postTypeCategorySlug: 'games',
    orderKey: ['created_at', 'updated_at'], /* Key for sort */
    keySort: 'created_at',
    table: table, /* For config tableName */
    mainDb: tableName[table].main,           // Naming for Shemas (core shemas)
    metaDb: tableName[table].meta,
    categoryDb: tableName[table].category,
    relativeDB: tableName[table].relative.category,
    relatives: {
        casino: {
            relativePostType: 'CASINO',
            key: 'casino', 
            responseKey: 'game_casino',
            table: tableName[table].relative.casino,
            mainDb: tableName[table].main,
            relativeDb: tableName.CASINO.main
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