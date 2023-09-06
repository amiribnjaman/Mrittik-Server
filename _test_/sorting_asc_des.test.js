const sorting_asc_des = require('../commonFunctions/sorting_asc_des')
const data =[{"id": "6",
"price": "19.00",
"categoryID": "4"}]

describe('Accept two parameter', ()=> {
    test('return an array as sorting asc and des order', () => {
        expect(sorting_asc_des('order', data)).toBe(data.sort((a, b)=> a.price - b.price))
    })
})