export class Vector3 {
  x: number;
  y: number;
  z: number;
  pad?: number;

  /**
   * Constructs a single instance of the Vector3 class
   * @param x {Number}
   * @param y {Number}
   * @param z {Number}
   * @param pad {Number}
   */
  constructor(x: number, y: number, z: number, pad?: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.pad = pad;
  }

  /**
   * Returns the true magnitude of the current vector.
   */
  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  /**
   * Returns the square magnitude of the current vector.
   * Useful for performance-critical calculations and
   * when comparing the magnitude of two vectors.
   */
  squareMagnitude(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  /**
   * Returns a new, normalized instance of the current Vector3.
   */
  normalize(): Vector3 {
    const l = this.magnitude();
    if (l > 0) {
      return new Vector3((1 / l) * this.x, (1 / l) * this.y, (1 / l) * this.z);
    } else {
      return this;
    }
  }

  /**
   * Returns a new Vector3 multiplied by the provided scalar value
   * @param scale {Number}
   */
  scalarMultiply(scale: number): Vector3 {
    return new Vector3(scale * this.x, scale * this.y, scale * this.z);
  }

  /**
   * Returns a new Vector3 resultant from adding the Vector3 provided in argument.
   * @param v {Vector3}
   */
  add(v: Vector3): Vector3 {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  /**
   * Returns a new Vector3 resultant from adding and scaling vector based on provided arguments
   * @param v {Vector3}
   * @param scale {number}
   */
  addScaled(v: Vector3, scale: number): Vector3 {
    return new Vector3(
      this.x + v.x * scale,
      this.y + v.y * scale,
      this.z + v.z * scale,
    );
  }

  /**
   * Returns a new Vector3 resultant from subtracting the Vector3 provided in argument.
   * @param v {Vector3}
   */
  subtract(v: Vector3): Vector3 {
    return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  /**
   * Returns a new Vector3 resultant from subtracting and scaling vector based on provided arguments
   * @param v {Vector3}
   * @param scale {number}
   */
  subtractScaled(v: Vector3, scale: number): Vector3 {
    return new Vector3(
      this.x - v.x * scale,
      this.y - v.y * scale,
      this.z - v.z * scale,
    );
  }
}
