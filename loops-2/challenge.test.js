const zeroChecker = require('./challenge')

test('zeroChecker([0]) returns [0]', () => {
	expect(zeroChecker([0])).toEqual([0])
})

test('zeroChecker([1]) returns []', () => {
	expect(zeroChecker([1])).toEqual([])
})

test('zeroChecker([1, 1, 0]) returns [2]', () => {
	expect(zeroChecker([1, 1, 0])).toEqual([2])
})

test('zeroChecker([1, 1, 0, 1, 1]) returns [2]', () => {
	expect(zeroChecker([1, 1, 0, 1, 1])).toEqual([2])
})

test('zeroChecker([0, 1, 0, 1, 0]) returns [0, 2, 4]', () => {
	expect(zeroChecker([0, 1, 0, 1, 0])).toEqual([0, 2, 4])
})

test('zeroChecker([0, 1, 1, 1, 1]) returns [0]', () => {
	expect(zeroChecker([0, 1, 1, 1, 1])).toEqual([0])
})

test('zeroChecker([1, 1, 1, 1, 1, 1]) returns []', () => {
	expect(zeroChecker([1, 1, 1, 1, 1, 1])).toEqual([])
})

test('zeroChecker([0, 0, 0, 0]) returns [0, 1, 2, 3]', () => {
	expect(zeroChecker([0, 0, 0, 0])).toEqual([0, 1, 2, 3])
})
