import { Vector3 } from '../lib/classes/Vector3'

test('Vector3 instantiates', () => {
	const value = 2
	const vec = new Vector3(value, value, value)
	expect(vec).toBeInstanceOf(Vector3)
})

test('Vector3.magnitude is correct', () => {
	const value = 2
	const vec = new Vector3(value, value, value)
	const result = Math.sqrt(value * value + value * value + value * value)
	expect(vec.magnitude()).toEqual(result)
})

test('Vector3.squareMagnitude is correct', () => {
	const value = 2
	const vec = new Vector3(value, value, value)
	const result = value * value + value * value + value * value
	expect(vec.squareMagnitude()).toEqual(result)
})

test('Vector3.normalize is correct', () => {
	const value = 2
	const vec = new Vector3(value, value, value)
	const result = (1 / vec.magnitude()) * value
	expect(vec.normalize().x).toEqual(result)
	expect(vec.normalize().y).toEqual(result)
	expect(vec.normalize().z).toEqual(result)
})

test('Vector3.normalizeUpdate is correct', () => {
	const value = 2
	const vec = new Vector3(value, value, value)
	const result = (1 / vec.magnitude()) * value
	vec.normalizeUpdate()
	expect(vec.x).toEqual(result)
	expect(vec.y).toEqual(result)
	expect(vec.z).toEqual(result)
})

test('Vector3.scalarMultiply is correct', () => {
	const value = 2
	const scalar = 3
	const vec = new Vector3(value, value, value)
	const result = vec.scalarMultiply(scalar)
	expect(result.x).toEqual(value * scalar)
	expect(result.y).toEqual(value * scalar)
	expect(result.z).toEqual(value * scalar)
})

test('Vector3.scalarMultiplyUpdate is correct', () => {
	const value = 2
	const scalar = 3
	const vec = new Vector3(value, value, value)
	vec.scalarMultiplyUpdate(scalar)
	expect(vec.x).toEqual(value * scalar)
	expect(vec.y).toEqual(value * scalar)
	expect(vec.z).toEqual(value * scalar)
})

test('Vector3.add is correct', () => {
	const value = 2
	const altValue = 3
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.add(vec2)
	expect(result.x).toEqual(value + altValue)
	expect(result.y).toEqual(value + altValue)
	expect(result.z).toEqual(value + altValue)
})

test('Vector3.addUpdate is correct', () => {
	const value = 2
	const altValue = 3
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	vec1.addUpdate(vec2)
	expect(vec1.x).toEqual(value + altValue)
	expect(vec1.y).toEqual(value + altValue)
	expect(vec1.z).toEqual(value + altValue)
})

test('Vector3.addScaledVector is correct', () => {
	const value = 2
	const altValue = 3
	const scale = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.addScaledVector(vec2, scale)
	expect(result.x).toEqual(value + altValue * scale)
	expect(result.y).toEqual(value + altValue * scale)
	expect(result.z).toEqual(value + altValue * scale)
})

test('Vector3.addScaledVectorUpdate is correct', () => {
	const value = 2
	const altValue = 3
	const scale = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	vec1.addScaledVectorUpdate(vec2, scale)
	expect(vec1.x).toEqual(value + altValue * scale)
	expect(vec1.y).toEqual(value + altValue * scale)
	expect(vec1.z).toEqual(value + altValue * scale)
})

test('Vector3.subtract is correct', () => {
	const value = 3
	const altValue = 2
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.subtract(vec2)
	expect(result.x).toEqual(value - altValue)
	expect(result.y).toEqual(value - altValue)
	expect(result.z).toEqual(value - altValue)
})

test('Vector3.subtractUpdate is correct', () => {
	const value = 3
	const altValue = 2
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	vec1.subtractUpdate(vec2)
	expect(vec1.x).toEqual(value - altValue)
	expect(vec1.y).toEqual(value - altValue)
	expect(vec1.z).toEqual(value - altValue)
})

test('Vector3.subtractScaledVector is correct', () => {
	const value = 3
	const altValue = 4
	const scale = 5
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.subtractScaledVector(vec2, scale)
	expect(result.x).toEqual(value - altValue * scale)
	expect(result.y).toEqual(value - altValue * scale)
	expect(result.z).toEqual(value - altValue * scale)
})

test('Vector3.subtractScaledVectorUpdate is correct', () => {
	const value = 3
	const altValue = 4
	const scale = 5
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	vec1.subtractScaledVectorUpdate(vec2, scale)
	expect(vec1.x).toEqual(value - altValue * scale)
	expect(vec1.y).toEqual(value - altValue * scale)
	expect(vec1.z).toEqual(value - altValue * scale)
})

test('Vector3.componentProduct is correct', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.componentProduct(vec2)
	expect(result.x).toEqual(value * altValue)
	expect(result.y).toEqual(value * altValue)
	expect(result.z).toEqual(value * altValue)
})

test('Vector3.componentProductUpdate is correct', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	vec1.componentProductUpdate(vec2)
	expect(vec1.x).toEqual(value * altValue)
	expect(vec1.y).toEqual(value * altValue)
	expect(vec1.z).toEqual(value * altValue)
})

test('Vector3.scalarProduct is correct', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.scalarProduct(vec2)
	expect(result).toEqual(value * altValue + value * altValue + value * altValue)
})

test('Vector3.dotProduct is correct', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.dotProduct(vec2)
	expect(result).toEqual(value * altValue + value * altValue + value * altValue)
})

test('Vector3.vectorProduct is correct', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.vectorProduct(vec2)
	expect(result.x).toEqual(vec1.y * vec2.z - vec1.z * vec2.y)
	expect(result.y).toEqual(vec1.z * vec2.x - vec1.x * vec2.z)
	expect(result.z).toEqual(vec1.x * vec2.y - vec1.y * vec2.x)
})

test('Vector3.vectorProductUpdate is correct', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	vec1.vectorProductUpdate(vec2)
	expect(vec1.x).toEqual(vec1.y * vec2.z - vec1.z * vec2.y)
	expect(vec1.y).toEqual(vec1.z * vec2.x - vec1.x * vec2.z)
	expect(vec1.z).toEqual(vec1.x * vec2.y - vec1.y * vec2.x)
})

test('Vector3.crossProduct is correct', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	const result = vec1.crossProduct(vec2)
	expect(result.x).toEqual(vec1.y * vec2.z - vec1.z * vec2.y)
	expect(result.y).toEqual(vec1.z * vec2.x - vec1.x * vec2.z)
	expect(result.z).toEqual(vec1.x * vec2.y - vec1.y * vec2.x)
})

test('Vector3.getOrthonormal parallels throw error', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, value, value)
	const vec2 = new Vector3(altValue, altValue, altValue)
	expect(() => {
		vec1.getOrthonormal(vec2)
	}).toThrow()
})

test('Vector3.getOrthonormal non-parallels', () => {
	const value = 3
	const altValue = 4
	const vec1 = new Vector3(value, altValue, value)
	const vec2 = new Vector3(altValue, value, altValue)
	const vec3 = vec1.getOrthonormal(vec2)
	expect(vec1.dotProduct(vec3)).toEqual(0)
})
