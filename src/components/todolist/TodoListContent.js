import React from "react";
import PropTypes from 'prop-types';
import '../../styles/todolist/todoListContent.scss'
import {List, Divider} from "@material-ui/core";
import {TodoElement} from "./TodoElement";

export function TodoListContent({headerText, tasks, removeTask, updateTask}) {

    const elements = () => {
        return tasks.map(task => (
            <TodoElement
                key={task.id}
                task={task}
                removeTask={removeTask}
                updateTask={updateTask}
            />
            )
        )
    };

    return (
        <div >
            <div className='todo-list-content__title'>{headerText}</div>
            <Divider/>
            <List>
                {elements()}
            </List>
        </div>
    )
}

TodoListContent.propTypes = {
    headerText: PropTypes.string.isRequired,
    tasks: PropTypes.instanceOf(Object).isRequired,
    removeTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
}
