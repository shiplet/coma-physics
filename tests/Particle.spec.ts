import Particle from '../lib/classes/Particle'
import Vector3 from '../lib/classes/Vector3'

function getParticle() {
	const position = new Vector3(1, 2, 3)
	const velocity = new Vector3(1, -1, 2)
	const acceleration = new Vector3(0, 1, -1)
	const damping = 0.999

	return new Particle(position, velocity, acceleration, damping)
}

test('Particle instantiates', () => {
	const p = getParticle()
	expect(p).toBeInstanceOf(Particle)
})

describe('Particle getters & setters', () => {
	const p = getParticle()
	test('position', () => {
		p.setPosition(0, 0, -1)
		const position = p.getPosition()
		expect(position.x).toEqual(0)
		expect(position.y).toEqual(0)
		expect(position.z).toEqual(-1)
	})

	test('velocity', () => {
		p.setVelocity(0, 0, -1)
		const velocity = p.getVelocity()
		expect(velocity.x).toEqual(0)
		expect(velocity.y).toEqual(0)
		expect(velocity.z).toEqual(-1)
	})

	test('acceleration', () => {
		p.setAcceleration(0, 0, -1)
		const acceleration = p.getAcceleration()
		expect(acceleration.x).toEqual(0)
		expect(acceleration.y).toEqual(0)
		expect(acceleration.z).toEqual(-1)
	})

	test('damping', () => {
		const d = 0.99
		p.setDamping(d)
		expect(p.getDamping()).toEqual(d)
	})
})

test('Particle.setMass is correct', () => {
	const p = getParticle()
	expect(() => {
		p.setMass(1)
	}).not.toThrowError()
})

test('Particle.getMass is correct', () => {
	const p = getParticle()
	p.setMass(1)
	expect(p.getMass()).toEqual(1)
})

test('Particle.setMass throws on 0', () => {
	const p = getParticle()
	expect(() => {
		p.setMass(0)
	}).toThrowError()
})

test('Particle.setInverseMass is correct', () => {
	const p = getParticle()
	p.setInverseMass(0)
	expect(p.getInverseMass()).toEqual(0)
})

test('Particle.getMass returns Infinity when inverseMass is 0', () => {
	const p = getParticle()
	p.setInverseMass(0)
	expect(p.getMass()).toEqual(Infinity)
})

test('Particle.getInverseMass is correct', () => {
	const p = getParticle()
	p.setInverseMass(0)
	expect(p.getInverseMass()).toEqual(0)
})

test('Particle.integrate is correct', () => {
	const p = getParticle()
	const duration = 2
	const velocityAdjustment = Math.pow(0.999, duration)
	p.integrate(duration)
	expect(p.position.x).toEqual(3)
	expect(p.position.y).toEqual(0)
	expect(p.position.z).toEqual(7)

	expect(p.velocity.x).toEqual(1 * velocityAdjustment)
	expect(p.velocity.y).toEqual(1 * velocityAdjustment)
	expect(p.velocity.z).toEqual(0 * velocityAdjustment)
})
