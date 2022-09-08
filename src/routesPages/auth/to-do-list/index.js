import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { doneTaskList } from '../../../store/tasksLists/tasksLists'

const ToDoList = () => {
  console.log("state      ", useSelector(state => state.tasksLists))
  const tasksLists = useSelector(state => state.tasksLists)
  const dispatch = useDispatch()

  const taskDone = (e) => {
    console.log(e.target.checked)
    dispatch(doneTaskList())
  }

  return (
    <Layout>
      <div>
        <h1>Check the tasks that you completed!</h1>
        <div>
          <p>Here your tasks:</p>

          <div>
            {tasksLists.map((item, key) => {
            console.log('--------',item.name == '')
              return (
                <div key={key}>
                  <p>{item.name}</p>
                  {item.name && (
                    <input type="checkbox" onChange={taskDone} />
                  )}
                </div>
            )
          })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ToDoList
