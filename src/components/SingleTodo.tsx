import React, { useState, useRef, useEffect } from 'react'
import { Todo } from '../models/Todo';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from 'react-beautiful-dnd';

// type Props = {
//     index: number;
//     todo: Todo;
//     todos: Todo[];
//     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

// }

// const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
//     /**
//      * Ham checkdone
//      */
//     const handleDone = (id: number) => {
//         setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
//     }

//     /**
//      * Ham xoa mot record
//      */
//     const handleDelete = (id: number) => {
//         setTodos(todos.filter((todo) => todo.id !== id));
//     }
//     /**
//      * Dat bien state trang thai edit toan phan
//      */
//     const [edit, setEdit] = useState<boolean>(false);

//     /**
//      * Dat bien state edit mot field 
//      * trong truong hop nay edit field todo
//      */
//     const [edtTodo, setEditTodo] = useState<string>(todo.todo);

//     /**
//      * Ham Updae record
//      */
//     const handleUpdate = (e: React.FormEvent, id: number) => {
//         e.preventDefault();

//         setTodos(
//             todos.map(
//                 (t) => (
//                     todo.id === id ? { ...todo, todo: edtTodo } : todo
//                 )
//             )
//         );
//         setEdit(false);

//     }

//     const inputRef = useRef<HTMLInputElement>(null);

//     useEffect(() => {
//         inputRef.current?.focus();
//     }, [edit])

//     return (
       
//             <Draggable draggableId={todo.id.toString()} index={index}>

//                 {
//                     (provided, snapshot) => (
//                         <form
//                         onSubmit={(e) => handleUpdate(e, todo.id)}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//           className={`todos_single ${snapshot.isDragging ? "drag" : ""}`}
//                         >

//                             {
//                                 edit ? (
//                                     <input
//                                         ref={inputRef}
//                                         value={edtTodo}
//                                         onChange={(e) => setEditTodo(e.target.value)}
//                                         className="todo_single--text"
//                                     />
//                                 ) : todo.isDone ? (
//                                     <s className="todo_single--text">
//                                         {todo.todo}
//                                     </s>
//                                 ) : (
//                                     <span className="todo_single--text">
//                                         {todo.todo}
//                                     </span>
//                                 )

//                             }

//                             <div>
//                                 <span className="icon"
//                                     onClick={() => {
//                                         if (!edit && !todo.isDone) {
//                                             setEdit(!edit);
//                                         }
//                                     }
//                                     }
//                                 >
//                                     <AiFillEdit />
//                                 </span>
//                                 <span className="icon" onClick={() => handleDelete(todo.id)}>
//                                     <AiFillDelete />
//                                 </span>
//                                 <span className="icon" onClick={() => handleDone(todo.id)}>
//                                     <MdDone />
//                                 </span>
//                             </div>
//                         </form>
//                     )
//                 }


//             </Draggable>

       
//     )
// }

// export default SingleTodo

const SingleTodo: React.FC<{
    index: number;
    todo: Todo;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  }> = ({ index, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
  
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);
  
    const handleEdit = (e: React.FormEvent, id: number) => {
      e.preventDefault();
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
      );
      setEdit(false);
    };
  
    const handleDelete = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const handleDone = (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      );
    };
  
    return (
      <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided, snapshot) => (
          <form
            onSubmit={(e) => handleEdit(e, todo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`todos_single ${snapshot.isDragging ? "drag" : ""}`}
          >
            {edit ? (
              <input
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="todos_single--text"
                ref={inputRef}
              />
            ) : todo.isDone ? (
              <s className="todos_single--text">{todo.todo}</s>
            ) : (
              <span className="todos_single--text">{todo.todo}</span>
            )}
            <div>
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete />
              </span>
              <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
              </span>
            </div>
          </form>
        )}
      </Draggable>
    );
  };
  
  export default SingleTodo;