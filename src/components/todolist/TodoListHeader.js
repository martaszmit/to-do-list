import React, {useState} from "react";
import PropTypes from 'prop-types';
import '../../styles/todolist/todoListHeader.scss'
import * as uniqid from "uniqid";
import {Button, InputAdornment, TextField} from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";
import keycode from "keycode";
import AssignmentIcon from "@material-ui/icons/Assignment";

export function TodoListHeader({addTask}) {

    const [taskName, setTaskName] = useState('');

    const handleNameChange = (event) => {
        setTaskName(event.target.value);
    }

    const handleKeyUp = (event) => {
        if(event.keyCode === keycode('enter')) {
            addNewTask();
        }
    }

    const addNewTask = () => {
        if(!taskName.length) return;
        setTaskName('');
        addTask({name: taskName, completed: false, id: uniqid()})
    }

    return (
        <div className='todo-list-header__container'>
            <div className='todo-list-header__text'>
                <TextField
                    id="filled-size-small"
                    placeholder="Dodaj nowe zadanie"
                    variant="outlined"
                    size="small"
                    onChange={handleNameChange}
                    onKeyUp={handleKeyUp}
                    value={taskName}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AssignmentIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <div className='todo-list-header__button'>
                <Button
                    startIcon={<AddCircle />}
                    variant="contained"
                    color='primary'
                    onClick={addNewTask}
                >
                    Dodaj
                </Button>
            </div>
        </div>
    )
}

TodoListHeader.propTypes = {
    addTask: PropTypes.func.isRequired
}