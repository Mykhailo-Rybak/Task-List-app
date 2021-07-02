import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {List, Task} from '../store/types';
import {addTask} from '../store/actions';
import {Box, Button, Card, makeStyles, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    ({
        form: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        input: {
            width: '100%',
            textAlign: 'center',
            margin: '10px 0',
        },
    }),
);


interface AddNewTaskProps {
    list: List;
}

const AddNewTask: FC<AddNewTaskProps> = ({ list }) => {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');
    const classes = useStyles();


    const changeHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;

        setTaskName(e.currentTarget.value);
    }

    const submitHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;

        e.preventDefault();

        if(taskName.trim() === '') {
            return alert('Task name is required!');
        }

        const newTask: Task = {
            name: taskName,
            id: `task-${new Date().getTime()}`,
            completed: false
        }

        dispatch(addTask(newTask, list));
        setTaskName('');
    }

    return(
        <Card>
            <Box p={1} bgcolor="primary.main" color="primary.contrastText" display='flex' justifyContent='center'>
                <Typography variant="h5">Add new Task</Typography>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box m={2} >
                    <form className={classes.form} onSubmit={submitHandler}>
                        <TextField variant="outlined" label="Task Name" className={classes.input}
                                   value={taskName}
                                   onChange={changeHandler}/>
                        <Button variant="contained" color="primary" type="submit">Add New Task</Button>
                    </form>
                </Box>
            </Box>
        </Card>
    );
}

export default AddNewTask;
