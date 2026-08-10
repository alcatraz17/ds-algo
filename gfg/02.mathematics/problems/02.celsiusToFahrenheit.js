/*
 * Explanation
 * -----------
 * Approach: Convert Celsius to Fahrenheit using the direct conversion formula.
 * How it works: Multiply the Celsius temperature by 1.8 (which is 9/5) and
 *   add 32 to get the Fahrenheit equivalent.
 * Example: celToFar(100) -> 100 * 1.8 + 32 = 212.
 * Time Complexity: O(1)
 * Auxiliary Space: O(1)
 */
class CelToFar {
  celToFar(celsius) {
    return celsius * 1.8 + 32;
  }
}

const celToFar = new CelToFar();

console.log(celToFar.celToFar(100));
