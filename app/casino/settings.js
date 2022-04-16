const tableName = require('../../core/models/tableName')
const table = 'CASINO'
const config = {
    postType: 'casino',
    postTypeSlug: 'casino',
    postTypeCategory: 'casino/category',
    postTypeCategorySlug: 'casinos',
    orderKey: ['rating', 'created_at', 'updated_at'], /* Key for sort */

    table: table, /* For config tableName */
    mainDb: tableName[table].main,           // key in core db
    metaDb: tableName[table].meta,
    categoryDb: tableName[table].category,
    relativeDB: tableName[table].relative.category,
    relatives: {}
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