import { Particle } from '../lib/classes/Particle'

test('Particle instantiates', () => {
  const p = new Particle()
  expect(p).toBeInstanceOf(Particle)
})
