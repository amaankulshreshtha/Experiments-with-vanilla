import createStore from "./redux-store-from-scratch";
import { counter } from "./reducer.js";

/* #####################################################################
                    3 METHODS EXPOSED BY REDUX
    
    The commented code is the raw implementation of redux in Vanilla JS
    
#######################################################################*/

const store = createStore(counter);

const render = () => {
  document.getElementById("app").innerHTML = store.getState();
};

const colors = ["red", "green", "blue", "yellow"];

const backgroundColor = () => {
  const selectedIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[selectedIndex];
};

store.subscribe(render);
render();

store.subscribe(backgroundColor);
backgroundColor();

document.addEventListener("click", () => {
  store.dispatch({ type: "ADD" });
});

// ------------------------------------------------------------------------------------------------------------------------------------
