const ascending = require('./challenge')

test('ascending([1, 2, 3, 4, 5]) returns true', () => {
	expect(ascending([1, 2, 3, 4, 5])).toBe(true)
})

test('ascending([1, 2, 4, 3, 5]) returns false', () => {
	expect(ascending([1, 2, 4, 3, 5])).toBe(false)
})

test('ascending([3, 3, 3]) returns true', () => {
	expect(ascending([3, 3, 3])).toBe(true)
})

test('ascending([-1, 0, 0]) returns true', () => {
	expect(ascending([-1, 0, 0])).toBe(true)
})

test('ascending([-1, -2, -3]) returns false', () => {
	expect(ascending([-1, -2, -3])).toBe(false)
})

test('ascending([1, 1000, 1000000]) returns true', () => {
	expect(ascending([1, 1000, 1000000])).toBe(true)
})

test('ascending([1, 2, 3, 4, 6, 7, 8, 9, 10]) returns true', () => {
	expect(ascending([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(true)
})

test('ascending([1, 2, 3, 5, 4, 7, 8, 9, 10]) returns false', () => {
	expect(ascending([1, 2, 3, 5, 4, 7, 8, 9, 10])).toBe(false)
})

test('ascending([10, 10, 10, 10, 10, 20]) returns true', () => {
	expect(ascending([10, 10, 10, 10, 10, 20])).toBe(true)
})

test('ascending([10, 10, 10, 10, 10, 20, 10]) returns false', () => {
	expect(ascending([10, 10, 10, 10, 10, 20, 10])).toBe(false)
})
