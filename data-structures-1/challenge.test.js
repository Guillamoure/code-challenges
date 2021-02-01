const counting = require('./challenge')

test('counting(["a", "a"]) returns {a: 2}', () => {
	expect(counting(["a", "a"])).toEqual({a: 2})
})

test('counting(["a", "b"]) returns {a: 1, b: 1}', () => {
	expect(counting(["a", "b"])).toEqual({a: 1, b: 1})
})

test('counting(["a", "a", "a", "b", "a"]) returns {a: 4, b: 1}', () => {
	expect(counting(["a", "a", "a", "b", "a"])).toEqual({a: 4, b: 1})
})

test('counting(["b", "a", "a", "b", "a"]) returns {a: 3, b: 2}', () => {
	expect(counting(["b", "a", "a", "b", "a"])).toEqual({a: 3, b: 2})
})

test('counting(["b", "1", "1", "b", "1"]) returns {1: 3, b: 2}', () => {
	expect(counting(["b", "1", "1", "b", "1"])).toEqual({1: 3, b: 2})
})

test('counting([]) returns {}', () => {
	expect(counting([])).toEqual({})
})

test('counting(["string", "STRING", "STRINg", "StRiNg", "strinG"]) returns {string: 1, STRING: 1, STRINg: 1, StRiNg: 1, strinG: 1}', () => {
	expect(counting(["string", "STRING", "STRINg", "StRiNg", "strinG"])).toEqual({string: 1, STRING: 1, STRINg: 1, StRiNg: 1, strinG: 1})
})
