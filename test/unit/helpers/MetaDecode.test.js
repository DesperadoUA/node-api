const Helper = require('../../../helpers')
const casinoFields = require('../../../app/casino/fields')
const store = require('../../../core/store')
describe('Meta fields', () => {
    it(`Save empty`,() => {
        const result = Helper.metaSave({}, casinoFields)
        for(const key in casinoFields) {
            if(casinoFields[key].dataType === 'JSON') {
                expect(result[key]).toEqual(JSON.stringify(casinoFields[key].default))
            } else {
                expect(result[key]).toEqual(casinoFields[key].default)
            }
        } 
    })
    it(`Save empty`,() => {
        const data = {
            faq: [],
            reviews: [],
            ref: [],
            close: 0,
            rating: 75,
            phone: 'phone',
            min_deposit: 'min_deposit',
            min_payments: 'min_payments',
            email: 'email',
            chat: 'chat',
            year: 'year',
            site: 'site',
            withdrawal: 'withdrawal',
            number_games: 'number_games'
        }
        const result = Helper.metaSave(data, casinoFields)
        for(const key in casinoFields) {
            if(casinoFields[key].dataType === 'JSON') {
                expect(result[key]).toEqual(JSON.stringify(casinoFields[key].default))
            } else {
                expect(result[key]).toEqual(casinoFields[key].default)
            }
        } 
    })
})