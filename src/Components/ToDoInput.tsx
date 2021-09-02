import React, { ChangeEvent } from "react"
import { ToDoInputProps, todoReducerstate } from "../Interfaces/interfaces"
import { useSelector , useDispatch } from "react-redux";
import TextField  from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"

const ToDoInput: React.FC<ToDoInputProps> = ({addToDO}) => {

    const [todo , setToDO] = React.useState("");

    const updateToDO = (event: ChangeEvent<HTMLInputElement>) => {
            setToDO(event.target.value)
    }

    const onAddToDoClick = () => {
        addToDO(todo);
        setToDO("")
      
    }

    return (    
        <div>
            <TextField   value={todo} onChange={updateToDO} type="text" name ="todo" placeholder="ToDO" />
            <Button  onClick={onAddToDoClick}>Add </Button>
       </div>

    )
}
export default ToDoInput