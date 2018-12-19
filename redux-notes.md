# Redux Notes

---

## Principles

- First Principle: The whole state of the application is represented as a javascript `object`.
  - The javascript `object` mentioned above is called **state** or **state tree**.
  - All the state changes are explicit making them easy to track. Whenever there is a change, the entire **state tree** is reconstructed with new changes.
- Second Principle: The **state tree** is **read-only**
  - In order to change something in the **state tree**, we need to dispatch an action.
  - An action is a plain js `object` that contains the change. Think of it as the minimal representation of the data(that will be changed)
- Third Principle: A **reducer is a function** that takes in the _previous state_ of the app and the _action dispatched_ and returns a new state. **This function has to be pure**

---

## Redux Library

- We start off by using the `createStore` method to create the initial state.
- The `createStore` method accepts a **reducer-function**, as an argument, that will be used to specify how the _state is updated with actions_.

```js
    import { createStore } from 'Redux';

    ...



    const store = createStore(<reducer-function>);

    ...

```

- There are 3 important methods that this library exposes-

  1. getState - This method retrieves the current state of the redux store.

     ```js
     store.getState(); // It will return the state tree
     ```

  2. dispatch - This method dispatches an action(js object)

     ```js
     store.dispatch({ <action-to-be-used> })

     ```

  3. subscribe - This method runs on the first render and then after dispatch. Can be used to render UI with new state changes.
     The callback provided to this function will not fire on the first render.

     ```js
     store.subscribe(() => {
       // Place your code here
     });
     ```
