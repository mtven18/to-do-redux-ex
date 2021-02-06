import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../store/actions/tasks'
import { genUuid } from '../utils/crypt'

import '../assets/styles/CreateTaskForm.css'

const CreateTaskForm = ({ createTask }) => {
  const [taskName, setTaskName] = useState('')

  const handleChangeName = e => {
    setTaskName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('%c Вызов экшена createTask', 'color: orange; font-weight: 700;')
    createTask({
      id: genUuid(),
      name: taskName,
      status: 'wait'
    })
    setTaskName('')
  }

  return (
    <form className='create-task-form' onSubmit={handleSubmit}>
      <h2 className='create-task-form-title'>Create Task</h2>

      <label htmlFor="name" className='create-task-form-label'>Name</label>
      <input
        type="text"
        id='name'
        className='create-task-form-input'
        value={taskName}
        onChange={handleChangeName}
      />

      <div>
        <button className='submit-btn'>Create</button>
      </div>
    </form>
  )
}

// Объект для привязки экшена к пропсам нашего компонента
const mapDispatchToProps = {
  createTask
}

// Передаем в редасовский коннект привязки сейта к пропсам и экшенов
// к пропсам нашего компонента. 1-й аргумент это стейт к пропсам, 2-й это экшены к пропсам
// Здесь нужны только экшены поэтому первый аргумент null
// Коннект возвращает функцию которой передаем наш компонент, чтобы нам в пропсы редакс нам закинул
// то, что связали (стейт и экшены). На самом деле коннект возвращает HOG (High Order Component)
export default connect(null, mapDispatchToProps)(CreateTaskForm)
