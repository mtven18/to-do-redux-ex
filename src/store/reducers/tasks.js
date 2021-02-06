import * as types from '../types/tasks'

// Начальныое состоянее стора
const initialState = {
  tasks: []
}

// Эт редюсер
const manageTasks = (state = initialState, action) => {
  switch (action.type) {
    // Реакция на создание таска
    case types.TASK_CREATE:
      console.log('%c Реакция на создание таска', 'color: pink; font-weight: 700; text-transform: uppercase;')
      return {
        ...state,
        tasks: [ ...state.tasks, action.payload ]
      }
    // Реакция на обновление такска
    case types.TASK_UPDATE:
      console.log('%c Реакция на обновление такска', 'color: pink; font-weight: 700; text-transform: uppercase;')
      return {
        ...state,
        tasks: state.tasks.map(t => ({
          ...t,
          ...(t.id === action.payload.id ? action.payload : {})
        }))
      }
    // Реакция на удаление таска
    case types.TASK_DELETE:
      console.log('%c Реакция на удаление таска', 'color: pink; font-weight: 700; text-transform: uppercase;')
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload)
      }
    // Если это не экшен нашего редюсера - просто возвращаем стейт который залетел в наш редюсер
    default:
      return state
  }
}

export default manageTasks
