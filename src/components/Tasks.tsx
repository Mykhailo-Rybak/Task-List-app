import React, {FC} from 'react';
import {
    Box,
    Card,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {Task} from "../store/types";
import {setTaskToDelete, setTaskToEdit} from "../store/actions";

interface TasksProps {
    tasks: Task[];
}

const Tasks: FC<TasksProps> = ({tasks}) => {
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.list.selectedList!);

    const setTaskToEditHandler = (task: Task) => {
        dispatch(setTaskToEdit(task, list));
    }

    const setTaskToDeleteHandler = (task: Task) => {
        dispatch(setTaskToDelete(task, list));
    }

    const tasksTable = (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task: Task) => (
                        <TableRow key={task.id} className={task.completed ? 'completed' : ''}>
                            <TableCell component="th" scope="row">
                                {task.name}
                            </TableCell>
                            <TableCell align="right">
                                <Grid onClick={() => setTaskToEditHandler(task)}>
                                    <EditIcon color="secondary"/>
                                </Grid>
                            </TableCell>
                            <TableCell align="right">
                                <Grid onClick={() => setTaskToDeleteHandler(task)}>
                                    <DeleteIcon color="secondary"/>
                                </Grid>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );


    return (
        <Card>
            <Box p={1} bgcolor="primary.main" color="primary.contrastText" display='flex' justifyContent='center'>
                <Typography variant="h5">List of tasks</Typography>
            </Box>
                    {tasks.length === 0 ? <Box m={2} textAlign='center'>No Tasks</Box> : tasksTable}
        </Card>
    );
}

export default Tasks;
