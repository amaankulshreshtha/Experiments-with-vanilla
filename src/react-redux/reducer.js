export const counter = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return (state += 1);
    case "SUB":
      return (state -= 1);
    default:
      return state;
  }
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        title: action.title,
        completed: false
      };
    case "TOGGLE_TODO": {
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        id: action.id,
        completed: action.completed
      };
    }
    default:
      return state;
  }
};

export const visibilityReducer = (state, action) => {
  switch (action.type) {
    case "SET_VISIBILITY":
      return {
        visibility: "SHOW_ALL"
      };
    case "UNSET_VISIBILITY":
      return {
        visibility: "HIDE_ALL"
      };
    default:
      return state;
  }
};
