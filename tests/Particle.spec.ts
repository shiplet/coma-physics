import { Particle } from '../lib/classes/Particle'
import { Vector3 } from '../lib/classes/Vector3'

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
