/*
 * Explanation
 * -----------
 * Approach: Solve the quadratic equation ax^2 + bx + c = 0 using the quadratic
 *   formula, and return the roots floored (larger root first).
 * How it works:
 *   1. Compute the discriminant d = b^2 - 4ac.
 *   2. If d < 0 there are no real roots, so return [-1].
 *   3. Otherwise take sqrt(d) and apply the formula (-b +/- sqrt(d)) / 2a
 *      (written here as ((-b +/- sqrt(d)) / 2) * a), flooring each result.
 * Example: getQuadraticRoots(1, -2, 1) -> d = 0, both roots = floor(2/2 * 1) = 1 -> [1, 1].
 * Time Complexity: O(1)
 * Auxiliary Space: O(1)
 */
class QuadraticRoots {
  getQuadraticRoots(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return [-1];
    }

    const sqrtDiscriminant = Math.sqrt(discriminant);

    const firstRoot = Math.floor(((-b + sqrtDiscriminant) / 2) * a);
    const secondRoot = Math.floor(((-b - sqrtDiscriminant) / 2) * a);

    return [firstRoot, secondRoot];
  }
}

const quadraticRootsResult = new QuadraticRoots();

console.log(quadraticRootsResult.getQuadraticRoots(1, -2, 1));
