import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {List, Task} from '../store/types';
import {unsetTaskToEdit, updateTask} from '../store/actions';
import {Box, Button, FormControlLabel, TextField} from "@material-ui/core";
import ModalAll from "./Modal/ModalAll";


interface EditTaskModalProps {
    taskToEdit: {
        task: Task;
        list: List;
    }
}

const EditTaskModal: FC<EditTaskModalProps> = ({taskToEdit, taskToEdit: {task, list}}) => {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState(task.name);
    const [taskState, setTaskState] = useState(task.completed);


    const closeModalHandler = () => {
        dispatch(unsetTaskToEdit());
    }

    const submitHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;
        e.preventDefault();

        if (taskName.trim() === '') {
            return alert('Task name is required!');
        }

        if (taskName === task.name && taskState === task.completed) {
            return alert('Task name and state are the same as before!');
        }

        dispatch(updateTask(task.id, taskName, taskState, list));
    }

    const nameChangeHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;
        setTaskName(e.currentTarget.value);
    }

    const stateChangeHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;

        setTaskState(e.currentTarget.checked);
    }

    return (
        <ModalAll open={!!taskToEdit}
                  onClose={closeModalHandler}
                  title='Edit Task'>
            <form onSubmit={submitHandler}>
                <TextField variant="outlined" label="List Name"
                           value={taskName}
                           onChange={nameChangeHandler}/>
                <Box pt={1}>
                    <FormControlLabel
                        control={
                            <input type="checkbox" checked={taskState} onChange={stateChangeHandler}/>}
                        label="Complete task"
                        labelPlacement="start"
                    />
                </Box>
                <Box display="flex" pt={1}>
                    <Box pr={1}>
                        <Button variant="contained" color="primary" type="submit">Save changes</Button>
                    </Box>
                    <Button variant="contained" onClick={closeModalHandler}>Cancel</Button>
                </Box>
            </form>
        </ModalAll>

    );
}

export default EditTaskModal;
