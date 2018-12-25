export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return (state += 1);
    case 'SUB':
      return (state -= 1);
    default:
      return state;
  }
};

export const visibilityReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return 'SHOW_ALL';
    case 'UNSET_VISIBILITY':
      return 'HIDE_ALL';
    case 'TOGGLE_VISIBILITY':
      if (state === 'SHOW_ALL') {
        return 'HIDE_ALL';
      }
      return 'SHOW_ALL';
    default:
      return state;
  }
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false
        }
      ];
    case 'TOGGLE_TODO': {
      return state.map(todoItem => {
        if (todoItem.id !== action.id) {
          return todoItem;
        }
        return {
          ...todoItem,
          id: action.id,
          completed: action.completed
        };
      });
    }
    default:
      return state;
  }
};
