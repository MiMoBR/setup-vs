import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addBird, incrementBird } from '../../../store/birds/birds'

const AddToDoList = () => {
    // const [birdName, setBird] = useState('')
    console.log("state      ", useSelector(state => state.birds))
    const birds = useSelector(state => state.birds)
    const dispatch = useDispatch()

    // const handleSubmitOld = event => {
    //     event.preventDefault()
    //     dispatch(addBird(birdName))
    //     setBird('')
    // }

    const {
        register,
        // watch, 
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'all' })

    const [baseList, setBaseList] = useState([
        {newTask: 'Primeira task 1'},
    ])
    
    const addNewItem = data => {
        console.log("data   ",data.newTask)
        dispatch(addBird(data.newTask))
        setBaseList((baseList) => [...baseList, data])
        reset()
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit(addNewItem)}>
            {/* <pre style={{backgroundColor:`black`,width:`15rem`,height:`10rem`,left:`0`,top:`0`,color:`white`}}>
                {JSON.stringify(watch(), null, 2)}
            </pre> */}
                <>
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
                    <p>-----------baselist -----------</p>
                    <div>
                        <p>Os itens aqui local:</p>
                        {baseList.map( (item, key) => {
                            return (
                                <div key={key}>
                                    <p>{item.newTask}</p>
                                </div>
                            )
                        })}
                    </div>
                    <>
                        <p>-----------form  react form-----------</p>
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
                        <p>add</p>
                    </button>
                </>
            </form>
            {/* <p>-----------form  old-----------</p>
            <form onSubmit={handleSubmitOld}>
                <label>
                <p>
                    Add Bird
                </p>
                <input
                    type="text"
                    onChange={e => setBird(e.target.value)}
                    value={birdName}
                />
                </label>
                <div>
                <button type="submit">Add</button>
                </div>
            </form> */}
        </Layout>
    )
}

export default AddToDoList