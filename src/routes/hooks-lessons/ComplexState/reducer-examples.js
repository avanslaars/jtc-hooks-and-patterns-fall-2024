const numbers = [1, 2, 3, 4]

// TODO: Get the total of the numbers array
const total = numbers.reduce((acc, num) => {
	return acc + num
}, 0)

console.log(total) // ?

const productList = [
	{ id: "abc", name: "ABC", price: 10, qty: 3 },
	{ id: "def", name: "DEF", price: 12, qty: 6 },
	{ id: "ghi", name: "GHI", price: 8, qty: 13 },
]

// TODO: Create an object where each top-level key is a product ID, the value should be the rest of the object

const productObject = productList.reduce((state, obj) => {
	const { id, ...rest } = obj
	state[id] = rest
	return state
}, {})

console.log(productObject) // ?
