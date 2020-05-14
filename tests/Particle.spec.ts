import { Particle } from '../lib/classes/Particle'
import { Vector3 } from '../lib/classes/Vector3'

test('Particle instantiates', () => {
	const position = new Vector3(1, 2, 3)
	const velocity = new Vector3(1, -1, 2)
	const acceleration = new Vector3(0, 1, -1)
	const damping = 0.999

	const p = new Particle(position, velocity, acceleration, damping)
	expect(p).toBeInstanceOf(Particle)
})
