import * as types from '../types/tasks'

export const createTask = data => dispatch => {
  console.log('%c Диспатч создания таска в экшене', 'color: #61dafb; font-weight: 700; text-transform: uppercase;')
  dispatch({
    type: types.TASK_CREATE,
    payload: data
  })
}

export const updateTask = data => dispatch => {
  console.log('%c Диспатч обновления таска в экшене', 'color: #61dafb; font-weight: 700; text-transform: uppercase;')
  dispatch({
    type: types.TASK_UPDATE,
    payload: data
  })
}

export const deleteTask = id => dispatch => {
  console.log('%c Диспатч удаления таска в экшене', 'color: #61dafb; font-weight: 700; text-transform: uppercase;')
  dispatch({
    type: types.TASK_DELETE,
    payload: id
  })
}
