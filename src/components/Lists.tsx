import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getLists, setListIdToDelete, setListToEdit} from '../store/actions';
import {List} from '../store/types';
import {RootState} from "../store";
import {Box, Card, Grid, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Lists: FC = () => {
    const dispatch = useDispatch();
    const lists = useSelector((state: RootState) => state.list.lists);

    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    const setListToEditHandler = (id: string) => {
        dispatch(setListToEdit(id));
    }

    const setListIdToDeleteHandler = (id: string) => {
        dispatch(setListIdToDelete(id));
    }

    return (
        <Card>
            <Box p={1} bgcolor="primary.main" color="primary.contrastText">
                <Typography variant="h6">Lists</Typography>
            </Box>
            <Box m={1}>
                <div>
                    {Object.keys(lists).length === 0
                        ?
                        <p>No Lists</p>
                        :
                        <div>
                            {Object.values(lists).map((list: List) => {
                                return <Box p={1} display="flex" justifyContent="center" alignItems="center"
                                            key={list.id}>
                                    <Box flexGrow={1}>
                                        <Typography variant="body1">
                                            {list.name}
                                        </Typography>
                                    </Box>
                                    <Box display="flex">
                                        <Grid  onClick={() => setListToEditHandler(list.id)}>
                                            <EditIcon color="secondary"/>
                                        </Grid>
                                        <Grid onClick={() => setListIdToDeleteHandler(list.id)}>
                                            <DeleteIcon color="secondary"/>
                                        </Grid>
                                    </Box>
                                </Box>

                            })}
                        </div>
                    }
                </div>
            </Box>
        </Card>
    );
}

export default Lists;
