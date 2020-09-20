import React from "react";
import PropTypes from "prop-types";
import '../../styles/todolist/todoElement.scss'
import {ListItem, ListItemText, ListItemSecondaryAction, IconButton, ListItemIcon } from "@material-ui/core";
import {CheckCircle, Delete, RadioButtonUnchecked} from "@material-ui/icons";

export function TodoElement({task, removeTask, updateTask}) {

    const getTaskState = () => {
        if (task.completed) {
            return <CheckCircle color='secondary'/>
        }
        return <RadioButtonUnchecked />
    }

    return (
        <div className='todo-element__container'>
            <ListItem disableGutters onClick={() => updateTask(task.id)}>
                <ListItemIcon>
                    {getTaskState()}
                </ListItemIcon>
                <ListItemText primary={task.name}/>
                <ListItemSecondaryAction onClick={() => removeTask(task.id)}>
                    <IconButton edge="end" aria-label="delete">
                        <Delete/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}

TodoElement.propTypes = {
    task: PropTypes.instanceOf(Object).isRequired,
    removeTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
}
