import { Vector3 } from './Vector3'

export class Particle {
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
	 * Construct a new particle
	 * @param p {Vector3} position
	 * @param v {Vector3} velocity
	 * @param a {Vector3} acceleration
	 * @param d {number} damping
	 */
	constructor(p: Vector3, v: Vector3, a: Vector3, d: number) {
		this.position = p
		this.velocity = v
		this.acceleration = a
		this.damping = d
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
	 * Useful in determining acceleration and avoiding infinite masses
	 */
	protected inverseMass: number

	setInverseMass(m: number) {
		if (m > 0) {
			this.inverseMass = 1 / m
		} else {
			throw new Error(`mass must be a positive, non-zero value, got: ${m}`)
		}
	}

	integrate(duration: number) {
		if (this.inverseMass <= 0) {
			return
		}

		if (duration <= 0) {
			throw new Error(
				`duration must be a positive, non-zero value, got: ${duration}`,
			)
		}

		this.position.addScaledVectorUpdate(this.velocity, duration)

		const resultingAcc = this.acceleration

		this.velocity.addScaledVectorUpdate(resultingAcc, duration)

		const dampingOffset = Math.pow(this.damping, duration)

		this.velocity.componentProductUpdate(
			new Vector3(dampingOffset, dampingOffset, dampingOffset),
		)
	}
}
