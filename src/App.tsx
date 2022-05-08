import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddNew = (e: React.FormEvent)=>{
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo:todo, isDone:false }]);
      setTodo("");
    }  
  }

  console.log(todos);
  
  const onDragEnd = (result:DropResult) => {
    const { source, destination } = result;
    console.log(result);
    if (!destination) {
      return;      
    }

    if(destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    
    let add, active = todos, complete = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
      <span className="heading">
        Taskify
      </span>

      <InputField todo={todo} setTodo={setTodo} handleAddNew={handleAddNew}/>

      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}        
        />
      
    </div>
    </DragDropContext>

    
  );
}

export default App;
