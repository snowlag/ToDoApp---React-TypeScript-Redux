import React from 'react';
import TodosList from './Components/ToDosList';
import ToDoInput from './Components/ToDoInput';
import { useDispatch }  from "react-redux"
import { addToDO } from './Actions/actions';
import './App.css'


function App() {

   const dispatch = useDispatch()

  const onAddTodo = (todo: string) => {
    dispatch(addToDO(todo))
  }


  return (
    <div className="root">
      <div className="todo_input">
       <ToDoInput addToDO={onAddTodo} />
      </div>
      <hr />
      <div className="todo_list">
        <TodosList />
      </div>
     
    </div>
  );
}

export default App;
