import React from 'react'
import Layout from '../containers/Layout'
import CreateTaskForm from '../components/CreateTaskForm'
import TaskList from '../components/TaskList'

import '../assets/styles/Index.css'
import logo from '../logo.svg'

const Index = () => {
  return (
    <Layout>
      <div className='container-top'>
        <img src={logo} alt="logo" className='react-logo'/>
        <h1>To Do List</h1>
        <div className="create-form-wrapper">
          <CreateTaskForm />
        </div>
      </div>

      <div className="list-wrapper">
        <TaskList status='wait' statusLabel='To Do' />
        <TaskList status='done' statusLabel='Done' />
      </div>
    </Layout>
  )
}

export default Index
