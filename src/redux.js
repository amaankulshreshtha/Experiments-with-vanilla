/*---------------------------------------------
 *       REDUX WITH VANILLA WITH TESTS
 * ---------------------------------------------
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return (state += 1);
    case 'SUB':
      return (state -= 1);
    default:
      return state;
  }
};

expect(counter(0, { type: 'ADD' })).toEqual(1);

expect(counter(1, { type: 'ADD' })).toEqual(2);

expect(counter(2, { type: 'SUB' })).toEqual(1);

expect(counter(undefined, {})).toEqual(0);
