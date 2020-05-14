export class Vector3 {
	/**
	 * The x, y, z, pad coordinates of the Vector,
	 * representing a location in 3-dimensional space
	 */
	x: number
	y: number
	z: number
	pad?: number

	/**
	 * Constructs a single instance of the Vector3 class
	 * @param x {Number}
	 * @param y {Number}
	 * @param z {Number}
	 * @param pad {Number}
	 */
	constructor(x: number, y: number, z: number, pad?: number) {
		this.x = x
		this.y = y
		this.z = z
		this.pad = pad
	}

	/**
	 * Returns the true magnitude of the current vector.
	 */
	magnitude(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
	}

	/**
	 * Returns the square magnitude of the current vector.
	 * Useful for performance-critical calculations and
	 * when comparing the magnitude of two vectors.
	 */
	squareMagnitude(): number {
		return this.x * this.x + this.y * this.y + this.z * this.z
	}

	/**
	 * Returns a new, normalized instance of the current Vector3.
	 */
	normalize(): Vector3 {
		const m = this.magnitude()
		if (m > 0) {
			return new Vector3((1 / m) * this.x, (1 / m) * this.y, (1 / m) * this.z)
		} else {
			return this
		}
	}

	/**
	 * Normalize and mutate the properties of the vector
	 */
	normalizeUpdate() {
		const m = this.magnitude()
		if (m > 0) {
			this.x = (1 / m) * this.x
			this.y = (1 / m) * this.y
			this.z = (1 / m) * this.z
		}
	}

	/**
	 * Returns a new Vector3 multiplied by the provided scalar value
	 * @param scale {Number}
	 */
	scalarMultiply(scale: number): Vector3 {
		return new Vector3(scale * this.x, scale * this.y, scale * this.z)
	}

	/**
	 * Multiply and mutate the properties of the vector
	 * @param scale {Number}
	 */
	scalarMultiplyUpdate(scale: number) {
		this.x *= scale
		this.y *= scale
		this.z *= scale
	}

	/**
	 * Returns a new Vector3 resultant from adding the Vector3 provided in argument.
	 * @param v {Vector3}
	 */
	add(v: Vector3): Vector3 {
		return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z)
	}

	/**
	 * Add and mutate properties of the vector
	 * @param v {Vector3}
	 */
	addUpdate(v: Vector3) {
		this.x += v.x
		this.y += v.y
		this.z += v.z
	}

	/**
	 * Returns a new Vector3 resultant from adding and scaling vector based on provided arguments
	 * @param v {Vector3}
	 * @param scale {number}
	 */
	addScaledVector(v: Vector3, scale: number): Vector3 {
		return new Vector3(
			this.x + v.x * scale,
			this.y + v.y * scale,
			this.z + v.z * scale,
		)
	}

	/**
	 * Add, scale, and mutate the properties of the vector
	 * @param v {Vector3}
	 * @param scale {number}
	 */
	addScaledVectorUpdate(v: Vector3, scale: number) {
		this.x += v.x * scale
		this.y += v.y * scale
		this.z += v.z * scale
	}

	/**
	 * Returns a new Vector3 resultant from subtracting the Vector3 provided in argument.
	 * @param v {Vector3}
	 */
	subtract(v: Vector3): Vector3 {
		return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z)
	}

	/**
	 * Subtract and mutate the properties of the vector
	 * @param v {Vector3}
	 */
	subtractUpdate(v: Vector3) {
		this.x -= v.x
		this.y -= v.y
		this.z -= v.z
	}

	/**
	 * Returns a new Vector3 resultant from subtracting and scaling vector based on provided arguments
	 * @param v {Vector3}
	 * @param scale {number}
	 */
	subtractScaledVector(v: Vector3, scale: number): Vector3 {
		return new Vector3(
			this.x - v.x * scale,
			this.y - v.y * scale,
			this.z - v.z * scale,
		)
	}

	/**
	 * Subtract, scale, and mutate the properties of the vector
	 * @param v {Vector3}
	 * @param scale {number}
	 */
	subtractScaledVectorUpdate(v: Vector3, scale: number) {
		this.x -= v.x * scale
		this.y -= v.y * scale
		this.z -= v.z * scale
	}

	/**
	 * Returns the component product of vector instance and argument vector
	 * @param v {Vector3}
	 */
	componentProduct(v: Vector3): Vector3 {
		return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z)
	}

	/**
	 * Apply component product and mutate properties of the vector
	 * @param v {Vector3}
	 */
	componentProductUpdate(v: Vector3) {
		this.x *= v.x
		this.y *= v.y
		this.z *= v.z
	}

	/**
	 * Returns scalar product of instance vector and argument vector
	 * @param v {Vector3}
	 */
	scalarProduct(v: Vector3): number {
		return this.x * v.x + this.y * v.y + this.z * v.z
	}

	/**
	 * Alias to scalarProduct
	 * @param v {Vector3}
	 */
	dotProduct(v: Vector3): number {
		return this.scalarProduct(v)
	}

	/**
	 * Returns vector product of instance vector and argument vector
	 * @param v {Vector3}
	 */
	vectorProduct(v: Vector3): Vector3 {
		return new Vector3(
			this.y * v.z - this.z * v.y,
			this.z * v.x - this.x * v.z,
			this.x * v.y - this.y * v.x,
		)
	}

	/**
	 * Apply vector product and mutate values of the vector
	 * @param v {Vector3}
	 */
	vectorProductUpdate(v: Vector3) {
		const x = this.y * v.z - this.z * v.y
		const y = this.z * v.x - this.x * v.z
		const z = this.x * v.y - this.y * v.x

		this.x = x
		this.y = y
		this.z = z
	}

	/**
	 * Alias to vectorProduct
	 * @param v {Vector3}
	 */
	crossProduct(v: Vector3): Vector3 {
		return this.vectorProduct(v)
	}

	/**
	 * Returns orthonormal vector of instance vector and argument vector
	 * or throws an error if vectors are parallel
	 * @param v {Vector3}
	 */
	getOrthonormal(v: Vector3): Vector3 {
		const vec1 = this.normalize()
		let vec2 = vec1.crossProduct(v)
		if (vec2.squareMagnitude() === 0) {
			throw new Error('vectors are parallel')
		}
		vec2 = vec2.normalize()
		return vec2.crossProduct(vec1)
	}
}
