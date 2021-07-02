import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteList, getListById, setListIdToDelete} from '../store/actions';
import {RootState} from "../store";
import {Box, Button, List, ListItem, Typography} from "@material-ui/core";
import ModalAll from "./Modal/ModalAll";


interface DeleteListModalProps {
    listId: string;
}

const DeleteListModal: FC<DeleteListModalProps> = ({listId}) => {
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.list.listById);

    useEffect(() => {
        dispatch(getListById(listId));
    }, [dispatch, listId]);

    const deleteListHandler = () => {
        dispatch(deleteList(listId));

    }

    const hideModalHandler = () => {
        dispatch(setListIdToDelete(''));
    }

    return (
        <ModalAll open={!!listId}
                  onClose={hideModalHandler}
                  title='Are you sure you want to delete this list ?'>
            <>
                <Typography variant="h5">All tasks related to this list will be deleted</Typography>
                {list?.tasks.length === 0 ?
                    <p>No tasks in this list!</p>
                    :
                    <List>
                        {list?.tasks.map(task => (
                            <ListItem key={task.id}>{task.name}</ListItem>
                        ))}
                    </List>
                }
                <Box display="flex" pt={3}>
                    <Box pr={1}>
                        <Button variant="contained" color="secondary" onClick={deleteListHandler}>Delete</Button>
                    </Box>
                    <Button variant="contained" onClick={hideModalHandler}>Cancel</Button>
                </Box>
            </>
        </ModalAll>
    );
}

export default DeleteListModal;
