test('One dollar should be 134.14 Yens', () => {
    const { fromDollarToYen } = require('./app.js')
    
    const yens = fromDollarToYen (2)
    const result = 2*134.14

    expect(fromDollarToYen(2)).toBe(268.28)
})

test('One Euro should be 1.06 Dollar', () => {
    const { fromEuroToDollar } = require('./app.js')
    
    const dollar = fromEuroToDollar (2)
    const result = 2*1.06

    expect(fromEuroToDollar(2)).toBe(2.12)
})

test('One Yan should be 0.0060 Pounds', () => {
    const { fromYanToPound } = require('./app.js')
    
    const pound = fromYanToPound (2)
    const result = 2*0.0060

    expect(fromEuroToDollar(2)).toBe(0.012)
})