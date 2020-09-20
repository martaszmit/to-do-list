import React, {useState} from "react";
import '../../styles/todolist/todoList.scss'
import {TodoListHeader} from "./TodoListHeader";
import {TodoListContent} from "./TodoListContent";

export function TodoList() {

    const [tasks, setTasks] = useState([]);
    const addTask = (newTask) => {
        setTasks([newTask, ...tasks]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const notCompletedTask = () => {
        return tasks.filter(task => !task.completed)
    }

    const completedTask = () => {
        return tasks.filter(task => task.completed)
    }

    const updateTask = (id) => {
        const updatedTask = tasks.find(task => task.id === id);
        const restTask = tasks.filter(task => task.id !== id)
        setTasks([...restTask, {name: updatedTask.name, completed: !updatedTask.completed, id: updatedTask.id}])
    }

    return (
        <div className='todo-list__container'>
            <TodoListHeader addTask={addTask}/>
            <TodoListContent
                headerText='Do zrobienia!'
                tasks={notCompletedTask()}
                removeTask={removeTask}
                updateTask={updateTask}
            />
            <TodoListContent
                headerText='Ukończone!'
                tasks={completedTask()}
                removeTask={removeTask}
                updateTask={updateTask}
            />
        </div>
    )
}