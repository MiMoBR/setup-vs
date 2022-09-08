import { combineReducers } from 'redux'

const ADD_TASK_LIST = 'ADD_TASK_LIST'
const INCREMENT_TASKS_LISTS = 'INCREMENT_TASKS_LISTS'
const DONE_TASK_LIST = "DONE_TASK_LIST"

export function addTasksLists(tasksLists) {
  return {
    type: ADD_TASK_LIST,
    tasksLists,
  }
}

export function incrementtasksLists(tasksLists) {
  return {
    type: INCREMENT_TASKS_LISTS,
    tasksLists
  }
}

export function doneTaskList(tasksLists) {
  return {
    type: DONE_TASK_LIST,
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
  console.log("action       ",action)
  switch (action.type) {
    case ADD_TASK_LIST:
      return [
        ...state,
        {
          name: action.tasksLists,
          views: 1,
          done: false
        }
      ];
    case DONE_TASK_LIST:
      return [
        ...state,
        {

          name: action.tasksLists,
          views: 1,
          done: false
        }
      ]
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
