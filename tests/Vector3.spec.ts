import { Vector3 } from "../lib/classes/Vector3";

test("Vector3 instantiates", () => {
  const value = 2;
  const vec3 = new Vector3(value, value, value);
  expect(vec3).toBeInstanceOf(Vector3);
});

test("Vector3.magnitude is correct", () => {
  const value = 2;
  const vec3 = new Vector3(value, value, value);
  const result = Math.sqrt(value * value + value * value + value * value);
  expect(vec3.magnitude()).toEqual(result);
});

test("Vector3.squareMagnitude is correct", () => {
  const value = 2;
  const vec3 = new Vector3(value, value, value);
  const result = value * value + value * value + value * value;
  expect(vec3.squareMagnitude()).toEqual(result);
});

test("Vector3.normalize is correct", () => {
  const value = 2;
  const vec3 = new Vector3(value, value, value);
  const result = (1 / vec3.magnitude()) * value;
  const vec3Result = new Vector3(result, result, result);
  expect(vec3.normalize().x).toEqual(vec3Result.x);
  expect(vec3.normalize().y).toEqual(vec3Result.y);
  expect(vec3.normalize().z).toEqual(vec3Result.z);
});

test("Vector3.scalarMultiply is correct", () => {
  const value = 2;
  const scalar = 3;
  const vec3 = new Vector3(value, value, value);
  const result = vec3.scalarMultiply(scalar);
  expect(result.x).toEqual(value * scalar);
  expect(result.y).toEqual(value * scalar);
  expect(result.z).toEqual(value * scalar);
});

test("Vector3.add is correct", () => {
  const value = 2;
  const altValue = 3;
  const vec1 = new Vector3(value, value, value);
  const vec2 = new Vector3(altValue, altValue, altValue);
  const result = vec1.add(vec2);
  expect(result.x).toEqual(value + altValue);
  expect(result.y).toEqual(value + altValue);
  expect(result.z).toEqual(value + altValue);
});

test("Vector3.addScale is correct", () => {
  const value = 2;
  const altValue = 3;
  const scale = 4;
  const vec1 = new Vector3(value, value, value);
  const vec2 = new Vector3(altValue, altValue, altValue);
  const result = vec1.addScaled(vec2, scale);
  expect(result.x).toEqual(value + altValue * scale);
  expect(result.y).toEqual(value + altValue * scale);
  expect(result.z).toEqual(value + altValue * scale);
});

test("Vector3.subtract is correct", () => {
  const value = 3;
  const altValue = 2;
  const vec1 = new Vector3(value, value, value);
  const vec2 = new Vector3(altValue, altValue, altValue);
  const result = vec1.subtract(vec2);
  expect(result.x).toEqual(value - altValue);
  expect(result.y).toEqual(value - altValue);
  expect(result.z).toEqual(value - altValue);
});

test("Vector3.subtractScale is correct", () => {
  const value = 2;
  const altValue = 3;
  const scale = 4;
  const vec1 = new Vector3(value, value, value);
  const vec2 = new Vector3(altValue, altValue, altValue);
  const result = vec1.subtractScaled(vec2, scale);
  expect(result.x).toEqual(value - altValue * scale);
  expect(result.y).toEqual(value - altValue * scale);
  expect(result.z).toEqual(value - altValue * scale);
});
