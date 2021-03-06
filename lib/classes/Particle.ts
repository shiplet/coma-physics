import Vector3 from './Vector3'

export default class Particle {
	/**
	 * The particle's linear position in 3-dimensional space
	 */
	position: Vector3

	/**
	 * The particle's linear velocity in 3-dimensional space,
	 * a factor of speed (magnitude) and direction
	 */
	velocity: Vector3

	/**
	 * The particle's acceleration, typically used to
	 * indicate gravity, but can represent any accelerating
	 * force
	 */
	acceleration: Vector3

	/**
	 * The damping applied to the particle's linear motion.
	 * Offsets numerical inaccuracy in the integrator.
	 */
	damping: number

	/**
	 * Useful in determining acceleration and avoiding infinite masses
	 */
	protected inverseMass: number

	/**
	 * Construct a new particle
	 * @param p {Vector3} position
	 * @param v {Vector3} velocity
	 * @param a {Vector3} acceleration
	 * @param d {number} damping
	 */
	constructor(
		p: Vector3 = new Vector3(0, 0, 0),
		v: Vector3 = new Vector3(0, 0, 0),
		a: Vector3 = new Vector3(0, 0, 0),
		d: number = 0.999,
	) {
		this.position = p
		this.velocity = v
		this.acceleration = a
		this.damping = d
	}

	// Getters & Setters
	/**
	 * Set position
	 * @param p {Vector3}
	 */
	setPosition(x: number, y: number, z: number) {
		this.position = new Vector3(x, y, z)
	}

	/**
	 * Get position
	 */
	getPosition() {
		return this.position
	}

	/**
	 * Set velocity
	 * @param v {Vector3}
	 */
	setVelocity(x: number, y: number, z: number) {
		this.velocity = new Vector3(x, y, z)
	}

	/**
	 * Get velocity
	 */
	getVelocity() {
		return this.velocity
	}

	/**
	 * Set acceleration
	 * @param a {Vector3}
	 */
	setAcceleration(x: number, y: number, z: number) {
		this.acceleration = new Vector3(x, y, z)
	}

	/**
	 * Get acceleration
	 */
	getAcceleration() {
		return this.acceleration
	}

	/**
	 * Set damping
	 * @param d {number}
	 */
	setDamping(d: number) {
		this.damping = d
	}

	/**
	 * Get damping
	 */
	getDamping() {
		return this.damping
	}

	/**
	 * The numerical mass of the particle
	 */
	setMass(m: number) {
		if (m > 0) {
			this.inverseMass = 1 / m
		} else {
			throw new Error(`mass must be a positive, non-zero value, got: ${m}`)
		}
	}

	/**
	 * Get mass or infinity
	 */
	getMass() {
		if (this.inverseMass === 0) {
			return Infinity
		} else {
			return 1 / this.inverseMass
		}
	}

	/**
	 * Set the inverse mass directly
	 * @param m {number} mass
	 */
	setInverseMass(m: number) {
		this.inverseMass = m
	}

	/**
	 * Get the inverseMass
	 */
	getInverseMass() {
		return this.inverseMass
	}

	/**
	 * Integrate the particle over the specified direction
	 * @param duration {number} seconds
	 */
	integrate(duration: number) {
		if (this.inverseMass <= 0) {
			return
		}

		if (duration <= 0) {
			throw new Error(
				`duration must be a positive, non-zero value, got: ${duration}`,
			)
		}

		this.position?.addScaledVectorUpdate(this.velocity, duration)

		const resultingAcc = this.acceleration

		this.velocity?.addScaledVectorUpdate(resultingAcc, duration)

		const dampingOffset = Math.pow(this.damping, duration)

		this.velocity?.componentProductUpdate(
			new Vector3(dampingOffset, dampingOffset, dampingOffset),
		)
	}
}
