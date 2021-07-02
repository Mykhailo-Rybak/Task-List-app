import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {List, Task} from '../store/types';
import {deleteTask, unsetTaskToDelete} from '../store/actions';
import {Box, Button} from "@material-ui/core";
import ModalAll from "./Modal/ModalAll";


interface DeleteTaskModalProps {
    taskToDelete: {
        task: Task;
        list: List;
    }
}

const DeleteTaskModal: FC<DeleteTaskModalProps> = ({taskToDelete, taskToDelete: {task, list}}) => {
    const dispatch = useDispatch();


    const closeModalHandler = () => {
        dispatch(unsetTaskToDelete());
    }

    const deleteHandler = () => {
        dispatch(deleteTask(task, list));
    }

    return (
        <ModalAll
            open={!!taskToDelete}
            onClose={closeModalHandler}
            title='Are you sure you want to delete this task ?'>
            <Box display="flex" justifyContent='center' pt={3}>
                <Box pr={1}>
                    <Button variant="contained" color="secondary" onClick={deleteHandler}>Delete</Button>
                </Box>
                <Button variant="contained" onClick={closeModalHandler}>Cancel</Button>
            </Box>
        </ModalAll>
    );
}

export default DeleteTaskModal;
