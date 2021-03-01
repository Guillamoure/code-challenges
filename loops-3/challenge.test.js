const indexChecker = require('./challenge')

test('indexChecker([0]) returns []', () => {
	expect(indexChecker([0])).toEqual([])
})

test('indexChecker([1]) returns [0]', () => {
	expect(indexChecker([1])).toEqual([0])
})

test('indexChecker([0, 1, 2, 3, 4]) returns []', () => {
	expect(indexChecker([0, 1, 2, 3, 4])).toEqual([])
})

test('indexChecker([0, 1, 2, 3, 4, 777]) returns [5]', () => {
	expect(indexChecker([0, 1, 2, 3, 4, 777])).toEqual([5])
})

test('indexChecker([-1000, 1, 2, 3]) returns [0]', () => {
	expect(indexChecker([-1000, 1, 2, 3])).toEqual([0])
})

test('indexChecker([55, 66]) returns [0, 1]', () => {
	expect(indexChecker([55, 66])).toEqual([0, 1])
})

test('indexChecker([]) returns []', () => {
	expect(indexChecker([])).toEqual([])
})
