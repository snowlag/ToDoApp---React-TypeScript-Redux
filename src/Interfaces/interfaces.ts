export interface ToDoInputProps {
    addToDO(ToDO: string ) : void;
}


export interface todoReducerstate {
    todos : ToDoItem[]
}

export interface ToDoItem {
    text : string;
    completed: boolean,
    timestamp: number
}

export interface ToDoItemProps {
    todo: ToDoItem;
    deleteHandler(timestamp : number): void;
    completeHandler(timestamp : number): void;
}
