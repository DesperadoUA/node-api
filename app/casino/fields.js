const fields = {
    faq: {
        default: [],
        dataType: 'JSON'
    },
    reviews: {
        default: [],
        dataType: 'JSON'
    },
    ref: {
        default: [],
        dataType: 'JSON'
    },
    close: {
        default: 0,
        dataType: 'BOOLEAN'
    },
    rating: {
        default: 0,
        dataType: 'INTEGER'
    },
    phone: {
        default: '',
        dataType: 'STRING'
    },
    min_deposit: {
        default: '',
        dataType: 'STRING'
    },
    min_payments: {
        default: '',
        dataType: 'STRING'
    },
    email: {
        default: '',
        dataType: 'STRING'
    },
    chat: {
        default: '',
        dataType: 'STRING'
    },
    year: {
        default: '',
        dataType: 'STRING'
    },
    site: {
        default: '',
        dataType: 'STRING'
    },
    withdrawal: {
        default: '',
        dataType: 'STRING'
    },
    number_games: {
        default: '',
        dataType: 'STRING'
    }
}
module.exports = fields