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
}
