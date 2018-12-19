const createStore = reducer => {
  let state;
  let listeners = []; // Subscribe function can be called many times, we need to keep track of the listeners

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    console.log("newState = ", state);
    listeners.forEach((listener, index) => {
      // IMPORTANT LOGS TO CHECK STATUS
      console.log(`Fired for the ${index + 1} element`);
      console.log(`current listener being fired = ${listener}`);
      listener();
    });
    // ------------- FOLLOWING IS FOR UNSUBSCRIBING ONLY-------------------------
    // subscribe(listeners[<index of listener that you want to unsubscribe from>])(); // Since it returns a function, we need to execute it(use double parenthesis) to unsubscribe.
  };

  const subscribe = listenerCb => {
    listeners.push(listenerCb);
    // IMPORTANT LOG TO CHECK THE LISTENERS LEFT IF UNSUBSCRIBE HAS BEEN CALLED
    console.log(`listeners = [${listeners}]`);
    return () => {
      listeners = listeners.filter(
        storedListener => storedListener !== listenerCb
      );
    };
  };

  dispatch({}); // To get the initial state from the reducer. If this is not called, the initial state will be undefined.

  return { getState, dispatch, subscribe };
};

export default createStore;
