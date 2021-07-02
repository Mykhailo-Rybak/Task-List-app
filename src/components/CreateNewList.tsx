import React, {FC, useState} from 'react'
import {useDispatch} from "react-redux";
import {addList} from "../store/actions";
import {List} from "../store/types";
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


const CreateNewList: FC = () => {
    const [listName, setListName] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const inputChangeHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;
        setListName(e.currentTarget.value)
    }

    const submitHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;
        e.preventDefault();

        if (listName.trim() === '') {
            return alert('List name is required!');
        }

        const newList: List = {
            id: `list-${new Date().getTime()}`,
            name: listName,
            tasks: []
        }

        dispatch(addList(newList));
        setListName('');
    }

    return (
        <Card>
            <Box p={1} bgcolor="primary.main" color="primary.contrastText">
                <Typography variant="h6">Create New List</Typography>
            </Box>
            <Box m={2}>
                <form className={classes.form} onSubmit={submitHandler}>
                        <TextField variant="outlined" label="List Name" className={classes.input}
                                   value={listName}
                                   onChange={inputChangeHandler}/>
                    <Button variant="contained" color="primary" type="submit">Create List</Button>
                </form>
            </Box>
        </Card>
    )
}

export default CreateNewList;
