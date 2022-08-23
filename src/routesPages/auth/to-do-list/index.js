import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { addBird, incrementBird } from '../../../store/birds/birds'

const ToDoList = () => {
  console.log("state      ", useSelector(state => state.birds))
  const birds = useSelector(state => state.birds)
  console.log("birds    ", birds)
  return (
    <Layout>
      <div>
        <p>ToDoList</p>
        <p>-----------Redux-----------</p>
        <div>
            <p>Os itens aqui local:</p>
            {birds.map( (item, key) => {
                return (
                    <div key={key}>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default ToDoList