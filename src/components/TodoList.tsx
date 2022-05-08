import React from 'react';
import '../styles/InputField.css';
import { Todo } from '../models/Todo';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

// interface Props {
//     todos: Todo[];
//     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
//     completedTodos: Todo[];
//     setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
// }


// const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
//     return (
        

//             <div className="container">
//                 <Droppable droppableId="TodosList">

//                     {
//                         (provided, snapshot) => (
//                             <div  className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
//                                 ref={provided.innerRef}
//                                 {...provided.droppableProps} 
//                                 >
//                                 <span className="todos_heading">
//                                     Active Task
//                                 </span>
//                                 {
//                                     todos.map((t, index) => (
//                                         <SingleTodo
//                                             index={index}
//                                             todo={t}
//                                             key={t.id}
//                                             todos={todos}
//                                             setTodos={setTodos}
//                                         />
//                                     ))
//                                 }
//                                 {provided.placeholder}
//                             </div>
//                         )
//                     }

//                 </Droppable>

//                 <Droppable droppableId='TodosRemove'>

//                     {
//                         (provided, snapshot) => (
//                             <div 
//                             className={`todos  ${
//                                 snapshot.isDraggingOver ? "dragcomplete" : "remove"
//                               }`}
//                             ref={provided.innerRef}
//                             {...provided.droppableProps}
//                             >

//                                 <span className="todos_heading">
//                                     Completed Task
//                                 </span>
//                                 {
//                                     completedTodos.map((t, index) => (
//                                         <SingleTodo
//                                             index={index}
//                                             todo={t}
//                                             key={t.id}
//                                             todos={completedTodos}
//                                             setTodos={setCompletedTodos}
//                                         />
//                                     ))
//                                 }
//                                  {provided.placeholder}

//                             </div>
//                         )
//                     }


//                 </Droppable>

//             </div>

       
//     )
// }

// export default TodoList

interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    completedTodos: Array<Todo>;
  }
  
  const TodoList: React.FC<props> = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos,
  }) => {
    return (
      <div className="container">
        <Droppable droppableId="TodosList">
          {(provided, snapshot) => (
            <div
              className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos_heading">Active Tasks</span>
              {todos?.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todos={todos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="TodosRemove">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`todos  ${
                snapshot.isDraggingOver ? "dragcomplete" : "remove"
              }`}
            >
              <span className="todos_heading">Completed Tasks</span>
              {completedTodos?.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todos={completedTodos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  };
  
  export default TodoList;