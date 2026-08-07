/*
 * Question: Convert Celsius to Fahrenheit
 * Given a temperature in Celsius, convert it to Fahrenheit.
 *
 * Examples:
 * Input: celsius = 100
 * Output: 212
 *
 * Constraints:
 * -10^9 <= celsius <= 10^9
 */
class CelToFar {
  celToFar(celsius) {
    return celsius * 1.8 + 32;
  }
}

const celToFar = new CelToFar();

console.log(celToFar.celToFar(100));

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
