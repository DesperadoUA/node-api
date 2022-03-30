const tableName = require('../../core/models/tableName')
const config = {
    postSlug: 'casino',
    categorySlug: 'casinos',
    postType: 'casino',
    postTypeSlug: 'casino',
    postTypeCategory: 'casino/category',
    postTypeCategorySlug: 'casinos',
    table: 'CASINO', /* For config tableName */
    orderKey: ['rating', 'created_at', 'updated_at'], /* Key for sort */
    mainDb: 'casinos',           // Naming for Shemas (core shemas)
    metaDb: 'casinoMeta',
    categoryDb: 'casinoCategory',
    nameMainTable: tableName.CASINO.main, // Naming for Shemas current schemas
    nameMetaTable: tableName.CASINO.meta,
    nameCategoryTable: tableName.CASINO.category,
    nameCategoryPostRelativeTable: tableName.CASINO.relative.category
}
const fields = {
    faq: {
        default: [],
        dataType: 'JSON',
        schemas: {
            type: 'TEXT'
        }
    },
    reviews: {
        default: [],
        dataType: 'JSON',
        schemas: {
            type: 'TEXT'
        }
    },
    ref: {
        default: [],
        dataType: 'JSON',
        schemas: {
            type: 'TEXT'
        }
    },
    close: {
        default: 0,
        dataType: 'BOOLEAN',
        schemas: {
            type: 'BOOLEAN',
            defaultValue: false
        }
    },
    rating: {
        default: 0,
        dataType: 'INTEGER',
        schemas: {
            type: 'INTEGER',
            defaultValue: 0
        }
    },
    phone: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    },
    min_deposit: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    },
    min_payments: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    },
    email: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    },
    chat: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    },
    year: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    },
    site: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    },
    withdrawal: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    },
    number_games: {
        default: '',
        dataType: 'STRING',
        schemas: {
            type: 'STRING'
        }
    }
}
module.exports = {
    config,
    fields
}