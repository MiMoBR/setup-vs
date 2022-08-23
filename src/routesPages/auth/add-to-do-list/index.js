import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../../components/Layout'

const AddToDoList = () => {
  const {
    register,
    // watch, 
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'all' })

  const [baseList, setBaseList] = useState([
      {newTask: 'Primeira task 1'},
  ])

  const addNewItem = data => {
      console.log('baseList      ', baseList)
      setBaseList((baseList) => [...baseList, data])
  }

    return (
        <Layout>
            <form onSubmit={handleSubmit(addNewItem)}>
            {/* <pre style={{backgroundColor:`black`,width:`15rem`,height:`10rem`,left:`0`,top:`0`,color:`white`}}>
                {JSON.stringify(watch(), null, 2)}
            </pre> */}
                <>
                    <p>Coloque aqui</p>
                    <div>
                        <p>Os itens aqui:</p>
                        {baseList.map( (item, key) => {
                            console.log("item ",item)
                            return (
                                <div key={key}>
                                    <p>{item.newTask}</p>
                                </div>
                            )
                        })}
                    </div>
                    <>
                        <input type="text"
                            placeholder='sua tarefa aqui'
                            {...register("newTask", { required: true, maxLength: 200, minLength:2 })}
                        />
                        {errors.newTask && <div className="erroForm"><p>Errorrrr</p></div>}
                    </>
                    <button
                    disabled={!isValid}
                    type="submit"
                    >
                    add
                    </button>
                </>
            </form>
        </Layout>
    )
}

export default AddToDoList