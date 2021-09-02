import { todoReducerstate } from "../Interfaces/interfaces"
import { AddToDoAction , SetToDoAction } from "../Actions/actions"
const initialState= {
    todos : []
}



export const todoreducer = (state:todoReducerstate = initialState , action: AddToDoAction | SetToDoAction) => {

    switch(action.type){
        case "ADD_TODO":
            return {...state , todos : [ ...state.todos , action.payload]}
        case "SET_TODOS":   
            return {...state , todos: action.payload}
        default:
            return state;
    }
}