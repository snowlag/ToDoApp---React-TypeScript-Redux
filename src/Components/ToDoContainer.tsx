import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { ToDoItemProps } from "../Interfaces/interfaces";
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";


const ToDoContainer: React.FC<ToDoItemProps>  = ({todo , deleteHandler , completeHandler}) => {

   
    return (
        <ListItem>
            <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }} 
                onChange={() => completeHandler(todo.timestamp)}
            />
                <ListItemText primary={todo.text}  className =  {todo.completed ? "Completed": ""}  />
                
                <DeleteIcon onClick = {() => deleteHandler(todo.timestamp)} />
        </ListItem>

    )
}

export default ToDoContainer