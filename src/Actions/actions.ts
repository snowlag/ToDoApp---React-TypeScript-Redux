import { ToDoItem  , todoReducerstate} from "../Interfaces/interfaces"
export type AddToDoAction = {type: "ADD_TODO" , payload: ToDoItem } 
export type SetToDoAction = {type: "SET_TODOS" , payload: ToDoItem[] }


export const addToDO = (todo: string):AddToDoAction => ({
    type: "ADD_TODO" , 
    payload: {
        text : todo,
        completed: false,
        timestamp: Date.now()
    }
})

export const setTodos = (todos: ToDoItem[]  ) : SetToDoAction => {
    return {
        type : "SET_TODOS",
        payload: todos
    }
}