import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addTasksLists } from '../../../store/tasksLists/tasksLists'

const AddToDoList = () => {

    // console.log("state      ", useSelector(state => state.tasksLists))
    const tasksLists = useSelector(state => state.tasksLists)
    const dispatch = useDispatch()

    const {
        register,
        // watch,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'all' })

    // const [baseList, setBaseList] = useState([
    //     {newTask: 'Primeira task 1'},
    // ])

    const addNewItem = data => {
        // console.log("data   ",data.newTask)
        dispatch(addTasksLists(data.newTask))
        // setBaseList((baseList) => [...baseList, data])
        reset()
    }

    return (
        <Layout>
            <h1>Add your tasks here!</h1>
            <form onSubmit={handleSubmit(addNewItem)}>
              {/* <pre style={{backgroundColor:`black`,width:`15rem`,height:`10rem`,left:`0`,top:`0`,color:`white`}}>
                {JSON.stringify(watch(), null, 2)}
              </pre> */}
                <>
                  <div>
                    <p>Here your list:</p>
                    {tasksLists.map( (item, key) => {
                      return (
                        <div key={key}>
                            <p>{item.name}</p>
                        </div>
                      )
                    })}
                  </div>
                  <div>
                    <input type="text"
                      placeholder='Set your task here...'
                      {...register("newTask", {
                          required: true, maxLength: 200, minLength: 2
                      })}
                    />
                    {errors.newTask && <div className="error"><p>Add a task, please!</p></div>}
                  </div>
                  <button
                    disabled={!isValid}
                    type="submit"
                  >
                    <p>Add a Task</p>
                  </button>
                </>
            </form>
        </Layout>
    )
}

export default AddToDoList
