import React, {FC} from 'react'
import Header from "./components/Header";
import {Box, Container, CssBaseline, Grid, Grow} from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import {useSelector} from "react-redux";
import {RootState} from "./store";
import DeleteListModal from "./components/DeleteListModal";
import EditListModal from "./components/EditListModal";
import MainContent from "./components/MainContent";
import EditTaskModal from "./components/EditTaskModal";
import DeleteTaskModal from "./components/DeleteTaskModal";
import './App.css'


const App: FC = () => {
    const listIdToDelete = useSelector((state: RootState) => state.list.listIdToDelete);
    const listToEdit = useSelector((state: RootState) => state.list.listToEdit);
    const taskToEdit = useSelector((state: RootState) => state.list.taskToEdit);
    const taskToDelete = useSelector((state: RootState) => state.list.taskToDelete);


    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grow in>
                <Box pt={2}>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={3}>
                                <Sidebar/>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <MainContent/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grow>
            {listIdToDelete && <DeleteListModal listId={listIdToDelete}/>}
            {listToEdit && <EditListModal list={listToEdit}/>}
            {taskToEdit && <EditTaskModal taskToEdit={taskToEdit}/>}
            {taskToDelete && <DeleteTaskModal taskToDelete={taskToDelete}/>}
        </>
    )
}

export default App
