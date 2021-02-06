import React from 'react'
import { connect } from 'react-redux'
import { updateTask, deleteTask } from '../store/actions/tasks'

import '../assets/styles/TaskCard.css'

const TaskCard = ({ task, updateTask, deleteTask }) => {
  const handleDone = () => {
    console.log('%c Вызов экшена updateTask', 'color: orange; font-weight: 700;')
    updateTask({
      ...task,
      status: 'done',
    })
  }

  const handleDelete = () => {
    console.log('%c Вызов экшена deleteTask', 'color: orange; font-weight: 700;')
    deleteTask(task.id)
  }

  return (
    <div className='task-card'>
      <div className='task-card-name'>{ task.name }</div>

      <button className="task-done-btn" onClick={handleDone}>Done</button>
      <button className="task-delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  )
}

// Объект для привязки экшена к пропсам нашего компонента
const mapDispatchToProps = {
  updateTask,
  deleteTask,
}

// Передаем в редасовский коннект привязки сейта к пропсам и экшенов
// к пропсам нашего компонента. 1-й аргумент это стейт к пропсам, 2-й это экшены к пропсам
// Здесь нужны только экшены поэтому первый аргумент null
// Коннект возвращает функцию которой передаем наш компонент, чтобы нам в пропсы редакс нам закинул
// то, что связали (стейт и экшены). На самом деле коннект возвращает HOG (High Order Component)
export default connect(null, mapDispatchToProps)(TaskCard)
