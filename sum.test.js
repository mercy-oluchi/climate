const {sum , fruits} = require('./sum')

test('add 2 + 3 to equal 5' , () => {
    expect(sum(2,3)).toBe(5)
})

test ('check if array contains specific element' ,() => {
     
    expect(fruits).toContain('nut')
} ) 
    expect(fruits).toHaveLength(4)