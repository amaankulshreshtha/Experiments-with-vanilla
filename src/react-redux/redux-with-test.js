/*---------------------------------------------
 *       REDUX WITH VANILLA WITH TESTS
 * ---------------------------------------------
 */
import counter from './reducer.js';

expect(counter(0, { type: 'ADD' })).toEqual(1);

expect(counter(1, { type: 'ADD' })).toEqual(2);

expect(counter(2, { type: 'SUB' })).toEqual(1);

expect(counter(undefined, {})).toEqual(0);

console.log('test passed!');
