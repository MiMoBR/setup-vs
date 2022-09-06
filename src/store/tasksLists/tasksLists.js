import { combineReducers } from 'redux'

const ADD_TASKS_LISTS = 'ADD_TASKS_LISTS'
const INCREMENT_TASKS_LISTS = 'INCREMENT_TASKS_LISTS'

export function addTasksLists(tasksLists) {
  return {
    type: ADD_TASKS_LISTS,
    tasksLists,
  }
}

export function incrementtasksLists(tasksLists) {
  return {
    type: INCREMENT_TASKS_LISTS,
    tasksLists
  }
}

const defaultTasksLists = [
  {
    name: '',
    views: '',
    done: false
  }
]

function tasksLists(state=defaultTasksLists, action) {
  switch (action.type) {
    case ADD_TASKS_LISTS:
      return [
        ...state,
        {
          name: action.tasksLists,
          views: 1,
          done: false
        }
      ];
    // case INCREMENT_TASKS_LISTS:
    //   const tasksLists = state.find(b => action.tasksLists === b.name);
    //   const tasksLists = state.filter(b => action.tasksLists !== b.name);
    //   return [
    //     ...tasksLists,
    //     {
    //       ...tasksLists,
    //       views: tasksLists.views + 1
    //     }
    //   ];
    default:
      return state;
  }
}

const tasksListsApp = combineReducers({
  tasksLists
})

export default tasksListsApp
