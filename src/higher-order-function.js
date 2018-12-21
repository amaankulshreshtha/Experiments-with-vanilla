/*---------------------------------------------
 *       TESTING HIGHER-ORDER FUNCTIONS
 * ---------------------------------------------
 */
const test = (function(value) {
  function ReturningFunction() {
    console.log(value);
  }
  return ReturningFunction;
})();

console.log(test(2));
