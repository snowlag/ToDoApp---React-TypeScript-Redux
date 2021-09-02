import React from "react"
import {  todoReducerstate } from "../Interfaces/interfaces"
import ToDoContainer from "./ToDoContainer";
import { useSelector , useDispatch } from "react-redux";
import {setTodos} from "../Actions/actions"

function TodosList()  {

    const todos = useSelector<todoReducerstate , todoReducerstate["todos"]>((state) => state.todos)
    const dispatch = useDispatch()

    const completeHandler = (timestamp : number) => {
        todos.map(todo => {
            if(todo.timestamp === timestamp) return todo.completed = !todo.completed
        })
        dispatch(setTodos([...todos]))
        
    }

    const deleteHandler = (timestamp : number) => {
       const updatedTodos = todos.filter(item => item.timestamp !== timestamp);
       dispatch(setTodos(updatedTodos))
    }

    return (
        <>
            <div>
              
                  {todos.map((todo , index) => {
                     return  <ToDoContainer todo = {todo} deleteHandler={deleteHandler} completeHandler={completeHandler} />
                  })}
                
            </div>
        </>
    )
}

export default TodosList