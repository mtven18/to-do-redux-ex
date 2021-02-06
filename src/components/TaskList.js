import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import TaskCard from './TaskCard'

import '../assets/styles/TaskList.css'

const TaskList = ({ status, statusLabel, tasks }) => {
  const [statusList, setStatusList] = useState([])

  useEffect(() => {
    console.log('%c Глобальное состояние tasks обновлено:', 'color: red; font-weight: 700;')
    console.log(tasks)
  }, [tasks])

  useEffect(() => {
    setStatusList(
      status ? tasks.filter(t => t.status === status) : tasks
    )
  }, [tasks, status])

  const list = statusList.length ? (
    statusList.map((t, idx) => (
      <TaskCard task={t} key={idx} />
    ))
  ) : (<span>Not results found</span>)

  return (
    <div className='task-list'>
      <div className="task-list-status">
        { statusLabel }
      </div>

      { list }
    </div>
  )
}

// Для привязки данных из глобального стейта к нашим просам нужна функция
// в которую будет передаваться глобальный стейт и мы должны вренуть
// объект с привязками стейта к нашим будущим пропсам
const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
})

// Передаем в редасовский коннект привязки сейта к пропсам и экшенов
// к пропсам нашего компонента. 1-й аргумент это стейт к пропсам, 2-й это экшены к пропсам
// Коннект возвращает функцию которой передаем наш компонент, чтобы нам в пропсы редакс нам закинул
// то, что связали (стейт и экшены). На самом деле коннект возвращает HOG (High Order Component)
export default connect(mapStateToProps)(TaskList)
