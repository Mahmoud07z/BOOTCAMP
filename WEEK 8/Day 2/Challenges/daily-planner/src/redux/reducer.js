import { SET_DAY, ADD_TASK, EDIT_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasksByDay: {},
  selectedDay: new Date().toISOString().split('T')[0]
};

export const reducer = (state = initialState, action) => {
  const { tasksByDay, selectedDay } = state;
  const { day, id, text } = action.payload || {};
  let updatedTasks;

  switch (action.type) {
    case SET_DAY:
      return { ...state, selectedDay: action.payload };

    case ADD_TASK:
      return {
        ...state,
        tasksByDay: {
          ...tasksByDay,
          [day]: [...(tasksByDay[day] || []), { id: Date.now(), text }]
        }
      };

    case EDIT_TASK:
      updatedTasks = tasksByDay[day].map(t => t.id === id ? { ...t, text } : t);
      return { ...state, tasksByDay: { ...tasksByDay, [day]: updatedTasks } };

    case DELETE_TASK:
      updatedTasks = tasksByDay[day].filter(t => t.id !== id);
      return { ...state, tasksByDay: { ...tasksByDay, [day]: updatedTasks } };

    default:
      return state;
  }
};
